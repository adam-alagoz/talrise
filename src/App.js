import AppErrorBoundry from './AppErrorBoundry'
import { ThemeProvider } from 'styled-components'
import MainRoutes from './routes/MainRoutes'
import { theme } from './styles/Theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import Toast from './components/Toast'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <AppErrorBoundry>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={{ ...theme }}>
          <div className="App">
            <MainRoutes />
            <Toast />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </AppErrorBoundry>
  )
}

export default App
