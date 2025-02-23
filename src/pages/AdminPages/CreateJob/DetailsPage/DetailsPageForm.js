import React from 'react'
import { StyledBody, StyledInsideBody } from './index.styles'
import DetailsPageRequiredSkills from './components/DetailsPageRequiredSkills'
import DetailsPageOptional from './components/DetailsPageOptional'
import DetailsPageSoftSkills from './components/DetailsPageSoftSkills'
import { Text } from '../../../../atoms'

function DetailsPage({ formik, selectList, suggestedList, softSkillSuggestedList }) {
  return (
    <StyledBody>
      <StyledInsideBody>
        <Text display="block" type="Headline1">
          Details
        </Text>
        <DetailsPageRequiredSkills formik={formik} selectList={selectList} suggestedList={suggestedList} />
        <DetailsPageOptional formik={formik} selectList={selectList} suggestedList={suggestedList} />
        <DetailsPageSoftSkills formik={formik} selectList={selectList} softSkillSuggestedList={softSkillSuggestedList} />
      </StyledInsideBody>
    </StyledBody>
  )
}

export default DetailsPage
