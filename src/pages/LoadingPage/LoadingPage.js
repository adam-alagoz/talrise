import { StyledContainer,StyledImage } from './index.styles'
import Logo from '../../assets/png/talrise_logo.png'
import Text from '../../atoms/Text'
import CircularProgress from '@mui/material/CircularProgress'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { theme } from '../../styles/Colors'

const themeLoading = createTheme({
  palette: {
    talrise: {
      main: theme.loadingBar,
    },
  },
})

const LoadingPage = ({ loadingText = 'Loading all talents!' }) => {
  return (
    <ThemeProvider theme={themeLoading}>
      <StyledContainer>
        <StyledImage src={Logo} />
        
        <CircularProgress size={90} color="talrise" />
        <Text display="block" className="loading" type="Body1">
          <br />
          {loadingText}
          <br />
        </Text>
      </StyledContainer>
    </ThemeProvider>
  )
}
export default LoadingPage
