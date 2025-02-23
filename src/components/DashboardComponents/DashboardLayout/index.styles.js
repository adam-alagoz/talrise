import styled from 'styled-components'
import DrawerComp from '../../Drawer'

export const StyledContainer = styled.div`
  height: 100vh;
  position: relative;
`
export const StyledBox = styled.div`
  display: flex;
`
export const StyledAppBar = styled.div`
  background-color: #701d9f;
  position: fixed;
  width: 100%;

  @media screen and (min-width:600px){
    width: calc(100% - 220px);
    margin-left: 220px;
  }
`
export const StyledLogoDiv = styled.div`
  position: fixed;
  background-color: white;
  width: 220px;
`
export const StyledLogo = styled.img`
  width: 180px;
  height: 50px;
`

export const StyledDrawer = styled.div`
  width: 220px;
  box-sizing: border-box;
  position: fixed;
  height: calc(100vh - 100px);
  overflow-y: auto;
  
`
export const StyledList = styled.div`
  margin-top: 70px;
`
export const StyledMain = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  margin-top: 60px;
  padding: 10px;
  background-color: #e3e6f2;
  overflow-y: auto;

  @media screen and (min-width:600px){
    width: calc(100% - 220px);
    margin-left: 220px;
  }
`
export const StyledOutletContainer = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 60px 0 30px;
`
export const StyledDrawerComp = styled(DrawerComp)``