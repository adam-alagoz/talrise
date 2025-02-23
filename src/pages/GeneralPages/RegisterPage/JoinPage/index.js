import cuate from '../../../../assets/svg/cuate.svg'
import { JoinContainer, Image } from './index.styles'
import Text from '../../../../atoms/Text'

const RegisterJoin = () => {
  return (
    <JoinContainer>
      <Text display="block" className="headline" type="Headline3">
        Why should I join Talrise?
      </Text>
      <Text display="block" className="text-paragraph" type="Body1">
        <ol>
          <li>You can easily find new job opportunities <br />as a candidate.</li>
          <li>You can find candidates for your company.</li>
          <li>You can apply as a partner.</li>
        </ol>
        <p>ALSO</p>
        <p>You can do all in TALRISE!</p>
      </Text>

      <Image src={cuate} alt="cuate" />
    </JoinContainer>
  )
}

export default RegisterJoin
