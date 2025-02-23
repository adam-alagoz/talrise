import { StyledContainer, AtomicButton, StyledImage } from './index.styles'
import NotFound from '../../../assets/svg/404.svg'
import Text from '../../../atoms/Text'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <StyledContainer>
      <StyledImage src={NotFound} />
      <Text display="block" className="text-404" type="Body1">
        Oops! Something's gone wrong.
        <br />
        Not to worry, why don't you try one of these helpful links:
      </Text>
      <AtomicButton
        variant="outlined"
        type="submit"
        handleClick={() => {
          navigate(
            localStorage.activeRole === 'CANDIDATE'
              ? '/candidate/dashboard'
              : localStorage.activeRole === 'SUPER_ADMIN'
              ? '/admin/dashboard'
              : localStorage.activeRole === 'CLIENT'
              ? '/client/dashboard'
              : '/'
          )
        }}
        label="HOME PAGE"
      />
    </StyledContainer>
  )
}
export default NotFoundPage
