import { StyledContainer } from './index.styles.js'
import Material from '../../MaterialTable/index.js'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useUpdateJobStatus } from '../../../service/apis.js'
import { useNavigate } from 'react-router-dom'
import { Text } from '../../../atoms'
import { statuses } from '../../../utils/JobList.js'

const JobsListTable = () => {
  const changeStatusMutation = useUpdateJobStatus()
  
  const updateStatus = async (job) => {
    try {
      await changeStatusMutation.mutate(job)
    } catch (error) {
      console.error('Error updating status:', error)
    }
    return job
  }

  const handleChange = async (e,row) => {
    const selectedStatus = e.target.value
    await updateStatus({ ...row, status: selectedStatus })
  }

  const navigate = useNavigate()

  const columns = [
    {
      title: 'COMPANY NAME',
      field: 'companyName',
      render: (rowData) => <span className="capitalize">{rowData.companyName}</span>,
    },
    {
      title: 'JOB TITLE',
      field: 'jobTitle',
      render: (rowData) => <span className="capitalize">{rowData.jobTitle}</span>,
    },
    {
      title: 'PUBLISHED DATE',
      field: 'publishDate',
      render: ({ publishDate }) =>
        publishDate
          ? publishDate
              .map((item) => (item < 10 ? `0${item}` : item))
              .reverse()
              .join('/')
          : '',
    },
    {
      title: 'CLOSING DATE',
      field: 'expectedClosureDate',
      render: ({ expectedClosureDate }) =>
        expectedClosureDate
          ? expectedClosureDate
              .map((item) => (item < 10 ? `0${item}` : item))
              .reverse()
              .join('/')
          : '',
    },
    {
      title: 'EMPLOYMENT TYPE',
      field: 'employeeType',
    },
    {
      title: 'SALARY',
      field: 'salary',

      render: ({ salary }) =>
        salary
          .split('-')
          .map((item) => '£' + item)
          .join('-'),
    },
    {
      title: 'STATUS',
      field: 'jobInterviewStatus',
      render: (row) => (
        <select onChange={(e) => handleChange(e, row)} style={{ border: 'none' }} name="jobStatus" id="jobStatus">
          {statuses.map((item) => {
            if (row.status === item) {
              return (
                <option key={item} selected="selected" value={item}>
                  {item}
                </option>
              )
            } else
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              )
          })}
        </select>
      ),
    },
    {
      title: 'JOB DETAILS',
      field: 'jobDetails',
      render: (row) => (
        <MoreVertIcon
          style={{ color: 'gray', cursor: 'pointer' }}
          onClick={() => {
            navigate(`/job/${row.id}`)
          }}
        />
      ),
    },
  ]

  return (
    <StyledContainer>
      <Material
        title={
          <>
            <Text display="block" type="Headline3">
              Browse Created Jobs
            </Text>
          </>
        }
        columns={columns}
        baseUrl="/job"
        options={{
          search: true,
          searchFieldStyle: {
            disableUnderline: true,
            isFreeAction: true,
          },
        }}
      />
    </StyledContainer>
  )
}
export default JobsListTable
