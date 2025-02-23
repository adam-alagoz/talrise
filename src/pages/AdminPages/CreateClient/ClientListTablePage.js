import { useNavigate } from 'react-router-dom'
import { Text } from '../../../atoms'
import { StyledHeader, StyledTable } from './index.styles'
import Button from '../../../atoms/Button'
import ClientListTable from './ClientListTable'

export default function ClientListTablePage() {
  const navigate = useNavigate()

  return (
    <StyledTable>
      <StyledHeader>
        <Text type="Headline1" className="headline">
          Client List
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
