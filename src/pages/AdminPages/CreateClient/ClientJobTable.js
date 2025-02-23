import { useNavigate } from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import Material from '../../../components/MaterialTable'

export default function ClientJobTable() {
  const navigate = useNavigate()
  const { clientId } = useParams()
  const handleChange = () => {}
  const status = ['IN_PROGRESS', 'PROPOSAL', 'CLOSED']
  const columns = [
    {
      title: 'COMPANY NAME',
      field: 'companyName',
    },
    {
      title: 'JOB TITLE',
      field: 'jobTitle',
    },
    {
      title: 'PUBLISHED DATE',
      field: 'publishDate',
    },
    {
      title: 'CLOSING DATE',
      field: 'expectedClosureDate',
    },
    {
      title: 'EMPLOYMENT TYPE',
      field: 'employeeType',
    },
    {
      title: 'SALARY',
      field: 'salary',
    },
    {
      title: 'STATUS',
      field: 'status',
      render: (row) => (
        <select onChange={(e) => handleChange(e)} style={{ border: 'none' }} name="jobStatus" id="jobStatus">
          {status.map((item) => {
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
      title: 'DETAILS',
      render: (row) => <BsThreeDotsVertical onClick={() => navigate(`/`)} style={{ color: 'gray', cursor: 'pointer' }} />,
      sorting: false,
    },
  ]

  return <Material title="Browse clients" columns={columns} baseUrl={`/job/client/${clientId}`} />
}
