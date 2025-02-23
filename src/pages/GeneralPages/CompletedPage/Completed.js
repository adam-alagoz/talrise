import Completed from '../../../components/Completed/index'
import Frame from '../../../assets/svg/Frame.svg'
const CompletedPage = () => {
  const text = `<p>Thank you for joining Talrise !<br/>
  We've sent a contract to your email address.<br/>Our team manager will contact you soon.<br/><br/>
  Have a good day.
  </p>`

  return (
    <Completed img={Frame} text={text} 
    containedLabel="POST A NEW JOB"
    containedNav="/client/jobs/create-jobs"
    outlinedLabel="GO TO DASHBOARD"
    outlinedNav="/" />
  )
}
export default CompletedPage
