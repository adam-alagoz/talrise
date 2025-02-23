import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 40px;
  line-height: 25px;
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
  .innerMenu {
    padding-left: 15px;
  }
`

export const SidebarIcon = styled.div`
  width: 30px;
  font-size: 20px;
`
