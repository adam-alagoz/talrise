import { StyledContainer, StyledImage } from './index.styles'
import image from '../../../assets/svg/RecruiterChooses.svg'
import bag from '../../../assets/svg/bag2.svg'
import okimg from '../../../assets/svg/ok-img.svg'
import { useGetClientDashboard } from '../../../service/API/client'
import { useEffect, useState } from 'react'
import Modal from '../../../atoms/Modal'
import OpenPositionsListTable from '../../../components/ClientComponents/OpenPositionsListTable/OpenPositionsListTable'
import Text from '../../../atoms/Text'

export default function CandidateProcess() {
  const { data: clientDashboard } = useGetClientDashboard()
  const [modalOpen, setModalOpen] = useState(true)
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)

  const handleClick = () => {
    setModalOpen(false)
    setModal2Open(false)
    setModal3Open(false)
  }
  const handleSave = () => {
    //TODO: backend bağlandıktan sonra halihazırda seçilen pozisyonlar seçili ise veya hiç seçilmeden save olunmaya çalıştığının kontrolü yapılıp ona göre modal açılabilir
    setModal2Open(true)
  }

  useEffect(() => {
    if (clientDashboard && clientDashboard.data.positions.length !== 0) {
      const hasShortListFalsePositions = clientDashboard.data.positions.some((position) => !position.hasShortList)
      if (hasShortListFalsePositions) {
        setModalOpen(true)
      }
    }
  }, [clientDashboard])

  return (
    <StyledContainer>
      <Text type="Headline1">Candidate Process</Text>
      <Modal
        open={modalOpen}
        handleClose={handleClick}
        handlePrimaryButton={handleClick}
        primaryButtonName="OK"
        style={{
          position: 'absolute',
          display: 'flex',
          top: '10%',
          left: '10%',
        }}
      >
        <StyledImage src={image} />
        <Text type="Body2">Please select your open positions for recruiting candidates</Text>
      </Modal>
      <Modal
        open={modal2Open}
        handleClose={handleClick}
        handlePrimaryButton={handleClick}
        primaryButtonName="OK"
        style={{
          position: 'absolute',
          display: 'flex',
          top: '10%',
          left: '10%',
        }}
      >
        <StyledImage src={bag} />
        <Text type="Body2">Tallrise will share candidates shortlist for your positions soon.</Text>
      </Modal>
      <Modal
        open={modal3Open}
        handleClose={handleClick}
        handlePrimaryButton={handleClick}
        primaryButtonName="SEE DETAILS"
        style={{
          position: 'absolute',
          display: 'flex',
          top: '10%',
          left: '10%',
        }}
      >
        <StyledImage src={okimg} />
        <Text type="Body2">Tallrise has send you candidate for SR Java Devoloper</Text>
      </Modal>
      <OpenPositionsListTable onSaveButtonClick={handleSave} />
    </StyledContainer>
  )
}
