import React from 'react'
import {
  StyledInfoBody,
  StyledInfoContainer,
  StyledInfoImg,
  StyledInfoWrapper,
  StyledInfoWrapper3,
} from '../../GeneralDashboardPages/ProfilePage/index.styles'
import BackgroundLetterAvatars from '../../../components/GeneralComponents/Header/HeaderAvatar'
import { Text } from '../../../atoms'
import { HiLocationMarker } from 'react-icons/hi'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import LinearProgressWithLabel from '../../GeneralDashboardPages/ProfilePage/Progress'
import { useState } from 'react'
import { useUser } from '../../../redux/hooks'
import { useEffect } from 'react'
import moment from 'moment'

const CompanyInfo = () => {
  const { clientInfo } = useUser()
  const userData = clientInfo
  const [progress] = useState(0)
  useEffect(() => {
    if (userData) {
    }
  }, [userData])
  const date = moment().add(1, 'month').format('DD-MM-YYYY hh:mm')
  return (
    <StyledInfoContainer>
      <StyledInfoBody>
        <StyledInfoImg>
          <BackgroundLetterAvatars name={'m'} />
        </StyledInfoImg>
        <StyledInfoContainer>
          <StyledInfoWrapper>
            <Text className='capitalize' type="Subtitle1">
              Client.name
            </Text>
            <Text type="Subtitle1">client.branch</Text>
            <Text display="block" type="Subtitle2">
              <HiLocationMarker /> client.location
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

export default CompanyInfo
