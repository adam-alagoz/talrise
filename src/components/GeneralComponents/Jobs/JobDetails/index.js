import { StyledContainer, StyledImage, InnerContainer, AtomicButton, Container} from './index.styles'
import Text from '../../../../atoms/Text'
import workType from '../../../../assets/svg/workType.svg'
import date from '../../../../assets/svg/date.svg'
import language from '../../../../assets/svg/language.svg'
import salary from '../../../../assets/svg/salary.svg'
import moment from 'moment'
import { useGetJobDetails } from '../../../../service/API/job'
import { useNavigate } from 'react-router-dom'
import {useUser} from '../../../../redux/hooks'

const JobDetails = ({ jobId }) => {
  const {userInfo}= useUser()  
  const { data } = useGetJobDetails(jobId)
  const expectedStartDate = data?.data?.expectedStartDate;
  const targetDate = moment(expectedStartDate, 'YYYY-MM-DD')
  const timeAgo = moment.duration(moment().diff(targetDate));
  const formattedTimeAgo = `This job was ${timeAgo.months()} months ${timeAgo.days()} days ago created`;
  const companyName = data?.data?.companyName?.toUpperCase() || '';
  const cityName = data?.data?.city?.name || '';
  const workPlaceName = data?.data?.workPlace?.name || ''; 
  const navigate = useNavigate()

  return (
    <StyledContainer>
       <Container>        
        <Text type="Headline3">{data?.data?.jobTitle}</Text>
         {userInfo?.roles[1]==='CLIENT' && (
           <AtomicButton className="apply"
           variant="contained"
           type="submit"
           handleClick= {()=>
            navigate('/client/shortlist')
           }
           label="SEE SHORTLIST"
           size="large"
         />)}         
      </Container>      
      <Text type="Subtitle1" style={{ marginBottom: '1.2rem' }}>
        {`${companyName} ${'-'} ${cityName} (${workPlaceName}) ${'-'} ${formattedTimeAgo}`}
      </Text>
      <span>
        <StyledImage src={workType} />
        <Text type="Body1" style={{ marginLeft: '1.2rem' }}>
          Work Type: {data?.data?.employmentType?.name}
        </Text>
      </span>
      <span>
        <StyledImage src={date} />
        <Text type="Body1" style={{ marginLeft: '1.2rem' }}>
          Expected Start Date:{' '}
          {(data?.data?.expectedStartDate[2] < 10 ? '0' : '') +
            data?.data?.expectedStartDate[2] +
            '/' +
            (data?.data?.expectedStartDate[1] < 10 ? '0' : '') +
            data?.data?.expectedStartDate[1] +
            '/' +
            data?.data?.expectedStartDate[0]}
        </Text>
      </span>
      <span>
        <StyledImage src={language} />
        <Text type="Body1" style={{ marginLeft: '1.2rem' }}>
          {`Language:
           ${data?.data?.languages
             .sort((a, b) => (a.id > b.id ? 1 : -1))
             .map((lang) => lang.name)
             .join(' - ')}`}
        </Text>
      </span>
      <span>
        <StyledImage src={salary} />
        <Text type="Body1" style={{ marginLeft: '1.2rem' }}>
          Salary: {data?.data?.currency.name && '£'} {data?.data?.salary?.name}
        </Text>
      </span>
      <InnerContainer>
        <Text type="Headline3">Role Responsibility:</Text>
        <p>
          <Text type="Subtitle1">{data?.data?.roleResponsibility}</Text>
        </p>
        <Text type="Headline3" display="block">
          What You Need to Have:</Text>
          <ul>
            {data?.data?.requiredTechSkills?.map((element) => {
              return <li key={element.technical.id}>{element.technical.name}</li>
            })}
          </ul>
        <Text type="Headline3" display="block">
          What Makes You Standout:</Text>
          <ul>
            {data?.data?.softSkills?.map((element) => {
              return <li key={element.id}>{element.name}</li>
            })}
          </ul>
        <Text type="Headline3" display="block">
          Employee Benefits: </Text>
          <ul>
            {data?.data?.benefits?.map((element) => {
              return <li key={element.id}>{element.name}</li>
            })}
          </ul>
          {data?.data.benefitOther && (<ul><li>{data?.data.benefitOther}</li></ul> )}          
        <Text type="Headline3" display="block">
          Employee Interview Process:</Text>
          <ul>
            {data?.data?.interviewProcesses?.map((element) => {
              return <li key={element.id}>{element.name}</li>
            })}
          </ul>
          {data?.data.interviewOther && (<ul><li>{data?.data.interviewOther}</li></ul> )}
      </InnerContainer>
    </StyledContainer>
  )
}
export default JobDetails
