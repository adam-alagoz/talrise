import { Link } from 'react-router-dom'
import { StyledContainer, ColorContainer, Header } from '../index.styles'
import Text from '../../../atoms/Text'

const notes = [
  {
    id: 1,
    message: 'New job posted by company X has been added to your saved jobs',
    date: '2022-11-10',
    time: '10:00 AM',
    isRead: false,
  },
]

export default function Notes() {
  return (
    <StyledContainer>
      <Header>
        <Text display="block" className="text-example" type="Headline3">
          Notes
        </Text>
      </Header>
      <div className="listContainer">
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <div className="listItem">
                <ColorContainer backgroundColor="#d1d1d1"></ColorContainer>
                <div className="textContainer">
                  <p className="message">{note.message}</p>

                  <p className="date">
                    {note.date} {note.time}
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
