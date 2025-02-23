import { StyledFooter, FooterContainer, StyledYear, StyledLinkContainer, StyledFooterLink } from './index.styles'

const Footer = () => {

  return (
    <StyledFooter>
      <FooterContainer>
        <StyledYear>&copy;{new Date().getFullYear()} Talrise</StyledYear>
        <StyledLinkContainer>
          <StyledFooterLink>
            <a className="link" href="/terms" target="_blank">
              Terms & Conditions
            </a>
          </StyledFooterLink>
          <StyledFooterLink>
            <a className="link" href="/privacy" target="_blank">
              Privacy Policy
            </a>
          </StyledFooterLink>
        </StyledLinkContainer>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer
