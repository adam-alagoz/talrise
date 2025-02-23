import Material from '../../../components/MaterialTable'
import {
  AtomicButton,
  StyledButton,
  StyledButtonBody,
  StyledButtonInsideBody,
  StyledContainer,
  StyledImage,
  StyledTableBody,
} from './index.styles'
import { useUser } from '../../../redux/hooks/userHook'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useNavigate } from 'react-router-dom'
import Text from '../../../atoms/Text'
import { Box } from '@mui/system'
import { Chip } from '@mui/material'
import okimg from '../../../assets/svg/ok-img.svg'

import kanbanIconSelected from '../../../assets/svg/kanbanIconSelected.svg'
import kanbanIconUnselected from '../../../assets/svg/kanbanIconUnselected.svg'
import listIconUnselected from '../../../assets/svg/listIconUnselected.svg'
import listIconSelected from '../../../assets/svg/listIconSelected.svg'
import { useState } from 'react'
import ShortlistKanbanTable from '../../../components/ClientComponents/ClientKanban/ShortlistKanbanTable'
import Modal from '../../../atoms/Modal'

export default function ShortListTable() {
  const { userInfo } = useUser()
  const [modal3Open, setModal3Open] = useState(true)
  const navigate = useNavigate()
  const handleChange = () => {}
  const handleClickModal = () => {
    setModal3Open(true)
    setModal3Open(false)
  }
  const [toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(!toggle)
  }
  const status = [
    'CV Screen',
    'Phone Interview',
    'Home Task',
    'First Round Interview',
    'Second Round Interview',
    'Third Round Interview',
    'Other',
    'Offer',
    'Placement',
    'Reject',
  ]

  const columns = [
    {
      title: 'CANDIDATE',
      field: 'candidate',
      render: (rowData) => <span className='capitalize'>{rowData.candidate}</span>,
    },

    {
      title: 'POSITION',
      field: 'position',
      render: (rowData) => <span className='capitalize'>{rowData.position.name}</span>,
    },
    {
      title: 'STAGE',
      field: 'stage',
      render: (row) => (
        <select onChange={(e) => handleChange(e)} style={{ border: 'none' }} name="jobStatus" id="jobStatus">
          <option value="" disabled>
            Shortlist
          </option>
          {status.map((item) => (
            <option key={item} defaultValue={row.status === item} value={item}>
              {item}
            </option>
          ))}
        </select>
      ),
    },
    {
      title: 'DATE',
      field: 'date',
      render: (rowData) => (
        <span className='capitalize'>{new Date(rowData.interviewTime * 1000).toLocaleDateString()}</span>
      ),
    },

    {
      title: 'DETAILS',
      field: 'candidate',
      render: (row) => (
        <MoreVertIcon
          style={{ cursor: 'pointer', textAlign: 'left' }}
          onClick={() => {
            navigate(`/candidate-profile-page/${row.id}`) 
          }}
        />
      ),
    },
  ]

  return (
    <StyledContainer>
      <Modal
        open={modal3Open}
        handleClose={handleClickModal}
        handlePrimaryButton={handleClickModal}
        primaryButtonName="SEE DETAILS"
        style={{
          position: 'absolute',
          display: 'flex',
          top: '10%',
          left: '10%',
        }}
      >
        <StyledImage src={okimg} />
        <Text type="Body2">Tallrise has send you candidate for SR Java Devoloper</Text>
      </Modal>
      <Text display="block">Candidate Process</Text>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <AtomicButton
          className="jobbutton"
          variant="contained"
          // handleClick={}
          label="JAVA DEVELOPER"
        />
        <AtomicButton
          className="jobbutton"
          variant="outlined"
          // handleClick={}
          label="UX DESIGNER"
        />
        <AtomicButton
          className="jobbutton"
          variant="outlined"
          // handleClick={}
          label="DATA ANALYST"
        />
      </Box>
      <StyledTableBody>
        <StyledButtonBody>
          <Chip className="chip" label="+ Add Filter" variant="outlined" />
          <StyledButtonInsideBody className="buttonInsideBody">
            <Text type="Body1" className="body-text">
              VIEW OPTIONS:
            </Text>
            <StyledButton variant="text" className="kanban-button" onClick={handleClick}>
              <StyledImage src={toggle ? kanbanIconUnselected : kanbanIconSelected} />
            </StyledButton>
            <StyledButton variant="text" className="list-button" onClick={handleClick}>
              <StyledImage src={toggle ? listIconSelected : listIconUnselected} />
            </StyledButton>
          </StyledButtonInsideBody>
        </StyledButtonBody>
        {toggle ? <Material columns={columns} baseUrl={`/client/candidate/process/${userInfo.id}`} /> : <ShortlistKanbanTable />}
      </StyledTableBody>
    </StyledContainer>
  )
}
