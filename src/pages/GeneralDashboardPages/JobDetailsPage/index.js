import Text from '../../../atoms/Text'
import JobDetails from '../../../components/GeneralComponents/Jobs/JobDetails/index'
import { AtomicButton, StyledBox } from './index.styles'
import { useNavigate, useParams } from 'react-router-dom'

const JobDetailsPage = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()

  const onClickBack = () => {
    navigate(-1)
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
        </StyledBox>
      </StyledBox>
      <JobDetails jobId={jobId} />
    </>
  )
}
export default JobDetailsPage
