import { useEffect, useState } from 'react'
import { SuggestedElements, Text } from '../../../atoms'
import {
  StyledBody,
  StyledButton,
  StyledInsideBody,
  StyledButtonGroup,
  StyledDivider,
} from './index.styles'

const SkillSet = ({ formik, selectList, suggestedList, positionData }) => {
  const [suggestedPage, setSuggestedPage] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const [tabIndex, setTabIndex] = useState(0)

  const handleOnClick = (name) => {
    suggestedList.skills.forEach((skill) => {
      if (skill.position.name.toLowerCase() === name.toLowerCase()) {
        setFilteredList([...skill.techs])
        setTabIndex(skill.position.id)
      }
    })

    positionData.forEach((item) => {
      if (item.position.name === name) {
        setSuggestedPage(name)
      }
    })
  }
  useEffect(() => {
    if (suggestedList?.length !== 0) {
      suggestedList?.skills?.forEach((skill, index) => {
        if (index === 0) {
          setFilteredList([...skill.techs])
          setSuggestedPage(skill.position.name)
          setTabIndex(skill.position.id)
        }
      })
    }
  }, [suggestedList])
  return (
    <StyledBody>
      <StyledInsideBody>
        <Text type="Headline2" className="headline">
          Skill Set*
        </Text>
        <Text type="Subtitle1" className="text-basic">
          Please choose the top skills and technologies you are experienced in.
        </Text>
        <StyledButtonGroup>
          {positionData?.map((item) => (
            <StyledButton
              className="button"
              onClick={() => handleOnClick(item.position.name)}
              key={item.position.id}
              selected={suggestedPage === item.position.name}
            >
              {item.position.name}
            </StyledButton>
          ))}
        </StyledButtonGroup>
        <StyledDivider className="divider" />
        <SuggestedElements
          tabIndex={tabIndex}
          formik={formik}
          className="suggested"
          selectList={selectList}
          suggestedList={filteredList}
          selectLabel="Experience Years"
          inputPlaceHolder="Type to search"
          overline="Suggested Skills"
          role="candidate"
          headline={false}
          subtitle={false}
        />
      </StyledInsideBody>
    </StyledBody>
  )
}

export default SkillSet
