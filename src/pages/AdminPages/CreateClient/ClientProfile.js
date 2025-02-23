import { Text } from '../../../atoms'
import { StyledButtonContainer, StyledOutlineCheckCircle, StyledAccordionBox, StyledAccordionContainer } from './index.styles'
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import { FaPen, FaAngleDown } from 'react-icons/fa'
import { useCompanyContactInfoHook } from '../../../utils/formikHooks/clientFormikHooks/companyContactInfoFormik'
import { useCompanyDetailsHook } from '../../../utils/formikHooks/clientFormikHooks/companyDetailsFormik'
import { useCompanyProfileHook } from '../../../utils/formikHooks/clientFormikHooks/companyProfileFormik'
import Contacts from '../../ClientPages/ContactInformationPage/Contacts'
import Company from '../../ClientPages/CompanyDetailsPage/Company'
import CompanyDetailsExtra from './CompanyDetailsExtra'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetClientInfo } from '../../../service/API/admin'
import { clientProfileHelper } from './clientProfileHelper'
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

export default function ClientProfile() {
  const { clientId } = useParams()
  const { data: clientData } = useGetClientInfo(clientId)

  const { formik: companyInfoFormik } = useCompanyContactInfoHook(true, clientId)
  const { formik: companyDetailsFormik } = useCompanyDetailsHook(true, clientId)
  const { formik: companyProfileFormik } = useCompanyProfileHook(true, clientId)

  useEffect(() => {
    if (clientData) {
      if (clientData.data?.clientContact?.length) {
        companyInfoFormik.setValues({
          ...companyInfoFormik.values,
          contactInfos: [...clientData.data?.clientContact],
        })
        companyDetailsFormik.setValues(clientProfileHelper({ ...clientData.data?.clientCompanyDetail }))
        companyProfileFormik.setValues({ companyProfile: clientData.data?.companyProfile })
      } else {
        companyInfoFormik.setValues({
          ...companyInfoFormik.values,
          contactInfos: companyInfoFormik.initialValues.contactInfos,
        })
        companyDetailsFormik.setValues(clientProfileHelper({ ...clientData.data?.clientCompanyDetail }))
        companyProfileFormik.setValues({ companyProfile: clientData.data?.companyProfile || '' })
      }
    }
    // eslint-disable-next-line
  }, [clientData ])

  const data = [
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
      name: 'Add More Details',
      formikName: companyProfileFormik,
      id: <CompanyDetailsExtra formik={companyProfileFormik} />,
    },
  ]
  return (
    <>
      <Text type="Headline1" className="headline">
        Company Details
      </Text>
      <StyledAccordionBox>
        {data.map((item, index) => {
          const isCompleted = item.formikName.isValid
          return (
            <Accordion key={`${index}-${item.name}`} disableGutters={true} elevation={0}>
              <AccordionSummary expandIcon={<CustomExpandIcon />}>
                {isCompleted && <StyledOutlineCheckCircle />}
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
  )
}
