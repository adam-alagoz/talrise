import styled from 'styled-components'

export const StyledContainer = styled.div`
  background-color: white;
  width: 90%;
  margin-left: 6rem;
  .detailsText {
    width: 85%;
    height: 31rem;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5rem;
    letter-spacing: 0.0094rem;
    color: ${(p) => p.theme.colors[p?.color] ?? p.theme.colors.headLineColor};
  }
`
export const StyledForm = styled.form``
