import { useNavigate } from 'react-router-dom'
import { Text } from '../../../atoms'
import { StyledHeader, StyledTable } from './index.styles'
import Button from '../../../atoms/Button'
import ClientJobTable from './ClientJobTable'

export default function ClientJobTablePage() {
  const navigate = useNavigate()

  return (
    <StyledTable>
      <StyledHeader>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text type="Headline1" className="headline">
            Create a Client
          </Text>
          <Text type="Headline2" className="headline">
            Created Jobs
          </Text>
        </div>
        <Button className="button layout-button" variant="contained" handleClick={() => navigate('/')} label="CREATE A NEW JOB" />
      </StyledHeader>
      <ClientJobTable />
    </StyledTable>
  )
}
