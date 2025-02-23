import styled from 'styled-components'


export const StyledContainer = styled.div`
  padding: 25px 33px;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0rem 0.25rem 0.25rem ${(p) => p.theme.colors.blackForShadow};
  box-sizing: border-box;
  .button {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    border: none;
    cursor: pointer;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.1);
  }
  
`
export const StyledButtonContainer = styled.div`
  width: 130px;
  display: flex;
  flex-direction: row;
  margin-top:5rem;
  margin-bottom: 2rem;
`
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`
