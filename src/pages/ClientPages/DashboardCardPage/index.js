import DashboardCard from '../../../components/DashboardCard'
import { StyledContainer } from './index.styles'

function DashboardCardPage({ data }) {
  return (
    <StyledContainer>
      <DashboardCard title="Open Position" number={data?.countOpenPositions} />
      <DashboardCard title="Total Position" number={data?.countApplications} />
      <DashboardCard title="Total Posted Jobs" number={data?.countPostedJobs} />
    </StyledContainer>
  )
}

export default DashboardCardPage
