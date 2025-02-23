import styled from 'styled-components'

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`
export const StyledContainer = styled.div`
  .MTableToolbar-root-5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-top: 20px;
  }
  .MTableToolbar-searchField-10 {
    border: 1px solid gray;
    border-radius: 5px;
    width: 28rem;
  }
`
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .layout-button {
    cursor: pointer;
    width: 205px;
    height: 36px;
    border: none;
  }

  .layout-button:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`