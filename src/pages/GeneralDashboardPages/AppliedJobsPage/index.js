import Material from '../../../components/MaterialTable'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useNavigate } from 'react-router-dom'
import Text from '../../../atoms/Text'

function AppliedJobs() {
  const navigate = useNavigate()

  return (
    <div>
      <Text>Applied Jobs</Text>
      <Material
        style={{ padding: '10px 40px' }}
        baseUrl="/candidate/job/appliedJobs"
        columns={[
          {
            title: 'POSITION',
            field: 'position',
          },
          {
            title: 'STATUS',
            field: 'applied',
          },
          {
            title: 'COMPANY',
            field: 'companyName',
          },
          {
            title: 'DATE',
            field: 'appliedDate',
          },
        ]}
        localization={{
          header: {
            actions: 'DETAILS',
          },
        }}
        options={{
          actionsColumnIndex: 4,
          search: false,
          showTitle: false,
        }}
        actions={[
          {
            icon: () => <MoreVertIcon style={{ color: 'gray' }} />,
            tooltip: 'jobDetails',
            onClick: (_, rowData) => {
              navigate(`/candidate/job/${rowData.jobId}`)
            },
          },
        ]}
      />
    </div>
  )
}

export default AppliedJobs
