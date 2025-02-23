import styled from 'styled-components'
import Button from '../../../atoms/Button'
import Text from '../../../atoms/Text'

export const StyledPage = styled.div`
  width: 100%;
  background-color: #e3e6f2;
  .download-button {
    width: 10rem;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.0781rem;
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.white};
  }
  .download-button:hover {
    background-color: ${(p) => p.theme.colors.secondary};
  }
`
export const StyledContainer = styled.div`
  padding: 0 4rem;
  margin: 4rem auto;
  background-color: white;
  max-width: 1041px;
  min-height: 120vh;
`
export const StyledName = styled(Text)`
  padding-top: 2rem;
  text-align: center;
`
export const StyledTitle = styled(Text)`
  text-align: center;
  margin-bottom: 5rem;
`
export const StyledSectionHeader = styled(Text)`
  color: ${(p) => p.theme.colors.primary};
  text-align: left;
  margin-top: 2rem;
`
export const StyledSection = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 2.5rem;
  padding-inline-start: 0;
  .explanation {
    font-weight: 400;
    padding-inline-start: 0;
  }
  .usedTools{
    list-style-type: circle;
    list-style-position: inside;
  }
`
export const StyledContactSection = styled.div`
  margin: 0rem 0rem 1.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  .contact-item {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon-container {
      width: 24px;
      margin-right: 0.5rem;
    }
  }
`
export const StyledHeaderPage = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  max-width: 1150px;
`
export const AtomicButton = styled(Button)`
  margin-right: 10px;
  cursor: pointer;
  width: 6rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.0781rem;
 
`
export const DropContainer = styled.div`
display: flex;
.dbLUcY{
    border: none;
  }
`
