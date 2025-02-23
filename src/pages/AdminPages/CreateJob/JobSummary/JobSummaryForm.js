import { useNavigate } from 'react-router-dom'
import { Text } from '../../../../atoms'
import Button from '../../../../atoms/Button'
import Modal from '../../../../atoms/Modal'
import Accordions from './Accordion'
import { StyledContainer, StyledHeader } from './index.styles'
import BasicsInfoForm from '../BasicInfoPage/BasicInfoForm'
import DetailsPageForm from '../DetailsPage/DetailsPageForm'
import InterviewProcessForm from '../InterviewProcess/InterviewProcessForm'
import { useInterviewHook } from '../../../../utils/formikHooks/interviewFormik'
import { useBenefitHook } from '../../../../utils/formikHooks/benefitFormik'
import { useRoleResponsibilityHook } from '../../../../utils/formikHooks/RoleResponsibilityFormik'
import BenefitsForm from '../Benefits/BenefitsForm'
import RoleresponsibilityForm from '../RoleResponsibilityPage/RoleresponsibilityForm'
import { useState } from 'react'
import { useBasicInfoHook } from '../../../../utils/formikHooks/adminFormikHooks/basicInfoHooks'
import { useUser } from '../../../../redux/hooks'
import { useDetailsHook } from '../../../../utils/formikHooks/adminFormikHooks/detailsHooks'
import { toast } from 'react-toastify'

export default function CreateJobTablePage() {
  const navigate = useNavigate()
  const { formik, handleSubmit: onInterviewSave } = useInterviewHook()
  const { formik: benefitsFormik, handleSubmit: onBenefitSave } = useBenefitHook()
  const { formik: RoleresponsibilityFormik, handleSubmit: onRoleSave } = useRoleResponsibilityHook()
  const [modalOpen, setModalOpen] = useState(false)
  const { formik: basicInfoFormik, handleSubmit: onBasicSave } = useBasicInfoHook()
  const {
    formik: detailsFormik,
    selectList,
    suggestedList,
    softSkillSuggestedList,
    handleSubmit: onDetailsSave,
  } = useDetailsHook()
  const { adminInfo, addAdminInfo, addJobId } = useUser()

  const data = [
    {
      onSave: onBasicSave,
      formik: basicInfoFormik,
      name: 'Basics',
      component: <BasicsInfoForm formik={basicInfoFormik} />,
    },
    {
      onSave: onDetailsSave,
      formik: detailsFormik,
      name: 'Details',
      component: (
        <DetailsPageForm
          formik={detailsFormik}
          selectList={selectList}
          suggestedList={suggestedList}
          softSkillSuggestedList={softSkillSuggestedList}
        />
      ),
    },

    {
      onSave: onRoleSave,
      formik: RoleresponsibilityFormik,
      name: 'Role Responsibility',
      component: <RoleresponsibilityForm formik={RoleresponsibilityFormik} />,
    },
    {
      onSave: onInterviewSave,
      formik: formik,
      name: 'Interview Process',
      component: <InterviewProcessForm formik={formik} />,
    },
    {
      onSave: onBenefitSave,
      formik: benefitsFormik,
      name: 'Benefits',
      component: <BenefitsForm formik={benefitsFormik} />,
    },
  ]

  const {
    positionId,
    employmentTypeId,
    jobTitle,
    countryId,
    cityId,
    expectedClosureDate,
    expectedStartDate,
    contractTypeId,
    salaryAmountId,
    salaryPreferenceId,
    currencyId,
    workPlaceIds,
    languageIds,
  } = adminInfo?.basicInfo || {}

  const handleClick = () => {
    if (
      positionId &&
      employmentTypeId &&
      jobTitle &&
      countryId &&
      cityId &&
      expectedClosureDate &&
      expectedStartDate &&
      contractTypeId &&
      salaryAmountId &&
      salaryPreferenceId &&
      currencyId &&
      workPlaceIds &&
      languageIds
    ) {
      setModalOpen(!modalOpen)
      addJobId(null)
      addAdminInfo({
        ...adminInfo,
        basicInfo: {
          positionId: '',
          employmentTypeId: '',
          jobTitle: '',
          countryId: '',
          cityId: '',
          expectedClosureDate: '',
          expectedStartDate: '',
          contractTypeId: '',
          salaryAmountId: '',
          currencyId: '',
          workPlaceId: '',
          languageIds: [],
        },
        companyDetails: null,
        details: null,
        interviewProcess: {
          other: '',
          processIds: [],
        },
        benefits: {
          other: '',
          benefitIds: [],
        },
        post: null,
        roleResponsibility: '',
      })
    } else {
      toast.error('Please fill in the required fields')
    }
  }

  const handleModalButton = () => {
    setModalOpen(!modalOpen)
    navigate('/admin/jobs/create-jobs/jobs-list')
  }
  return (
    <StyledContainer>
      <StyledHeader>
        <Text type="Headline1" className="job-summary-headline">
          Job Summary
        </Text>
        {/* bu buttonformu sifirliyor ama next sifirlamayip listeye goturuyor */}
        <Button className="button layout-button" variant="contained" handleClick={handleClick} label="CREATE" />
      </StyledHeader>
      <Accordions data={data} />
      <Modal
        open={modalOpen}
        handleClose={handleClick}
        handlePrimaryButton={handleModalButton}
        primaryButtonName="VIEW JOBS"
        style={{
          position: 'absolute',
          top: '20%',
        }}
      >
        <p>Job has been created successfully</p>
      </Modal>
    </StyledContainer>
  )
}
