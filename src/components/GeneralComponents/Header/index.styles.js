import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #701d9f;
  border-radius: 0px;
  height: 59px;
  padding-right: 21.67px;
  z-index: 99;  
  .MuiTypography-body1 {
    font-size:11px;
    font-family:"Roboto","Helvetica","Arial",sans-serif;
    margin-bottom:3px;
    line-height: 10px;
    letter-spacing: 1.5px;
  }
  .hamburger-menu-button{
    color:white;
    margin-left:0px;
    @media (min-width:600px){
      display:none;
    }
  }
  @media (min-width:600px){
    justify-content:flex-end;
  }
`

export const StyledAllHeaderElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: '200px';
  padding-right: '100px';  
`

export const Container = styled.div`
  color:rgba(255, 255, 255, 0.87);  
`

export const StyledMenuContainer = styled.div`  
  border: 1px solid gray;
  border-radius: 20px;
  color: '#701d9f';
  margin: 7px;  
  padding-top: 10px;
  padding-bottom: 10px;
  font-size:20px;  
  .MuiMenuItem-root {
    display:flex;
    justify-content: flex-start;    
    padding-left:10px;
  }  
`