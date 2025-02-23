import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../../components/GeneralComponents/layout'
import UploadCv from '../../CandidatesPages/UploadCvPage/components/UploadCv'
import { useNavigate } from 'react-router-dom'
import Stepper from '../../../atoms/Stepper'
import { useGetCandidateInfo } from '../../../service/API/candidate'

const UploadCvPage = () => {
  const navigate = useNavigate()
  const ref = useRef()
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

  const handleSubmit = () => {
    ref.current.click()
  }

  return (
    <div>
      <Layout
        componentLeft={<Stepper step={1} />}
        variant="progressBar"
        componentRight={
          <UploadCv ref={ref} isNavigate={true} values={values} setValues={setValues} />
        }
        nextButtonClick={handleSubmit}
        backButtonClick={() => navigate('/candidate/personal-info')}
        exitButtonVisible={true}
      />
    </div>
  )
}

export default UploadCvPage
