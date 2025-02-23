import DashboardActivities from '../../../components/DashboardActivities'
import { dashboardActivitiesMessages } from '../../../shared/mock'
import { StyledContainer } from './index.styles'

function DashboardActivitiesPage() {
  return (
    <StyledContainer>
      <DashboardActivities title={'Activities'} messages={dashboardActivitiesMessages} />
    </StyledContainer>
  )
}

export default DashboardActivitiesPage
