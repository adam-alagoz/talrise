import { Link } from 'react-router-dom'
import { StyledContainer, ColorContainer, Header } from '../index.styles'
import Text from '../../../atoms/Text'

let notifications = [
  {
    id: 1,
    message: 'New job posted by company X',
    date: '2022-12-10',
    time: '10:00 AM',
    isRead: false,
  },
  {
    id: 2,
    message: 'New job posted by company Y',
    date: '2022-12-10',
    time: '11:00 AM',
    isRead: true,
  },
  {
    id: 3,
    message: 'New job posted by company Z',
    date: '2022-12-10',
    time: '12:00 PM',
    isRead: false,
  },
]

export default function Activities() {
  return (
    <StyledContainer>
      <Header>
        <Text display="block" className="text-example" type="Headline3">
          Activities
        </Text>
      </Header>
      <div className="listContainer">
        {notifications.map((notification) => {
          return (
            <div key={notification.id}>
              <div className="listItem">
                <ColorContainer backgroundColor="#d1d1d1"></ColorContainer>
                <div className="textContainer">
                  <p className="message">{notification.message}</p>
                  <p className="date">
                    {notification.date} {notification.time}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        <Link to="/notifications">View all</Link>
      </div>
    </StyledContainer>
  )
}
