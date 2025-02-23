
import { StyledText, StyledContainer } from './index.styles'
import Text from '../../../atoms/Text'
import { useNavigate } from 'react-router-dom'

const ReferalNoData = () => {
  const navigate = useNavigate()
  return (
    <StyledContainer>
      <StyledText display="block" className="header" type="Body1">
        <p> There is no referral data!</p>
        <p>
          However, if you have a friend who is as good as you, we would like to have some
          information about them.
        </p>
        <p>Then we will take care of the rest. </p>
        <p>We will inform you when your friend joins the system or starts a process. </p>
      </StyledText>

      <div className="btn-container">
        <div onClick={() => navigate('/referrals/refercandidate')} className="btn">
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5568 14.0003C18.5269 14.0003 21.7424 11.017 21.7424 7.33366C21.7424 3.65033 18.5269 0.666992 14.5568 0.666992C10.5867 0.666992 7.37118 3.65033 7.37118 7.33366C7.37118 11.017 10.5867 14.0003 14.5568 14.0003ZM14.5568 17.3337C9.7604 17.3337 0.185547 19.567 0.185547 24.0003V25.667C0.185547 26.5837 0.99393 27.3337 1.98195 27.3337H27.1317C28.1197 27.3337 28.9281 26.5837 28.9281 25.667V24.0003C28.9281 19.567 19.3532 17.3337 14.5568 17.3337Z"
              fill="#701D9F"
            />
          </svg>

          <Text className="text" type="Body1">
            I want to refer a friend who might be interested in the jobs here
          </Text>
        </div>
        <div onClick={() => navigate('/referrals/referClient')} className="btn">
          <svg
            width="37"
            height="30"
            viewBox="0 0 37 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3533 21.6667H16.7604C15.7724 21.6667 14.964 20.9167 14.964 20H2.40714V26.6667C2.40714 28.5 4.02391 30 5.99996 30H31.1317C33.1077 30 34.7245 28.5 34.7245 26.6667V20H22.1497C22.1497 20.9167 21.3413 21.6667 20.3533 21.6667ZM32.9281 6.66667H25.7425C25.7425 2.98333 22.5269 0 18.5568 0C14.5868 0 11.3712 2.98333 11.3712 6.66667H4.18559C2.20954 6.66667 0.592773 8.16667 0.592773 10V15C0.592773 16.85 2.19158 18.3333 4.18559 18.3333H14.964V16.6667C14.964 15.75 15.7724 15 16.7604 15H20.3533C21.3413 15 22.1497 15.75 22.1497 16.6667V18.3333H32.9281C34.9041 18.3333 36.5209 16.8333 36.5209 15V10C36.5209 8.16667 34.9041 6.66667 32.9281 6.66667ZM14.964 6.66667C14.964 4.83333 16.5808 3.33333 18.5568 3.33333C20.5329 3.33333 22.1497 4.83333 22.1497 6.66667H14.9461H14.964Z"
              fill="#701D9F"
            />
          </svg>

          <Text className="text" type="Body1">
            I want to refer a company who might be interested in the candidates here
          </Text>
        </div>
      </div>
    </StyledContainer>
  )
}

export default ReferalNoData
