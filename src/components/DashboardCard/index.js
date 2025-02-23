import { StyledContainer, InContainer, Title, Number } from './index.styles'

function DashboardCard({ title, number }) {
  return (
    <StyledContainer>
      <InContainer>
        <Title>{title}</Title>
        <Number>{number}</Number>
      </InContainer>
    </StyledContainer>
  )
}

export default DashboardCard
