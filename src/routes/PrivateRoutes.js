import { Navigate } from 'react-router'
import moment from 'moment'
import { useUser } from '../redux/hooks'

const PrivateRoutes = ({ children, isChooseRole = false, isRegister = false, isMainPath = false }) => {
  const { userInfo: user } = useUser()
  const roleOnlyUser = user?.roles?.length <= 1
  const token = localStorage.getItem('token')
  const tokenSetTime = localStorage.getItem('tokenSetTime')
  const isTokenValid = token && moment().add(-16, 'hours') < moment(tokenSetTime)

  return (
    <div>
      {!isTokenValid ? (
        isMainPath || isRegister ? (
          children
        ) : (
          <Navigate to="/" />
        )
      ) : roleOnlyUser ? (
        isChooseRole ? (
          children
        ) : (
          <Navigate to="/chooseRole" />
        )
      ) : isMainPath ? (
        <Navigate
          to={
            localStorage.activeRole === 'CANDIDATE'
              ? '/candidate/dashboard'
              : localStorage.activeRole === 'SUPER_ADMIN'
              ? '/admin/dashboard'
              : localStorage.activeRole === 'CLIENT'
              ? '/client/dashboard'
              : '/*'
          }
        />
      ) : (
        children
      )}
    </div>
  )
}

export default PrivateRoutes
