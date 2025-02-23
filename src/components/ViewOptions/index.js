import { useNavigate } from 'react-router-dom'
import { StyledBody, StyledButton, StyledButtonBody, StyledImage, StyledButtonInsideBody, StyledHeader } from './index.styles'
import { Chip } from '@mui/material'
import { Text, Button } from '../../atoms'
import listIconUnselected from '../../assets/svg/listIconUnselected.svg'
import listIconSelected from '../../assets/svg/listIconSelected.svg'
import kanbanIconSelected from '../../assets/svg/kanbanIconSelected.svg'
import kanbanIconUnselected from '../../assets/svg/kanbanIconUnselected.svg'

const ViewOptions = ({ showList, showTable, setShowList, setShowTable }) => {
  const handleTableClick = () => {
    setShowTable(true)
    setShowList(false)
  }
  const handleListClick = () => {
    setShowList(true)
    setShowTable(false)
  }
  const navigate = useNavigate()

  return (
    <StyledBody>
      <StyledHeader>
        <Button
          className="button layout-button"
          variant="contained"
          onClick={() => navigate('/admin/jobs/create-jobs/jobs')}
          label="CREATE A NEW JOB"
        />
      </StyledHeader>
      <StyledButtonBody>
        <Chip className="chip" label="+ Add Filter" variant="outlined" />
        <StyledButtonInsideBody className="buttonInsideBody">
          <Text type="Body1" className="body-text">
            VIEW OPTIONS:
          </Text>
          <StyledButton variant="text" className="kanban-button" onClick={handleTableClick}>
            <StyledImage src={showTable ? kanbanIconSelected : kanbanIconUnselected} /> 
          </StyledButton>
          <StyledButton variant="text" className="list-button" onClick={handleListClick}>
            <StyledImage src={showList ? listIconSelected : listIconUnselected} />
          </StyledButton>
        </StyledButtonInsideBody>
      </StyledButtonBody>
    </StyledBody>
  )
}

export default ViewOptions
