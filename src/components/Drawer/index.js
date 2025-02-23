import React, { useState } from 'react'
import { useUser } from '../../redux/hooks'
import { StyledDrawer, StyledList, StyledMobileNav, SidebarLink, SidebarLabel, SidebarIcon } from './index.styles'
import { useLocation } from 'react-router-dom'
import { MdArrowRight, MdClose, MdKeyboardArrowLeft } from 'react-icons/md'
import { Button } from '@mui/material'

const NavItem = ({ item, handleSubMenuClick, handleNavClick }) => {
  const location = useLocation()
  return (
    <SidebarLink
      onClick={() => (item.subNav ? handleSubMenuClick(item.subNav) : handleNavClick(item))}
      className={location?.pathname === item.path ? 'active' : null}
    >
      <SidebarIcon>{item.icon}</SidebarIcon>
      <SidebarLabel>{item.text}</SidebarLabel>
      {item.subNav && <MdArrowRight size={30} />}
    </SidebarLink>
  )
}

const DrawerComp = ({ SidebarMenuList, setDrawerOpen, open }) => {
  const { userInfo } = useUser()
  const [currentMenu, setCurrentMenu] = useState(SidebarMenuList)
  const [prevList, setPrevList] = useState([])
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleSubMenuClick = (subNav) => {
    setPrevList((prevList) => {
      return [...prevList, currentMenu]
    })
    setCurrentMenu(subNav)
    setSubMenuOpen(true)
    const toggleSubMenuOpen = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  
    toggleSubMenuOpen.then(() => {
      setSubMenuOpen(false);
    });
  }

  const handleBackButtonClick = () => {
    if (prevList.length > 0) {
      const prevMenu = prevList.pop()
      setPrevList([...prevList])
      setCurrentMenu(prevMenu)
    }
    setSubMenuOpen(false)
  }

  const handleNavClick = (item) => {
    window.location.href = item.path
    setDrawerOpen(false)
  }

  return (
    <StyledDrawer
      sx={{
        display: { xs: 'flex', sm: 'flex' },
        flexDirection: { xs: 'column', sm: 'column' },
      }}
      open={open}
    >
      <StyledMobileNav>
        <Button className="layout-button" variant="outlined" onClick={() => setDrawerOpen(false)}>
          Close
          <MdClose size={20} />
        </Button>
      </StyledMobileNav>
      
      <StyledList subMenuOpen={subMenuOpen}>
      {prevList.length > 0 && (
        <Button onClick={handleBackButtonClick}>
          <MdKeyboardArrowLeft size={20} />
          Back
        </Button>
      )}
        {currentMenu
          .filter((menu) => {
            let isShown = false
            menu?.rolePool.forEach((role) => {
              if (userInfo.roles.includes(role)) {
                isShown = true
              }
            })
            return isShown
          })
          .map((item) => (
            <NavItem  key={item.id} item={item} handleNavClick={handleNavClick} handleSubMenuClick={handleSubMenuClick} />
          ))}
      </StyledList>
      
    </StyledDrawer>
  )
}

export default DrawerComp
