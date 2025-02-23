import styled from 'styled-components'

export const StyledFooter = styled.footer`
  position: sticky;
  z-index: 99;
  bottom: 0;
  background: ${(p) => p.theme.colors.white};
  padding: 0.75rem 0.625rem;
  font-weight: 400;
  font-size: 16px;
  font-family: 'DM Sans';
  line-height: 16px;
  letter-spacing: 0.4px;
  align-items: center;
  color: ${(p) => p.theme.colors.footerFontColor};
`
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledYear = styled.div`
  display: flex;
  justify-content: start;
`
export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
`
export const StyledFooterLink = styled.div`
  display: flex;
  justify-content: end;
  .link,
  .link:visited {
    text-decoration: none;
    color: #979797;
  }
`
export const StyledImg = styled.img`
  width: 30px;
  height: 15px;
`
