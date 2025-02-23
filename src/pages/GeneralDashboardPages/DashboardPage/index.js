import { useEffect, useState } from 'react'
import DashboardCard from '../../../components/DashboardCard'
import Text from '../../../atoms/Text'
import Reminders from '../../../components/Reminders'
import Activities from '../../../components/Notifications/components/Activities'
import Notes from '../../../components/Notifications/components/Notes'
import { StyledContainer, StyledCard, Image } from './index.styles'
import { useUser } from '../../../redux/hooks/userHook'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../../atoms'
import CompleteForm from '../../../assets/svg/CompleteForm.svg'
import JobTable from '../../../components/GeneralComponents/Jobs'
import { useGetCandidateDashboardInformation, useGetSkillList } from '../../../service/API/candidate'
import { useGetCandidateInfo } from '../../../service/API/candidate'
import { reduxHelper } from './reduxHelper'
import Loading from '../../LoadingPage'
import NotFoundPage from '../../GeneralPages/Page404/NotFoundPage'
import { Typography } from '@mui/material'
const warningMessages = ['Your profile is still incomplete. Lets continue!', 'Keep going and complete your profile']
const warningMessage = warningMessages[Math.floor(Math.random() * 2)]

export default function Dashboard() {
  const navigate = useNavigate()
  const { candidateUserInfo, addCandidateUserInfo, userInfo } = useUser()
  const { data } = useGetCandidateInfo(userInfo?.token)
  const [isModalShown, setIsModalShown] = useState(false)
  const [modalNavigate, setModalNavigate] = useState('/profile')
  const { data: skillData } = useGetSkillList()
  const { isError, isLoading, data: userDashboardData } = useGetCandidateDashboardInformation('/candidate/dashboard')

  const handleClose = () => {
    setIsModalShown(false)
  }

  useEffect(() => {
    if (data && skillData && candidateUserInfo?.candidateStatus?.percentage === null) {
      let tempReduxData = reduxHelper({ ...data }, { ...skillData })
      addCandidateUserInfo(tempReduxData)
    }
    if (candidateUserInfo.candidateStatus.percentage === 0) {
      setModalNavigate('/candidate/personal-info')
    }
    if (candidateUserInfo?.candidateStatus?.percentage < 50 && candidateUserInfo?.candidateStatus?.percentage !== null) {
      setIsModalShown(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, skillData, candidateUserInfo?.candidateStatus?.percentage])

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <NotFoundPage />
  }
  const {
    data: { totalApplications, totalReferrals, totalSaved },
  } = userDashboardData

  return (
    <StyledContainer>
      <Modal
        open={isModalShown}
        handlePrimaryButton={() => navigate(modalNavigate)}
        primaryButtonName="complete now"
        handleClose={handleClose}
      >
        <Image src={CompleteForm} alt="CompleteForm" />
        <Typography variant="body1" paragraph>
          Ooops...!
        </Typography>
        <Typography variant="body2" paragraph>
          {warningMessage}
        </Typography>
      </Modal>
      <Text type="Headline1">Dashboard Page</Text>
      <StyledCard>
        <DashboardCard title="Saved Jobs" number={totalSaved} />
        <DashboardCard title="Total Applications" number={totalApplications} />
        <DashboardCard title="Total Referrals" number={totalReferrals} />
        <DashboardCard title="Earned money with referrals" number="£0" />
      </StyledCard>
      <JobTable />
      <StyledCard>
        <Reminders />
        <Activities />
        <Notes />
      </StyledCard>
    </StyledContainer>
  )
}
