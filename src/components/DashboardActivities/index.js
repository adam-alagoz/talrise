import React, { useState } from 'react'
import Text from '../../atoms/Text'
import { StyledContainer, Header, ContentWrap, Content, Ball, View } from './index.styles'
import { v4 as generateId } from 'uuid'

function DashboardActivities({ title, messages }) {
  const [viewAll, setViewAll] = useState(false)
  const clickHandle = () => {
    setViewAll(!viewAll)
  }
  const lastMessages = viewAll ? messages : messages.slice(0, 4)
  return (
    <StyledContainer>
      <Header>
        <Text display="block" className="text-example" type="Headline3">
          {title}
        </Text>
      </Header>
      <ContentWrap>
        {lastMessages.map((message) => {
          return (
            <Content key={generateId()}>
              <Ball />
              <p>
                {message?.message} <br /> <span className="time">{message?.messageTime}</span>
              </p>
            </Content>
          )
        })}
      </ContentWrap>
      <View onClick={clickHandle}>{!viewAll ? 'View All' : 'View Less'}</View>
    </StyledContainer>
  )
}

export default DashboardActivities
