import { StyledKanbanBody, StyledKanbanBox, StyledKanbanHeadline, StyledKanbanCard, StyledBreak } from './index.styles'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useNavigate } from 'react-router-dom'

const ShortlistKanbanTable = () => {
  const navigate = useNavigate()
  const kanbanData =[
    {
      id: 1,
      companyName: "ABC Inc.",
      jobTitle: "Frontend Developer",
      status: "IN_PROGRESS",
      expectedClosureDate: [2023, 11, 15],
      employeeType: "Full-time",
      salary: "50000-60000",
    },
    {
      id: 2,
      companyName: "XYZ Ltd.",
      jobTitle: "Backend Developer",
      status: "CLOSED",
      expectedClosureDate: [2023, 11, 10],
      employeeType: "Contract",
      salary: "60000-70000",
    },
    {
      id: 3,
      companyName: "123 Co.",
      jobTitle: "UI/UX Designer",
      status: "IN_PROGRESS",
      expectedClosureDate: [2023, 11, 20],
      employeeType: "Part-time",
      salary: "40000-45000",
    },
    {
      id: 4,
      companyName: "456 Corp.",
      jobTitle: "Product Manager",
      status: "WITHDRAW",
      expectedClosureDate: [2023, 11, 5],
      employeeType: "Full-time",
      salary: "70000-80000",
    },
  ]

  return (
      <StyledKanbanBody>
        <StyledKanbanBox>
          <StyledKanbanHeadline>SHORTLISTED {'>'} </StyledKanbanHeadline>
          {kanbanData
            .filter((item) => item.status.includes('IN_PROGRESS'))
            .map((item) => (
              <StyledKanbanCard key={item.id}>
                {item.companyName}
                <MoreVertIcon
                  style={{ color: 'gray', cursor: 'pointer' }}
                  onClick={() => {
                    navigate('/admin/jobs/create-jobs/create-a-job/job-details')
                  }}
                />
                <StyledBreak />
                {item.jobTitle}
                <StyledBreak /> <StyledBreak />
                Closing Date:
                {item.expectedClosureDate
                  .map((item) => (item < 10 ? `0${item}` : item))
                  .reverse()
                  .join('/')}
                <StyledBreak />
                Employment Type :{item.employeeType}
                <StyledBreak />
                Salary:
                {item.salary
                  .split('-')
                  .map((item) => '£' + item)
                  .join('-')}
                <StyledBreak />
              </StyledKanbanCard>
            ))}
        </StyledKanbanBox>
        <StyledKanbanBox>
          <StyledKanbanHeadline>INTERVIEW {'>'}</StyledKanbanHeadline>
          {kanbanData
            .filter((item) => item.status.includes('CLOSED'))
            .map((item) => (
              <StyledKanbanCard key={item.id}>
                {item.companyName}
                <MoreVertIcon
                  style={{ color: 'gray', cursor: 'pointer' }}
                  onClick={() => {
                    navigate('/admin/jobs/create-jobs/create-a-job/job-details')
                  }}
                />
                <StyledBreak />
                {item.jobTitle}
                <StyledBreak /> <StyledBreak />
                Closing Date:
                {item.expectedClosureDate
                  .map((item) => (item < 10 ? `0${item}` : item))
                  .reverse()
                  .join('/')}
                <StyledBreak />
                Employment Type :{item.employeeType}
                <StyledBreak />
                Salary:
                {item.salary
                  .split('-')
                  .map((item) => '£' + item)
                  .join('-')}
                <StyledBreak />
              </StyledKanbanCard>
            ))}
        </StyledKanbanBox>
        <StyledKanbanBox>
          <StyledKanbanHeadline>OFFER {'>'}</StyledKanbanHeadline>
          {kanbanData
            .filter((item) => item.status.includes('IN_PROGRESS'))
            .map((item) => (
              <StyledKanbanCard key={item.id}>
                {item.companyName}
                <MoreVertIcon
                  style={{ color: 'gray', cursor: 'pointer' }}
                  onClick={() => {
                    navigate('/admin/jobs/create-jobs/create-a-job/job-details')
                  }}
                />
                <StyledBreak />
                {item.jobTitle}
                <StyledBreak />
                <StyledBreak />
                Closing Date:
                {item.expectedClosureDate
                  .map((item) => (item < 10 ? `0${item}` : item))
                  .reverse()
                  .join('/')}
                <StyledBreak />
                Employment Type :{item.employeeType}
                <StyledBreak />
                Salary:
                {item.salary
                  .split('-')
                  .map((item) => '£' + item)
                  .join('-')}
                <StyledBreak />
              </StyledKanbanCard>
            ))}
        </StyledKanbanBox>
        <StyledKanbanBox>
          <StyledKanbanHeadline>PLACEMENT {'>'}</StyledKanbanHeadline>
          {kanbanData
            .filter((item) => item.status.includes('IN_PROGRESS'))
            .map((item) => (
              <StyledKanbanCard key={item.id}>
                {item.companyName}
                <MoreVertIcon
                  style={{ color: 'gray', cursor: 'pointer' }}
                  onClick={() => {
                    navigate('/admin/jobs/create-jobs/create-a-job/job-details')
                  }}
                />
                <StyledBreak />
                {item.jobTitle}
                <StyledBreak />
                <StyledBreak />
                Closing Date:
                {item.expectedClosureDate
                  .map((item) => (item < 10 ? `0${item}` : item))
                  .reverse()
                  .join('/')}
                <StyledBreak />
                Employment Type :{item.employeeType}
                <StyledBreak />
                Salary:
                {item.salary
                  .split('-')
                  .map((item) => '£' + item)
                  .join('-')}
                <StyledBreak />
              </StyledKanbanCard>
            ))}
        </StyledKanbanBox>
        <StyledKanbanBox>
          <StyledKanbanHeadline>REJECT {'>'}</StyledKanbanHeadline>
          {kanbanData
            .filter((item) => item.status.includes('CLOSED'))
            .map((item) => (
              <StyledKanbanCard key={item.id}>
                {item.companyName}
                <MoreVertIcon
                  style={{ color: 'gray', cursor: 'pointer' }}
                  onClick={() => {
                    navigate('/admin/jobs/create-jobs/create-a-job/job-details')
                  }}
                />
                <StyledBreak />
                {item.jobTitle}
                <StyledBreak />
                <StyledBreak />
                Closing Date:
                {item.expectedClosureDate
                  .map((item) => (item < 10 ? `0${item}` : item))
                  .reverse()
                  .join('/')}
                <StyledBreak />
                Employment Type :{item.employeeType}
                <StyledBreak />
                Salary:
                {item.salary
                  .split('-')
                  .map((item) => '£' + item)
                  .join('-')}
                <StyledBreak />
              </StyledKanbanCard>
            ))}
        </StyledKanbanBox>
      </StyledKanbanBody>
  )
}

export default ShortlistKanbanTable
