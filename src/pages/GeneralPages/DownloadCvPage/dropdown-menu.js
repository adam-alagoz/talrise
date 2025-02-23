import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { BsDownload } from 'react-icons/bs'
import PDFIcon from '../../../assets/svg/PDFIcon.svg'
import DOCXIcon from '../../../assets/svg/DOCXIcon.svg'
import DOCIcon from '../../../assets/svg/DOCIcon.svg'
import { AtomicButton, DropContainer } from './index.styles'
import { useNavigate } from 'react-router-dom'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}))

export default function DownloadMenu({ generateDoc }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const onClickBack = () => navigate(-1)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <DropContainer>
        <AtomicButton className="apply" variant="contained" type="submit" handleClick={onClickBack} label="BACK" size="large" />
        <Button
          className="download-button"
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          startIcon={<BsDownload />}
        >
          DOWNLOAD
        </Button>
      </DropContainer>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            generateDoc('pdf')
          }}
          disableRipple
        >
          <img style={{ marginRight: '14px' }} src={PDFIcon} alt="PDFIcon" />
          Download PDF
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            generateDoc('docx')
          }}
          disableRipple
        >
          <img style={{ marginRight: '14px' }} src={DOCXIcon} alt="DOCXIcon" />
          Download Docx
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            generateDoc('doc')
          }}
          disableRipple
        >
          <img style={{ marginRight: '14px' }} src={DOCIcon} alt="DOCIcon" />
          Download Doc
        </MenuItem>
      </StyledMenu>
    </div>
  )
}
