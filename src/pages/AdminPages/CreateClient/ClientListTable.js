import { useNavigate } from 'react-router-dom'
import { BsPlusCircle, BsThreeDotsVertical } from 'react-icons/bs'
import Material from '../../../components/MaterialTable'
import { useUser } from '../../../redux/hooks'
import { Text } from '../../../atoms'

export default function ClientListTable() {
  const navigate = useNavigate()
  const { addClientId } = useUser()
  const handleClick = (e) => {
    navigate(`/admin/jobs/create-jobs/create-a-job/basics`)
    addClientId(e.id)
  }
  const columns = [
    {
      title: 'COMPANY NAME',
      field: 'companyName',
      render: (rowData) => <span className='capitalize' >{rowData.companyName}</span>,
    },
    {
      title: 'CONTACT NAME',
      field: 'contactName',
      render: (rowData) => <span className='capitalize' >{rowData.contactName}</span>,
    },
    {
      title: 'LOCATION',
      field: 'location',
      render: (rowData) => <span className='capitalize' >{rowData.location}</span>,
    },
    {
      title: 'DATE',
      field: 'date',
      render: (row) => <span style={{ color: 'gray' }}>{`${row.date[2]}/${row.date[1]}/${row.date[0]}`}</span>,
    },
    {
      title: 'DETAILS',
      render: (row) => (
        <BsThreeDotsVertical
          onClick={() => navigate(`/admin/client-profile/${row.id}`)}
          style={{ color: 'gray', cursor: 'pointer' }}
        />
      ),
      sorting: false,
    },
    {
      title: 'JOBS',
      field: 'countOfJob',
      render: (row) => (
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(`/admin/client-jobs/${row.id}`)
          }}
        >
          {row.countOfJob}
        </span>
      ),
    },
    {
      title: 'CREATE A JOB',
      field: 'salaryAmount',
      render: (e) => <BsPlusCircle style={{ cursor: 'pointer' }} onClick={() => handleClick(e)} />,
      sorting: false,
    },
  ]

  return (
    <Material
      title={
        <Text display="block" type="Headline3">
          Client List
        </Text>
      }
      columns={columns}
      baseUrl="/admin/client"
      options={{
        search: true,
        searchFieldStyle: {
          disableUnderline: true,
          isFreeAction: true,
        },
      }}
    />
  )
}
