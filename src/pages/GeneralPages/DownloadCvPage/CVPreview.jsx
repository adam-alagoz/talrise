import { useRef } from 'react'
import Layout from '../../../components/GeneralComponents/layout/index'
import { saveAs } from 'file-saver'
import { Packer } from 'docx'
import { DocumentCreator, showDate } from './cv-generator'
import {
  StyledContainer,
  StyledName,
  StyledTitle,
  StyledContactSection,
  StyledSectionHeader,
  StyledSection,
  StyledPage,
  StyledHeaderPage,
} from './index.styles'
import SecuredLetter from '../../../assets/svg/Secured-Letter.svg'
import LinkedIn from '../../../assets/svg/CVLinkedIn.svg'
import Logo from '../../../assets/svg/CVLogo.svg'
import Phone from '../../../assets/svg/Phone-Squared.svg'
import Location from '../../../assets/svg/location.svg'
import DownloadMenu from './dropdown-menu'
import { useNavigate } from 'react-router-dom'

import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const CVPreview = ({ userData, toolsData }) => {
  const printRef = useRef()
  const navigate = useNavigate()
  const city = userData?.personnelInfo?.city?.name
  const country = userData?.personnelInfo?.country?.name
  const location = !city || !country ? 'No Data' : city + '/' + country
  const usedTools = toolsData?.data.map((tool) => tool.name).join(', ')

  const generate = async (extension) => {
    if (extension !== 'pdf') {
      const doc = DocumentCreator(userData, location, usedTools)
      Packer.toBlob(doc).then((blob) => {
        saveAs(
          blob,
          `${userData?.personnelInfo?.firstName ? userData?.personnelInfo?.firstName : 'unknown'}-${
            userData?.personnelInfo?.lastName ? userData?.personnelInfo?.lastName : ''
          }.${extension}`
        )
      })
    } else {
      const element = printRef.current
      const canvas = await html2canvas(element)
      const data = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      const imgProperties = pdf.getImageProperties(data)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width
      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight, null, 'SLOW')
      pdf.save(`${userData?.personnelInfo?.firstName}-${userData?.personnelInfo?.lastName}.pdf`)
    }
  }

  return (
    <Layout
      componentRight={
        <StyledPage>
          <StyledHeaderPage>
            <img style={{ cursor: 'pointer' }} src={Logo} alt="logo" onClick={() => navigate('/')} />
            <DownloadMenu generateDoc={generate} />
          </StyledHeaderPage>
          <StyledContainer ref={printRef}>
            <StyledName display="block" type="Headline1">
              {userData?.personnelInfo?.firstName + ' ' + userData?.personnelInfo?.lastName}
            </StyledName>
            <StyledTitle display="block" type="Headline2">
              {userData?.personnelInfo?.position}
            </StyledTitle>
            <StyledSectionHeader display="block" className="header" type="Headline2">
              Contact Details
            </StyledSectionHeader>
            <StyledContactSection>
              <div className="contact-item">
                <div className="icon-container">
                  <img src={SecuredLetter} alt="letter" />
                </div>
                <span>{userData?.personnelInfo?.email}</span>
              </div>
              <div className="contact-item">
                <div className="icon-container">
                  <img src={LinkedIn} alt="linkedIn" />
                </div>
                <span>{userData?.personnelInfo?.linkedIn}</span>
              </div>
              <div className="contact-item">
                <div className="icon-container">
                  <img src={Phone} alt="phone" />
                </div>
                <span>{`${userData?.personnelInfo?.countryPhoneCode}  ${userData?.personnelInfo?.mobile}`}</span>
              </div>
              <div className="contact-item">
                <div className="icon-container">
                  <img src={Location} alt="location" />
                </div>
                <span>{location}</span>
              </div>
            </StyledContactSection>
            <StyledSectionHeader display="block" className="header" type="Headline2">
              Work Experience
            </StyledSectionHeader>

            <StyledSection>
              <ul>
                {userData?.experiences?.map((experience, index) => {
                  return (
                    <li key={`${index}-${experience.title}`}>
                      <div>
                        {experience.title +
                          (experience.company ? ' at ' + experience.company : '') +
                          ' ' +
                          showDate(experience, 'startDate') +
                          '-' +
                          showDate(experience, 'endDate')}
                        {usedTools && (
                          <p>
                            Used tools: <span>{usedTools}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <span className="explanation">{experience.explanation}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </StyledSection>
            <StyledSectionHeader display="block" className="header" type="Headline2">
              Education & Professional Certificates
            </StyledSectionHeader>
            <StyledSection>
              {
                <ul>
                  {userData?.educations
                    ?.map((education, index) => {
                      return (
                        <li key={`${index}-${education.universityId}`}>
                          {education.university.name + '/' + education.department.name}
                        </li>
                      )
                    })
                    .concat(
                      userData?.certificates?.map((certificate, index) => {
                        return <li key={`${index}-${certificate.name}`}>{certificate.name}</li>
                      })
                    )}
                </ul>
              }
            </StyledSection>
            <StyledSectionHeader display="block" className="header" type="Headline2">
              Experienced Skills & Technologies
            </StyledSectionHeader>
            <StyledSection>
              <ul>
                {userData?.positions?.map((position, index) => {
                  return (
                    <li key={`${index}-${position.position.name}`}>
                      {position.position.name}
                      <ul>
                        {userData?.skills[position.position.id]
                          ? userData?.skills[position.position.id]?.map((skill, index) => {
                              return <li key={`${index}-${position.position.id}`}>{skill.position.name}</li>
                            })
                          : ''}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </StyledSection>
            <StyledSectionHeader display="block" className="header" type="Headline2">
              Language Knowledge
            </StyledSectionHeader>
            <StyledSection>
              <ul>
                {userData?.languages?.map((language, index) => {
                  return (
                    <li key={`${index}-${language?.language?.id ? language?.language?.id : ''}`}>
                      {language?.language?.name ? language?.language?.name : ''} -{' '}
                      {language?.languageLevel?.name ? language?.languageLevel?.name : ''}
                    </li>
                  )
                })}
              </ul>
            </StyledSection>
          </StyledContainer>
        </StyledPage>
      }
    />
  )
}

export default CVPreview
