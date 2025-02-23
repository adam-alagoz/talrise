import { StyledAllHeaderElements, StyledHeader } from './index.styles'
import { IconButton, Stack, Typography } from '@mui/material'
import CustomizedMenus from './Dropdown'
import { useEffect, useState } from 'react'
import BackgroundLetterAvatars from './HeaderAvatar'
import NotificationIconWithBadge from './NotificationIconWithBadge'
import { useUser } from '../../../redux/hooks'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

export default function ButtonAppBar({ setDrawerOpen, open }) {
  const { userInfo: userData } = useUser()
  const [role, setRole] = useState('')

  useEffect(() => {
    if (userData?.roles?.includes('PARTNER')) {
      setRole('PARTNER')
    } else if (userData?.roles?.includes('CLIENT')) {
      setRole('CLIENT')
    } else if (userData?.roles?.includes('SUPER_ADMIN')) {
      setRole('SUPER ADMIN')
    } else if (userData?.roles?.includes('CANDIDATE')) {
      setRole('CANDIDATE')
    } else {
      setRole('USER')
    }
  }, [userData])

  return (
    <StyledHeader
      sx={{
        position: 'absolute',
        fontFamily: 'DM Sans',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
        height: '64px',
      }}
    >
      <IconButton className="hamburger-menu-button" sx={{ marginLeft: 'auto' }} onClick={() => setDrawerOpen((prev) => !prev)}>
        <MenuRoundedIcon fontSize="large" />
      </IconButton>
      <StyledAllHeaderElements>
        <NotificationIconWithBadge />
        <BackgroundLetterAvatars name={(userData?.firstName + ' ' + userData?.lastName)?.toUpperCase() || ''} />
        <Stack direction="column" sx={{ ml: '16px', mt: '16px', mb: '16px' }}>
          <Typography
            sx={{
              pl: '1px',
              mb: '4px',
              fontFamily: 'DM Sans !important',
              fontWeight: '500',
              fontSize: '10px',
              lineHeight: '10px',
              letterSpacing: '1.5px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            {role}
          </Typography>
          <CustomizedMenus name={(userData?.firstName || '') + ' ' + (userData?.lastName || '')} role={role} />
        </Stack>
      </StyledAllHeaderElements>
    </StyledHeader>
  )
}
