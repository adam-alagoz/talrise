import { StyledContainer, StyledLayout, StyledLeft, StyledRight } from './index.styles'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { BsBoxArrowInLeft } from 'react-icons/bs'

const Layout = ({
  componentLeft,
  componentRight,
  variant,
  nextButtonClick,
  backButtonClick,
  buttonIsNotVisible,
  isLogoNavigate = true,
  saveExitButtonVisible = false,
  exitButtonVisible = false,
}) => {
  const navigate = useNavigate()
  return (
    <StyledContainer>
      <StyledLayout className="wrapper">
        {componentLeft && (
          <StyledLeft variant={variant} className="aside aside-1">
            <div
              className="navigate"
              onClick={() => localStorage.activeRole === 'SUPER_ADMIN'
              ? navigate ('/admin/dashboard')
              : localStorage.activeRole === 'CLIENT'
              ? navigate ('/client/dashboard')
              : localStorage.activeRole === 'CANDIDATE'
              ? navigate ('/candidate/dashboard')
              : '/*'}
            />
            {componentLeft}
          </StyledLeft>
        )}
        {componentRight && (
          <StyledRight variant={variant} className="aside aside-2">
            {saveExitButtonVisible && (
              <Button className="layout-save-exit"  onClick={() => localStorage.activeRole === 'SUPER_ADMIN'
              ? navigate ('/admin/dashboard')
              : localStorage.activeRole === 'CLIENT'
              ? navigate ('/client/dashboard')
              : localStorage.activeRole === 'CANDIDATE'
              ? navigate ('/candidate/dashboard')
              : '/*'} startIcon={<BsBoxArrowInLeft />}>
                Save & Exit
              </Button>
            )}
            {exitButtonVisible && (
              <Button className="layout-save-exit"  onClick={() => localStorage.activeRole === 'SUPER_ADMIN'
              ? navigate ('/admin/dashboard')
              : localStorage.activeRole === 'CLIENT'
              ? navigate ('/client/dashboard')
              : localStorage.activeRole === 'CANDIDATE'
              ? navigate ('/candidate/dashboard')
              : '/*'} startIcon={<BsBoxArrowInLeft />}>
                Exit
              </Button>
            )}
            {componentRight}
            {variant === 'progressBar' && (
              <>
                {!buttonIsNotVisible && (
                  <Button className="layout-button layout-back" variant="contained" onClick={backButtonClick}>
                    Back
                  </Button>
                )}
                <Button className="layout-button layout-next" variant="contained" onClick={nextButtonClick}>
                  Next
                </Button>
              </>
            )}
          </StyledRight>
        )}
      </StyledLayout>
      
    </StyledContainer>
  )
}

export default Layout
