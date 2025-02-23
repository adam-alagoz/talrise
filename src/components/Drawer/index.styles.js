import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Drawer } from '@mui/material'

export const StyledDrawer = styled(Drawer)`
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  height: calc(100vh - 100px);
  overflow-y: auto;
`
export const StyledMobileNav = styled.div`
  width: 100%;
  height: 70px;
  background-color: #701d9f;
  position: fixed;

  .layout-button {
    font-weight: 500;
    background-color: ${(p) => p.theme.colors.primary};
    color: white;
    margin: 10px 20px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid white;
  }
`

export const StyledList = styled.div`
  width: 100vw;
  margin-top: 70px;
  padding: 10px 20px;
  /* CSS Animation */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adjust the gap between menu items as needed */

  /* Conditionally apply animation based on subMenuOpen state */
  ${(props) => props.subMenuOpen && `
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: ${(props) => (props.open ? '0s' : '0.5s')};
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
`;


export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 10px;
  line-height: 40px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    color: #701d9f;
    font-weight: 600;
  }
  &.active {
    color: #701d9f;
    font-weight: 600;
  }
  margin-right: 10px;
`

export const SidebarLabel = styled.span`
  font-family: DM Sans;
  font-size: 0.84rem;
  margin-right: auto;
`


export const SidebarIcon = styled.div`
  width: 30px;
  font-size: 20px;
`


