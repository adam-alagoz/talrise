import React from 'react'
import { StyledContainer } from './index.styles'
import Material from '../../../components/MaterialTable'
import { BsFillEyeFill, BsThreeDotsVertical } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const NotificationTable = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: 'NOTIFICATION',
      field: 'notification',
    },
    {
      title: 'DATE',
      field: 'date',
    },
    {
      title: 'DETAILS',
      render: (row) => (
        <BsThreeDotsVertical
          onClick={() => navigate(`/candidate/notification/${row.id}`)}
          style={{ color: 'gray', cursor: 'pointer' }}
        />
      ),
    },
  ]
  
  return (
    <StyledContainer>
      <Material
        title="Notifications"
        columns={columns}
        baseUrl="/candidate/notification"
        actions={[
          {
            icon: () => <BsFillEyeFill style={{ color: 'gray' }} />,
            tooltip: 'Mark as read',
            onClick: (event, rowData) => alert(`Notification ${rowData.name} marked as read `),
          },
        ]}
        options={{
          search: true,
          actionsColumnIndex: -1,
        }}
      />
    </StyledContainer>
  )
}

export default NotificationTable
