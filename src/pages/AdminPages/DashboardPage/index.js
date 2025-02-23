import { useEffect, useState } from 'react'
//import DashboardActivities from '../../../components/DashboardActivities'
//import { dashboardActivitiesMessages } from '../../../shared/mock'
import DashboardCard from '../../../components/DashboardCard'
import Text from '../../../atoms/Text'
import { useNavigate } from 'react-router'
import { v4 as generateId } from 'uuid'
import Reminders from './../../../components/Reminders'
import { StyledContainer, StyledCard, AtomicButton } from './index.styles'
import { getData } from '../../../service/service'
import ApplicantsListTable from '../../../components/AdminComponents/ApplicantsListTable/ApplicantsListTable'

export default function Dashboard() {
  const navigate = useNavigate()
  const [dashboardDatas, setDashboardDatas] = useState({})

  useEffect(() => {
    getData('/admin/dashboard').then((resp) => setDashboardDatas(resp.data))
  }, [])

  return (
    <StyledContainer>
      <Text type="Headline1">Dashboard</Text>
      <StyledCard>
        <DashboardCard
          key={generateId()}
          title={'Registered Candidates'}
          number={`${dashboardDatas.dailyRegisterCount}/${dashboardDatas.totalRegisterCount}`}
        />
        <DashboardCard key={generateId()} title="Total Applications" number={dashboardDatas.totalJobApplication} />
        <DashboardCard key={generateId()} title="Total Posted Jobs" number={dashboardDatas.totalPostedJob} />
      </StyledCard>
      <ApplicantsListTable />
      <StyledCard>
        <Reminders />
        <AtomicButton
          className="addJob"
          variant="contained"
          type="submit"
          handleClick={(e) => {
            navigate('/jobs')
            e.preventDefault()
          }}
          label="CREATE A NEW JOB"
        />
      </StyledCard>
    </StyledContainer>
  )
}
