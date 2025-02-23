import { getSidebarMenuList } from '../../../utils/MenuList'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from '../../Footer'
import Header from '../../GeneralComponents/Header'
import {
  StyledContainer,
  StyledAppBar,
  StyledBox,
  StyledMain,
  StyledDrawer,
  StyledList,
  StyledOutletContainer,
  StyledLogoDiv,
  StyledLogo,
  StyledDrawerComp,
} from './index.styles'
import { Outlet } from 'react-router-dom'
import SubMenu from '../../DashboardComponents/DashboardLayout/SubMenu/SubMenu'
import { useUser } from '../../../redux/hooks'
import layoutLogo from '../../../assets/svg/layout_logo.svg'
import { useTheme, useMediaQuery } from '@mui/material'
import { useState } from 'react'

export default function DashboardLayout() {
  const [open, setDrawerOpen] = useState(false)
  const { userInfo } = useUser()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
  const SidebarMenuList = getSidebarMenuList()

  return (
    <StyledContainer>
      <StyledBox>
        <CssBaseline />
        <StyledAppBar>
          <Header setDrawerOpen={setDrawerOpen} open={open} />
        </StyledAppBar>
        {isMatch ? (
          <StyledDrawerComp SidebarMenuList={SidebarMenuList}  setDrawerOpen={setDrawerOpen} open={open} />
        ) : (
          <>
            <StyledDrawer>
              <StyledLogoDiv>
                <StyledLogo src={layoutLogo} alt="Talrise logo" />
              </StyledLogoDiv>
              <StyledList>
                {SidebarMenuList.filter((menu) => {
                  let isShown = false
                  menu.rolePool.forEach((role) => {
                    if (userInfo.roles.includes(role)) {
                      isShown = true
                    }
                  })
                  return isShown
                }).map((item) => {
                  return <SubMenu item={item} key={item.id} />
                })}
              </StyledList>
            </StyledDrawer>
          </>
        )}
        <StyledMain>
          <StyledOutletContainer>
            <Outlet />
          </StyledOutletContainer>
        </StyledMain>
      </StyledBox>
      <Footer />
    </StyledContainer>
  )
}
