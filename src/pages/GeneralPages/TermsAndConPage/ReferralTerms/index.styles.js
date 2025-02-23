import styled from 'styled-components'

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
`


export const StyledText = styled.div`    
    text-align: justify;
    margin: 5%;   
    .blue{
        color:darkblue;
    }
       
`
export const Image = styled.img`
  width: 65%;
  position: absolute;

  @media (min-width: ${(p) => p.theme.breakPoints.lg}) {
    padding: 8rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    width: 100%;
    padding-left: 0rem;
  }
`