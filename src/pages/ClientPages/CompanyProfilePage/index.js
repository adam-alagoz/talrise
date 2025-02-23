import { Accordion, AccordionDetails, AccordionSummary, Box, Button } from '@mui/material'
import { FaAngleDown, FaPen } from 'react-icons/fa'
import { useCompanyContactInfoHook } from '../../../utils/formikHooks/clientFormikHooks/companyContactInfoFormik'
import { useCompanyDetailsHook } from '../../../utils/formikHooks/clientFormikHooks/companyDetailsFormik'
import { useClientPositionsHook } from '../../../utils/formikHooks/clientFormikHooks/clientPositionHooks'
import {
  StyledInfoBody,
  StyledInfoContainer,
  StyledInfoImg,
  StyledInfoWrapper,
  StyledInfoWrapper3,
  StyledOutlineCheckCircle,
  StyledOutlineCloseCircle,
} from '../../GeneralDashboardPages/ProfilePage/index.styles'
import { useEffect, useState } from 'react'
import { clientProfileHelper } from '../../AdminPages/CreateClient/clientProfileHelper'
import Contacts from '../ContactInformationPage/Contacts'
import Company from '../CompanyDetailsPage/Company'
import Positions from '../../CandidatesPages/PositionPage/Positions'
import CustomDropzone from '../../../components/CustomDropzone'
import { Text } from '../../../atoms'
import { StyledAccordionBox, StyledAccordionContainer, StyledButtonContainer } from '../../AdminPages/CreateClient/index.styles'
import BackgroundLetterAvatars from '../../../components/GeneralComponents/Header/HeaderAvatar'
import { HiLocationMarker } from 'react-icons/hi'
import LinearProgressWithLabel from '../../GeneralDashboardPages/ProfilePage/Progress'
import { useGetClientData } from '../../../service/API/client'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import { AtomicButton } from '../../../components/CustomDropzone/index.styles'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        '.Mui-expanded & > .expandIconWrapper': {
          display: 'none',
        },
        '.collapseIconWrapper': {
          display: 'none',
        },
        '.Mui-expanded & > .collapseIconWrapper': {
          display: 'block',
        },
      }}
    >
      <div className="expandIconWrapper">
        <FaPen />
      </div>
      <div className="collapseIconWrapper">
        <FaAngleDown />
      </div>
    </Box>
  )
}

const CompanyProfilePage = () => {
  const { data: clientData } = useGetClientData()

  const { formik: companyInfoFormik } = useCompanyContactInfoHook(false)
  const { formik: companyDetailsFormik } = useCompanyDetailsHook(false)
  const { formik: companyPositionsFormik, suggestedList } = useClientPositionsHook(false)

  const [file, setFile] = useState([])
  const [view, setView] = useState('profile')

  const handleView = () => {
    setView('preview')
  }

  const handleContractUpload = () => {
    // ! TODO: Once we have the API endpoint for contract uploads, proceed with the remaining steps.
  }

  useEffect(() => {
    if (clientData) {
      if (clientData?.data?.clientContact?.length) {
        companyInfoFormik.setValues({
          ...companyInfoFormik.values,
          contactInfos: [...clientData?.data?.clientContact],
        })
        companyDetailsFormik.setValues(clientProfileHelper({ ...clientData?.data?.clientCompanyDetail }))
      } else {
        companyInfoFormik.setValues({
          ...companyInfoFormik.values,
          contactInfos: companyInfoFormik.initialValues.contactInfos,
        })
        companyDetailsFormik.setValues(clientProfileHelper({ ...clientData?.data?.clientCompanyDetail }))
      }
    }
    // eslint-disable-next-line
  }, [clientData])

  const profileSections = [
    {
      name: 'Contact Information',
      formikName: companyInfoFormik,
      id: <Contacts formik={companyInfoFormik} />,
    },
    {
      name: 'Company Details',
      formikName: companyDetailsFormik,
      id: <Company formik={companyDetailsFormik} />,
    },
    {
      name: 'Positions',
      formikName: companyPositionsFormik,
      id: <Positions formik={companyPositionsFormik} suggestedList={suggestedList} />,
    },
    {
      name: 'Upload Contract',
      formikName: { handleSubmit: handleContractUpload, isValid: false }, //! TODO: If the contract is a mandatory document, implement a verification check to ensure it has been uploaded. Otherwise set the value to true.
      id: (
        <CustomDropzone
          message="Upload your contract in correct file format."
          file={file}
          setFile={setFile}
          handleView={handleView}
        />
      ),
    },
  ]
  return (
    <>
      {/* Company Profile Information Section */}
      <StyledInfoContainer>
        <StyledInfoBody>
          <StyledInfoImg>
            <BackgroundLetterAvatars name={clientData?.data?.clientCompanyDetail?.companyName?.charAt(0) || ''} />
          </StyledInfoImg>
          <StyledInfoContainer>
            <StyledInfoWrapper>
              <Text className='capitalize' type="Subtitle1">
                {clientData?.data?.clientCompanyDetail?.companyName}
              </Text>
              <Text display="block" type="Subtitle2">
                <HiLocationMarker /> London{/*{!countryId ? 'No Data' : location}*/}
              </Text>
              <Text display="block" className="text-example" type="Subtitle2">
                Profile complete rate
              </Text>
              <LinearProgressWithLabel value={clientData?.data?.clientStatus?.percentage} />
            </StyledInfoWrapper>
          </StyledInfoContainer>
        </StyledInfoBody>
        <StyledInfoWrapper>
          <StyledInfoWrapper3>
            <Text className="text" type="Subtitle2">
              LAST LOGIN:
            </Text>
            <Text className="text2" type="Subtitle2">
              Date
            </Text>
          </StyledInfoWrapper3>
        </StyledInfoWrapper>
      </StyledInfoContainer>

      {/* Company Profile Section*/}
      {view === 'profile' && (
        <>
          <Text type="Headline1" className="headline">
            Company Profile
          </Text>
          <StyledAccordionBox>
            {profileSections.map((item, index) => {
              const isCompleted = item?.formikName?.isValid
              return (
                <Accordion key={`${index}-${item.name}`} disableGutters={true} elevation={0}>
                  <AccordionSummary expandIcon={<CustomExpandIcon />}>
                    {isCompleted ? <StyledOutlineCheckCircle /> : <StyledOutlineCloseCircle />}
                    <Text display="block" className="text-example" type="Subtitle1">
                      {item.name}
                    </Text>
                  </AccordionSummary>
                  <hr />
                  <StyledAccordionContainer>
                    <AccordionDetails>{item.id}</AccordionDetails>
                    <StyledButtonContainer>
                      <Button className="layout-button layout-cancel" onClick={() => {}} variant="contained" label="cancel">
                        Cancel
                      </Button>
                      <Button
                        className="layout-button layout-save"
                        onClick={() => {
                          item.formikName.handleSubmit()
                        }}
                        variant="contained"
                        label="save"
                      >
                        SAVE
                      </Button>
                    </StyledButtonContainer>
                  </StyledAccordionContainer>
                </Accordion>
              )
            })}
          </StyledAccordionBox>
        </>
      )}

      {/* Preview Section*/}
      {view === 'preview' && (
        <>
          <Document file={file && file[0]}>
            <StyledButtonContainer>
              <AtomicButton variant="contained" type="button" label="BACK" handleClick={() => setView('profile')} />
            </StyledButtonContainer>

            <Page pageNumber={1} />
          </Document>
        </>
      )}
    </>
  )
}

export default CompanyProfilePage
