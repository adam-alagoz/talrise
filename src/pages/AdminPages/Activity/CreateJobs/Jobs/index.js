import ClientListTable from '../../../CreateClient/ClientListTable'
import { StyledHeader, StyledTable } from './index.styles'
import { Text, Button } from '../../../../../atoms'
import { useNavigate } from 'react-router-dom'
const Jobs = () => {
  const navigate = useNavigate()
  return (
    <StyledTable>
      <StyledHeader>
        <Text type="Headline1" className="headline">
          Create a Job
        </Text>
        <Button
          className="button layout-button"
          variant="contained"
          handleClick={() => navigate('/admin/jobs/clients/create-a-client')}
          label="CREATE A NEW CLIENT"
        />
      </StyledHeader>
      <ClientListTable />
    </StyledTable>
  )
}

export default Jobs
