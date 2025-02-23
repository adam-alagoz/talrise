import { useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getNotifications } from '../reducers/notificationSlice'

export function useNotifications() {
  const dispatch = useDispatch()

  const { notifications } = useSelector(({ notifications }) => {
    return {
      notifications,
    }
  }, shallowEqual)

  const boundGetNotifications = useCallback(
    (...args) => dispatch(getNotifications(...args)),
    [dispatch]
  )

  return {
    notifications: notifications.notifications,
    getNotifications: boundGetNotifications,
  }
}
