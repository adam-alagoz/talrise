import { Container, Image, StyledImgWrapper } from './index.styles'
import Text from '../../../../../atoms/Text'
import role from '../../../../../assets/svg/role.svg'

const Info = () => {
  return (
    <Container>
      <Text display="block" className="headline" type="Headline3">
        You can have more than one role!
      </Text>
      <Text display="block" className="text-paragraph" type="Body1">
        <ul className="list">
          <li>Discover the best roles from the top companies.</li>
          <li>Find the right candidates for your job.</li>
          <li>Source the best candidates for your clients.</li>
          <li>Partner with us to empower a unique experience for you to recruit and grow.</li>
        </ul>
      </Text>
      <StyledImgWrapper>
        <Image src={role} alt="cuate" width="240" />
      </StyledImgWrapper>
    </Container>
  )
}

export default Info
