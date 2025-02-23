import React, { useEffect } from 'react'
import { Text } from '../../../atoms'
import { useNotifications } from '../../../redux/hooks/notificationsHook'
import NotificationTable from '../../../pages/CandidatesPages/NotificationsPage/NotificationTable'
import AddFilterButton from '../../AddFilterButton/AddFilterButton'
import MarkAsReadButton from './MarkAsReadButton'

const Notifications = () => {
  const { getNotifications } = useNotifications()

  useEffect(() => {
    getNotifications()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Text display="block" className="text-example" type="Headline1">
        Notifications
      </Text>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
        }}
      >
        <AddFilterButton />
        <MarkAsReadButton />
      </div>

      <NotificationTable/>
    </div>
  )
}

export default Notifications
