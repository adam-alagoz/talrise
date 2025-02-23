import { AtomicButton, StyledContainer } from './index.styles.js'
import Material from '../../components/MaterialTable'
import { useNavigate } from 'react-router-dom'
import { Text } from '../../atoms/index.js'

const columns = [
  { title: 'CANDIDATE', field: 'email', render: (row) => <span>{row.email}</span> },
  { title: 'POSITION', field: 'jobTitle', render: (row) => <span>{row.position}</span> },
  { title: 'STATUS', field: 'publishDate', render: (row) => <span>{row.status}</span> },
  { title: 'DATE', field: 'createdAt', render: (row) => <span>{row.createdAt}</span> },
]

export default function ReferralPage() {
  const navigate = useNavigate()

  return (
    <>
      <Text type="Headline1">Referrals</Text>
      <StyledContainer>
        <Material
          title={
            <AtomicButton
              className="apply"
              variant="contained"
              type="submit"
              handleClick={() => {
                navigate('/referrals/refercandidate')
              }}
              label="SHARE A NEW REFER"
              size="large"
            />
          }
          columns={columns}
          baseUrl="/candidate/invite"
        />
      </StyledContainer>
    </>
  )
}
