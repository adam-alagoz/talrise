import 'react-toastify/dist/ReactToastify.css'
import { StyledToastContainer } from './index.style'

export default function Toast() {
  return (
    <div>
      <StyledToastContainer autoClose={4000} position="top-center" closeOnClick pauseOnHover pauseOnFocusLoss icon />
    </div>
  )
}
