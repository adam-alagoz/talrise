import { Text } from '../../../atoms'
import {
  StyledButtonContainer,
  StyledOutlineCheckCircle,
  StyledOutlineCloseCircle,
  StyledAccordionBox,
  StyledAccordionContainer,
} from './index.styles'
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import Personal from '../../CandidatesPages/PersonalInfoPage/Personal'
import UploadCv from '../../CandidatesPages/UploadCvPage/components/UploadCv'
import Preferences from '../../CandidatesPages/PrefencesPage/Preferences'
import { FaPen, FaAngleDown } from 'react-icons/fa'
import {
  usePersonalInfoHook,
  usePreferencesHook,
 } from '../../../utils'
import { useUser } from '../../../redux/hooks'
import { Button } from '@mui/material'
import { useRef, useState } from 'react'
const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        '.Mui-expanded & > .expandIconWrapper': {
          display: 'none',
        },
        '.collapseIconWrapper': {
          display: 'none',
        },
        '.Mui-expanded & > .collapseIconWrapper': {
          display: 'block',
        },
      }}
    >
      <div className="expandIconWrapper">
        <FaPen />
      </div>
      <div className="collapseIconWrapper">
        <FaAngleDown />
      </div>
    </Box>
  )
}

export default function Accordions() {
  const { addCandidateUserInfo, candidateUserInfo } = useUser()
  const candidateStatus = candidateUserInfo.candidateStatus
  const { formik: personalPageFormik } = usePersonalInfoHook(false)

  const { formik: preferencesFormik, initialCityWorkTypes } = usePreferencesHook(false)
  const uploadCVref = useRef()
  const handleUploadCVSubmit = () => {
    uploadCVref.current.click()
  }
  const uploadCVInitialValues = {
    cv: null,
    letter: null,
  }
  const [uploadCVvalues, setUploadCVvalues] = useState(uploadCVInitialValues)
  const data = [
    {
      name: 'Personal Information',
      reduxStatusName: 'personnelInfo',
      reduxUpdateParam: {
        ...candidateUserInfo,
        personnelInfo: { ...personalPageFormik.values },
      },
      reduxCancelParam: candidateUserInfo.personnelInfo,
      formikName: personalPageFormik,
      id: <Personal formik={personalPageFormik} />,
    },
    {
      name: 'Upload CV',
      reduxStatusName: 'uploadCV',
      formikName: {
        handleSubmit: handleUploadCVSubmit,
      },
      reduxCancelParam: candidateUserInfo.personnelInfo, //todo
      reduxUpdateParam: {
        ...candidateUserInfo,
      },
      id: (
        <UploadCv
          ref={uploadCVref}
          isNavigate={false}
          values={uploadCVvalues}
          setValues={setUploadCVvalues}
        />
      ),
    },
    
    {
      name: 'Preferences',
      reduxStatusName: 'preferences',
      formikName: preferencesFormik,
      reduxCancelParam: {
        ...candidateUserInfo.preferences,
      },
      reduxUpdateParam: { ...candidateUserInfo, preferences: { ...preferencesFormik.values } },
      id: <Preferences formik={preferencesFormik} initialValues={initialCityWorkTypes} />,
    },
  ]

  return (
    <StyledAccordionBox>
      {data.map((item, index) => {
        const listItems = (
          <Accordion key={index} disableGutters={true} elevation={0}>
            <AccordionSummary expandIcon={<CustomExpandIcon />}>
              {candidateStatus[item.reduxStatusName] ? (
                <StyledOutlineCheckCircle />
              ) : (
                <StyledOutlineCloseCircle />
              )}
              <Text display="block" className="text-example" type="Subtitle1">
                {item.name}
              </Text>
            </AccordionSummary>
            <hr />
            <StyledAccordionContainer>
              <AccordionDetails>{item.id}</AccordionDetails>
              <StyledButtonContainer>
                <Button
                  className="layout-button layout-cancel"
                  onClick={() => {
                    item.name === 'Upload CV'
                      ? setUploadCVvalues(uploadCVInitialValues)
                      : item.formikName.setValues(item.reduxCancelParam)
                  }}
                  variant="contained"
                  label="cancel"
                >
                  Cancel
                </Button>
                <Button
                  className="layout-button layout-save"
                  onClick={() => {
                    addCandidateUserInfo(item.reduxUpdateParam)
                    item.formikName.handleSubmit()
                  }}
                  variant="contained"
                  label="save"
                >
                  SAVE
                </Button>
              </StyledButtonContainer>
            </StyledAccordionContainer>
          </Accordion>
        )
        return listItems
      })}
    </StyledAccordionBox>
  )
}
