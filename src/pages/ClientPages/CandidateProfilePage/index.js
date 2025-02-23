import {
  StyledInfoContainer,
  StyledInfoImg,
  StyledInfoBody,
  StyledInfoWrapper,
  StyledInfoWrapper3,
  StyledBodyContainer,
  StyledDetailsContainer,
  StyledOutlineCheckCircle,
  StyledHeader,
  Hr,
  StyledContainer,
  Wrapper,
  StyledForm,
  StyledButtonContainer,
  StyledJobInfoWrapper,
  StyledCVContainer,
  StyledButton2,
  StyledSelectItem,
  StyledExperinceContainer,
  StyledInputContainer,
  StyledAutocomplete,
  StyledTextField,
  StyledContainerInput,
} from './index.styles'
import { FormControlLabel, Switch, FormGroup } from '@mui/material'
import LinearProgressWithLabel from '../../GeneralDashboardPages/ProfilePage/Progress'
import { HiLocationMarker } from 'react-icons/hi'
import { FaRegCopy } from 'react-icons/fa'
import { Text } from '../../../atoms'
import BackgroundLetterAvatars from '../../../components/GeneralComponents/Header/HeaderAvatar'
import { useUser } from '../../../redux/hooks/userHook'
import { useGetCity, useGetCountry, useGetCountryPhoneCode } from '../../../service/API/shared'
import { AtomicButton } from './index.styles'
import { TextField } from '../../../atoms'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import SelectItem from '../../../components/SelectItem'
import { useLanguageHook } from '../../../utils/formikHooks/languageFormik'
import DatePicker from '../../../atoms/DatePicker'
import LinearProgress from '@mui/material/LinearProgress'

const CandidateProfilePage = () => {
  const { candidateUserInfo } = useUser()
  const { data: countriesList } = useGetCountry()
  countriesList?.data.filter((country) => country.id === candidateUserInfo.personnelInfo.countryId)
  const { data: cityData } = useGetCity(candidateUserInfo.personnelInfo.countryId)
  const { data: countryData } = useGetCountry()
  const { data: phoneCodeData } = useGetCountryPhoneCode()
  const phoneCodes = phoneCodeData?.data ? phoneCodeData.data.map((code) => ({ name: code, id: code })) : []

  const navigate = useNavigate()

  const { selectList } = useLanguageHook()

  const formik = useFormik({
    initialValues: {
      firstName: 'John',
      lastName: 'Doe',
      linkedIn: 'https://www.linkedin.com/in/johndoe',
      countryId: '1',
      cityId: '1',
      email: 'john.doe@example.com',
      countryPhoneCode: '44',
      mobile: '1234567890',
    },
    validate: (values) => {
      const errors = {}
      if (!values.email) {
        errors.email = 'E-posta zorunludur'
      }
      return errors
    },
    onSubmit: (values) => {
      console.log('Form, değerlerle gönderildi:', values)
    },
  })

  return (
    <StyledBodyContainer>
      <Text display="block">Candidate Profile</Text>
      <StyledInfoContainer>
        <StyledInfoBody>
          <StyledInfoImg>
            <BackgroundLetterAvatars name={'E M'} />
          </StyledInfoImg>
          <StyledInfoContainer>
            <StyledInfoWrapper>
              <Text className='capitalize' display="block" type="Subtitle1">
                Elon Musk
              </Text>
              <Text type="Subtitle1">Devops Engineer</Text>
              <Text display="block" type="Subtitle2">
                <HiLocationMarker /> London
              </Text>
            </StyledInfoWrapper>
            <StyledInfoWrapper>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked color="default" />}
                  label={
                    <Text className="text-example" type="Subtitle2">
                      Off the market
                    </Text>
                  }
                />
              </FormGroup>
              <Text display="block" className="text-example" type="Subtitle2">
                Profile complete rate
              </Text>
              <LinearProgressWithLabel value={60} />
            </StyledInfoWrapper>
          </StyledInfoContainer>
        </StyledInfoBody>
        <StyledInfoWrapper3>
          <AtomicButton
            className="apply"
            variant="contained"
            type="submit"
            handleClick={() => navigate('/client/shortlist')}
            label="SEE SHORTLIST"
            size="large"
          />
        </StyledInfoWrapper3>
      </StyledInfoContainer>
      <StyledDetailsContainer>
        <StyledJobInfoWrapper>
          <Text type="Subtitle1">For SR Java Developer-London-£50k position</Text>
          <StyledButtonContainer>
            <AtomicButton
              className="apply"
              variant="outlined"
              type="submit"
              handleClick={() => navigate('')}
              label="REJECT"
              size="large"
            />
            <AtomicButton
              className="apply"
              variant="contained"
              type="submit"
              handleClick={() => navigate('')}
              label="MOVE NEXT STAGE"
              size="large"
            />
          </StyledButtonContainer>
        </StyledJobInfoWrapper>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Personal Information
            </Text>
          </StyledHeader>
          <Hr />
          <StyledForm onSubmit={formik.handleSubmit}>
            <Wrapper>
              <TextField
                type="text"
                label="First Name*"
                variant="outlined"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                type="text"
                label="Last Name*"
                variant="outlined"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Wrapper>
            <Wrapper>
              <TextField
                type="text"
                label="LinkedIn*"
                variant="outlined"
                name="linkedIn"
                value={formik.values.linkedIn}
                onChange={formik.handleChange}
                error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
                helperText={formik.touched.linkedIn && formik.errors.linkedIn}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Wrapper>
            <Wrapper>
              <SelectItem
                menuItems={countryData?.data}
                type="text"
                label="Country"
                variant="outlined"
                noneOption={true}
                name="countryId"
                value={formik.values.countryId}
                handleChange={formik.handleChange}
                error={Boolean(formik.errors.countryId)}
                helperText={formik.errors.countryId}
              />
              <SelectItem
                type="text"
                label="City"
                menuItems={cityData?.data}
                variant="outlined"
                noneOption={true}
                name="cityId"
                disabled={!formik.values.countryId}
                value={formik.values.countryId ? formik.values.cityId : ''}
                handleChange={formik.handleChange}
                error={Boolean(formik.errors.cityId)}
                helperText={formik.errors.cityId}
              />
            </Wrapper>
            <Wrapper>
              <TextField
                type="text"
                label="E-mail*"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Wrapper>
            <Wrapper className="phone">
              <SelectItem
                type="text"
                label="Country Code"
                defaultValue="44"
                variant="outlined"
                noneOption={true}
                name="countryPhoneCode"
                menuItems={phoneCodes}
                value={formik.values.countryPhoneCode}
                handleChange={formik.handleChange}
                error={Boolean(formik.errors.countryPhoneCode)}
                helperText={formik.errors.countryPhoneCode}
              />
              <TextField
                type="text"
                label="Mobile"
                variant="outlined"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.mobile)}
                helperText={formik.errors.mobile}
              />
            </Wrapper>
          </StyledForm>
        </StyledContainer>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Upload CV
            </Text>
          </StyledHeader>
          <Hr />
          <Text type="Subtitle1">Resume</Text>
          <StyledCVContainer>
            <Text display="inline" type="Subtitle2">
              <FaRegCopy />
              ElonMusk.pdf
            </Text>
          </StyledCVContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Position
            </Text>
          </StyledHeader>
          <Hr />
          <StyledExperinceContainer>
            <StyledButton2 className="added" variant="contained">
              Java Developer
            </StyledButton2>
          </StyledExperinceContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Skill Set
            </Text>
          </StyledHeader>
          <Hr />
          <StyledExperinceContainer>
            <StyledButton2 className="added" variant="contained">
              AWS
            </StyledButton2>
            <StyledSelectItem className="select-item" menuItems={['0-1', '1-3', '3-5']} value={'1-3'} label={'Experience Year'} />
          </StyledExperinceContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Industry
            </Text>
          </StyledHeader>
          <Hr />
          <StyledExperinceContainer>
            <StyledButton2 className="added" variant="contained">
              IT
            </StyledButton2>
            <StyledSelectItem className="select-item" menuItems={['0-1', '1-3', '3-5']} value={'1-3'} label={'Experience Year'} />
          </StyledExperinceContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Language
            </Text>
          </StyledHeader>
          <Hr />
          <StyledExperinceContainer>
            <StyledButton2 className="added" variant="contained">
              English
            </StyledButton2>
            <StyledSelectItem className="select-item" menuItems={selectList} value={'Proficiency'} label={'Proficiency'} />
          </StyledExperinceContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Experience
            </Text>
          </StyledHeader>
          <Hr />
          <StyledInputContainer>
            <TextField id="title" className="title" mainClass="title" label="Title" color="secondary" />
            <TextField id="company" className="company" mainClass="company" label="Company" color="secondary" />
          </StyledInputContainer>
          <StyledInputContainer>
            <SelectItem className="contractTypeId" label="Perm/Cont" noneOption={true} />
            <SelectItem className="workPlaceId" label="Workplace" noneOption={true} />
          </StyledInputContainer>
          <StyledInputContainer>
            <DatePicker
              id="startDate"
              className="startDate"
              mainClass="startDate"
              color="secondary"
              label="Start Date*"
              views={['year', 'month']}
              openTo="month"
              inputFormat="MM.YYYY"
            />
            <DatePicker
              id="endDate"
              className="endDate"
              mainClass="endDate"
              color="secondary"
              displayStaticWrapperAs="desktop"
              views={['year', 'month']}
              openTo="month"
              inputFormat="MM.YYYY"
            />
            <SelectItem className="noticePeriodId" label="Notice Period*" />
          </StyledInputContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Education
            </Text>
          </StyledHeader>
          <Hr />
          <StyledContainerInput className="containerBox">
            <StyledAutocomplete
              disableClearable
              id="university"
              className="degree"
              renderInput={() => <TextField label="University" />}
              color="secondary"
            />
            <SelectItem className="degree" label="Degree" color="secondary" />
          </StyledContainerInput>
          <StyledContainerInput>
            <SelectItem className="degree" label="Department" color="secondary" />
            <SelectItem
              label="Start Year"
              className="degree"
              color="secondary"
              MenuProps={{
                style: {
                  maxHeight: 200,
                },
              }}
            />
            <SelectItem
              label="End Year"
              className="degree"
              color="secondary"
              MenuProps={{
                style: {
                  maxHeight: 200,
                },
              }}
            />
          </StyledContainerInput>
        </StyledContainer>
        <StyledContainer>
          <StyledHeader>
            <StyledOutlineCheckCircle />
            <Text display="block" className="headline" type="Headline2">
              Preferences
            </Text>
          </StyledHeader>
          <Hr />
          <StyledForm>
            <SelectItem
              type="text"
              label="Location Preferences"
              name={'contractTypeId'}
              noneOption={true}
              variant="outlined"
              defaultValue=""
            />
            <Hr />
            <StyledContainerInput className="containerBox">
              <SelectItem
                type="text"
                label="Contract Type"
                name={'contractTypeId'}
                noneOption={true}
                variant="outlined"
                defaultValue=""
              />
              <SelectItem
                type="text"
                label="Salary Preference"
                name={'salaryPreferenceId'}
                noneOption={true}
                variant="outlined"
                defaultValue=""
              />
            </StyledContainerInput>
            <StyledContainerInput className="containerBox">
              <StyledTextField
                id="minExpectedAmount"
                name="minExpectedAmount"
                label="Minimum Expected Salary"
                type="salary"
                color="secondary"
              />
              <SelectItem type="text" label="Currency" name={'currencyId'} noneOption={true} variant="outlined" defaultValue="" />
            </StyledContainerInput>
            <LinearProgress variant="determinate" value={40} color="success" />
            <Hr />
            <StyledContainerInput className="containerBox">
              <SelectItem
                type="text"
                label="What is your visa status?"
                noneOption={true}
                name={'visaStatusId'}
                variant="outlined"
                defaultValue=""
              />
            </StyledContainerInput>
          </StyledForm>
        </StyledContainer>
      </StyledDetailsContainer>
    </StyledBodyContainer>
  )
}

export default CandidateProfilePage
