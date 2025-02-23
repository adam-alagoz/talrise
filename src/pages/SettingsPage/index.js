import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import LookUpTable from '../../components/AllTables/LookUpTable'
import { StyledContainer, AtomicButton, StyledBody } from './index.styles'
import { Button } from '@mui/material'
import IosShareIcon from '@mui/icons-material/IosShareOutlined'

const Settings = () => {
  const isAdmin = localStorage.activeRole === 'SUPER_ADMIN'
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!isAdmin) {
      if (localStorage.activeRole === 'CLIENT') {
        navigate('/client/dashboard')
      } else {
        navigate('/candidate/dashboard')
      }
    }
  }, [isAdmin, navigate])
  return (
    <StyledBody>
      <StyledContainer className="headerButton">
        <Button variant="outlined" sx={{ color: 'gray', borderColor: 'gray' }} label="EXPORT" startIcon={<IosShareIcon />}>
          EXPORT
        </Button>
        <AtomicButton
          variant="contained"
          handleClick={() => {
            navigate('/updatelookuppage')
          }}
          label="ADD LOOK UP"
        />
      </StyledContainer>
      <StyledContainer>
        <LookUpTable />
      </StyledContainer>
      <StyledContainer>
        <AtomicButton variant="contained" label="SAVE LOOK UP FILES" />
      </StyledContainer>
    </StyledBody>
  )
}
export default Settings
