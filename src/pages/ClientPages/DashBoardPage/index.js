import { useEffect, useState } from 'react'
import DashboardCardPage from '../../ClientPages/DashboardCardPage'
import Text from '../../../atoms/Text'
import Reminders from '../../../components/Reminders'
import { StyledContainer, StyledCard, Image } from './index.styles'
import { getData } from '../../../service/service'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from '../../../atoms'
import CompleteForm from '../../../assets/svg/CompleteForm.svg'
import { useGetClientData } from '../../../service/API/client'
import OpenPositionsListTable from '../../../components/ClientComponents/OpenPositionsListTable/OpenPositionsListTable'

const warningMessages = ['Your profile is still incomplete. Lets continue!', 'Keep going and complete your profile']
const warningMessage = warningMessages[Math.floor(Math.random() * 2)]

export default function DashboardPage() {
  const navigate = useNavigate()
  const [dashboardData, setDashboardData] = useState({})
  const { data: clientData } = useGetClientData()
  const [isModalShown, setIsModalShown] = useState(clientData?.data?.clientStatus?.percentage < 50)

  const handleClose = () => {
    setIsModalShown(false)
  }

  useEffect(() => {
    getData('/client/dashboard').then((resp) => setDashboardData(resp.data))
  }, [])

  return (
    <StyledContainer>
      <Modal
        open={isModalShown}
        handlePrimaryButton={() => navigate('/client/company-profile')}
        primaryButtonName="complete now"
        secondaryButtonName="go to home page"
        handleSecondaryButton={handleClose}
        handleClose={handleClose}
      >
        <Image src={CompleteForm} alt="CompleteForm" />
        <span>Ooops...!</span>
        <br />
        <span>{warningMessage}</span>
      </Modal>
      <Text type="Headline1">Dashboard Page</Text>
      <StyledCard>
        <DashboardCardPage data={dashboardData} />
      </StyledCard>
      <Button
        className="jobbutton"
        variant="contained"
        handleClick={() => navigate('/admin/jobs/create-jobs/create-a-job/basics')}
        label="CREATE A NEW JOB"
      />
      <OpenPositionsListTable />
      <StyledCard>
        <Reminders />
      </StyledCard>
    </StyledContainer>
  )
}
