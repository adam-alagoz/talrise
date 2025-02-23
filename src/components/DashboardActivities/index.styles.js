import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 19.875rem;
  margin: 0 15px;
`
export const Header = styled.div`
  width: 322px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid rgba(0, 39, 125, 0.12);
  background-color:#ffff;
`
export const ContentWrap = styled.div`
  overflow: scroll;
  height: 15.625rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-family: 'DM Sans';
  margin-left: 8px;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  margin: 0;
  margin-top: 1rem;
  .time {
    opacity: 0.6;
    font-size: 0.8rem;
    padding-left: 0.3rem;
  }
`
export const Ball = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background-color: rgba(0, 11, 42, 0.2);
  margin: 0;
  margin-right: 0.5rem;
`
export const View = styled.p`
  color: ${(p) => p.theme.colors.primary};
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
`
