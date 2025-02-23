import Text from '../../../atoms/Text'
import JobDetails from '../../../components/GeneralComponents/Jobs/JobDetails/index'
import { AtomicButton, StyledBox, StyledImage } from './index.styles'
import fav from '../../../assets/svg/fav.svg'
import faved from '../../../assets/svg/faved.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useApplyJob, useSaveJob, useUnsaveJob, useWithdrawJob, useGetCandidateJobDetails } from '../../../service/API/candidate'
import { toast } from 'react-toastify'

const JobDetailsPage = () => {
  const { jobId } = useParams()
  const { data } = useGetCandidateJobDetails(jobId)
  const useSaveJobMutation = useSaveJob()
  const useUnsaveJobMutation = useUnsaveJob()
  const useApplyJobMutation = useApplyJob()
  const useWithdrawJobMutation = useWithdrawJob()
  const [saved, setSaved] = useState(data?.data.saved)
  const [disableDelayed, setDisableDelayed] = useState(false)
  const [applied, setApplied] = useState(data?.data.applied)
  const navigate = useNavigate()
  const onClickBack = () => navigate(-1)

  useEffect(() => {
    setApplied(data?.data.applied)
    setSaved(data?.data.saved)
  }, [data?.data.saved, data?.data.applied])

  const onClick = (type) => {
    setDisableDelayed(true)
    if (type === 'save' && saved === false) {
      useSaveJobMutation.mutate(jobId, {
        onSuccess: () => {
          setSaved(true)
          toast.success('You saved the job successfully..')
          setTimeout(() => {
            setDisableDelayed(false)
          }, 5000)
        },
        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    } else if (type === 'save' && saved === true) {
      useUnsaveJobMutation.mutate(jobId, {
        onSuccess: () => {
          setSaved(false)
          toast.success('You unsaved the job successfully.')
          setTimeout(() => {
            setDisableDelayed(false)
          }, 5000)
        },

        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    } else if (type === 'apply' && applied === false) {
      useApplyJobMutation.mutate(jobId, {
        onSuccess: () => {
          setApplied(true)
          toast.success('You have applied the job successfully.')
          setTimeout(() => {
            setDisableDelayed(false)
          }, 5000)
        },
        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    } else if (type === 'apply' && applied === true) {
      useWithdrawJobMutation.mutate(jobId, {
        onSuccess: () => {
          setApplied(false)
          toast.success('You have withdrawn the job application successfully')
          setTimeout(() => {
            setDisableDelayed(false)
          }, 5000)
        },
        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    }
  }

  return (
    <>
      <StyledBox className="outerBox">
        <Text type="Headline1">Job Details</Text>

        <StyledBox className="innerBox">
          <AtomicButton
            className="apply"
            variant="contained"
            type="submit"
            handleClick={() => {
              onClickBack()
            }}
            label="BACK"
            size="large"
          />

          <StyledImage className="favIcon" src={saved ? faved : fav} />
          <AtomicButton
            className="save"
            variant="outlined"
            type="submit"
            disabled={disableDelayed}
            handleClick={() => {
              onClick('save')
            }}
            label={saved ? 'UNSAVE' : 'SAVE'}
            size="meidum"
          />
          <AtomicButton
            className="apply"
            variant="contained"
            type="submit"
            handleClick={() => {
              onClick('apply')
            }}
            label={applied ? 'WITHDRAW' : 'APPLY'}
            size="large"
          />
        </StyledBox>
      </StyledBox>
      <JobDetails jobId={jobId} />
    </>
  )
}

export default JobDetailsPage
