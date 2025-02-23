import { useState, useCallback, useEffect, forwardRef } from 'react'
import { DropzonesContainer, StyledContainer, StyledText } from './index.styles'
import icon from '../../../../../assets/svg/Color.svg'
import pdf from '../../../../../assets/svg/Pdf.svg'
import docx from '../../../../../assets/svg/Docx.svg'
import doc from '../../../../../assets/svg/Doc.svg'
import Dropzone from '../../../UploadCvPage/components/Dropzone'
import { useNavigate } from 'react-router-dom'
import {
  useCandidateCoverLetter,
  useCandidateCv,
  useDeleteUploadedCoverLetter,
  useDeleteUploadedCv,
  useGetCandidateInfo,
} from '../../../../../service/API/candidate'
import { toast } from 'react-toastify'
import { getDataFile } from '../../../../../service/service'
import { useUser } from '../../../../../redux/hooks/userHook'

const UploadCv = forwardRef(({ isNavigate, values, setValues }, ref) => {
  const navigate = useNavigate()
  const coverLetterMutation = useCandidateCoverLetter()
  const cvMutation = useCandidateCv()
  const deleteUploadedCvMutation = useDeleteUploadedCv()
  const deleteUploadedCoverLetterMutation = useDeleteUploadedCoverLetter()
  const { data: userData } = useGetCandidateInfo()
  const icons = [icon, pdf, doc, docx]
  const { candidateUserInfo, addCandidateUserInfo } = useUser()

  const [index, setIndex] = useState({
    cv: 0,
    letter: 0,
  })
  const [coverLetterBlob, setCoverLetterBlob] = useState({})
  const [cvBlob, setCvBlob] = useState({})

  const getCVandCoverLetter = async () => {
    try {
    const coverLetter = await getDataFile('/candidate/file/cover-download')
    const CV = await getDataFile('/candidate/file/cv-download')
    if( coverLetter ) {
      setCoverLetterBlob(coverLetter)
    }
    if( CV ) {
      setCvBlob(CV)
    }
    }  catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCVandCoverLetter()
  }, [])

  const downloadBlob = (e, blob) => {
    const element = e.target
    element.href = URL.createObjectURL(blob)
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
            updateReduxStepperStatus(false)
            toast.success('Your CV is succesfully deleted.')
            setNameState('')
            setValues({ ...values, cv: null })
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
            setValues({ ...values, letter: null })
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

    if ((!values.cv && !values.letter) || (!values.cv?.path && !values.letter?.path)) {
      if (isNavigate) navigate('/candidate/position')
    }

    if (values.cv && values.cv?.path) {
      await uploadCvOrCover(cvMutation, cvData, 'Cv')
    } else if (values.letter && values.letter?.path) {
      await uploadCvOrCover(coverLetterMutation, coverLetter, 'Cover Letter')
    }
  }

  const updateReduxStepperStatus = (result) => {
    addCandidateUserInfo({
      ...candidateUserInfo,
      candidateStatus: {
        ...candidateUserInfo.candidateStatus,
        uploadCV: result,
        percentage: candidateUserInfo.candidateStatus.percentage + (result ? 10 : -10),
      },
    })
  }

  const uploadCvOrCover = async (uploadAction, uploadData, uploadType) => {
    await uploadAction.mutate(uploadData, {
      onSuccess: () => {
        uploadType === 'Cv' && updateReduxStepperStatus(true)
        toast.success(`Your ${uploadType} has been uploaded successfully.`)

        if (values.cv && values.letter && uploadType === 'Cv' && values.letter.path) {
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
          handleCvDownload={(e) => downloadBlob(e, cvBlob)}
          label="Cv"
          blob={cvBlob}
          uploadedCv={userData?.cvPath}
          uploadedElement={userData?.cvPath}
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
          handleCoverDownload={(e) => downloadBlob(e, coverLetterBlob)}
          label="Cover Letter"
          blob={coverLetterBlob}
          uploadedCoverLetter={userData?.coverLetterPath}
          uploadedElement={userData?.coverLetterPath}
        />
      </DropzonesContainer>
      <button type="submit" onClick={onSubmit} ref={ref} style={{ display: 'none' }}></button>
    </StyledContainer>
  )
})
export default UploadCv
