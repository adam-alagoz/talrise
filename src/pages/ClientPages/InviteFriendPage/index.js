import { ReferContainer, Wrapper, StyledForm, ButtonContainer, AtomicButton } from './index.styles'
import { Text, TextField } from '../../../atoms'
import { useInviteFriendHook } from '../../../utils/formikHooks/clientFormikHooks/inviteFriendFormik'

const InviteFriend = () => {
  const { formik } = useInviteFriendHook()

  return (
    <ReferContainer>
      <Text className="headline" type="Headline3">
        Invite your friends!
      </Text>
      <Text className="text-basic" type="Subtitle1">
        If any of your friends you mention to Talrise find employment, we will give you a prize of £1,000 each.
      </Text>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Wrapper>
          <TextField
            type="text"
            label="First Name"
            variant="outlined"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            type="text"
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            InputProps={{
              readOnly: true,
            }}
          />
        </Wrapper>
        <Wrapper>
          <TextField
            type="text"
            label="Your E-mail"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              readOnly: true,
            }}
          />
        </Wrapper>
        <Wrapper>
          <TextField
            type="text"
            label="Your Friend's E-mail"
            variant="outlined"
            name="inviteEmail"
            value={formik.values.inviteEmail}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.inviteEmail && Boolean(formik.errors.inviteEmail)}
            helperText={formik.touched.inviteEmail && formik.errors.inviteEmail}
          />
        </Wrapper>
        <Wrapper>
          <TextField
            type="text"
            label="Message(Optional)"
            variant="outlined"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.message)}
            helperText={formik.errors.message}
            multiline
            rows={5}
          />
        </Wrapper>
        <ButtonContainer>
          <AtomicButton className="addEdu" variant="contained" type="submit" label="Refer" />
        </ButtonContainer>
      </StyledForm>

      <Text className="text-footer" type="Subtitle1">
        You acknowledge that it is okay for you to provide Talrise the information mentioned above. All data sent to Talrise is
        governed by our{' '}
        <a href="/privacy" target="_blank" className="footer-href">
          Privacy Policy
        </a>
        . Please see{' '}
        <a href="/referral-terms" target="_blank" className="footer-href">
          Referral Terms
        </a>
        .
      </Text>
    </ReferContainer>
  )
}

export default InviteFriend
