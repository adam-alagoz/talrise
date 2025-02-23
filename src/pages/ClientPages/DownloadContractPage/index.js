import React from 'react'
import { useNavigate } from 'react-router-dom'
import { jsPDF } from 'jspdf'
import Layout from '../../../components/GeneralComponents/layout/index'
import Logo from '../../../assets/svg/CVLogo.svg'
import Phone from '../../../assets/svg/Phone-Squared.svg'
import Location from '../../../assets/svg/location.svg'
import LinkedIn from '../../../assets/svg/CVLinkedIn.svg'
import SecuredLetter from '../../../assets/svg/Secured-Letter.svg'

import {
  StyledContainer,
  StyledTitle,
  StyledContactSection,
  StyledSectionHeader,
  StyledSection,
  StyledSectionRow,
  StyledPage,
  StyledHeaderPage,
  AtomicButton,
} from './index.styles'
import { BsDownload } from 'react-icons/bs'
import html2canvas from 'html2canvas'

const DownloadPdfPage = () => {
  const navigate = useNavigate()

  const generatePdf = () => {
    const capture = document.querySelector('#styled-container')
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p', 'pt', 'a4')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      doc.save('your-pdf.pdf')
    })
  }
  const onClickBack = () => navigate(-1)
  return (
    <Layout
      componentRight={
        <StyledPage>
          <StyledHeaderPage>
            <img style={{ cursor: 'pointer' }} src={Logo} alt="logo" onClick={() => navigate('/')} />
            <AtomicButton
              className="apply"
              variant="contained"
              type="submit"
              handleClick={onClickBack}
              label="BACK"
              size="large"
            />
            <AtomicButton
              className="download-button"
              id="demo-customized-button"
              variant="contained"
              disableElevation
              handleClick={generatePdf}
              startIcon={<BsDownload />}
              label="DOWNLOAD"
            ></AtomicButton>
          </StyledHeaderPage>
          <StyledContainer id="styled-container">
            <StyledTitle>Talrise Recruitment Contract</StyledTitle>
            <StyledSectionHeader display="block" className="header" type="Headline2">
              Contact Details
            </StyledSectionHeader>
            <StyledContactSection>
              <div className="contact-item">
                <div className="icon-container">
                  <img src={SecuredLetter} alt="letter" />
                </div>
                <span>Email</span>
              </div>
              <div className="contact-item">
                <div className="icon-container">
                  <img src={LinkedIn} alt="linkedIn" />
                </div>
                <span>LinkedIn</span>
              </div>
              <div className="contact-item">
                <div className="icon-container">
                  <img src={Phone} alt="phone" />
                </div>
                <span>Mobile Phone</span>
              </div>
              <div className="contact-item">
                <div className="icon-container">
                  <img src={Location} alt="location" />
                </div>
                <span>Location</span>
              </div>
            </StyledContactSection>
            <StyledSectionHeader display="block" className="header" type="Headline2">
              Define spesific details
            </StyledSectionHeader>

            <StyledSection>
              <span className="explanation">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel malesuada risus. Quisque facilisis finibus ante
                feugiat blandit. In est est, efficitur eu sodales quis, pretium eget arcu. Morbi sapien odio, interdum ac tellus
                ut, porta semper nisl. Curabitur ac metus lacinia, ullamcorper velit id, ultrices leo. Curabitur euismod dignissim
                purus et tristique. Mauris in libero consectetur, interdum velit ut, tristique odio. Sed gravida eu dui sit amet
                volutpat. Ut eu pretium quam. Vestibulum quis nulla tempus, aliquet felis vel, dapibus nibh. Nam et ultricies
                felis, id volutpat diam. In rhoncus tellus ac augue euismod convallis. Nam sit amet erat cursus, lobortis ligula
                quis, auctor nisi. Donec eget dui ac lacus mollis aliquet. Cras vel malesuada libero, a ultrices nunc. Praesent
                non lectus ac magna venenatis placerat.
              </span>
            </StyledSection>
            <StyledSectionHeader display="block" className="header" type="Headline2">
              Make sure to Cover
            </StyledSectionHeader>
            <StyledSection>
              <ul>
                <li>section 1</li>
                <li>section 2</li>
                <li>section 3</li>
                <li>section 4</li>
                <li>section 5</li>
              </ul>
            </StyledSection>
            <StyledContainer>
              <StyledSectionRow>
                <StyledSection>
                  <StyledSectionHeader>Partner</StyledSectionHeader>
                  <StyledSection>
                    <span>Name: _______________________</span>
                    <span>Title: _______________________</span>
                    <span>Date: _______________________</span>
                  </StyledSection>
                </StyledSection>
                <StyledSection>
                  <StyledSectionHeader>Company</StyledSectionHeader>
                  <StyledSection>
                    <span>Name: _______________________</span>
                    <span>Title: _______________________</span>
                    <span>Date: _______________________</span>
                  </StyledSection>
                </StyledSection>
              </StyledSectionRow>
            </StyledContainer>
          </StyledContainer>
        </StyledPage>
      }
    />
  )
}

export default DownloadPdfPage
