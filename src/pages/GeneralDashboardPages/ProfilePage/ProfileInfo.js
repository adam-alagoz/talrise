import { useState, useEffect } from 'react'
import { StyledInfoContainer, StyledInfoImg, StyledInfoBody, StyledInfoWrapper, StyledInfoWrapper3 } from './index.styles'
import { FormControlLabel, Switch, FormGroup } from '@mui/material'
import LinearProgressWithLabel from './Progress'
import { HiLocationMarker } from 'react-icons/hi'
import { Text } from '../../../atoms'
import BackgroundLetterAvatars from '../../../components/GeneralComponents/Header/HeaderAvatar'
import { useUser } from '../../../redux/hooks/userHook'
import { useGetCity, useGetCountry } from '../../../service/API/shared'
import { useGetCandidateInfo } from '../../../service/API/candidate'
import { usePersonalInfoHook } from '../../../utils/formikHooks/personalInfoFormik'

export default function ProfileInfo() {
  const { candidateUserInfo } = useUser()
  const userData = candidateUserInfo?.personnelInfo
  const [progress, setProgress] = useState(0)
  const { data: candidateProfileData } = useGetCandidateInfo()
  const countryId = usePersonalInfoHook().formik.values.countryId

  const { data: countriesList } = useGetCountry()
  countriesList?.data.filter((country) => country.id === candidateUserInfo.personnelInfo.countryId)
  const { data: cityData } = useGetCity(candidateUserInfo.personnelInfo.countryId)

  const cityId = usePersonalInfoHook().formik.values.cityId

  const city = cityData?.data.find((city) => city.id === cityId)?.name

  const location = city ?? 'No Data'

  const current = new Date()
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`

  useEffect(() => {
    setProgress(candidateUserInfo?.candidateStatus?.percentage)
  }, [candidateUserInfo?.candidateStatus?.percentage])

  const { firstName, lastName } = userData
  return (
    <StyledInfoContainer>
      <StyledInfoBody>
        <StyledInfoImg>
          <BackgroundLetterAvatars name={firstName.charAt(0) + lastName.charAt(0)} />
        </StyledInfoImg>
        <StyledInfoContainer>
          <StyledInfoWrapper>
            <Text style={{ textTransform: 'capitalize' }} type="Subtitle1">
              {firstName && lastName ? firstName + ' ' + lastName : ''}
            </Text>
            <Text type="Subtitle1">{candidateProfileData?.personnelInfo?.position}</Text>
            <Text display="block" type="Subtitle2">
              <HiLocationMarker /> {!countryId ? 'No Data' : location}
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
            <LinearProgressWithLabel value={progress} />
          </StyledInfoWrapper>
        </StyledInfoContainer>
      </StyledInfoBody>
      <StyledInfoWrapper>
        <StyledInfoWrapper3>
          <Text className="text" type="Subtitle2">
            LAST LOGIN:
          </Text>
          <Text className="text2" type="Subtitle2">
            {date}
          </Text>
        </StyledInfoWrapper3>
      </StyledInfoWrapper>
    </StyledInfoContainer>
  )
}
