import Completed from '../../../components/Completed/index'
import Minus from '../../../assets/svg/minus-circle.svg'

const Unsuccess = () => {
  const text = `<p>You are already registered with Talrise Application Tracking System.<br/><br/>
Visit Login page to access your account.
<p>`

  return (
    <Completed img={Minus} text={text} containedLabel="LOGIN" containedNav="/login" outlinedLabel="HOME PAGE" outlinedNav="/" />
  )
}
export default Unsuccess
