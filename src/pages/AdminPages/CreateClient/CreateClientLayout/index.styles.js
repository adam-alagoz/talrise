import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
`
export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 4vh 6.9%;
  margin-top: 5vh;

  .content {
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 0;
  }

  .buttons button {
    width: 67px;
    cursor: pointer;
  }

  .second {
    margin-left: auto;
  }

  .first {
    margin-right: auto;
  }
`
