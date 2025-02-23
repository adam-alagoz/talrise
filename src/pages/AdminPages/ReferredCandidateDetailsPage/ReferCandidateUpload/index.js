import { useState, useCallback, useEffect, forwardRef } from 'react'
import { DropzonesContainer, StyledContainer, StyledText } from './index.styles'
import icon from '../../assets/svg/Color.svg'
import pdf from '../../assets/svg/Pdf.svg'
import docx from '../../assets/svg/Docx.svg'
import doc from '../../assets/svg/Doc.svg'
import Dropzone from './Dropzone'
import { useNavigate } from 'react-router-dom'
import {
  useCandidateCoverLetter,
  useCandidateCv,
  useDeleteUploadedCoverLetter,
  useDeleteUploadedCv,
  useGetCandidateInfo,
} from '../../service/API/candidate'
import { toast } from 'react-toastify'
import { getDataFile } from '../../service/service'
import { useUser } from '../../redux/hooks/userHook'

const ReferCandidateUpload = forwardRef(({ isNavigate }, ref) => {
  const navigate = useNavigate()
  const coverLetterMutation = useCandidateCoverLetter()
  const cvMutation = useCandidateCv()
  const deleteUploadedCvMutation = useDeleteUploadedCv()
  const deleteUploadedCoverLetterMutation = useDeleteUploadedCoverLetter()
  const icons = [icon, pdf, doc, docx]
  const { data: userData } = useGetCandidateInfo()

  const [values, setValues] = useState({
    cv: null,
    letter: null,
  })

  useEffect(() => {
    if (userData) {
      setValues({
        cv: userData?.cvPath,
        letter: userData?.coverLetterPath,
      })
    }
  }, [userData])

  const [index, setIndex] = useState({
    cv: 0,
    letter: 0,
  })
  const [coverLetterBlob, setCoverLetterBlob] = useState({})
  const [cvBlob, setCvBlob] = useState({})

  // useEffect(() => {
  //   getDataFile('/candidate/file/cover-download').then((res) => setCoverLetterBlob(res))
  //   getDataFile('/candidate/file/cv-download').then((res) => setCvBlob(res))
  // }, [])

  const downloadCv = (e) => {
    const element = e.target
    element.href = URL.createObjectURL(cvBlob)
  }

  const downloadCoverLetter = (e) => {
    const element = e.target
    element.href = URL.createObjectURL(coverLetterBlob)
  }

  const onDrop = useCallback(
    (file, name) => {
      if (file.length < 1) return
      const arr = file[0].name.split('.')
      const type = arr[arr.length - 1]

      setValues({ ...values, [name]: file[0] })
      if (type === 'pdf') {
        setIndex({ ...index, [name]: 1 })
      } else if (type === 'doc') {
        setIndex({ ...index, [name]: 2 })
      } else if (type === 'docx') {
        setIndex({ ...index, [name]: 3 })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values, index]
  )

  const handleDelete = (e, name) => {
    e.stopPropagation()
    setValues({ ...values, [name]: null })
  }

  const handleDeleteUploadedFile = (e, name, setNameState) => {
    e.stopPropagation()

    if (name === 'cv') {
      deleteUploadedCvMutation.mutate(
        {},
        {
          onSuccess: () => {
            toast.success('Your CV is succesfully deleted.')
            setNameState('')
          },
          onError: (error) => {
            toast.error(error.message)
          },
        }
      )
    } else if (name === 'letter') {
      deleteUploadedCoverLetterMutation.mutate(
        {},
        {
          onSuccess: () => {
            toast.success('Your Cover Letter is succesfully deleted.')
            setNameState('')
          },
          onError: (error) => {
            toast.error(error.message)
          },
        }
      )
    }
  }

  let cvData = new FormData()
  let coverLetter = new FormData()

  const onSubmit = async () => {
    cvData.append('files', values.cv)
    coverLetter.append('files', values.letter)

    if (!values.cv && !values.letter) {
      if (isNavigate) navigate('/candidate/position')
    }

    if (values.cv) {
      await uploadCvOrCover(cvMutation, cvData, 'Cv')
    } else if (values.letter) {
      await uploadCvOrCover(coverLetterMutation, coverLetter, 'Cover Letter')
    }
  }

  const { candidateUserInfo, addCandidateUserInfo } = useUser()

  const updateReduxStepperStatus = () => {
    if (!candidateUserInfo.candidateStatus.uploadCV) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          uploadCV: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    }
  }

  const uploadCvOrCover = async (uploadAction, uploadData, uploadType) => {
    await uploadAction.mutate(uploadData, {
      onSuccess: () => {
        updateReduxStepperStatus()
        toast.success(`Your ${uploadType} has been uploaded successfully.`)
        if (values.cv && values.letter && uploadType === 'Cv') {
          uploadCvOrCover(coverLetterMutation, coverLetter, 'Cover Letter')
        } else {
          if (isNavigate) navigate('/candidate/position')
        }
      },
      onError: (error) => {
        const errors = error.response.data.errors
        const errorMessages = errors.map((error) => error.message).join(' & ')
        toast.error('An error occured while saving your ' + uploadType + '. Error message: ' + errorMessages)
      },
    })
  }

  return (
    <StyledContainer style={{ marginBottom: '40px' }}>
      <StyledText display="block" className="header" type="Headline2">
        Upload CV
      </StyledText>
      <StyledText display="block" className="description" type="Subtitle1">
        Please upload your CV in the correct file format.
      </StyledText>
      <DropzonesContainer>
        <Dropzone
          file={values.cv}
          name="cv"
          handleDelete={handleDelete}
          handleDeleteUploadedFile={handleDeleteUploadedFile}
          onDrop={onDrop}
          icon={icons[index.cv]}
          handleCvDownload={downloadCv}
          label="Cv"
          blob={cvBlob}
          uploadedCv={userData?.cvPath}
        />

        <StyledText display="block" className="description" type="Subtitle1">
          You can also upload your Cover Letter here.
        </StyledText>
        <Dropzone
          file={values.letter}
          name="letter"
          onDrop={onDrop}
          handleDelete={handleDelete}
          handleDeleteUploadedFile={handleDeleteUploadedFile}
          icon={icons[index.letter]}
          handleCoverDownload={downloadCoverLetter}
          label="Cover Letter"
          blob={coverLetterBlob}
          uploadedCoverLetter={userData?.coverLetterPath}
        />
      </DropzonesContainer>
      <button type="submit" onClick={onSubmit} ref={ref} style={{ display: 'none' }}></button>
    </StyledContainer>
  )
})
export default ReferCandidateUpload
