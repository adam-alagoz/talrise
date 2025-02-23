import styled from 'styled-components'

export const StyledContainer = styled.div`
  padding: 75px 10px;
/*   max-width: 720px; */
  background-color:${(p) => p.theme.colors.white} ;
  margin:50px  150px  50px 30px;

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    &.text-example text{
      padding-top: 2rem;
    }
  }

  .btn {
    text-transform: none;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    padding: 2rem;
    border: 1px solid #8b82be;
    border-radius: 17px;
   width: 360px;
  }

  .text{
    text-align: center;
    padding-top: 10px;
  }

`
export const StyledText = styled.div`
  text-align: center;
  margin-bottom: 75px;
`
