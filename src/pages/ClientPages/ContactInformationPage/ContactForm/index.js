import { TextField } from '../../../../atoms'
import { StyledFormContainer, StyledContainer, StyledInputContainer, Wrapper, AtomicButton } from './index.styles'
import { MdOutlineAdd } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { FieldArray, FormikProvider, getIn } from 'formik'
import SelectItem from '../../../../components/SelectItem'
import { useGetCountryPhoneCode } from '../../../../service/API/shared'
import { useState } from 'react'

const ContactForm = ({ formik }) => {
  const [formAddError, setFormAddError] = useState('')
  const contactFormData = {
    firstName: '',
    lastName: '',
    clientRole: '',
    linkedin: '',
    email: '',
    countryPhoneCode: '',
    mobileNumber: '',
  }
  const isDeleteButtonVisible = (index) => {
    return (
      formik.values.contactInfos.length > 1 ||
      index !== 0 ||
      Object.values(formik.values.contactInfos[0]).some((value) => value !== '' && typeof value === 'string')
    )
  }
  const addFormHandler = (e, arrayHelpers) => {
    e.preventDefault()
    const anyFormEmpty = formik.values.contactInfos.some(
      (contact) =>
        contact.firstName === '' ||
        contact.lastName === '' ||
        contact.clientRole === '' ||
        contact.linkedin === '' ||
        contact.email === ''
    )
    if (anyFormEmpty) {
      setFormAddError('Please fill all the fields')
      return
    }
    arrayHelpers.push(contactFormData)
  }

  const removeContact = (arrayHelpers, index) => {
    if (formik.values.contactInfos.length > 1) {
      arrayHelpers.remove(index)
   } else {
   arrayHelpers.replace(index, contactFormData)
   }
  }
  const { data: phoneCodeData } = useGetCountryPhoneCode()
  const phoneCodes = phoneCodeData?.data ? phoneCodeData.data.map((code) => ({ name: code, id: code })) : []

  return (
    <StyledFormContainer>
      <FormikProvider value={formik}>
        <FieldArray
          name="contactInfos"
          render={(arrayHelpers) => (
            <div>
              {formik.values.contactInfos.map((_contact, index) => {
                const firstNameError = getIn(formik.errors, `contactInfos[${index}].firstName`)
                const lastNameError = getIn(formik.errors, `contactInfos[${index}].lastName`)
                const clientRoleError = getIn(formik.errors, `contactInfos[${index}].clientRole`)
                const linkedinError = getIn(formik.errors, `contactInfos[${index}].linkedin`)
                const emailError = getIn(formik.errors, `contactInfos[${index}].email`)
                const countryPhoneCodeError = getIn(formik.errors, `contactInfos[${index}].countryPhoneCode`)
                const mobileNumberError = getIn(formik.errors, `contactInfos[${index}].mobileNumber`)

                return (
                  <div key={index}>
                    { index !== 0 && (
                      <div className="line">
                        <hr></hr>
                      </div>
                    )}
                    <StyledContainer className="delete">
                      {isDeleteButtonVisible(index) && (
                        <AtomicButton
                          className="delete"
                          variant="text"
                          icon={<AiOutlineDelete />}
                          size="small"
                          handleClick={() => removeContact(arrayHelpers, index)}
                          label="Delete"
                        />
                      )}
                    </StyledContainer>
                    <StyledInputContainer>
                      <TextField
                        id="firstName"
                        className="firstName"
                        name={`contactInfos[${index}].firstName`}
                        label="First Name"
                        color="secondary"
                        value={formik.values.contactInfos[index].firstName}
                        onChange={formik.handleChange}
                        error={firstNameError}
                        helperText={firstNameError}
                      />
                      <TextField
                        id="lastName"
                        className="lastName"
                        name={`contactInfos[${index}].lastName`}
                        label="Last Name"
                        color="secondary"
                        value={formik.values.contactInfos[index].lastName}
                        onChange={formik.handleChange}
                        error={lastNameError}
                        helperText={lastNameError}
                      />
                    </StyledInputContainer>
                    <StyledInputContainer>
                      <TextField
                        id="clientRole"
                        name={`contactInfos[${index}].clientRole`}
                        label="Role"
                        color="secondary"
                        value={formik.values.contactInfos[index].clientRole}
                        onChange={formik.handleChange}
                        error={clientRoleError}
                        helperText={clientRoleError}
                      />
                    </StyledInputContainer>
                    <StyledInputContainer>
                      <TextField
                        id="linkedIn"
                        name={`contactInfos[${index}].linkedin`}
                        label="LinkedIn"
                        color="secondary"
                        value={formik.values.contactInfos[index].linkedin}
                        onChange={formik.handleChange}
                        error={linkedinError}
                        helperText={linkedinError}
                      />
                    </StyledInputContainer>
                    <StyledInputContainer>
                      <TextField
                        id="email"
                        name={`contactInfos[${index}].email`}
                        label="E-mail"
                        color="secondary"
                        value={formik.values.contactInfos[index].email}
                        onChange={formik.handleChange}
                        error={emailError}
                        helperText={emailError}
                      />
                    </StyledInputContainer>
                    <Wrapper>
                      <SelectItem
                        id="countryPhoneCode"
                        name={`contactInfos[${index}].countryPhoneCode`}
                        value={formik.values.contactInfos[index].countryPhoneCode}
                        type="text"
                        label="Country Code"
                        defaultValue="44"
                        variant="outlined"
                        menuItems={phoneCodes}
                        handleChange={formik.handleChange}
                        error={countryPhoneCodeError}
                        helperText={countryPhoneCodeError}
                      />
                      <TextField
                        id="mobileNumber"
                        name={`contactInfos[${index}].mobileNumber`}
                        value={formik.values.contactInfos[index].mobileNumber}
                        variant="outlined"
                        onChange={formik.handleChange}
                        type="text"
                        label="Mobile"
                        error={mobileNumberError}
                        helperText={mobileNumberError}
                      />
                    </Wrapper>
                  </div>
                )
              })}

              <StyledInputContainer>
                <AtomicButton
                  className="btn-add"
                  variant="contained"
                  icon={<MdOutlineAdd />}
                  handleClick={(e) => formik.isValid && addFormHandler(e, arrayHelpers)}
                  label="ADD ANOTHER CONTACT"
                />
                {formAddError && <div style={{ color: 'red', textAlign: 'center', height: '3rem',width:'6rem', fontSize:'14px'}}>{formAddError}</div>}
              </StyledInputContainer>
            </div>
          )}
        />
      </FormikProvider>
    </StyledFormContainer>
  )
}

export default ContactForm