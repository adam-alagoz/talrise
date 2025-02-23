import { useUser } from '../../../redux/hooks/userHook'

const Logout = () => {
  const { resetRedux } = useUser()

  localStorage.clear()

  resetRedux()
}

export default Logout
