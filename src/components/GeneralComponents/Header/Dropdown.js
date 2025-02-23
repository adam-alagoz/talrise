import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../../redux/hooks/userHook'
import { getDropdownMenuList } from '../../../utils/MenuList'
import { Logout } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { Container, StyledMenuContainer } from './index.styles'
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
    marginTop: theme.spacing(1.1),
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
        backgroundColor: '#701d9f',
        color: 'white',
      },
    },
  },
}))

export default function CustomizedMenus({ name, role }) {
  const DropdownMenuList = getDropdownMenuList()

  const { resetRedux } = useUser()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [path, setPath] = useState('')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  useEffect(() => {
    if (!open && path !== '') {
      navigate(path)
      setPath('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, open])

  return (
    <Container>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: '#701d9f',
          padding: '0px',
          color: 'rgba(255, 255, 255, 0.87)',
          letterSpacing: '0.15px',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '16px',
          '&:hover': {
            backgroundColor: '#701d9f',
            borderRadius: '6px',
          },
        }}
      >
        {name}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {DropdownMenuList.filter((menu) => {
          let isShown = false
          menu.rolePool.forEach((menuRole) => {
            if (role === menuRole) {
              isShown = true
            }
          })
          return isShown
        }).map((item) => {
          return (
            <StyledMenuContainer key={item.id}>
              <MenuItem
                onClick={() => {
                  handleClose()
                  setPath(item.path)
                }}
                disableRipple
                sx={{
                  height: '20px',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: 'white',
                    borderRadius: '20px',
                  },
                }}
              >
                {item.icon}
                {item.text}
              </MenuItem>
            </StyledMenuContainer>
          )
        })}
        <StyledMenuContainer>
          <MenuItem
            onClick={() => {
              localStorage.clear()
              handleClose()
              resetRedux()
              navigate('/')
            }}
            disableRipple
            sx={{
              height: '20px',
              width: '100%',
              '&:hover': {
                backgroundColor: 'white',
                borderRadius: '20px',
              },
            }}
          >
            <Logout />
            Log Out
          </MenuItem>
        </StyledMenuContainer>
      </StyledMenu>
    </Container>
  )
}
