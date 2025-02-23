import React from 'react'
import { StyledContainer, StyledForm } from './index.styles'
import Text from '../../../../atoms/Text'
import { TextField } from '@mui/material'

const RoleresponsibilityForm = ({ formik }) => {
  return (
    <StyledContainer>
      <Text display="block" type="Headline1">
        Role Responsibility
      </Text>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          className="detailsText"
          rows={17}
          multiline
          color="secondary"
          label="Role Responsibility*"
          type="text"
          variant="outlined"
          name="roleResponsibility"
          value={formik.values.roleResponsibility}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.roleResponsibility)}
          helperText={formik.touched.roleResponsibility && formik.errors.roleResponsibility}
        />
      </StyledForm>
    </StyledContainer>
  )
}

export default RoleresponsibilityForm
