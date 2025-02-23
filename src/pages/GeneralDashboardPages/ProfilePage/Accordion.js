import { Text } from '../../../atoms'
import {
  StyledButtonContainer,
  StyledOutlineCheckCircle,
  StyledOutlineCloseCircle,
  StyledAccordionBox,
  StyledAccordionContainer,
} from './index.styles'
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import Positions from '../../CandidatesPages/PositionPage/Positions'
import Language from '../../CandidatesPages/LanguagePage/Language'
import Personal from '../../CandidatesPages/PersonalInfoPage/Personal'
import UploadCv from '../../CandidatesPages/UploadCvPage/components/UploadCv'
import Industry from '../../CandidatesPages/IndustryPage/Industry'
import Experiences from '../../CandidatesPages/ExperiencePage/Experiences'
import Education from '../../CandidatesPages/EducationPage/components/Education'
import Preferences from '../../CandidatesPages/PrefencesPage/Preferences'
import SkillSet from '../../CandidatesPages/SkillSetPage/SkillSet'
import { FaPen, FaAngleDown } from 'react-icons/fa'
import {
  usePersonalInfoHook,
  useIndustryHook,
  usePositionsHook,
  useLanguageHook,
  usePreferencesHook,
  useEducationHook,
  useSkillSetHook,
  useExperienceHook,
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

  const {
    formik: industryFormik,
    selectList: selectIndustryList,
    suggestedList: suggestedIndustryList,
  } = useIndustryHook(false)
  const {
    formik: positionsFormik,
    selectList: selectPositionList,
    suggestedList: suggestedPositionList,
  } = usePositionsHook(false)
  const {
    formik: languageFormik,
    selectList: selectLanguageList,
    suggestedList: suggestedLanguageList,
    isDisabled,
  } = useLanguageHook(false)
  const { formik: educationFormik, selectList: selectEducationList } = useEducationHook(false)
  const {
    formik: skillSetFormik,
    selectList: selectSkillSetList,
    suggestedList: suggestedSkillSetList,
    positionData: positionSkillSetData,
  } = useSkillSetHook(false)
  const { formik: experienceFormik } = useExperienceHook(false)
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
      name: 'Position',
      reduxStatusName: 'position',
      formikName: positionsFormik,
      reduxUpdateParam: {
        ...candidateUserInfo,
        positions: [...positionsFormik.values.addedItemsFormik],
      },
      reduxCancelParam: {
        ...positionsFormik.values,
        addedItemsFormik: [...candidateUserInfo.positions],
      },
      id: (
        <Positions
          formik={positionsFormik}
          selectList={selectPositionList}
          suggestedList={suggestedPositionList}
        />
      ),
    },
    {
      name: 'Skill Set',
      reduxStatusName: 'skillSet',
      formikName: skillSetFormik,
      reduxCancelParam: {
        ...skillSetFormik.values,
        addedItemsFormik: [...candidateUserInfo?.skills],
      },
      reduxUpdateParam: {
        ...candidateUserInfo,
        skills: [...skillSetFormik.values.addedItemsFormik],
      },
      id: (
        <SkillSet
          formik={skillSetFormik}
          selectList={selectSkillSetList}
          suggestedList={suggestedSkillSetList}
          positionData={positionSkillSetData}
        />
      ),
    },
    {
      name: 'Industry',
      reduxStatusName: 'industry',
      formikName: industryFormik,
      reduxCancelParam: {
        ...industryFormik.values,
        addedItemsFormik: [...candidateUserInfo.industries],
      },
      reduxUpdateParam: {
        ...candidateUserInfo,
        industries: [...industryFormik.values.addedItemsFormik],
      },
      id: (
        <Industry
          formik={industryFormik}
          selectList={selectIndustryList}
          suggestedList={suggestedIndustryList}
        />
      ),
    },
    {
      name: 'Language',
      reduxStatusName: 'language',
      formikName: languageFormik,
      isDisabled: isDisabled,
      reduxCancelParam: {
        ...languageFormik.values,
        addedItemsFormik: [...candidateUserInfo.languages],
      },
      reduxUpdateParam: {
        ...candidateUserInfo,
        languages: [...languageFormik.values.addedItemsFormik],
      },
      id: (
        <Language
          formik={languageFormik}
          selectList={selectLanguageList}
          suggestedList={suggestedLanguageList}
        />
      ),
    },
    {
      name: 'Experience',
      reduxStatusName: 'experience',
      formikName: experienceFormik,
      reduxCancelParam: {
        isNewGraduate: candidateUserInfo.isNewGraduate,
        isStudent: candidateUserInfo.isStudent,
        experiences: [...candidateUserInfo.experiences],
      },
      reduxUpdateParam: {
        ...candidateUserInfo,
        experiences: [...experienceFormik.values.experiences],
        isNewGraduate: experienceFormik.values.isNewGraduate,
        isStudent: experienceFormik.values.isStudent,
      },
      id: <Experiences formik={experienceFormik} />,
    },
    {
      name: 'Education',
      reduxStatusName: 'education',
      formikName: educationFormik,
      reduxCancelParam: { ...candidateUserInfo.educations },
      reduxUpdateParam: { ...candidateUserInfo, educations: { ...educationFormik.values } },
      id: <Education formik={educationFormik} selectList={selectEducationList} />,
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
      {data.map((item, index) => 
        
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
                disabled={item.isDisabled ?? false}
                >
                  SAVE
                </Button>
              </StyledButtonContainer>
            </StyledAccordionContainer>
          </Accordion>
        )        
      }
    </StyledAccordionBox>
  )
}
