import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useUser } from '../../../../redux/hooks'
import { SidebarLink, SidebarLabel, DropdownLink, SidebarIcon } from './SubMenu.styles'
import { MdArrowRight, MdArrowDropDown } from 'react-icons/md'

const SubMenu = ({ item }) => {
  const location = useLocation()
  const [subnav, setSubnav] = useState(false)
  const { userInfo } = useUser()
  const showSubnav = () => setSubnav((prevState) => !prevState)

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        className={location?.pathname === item.path ? 'active' : null}
      >
        <SidebarIcon>{item.icon}</SidebarIcon>
        <SidebarLabel>{item.text}</SidebarLabel>

        {item.subNav && (subnav ? <MdArrowDropDown size={30} /> : <MdArrowRight size={30} />)}
      </SidebarLink>
      {subnav &&
        item.subNav
          .filter((subMenu) => {
            let isShown = false
            subMenu.rolePool.forEach((role) => {
              if (userInfo.roles.includes(role)) {
                isShown = true
              }
            })
            return isShown
          })
          .map((subItem, index) => {
            return subItem.subNav ? (
              <SubMenu item={subItem} key={subItem.id} />
            ) : (
              <DropdownLink to={subItem.path} key={subItem.id} className={location?.pathname === subItem.path && 'active'}>
                <SidebarLabel className={subItem.innerMenu && 'innerMenu'}>{subItem.text}</SidebarLabel>
              </DropdownLink>
            )
          })}
    </>
  )
}

export default SubMenu
