import * as React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { StyledContainer, ColorContainer, Header } from './index.styles'
import moment from 'moment'
import { PickersDay } from '@mui/x-date-pickers'
import Text from '../../atoms/Text'

export default function Reminders() {
  // const interviewDates = getInterviewDates();
  // const closingJobDates = getClosingJobDates();
  // const eventDates = getEventDates();
  const closingJobDates = ['14-12-2022']
  const interviewDates = ['11-12-2022', '28-12-2022']
  const eventDates = ['28-12-2022', '10-12-2022']

  const allDates = [...closingJobDates, ...interviewDates, ...eventDates]
  const multiSelectedDates = allDates.filter(
    (date) => allDates.indexOf(date) !== allDates.lastIndexOf(date)
  )
  return (
    <StyledContainer>
      <Header>
        <Text display="block" className="text-example" type="Headline3">
          Reminders
        </Text>
      </Header>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          className="datepicker"
          orientation="landscape"
          onChange={(e) => console.log(e)}
          renderDay={(day) => {
            const currentDay = moment(day).format('DD-MM-YYYY')
            let selectedMuiClass = ''

            if (closingJobDates.includes(currentDay)) {
              selectedMuiClass = 'Mui-selected-closingJobDates'
            }
            if (interviewDates.includes(currentDay)) {
              selectedMuiClass = 'Mui-selected-interviewDates'
            }
            if (eventDates.includes(currentDay)) {
              selectedMuiClass = 'Mui-selected-eventDates'
            }
            if (multiSelectedDates.includes(currentDay)) {
              selectedMuiClass = 'Mui-selected-hover'
            }
            return (
              <PickersDay
                key={day}
                outsideCurrentMonth={false}
                onDaySelect={(e) => console.log(e)}
                className={selectedMuiClass}
                day={day}
              />
            )
          }}
          renderInput={(params) => console.log(params)}
        />
      </LocalizationProvider>
      <div className="reminders_footer">
        <div className="container">
          <ColorContainer backgroundColor="#18A0FB"></ColorContainer>
          <Text display="block" type="Body1">
            Interview
          </Text>
        </div>
        <div className="container">
          <ColorContainer backgroundColor="#FB1826"></ColorContainer>
          <Text display="block" type="Body1">
            Closing Job Date
          </Text>
        </div>
        <div className="container">
          <ColorContainer backgroundColor="#FBBB18"></ColorContainer>
          <Text display="block" type="Body1">
            Events/Referals Contract
          </Text>
        </div>
      </div>
    </StyledContainer>
  )
}
