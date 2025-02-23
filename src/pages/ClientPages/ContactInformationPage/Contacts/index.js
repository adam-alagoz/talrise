import { forwardRef } from 'react'
import { StyledContainer, StyledForm, StyledWrapper } from './index.styles'
import { Text } from '../../../../atoms'
import ContactForm from '../ContactForm'

const Contacts = forwardRef(({ formik }, ref) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Text className="experience-headline" type="Headline2">
          Contact Information 
        </Text>
        <Text className="experience-subtitle" type="Subtitle1">
          Please let us know some of your basic personal information. 
        </Text>
      </StyledContainer>
      <StyledForm onSubmit={formik.handleSubmit}>
        <ContactForm formik={formik} />
        <button type="submit" ref={ref} style={{ display: 'none' }}></button>
      </StyledForm>
    </StyledWrapper>
  )
})

export default Contacts
