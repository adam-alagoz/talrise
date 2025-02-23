import { FormWrapper, OtherFieldInput, StyledContainer } from './index.style'
import { Text } from '../../atoms'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import SingleItem from './SingleItem'
import { useState } from 'react'

function CheckBoxAndText({ data, headLine, subTitle, formik, interview }) {
  const [isOther, setIsOther] = useState(Boolean(formik.values.other.length))
  const handleChange = () => {
    setIsOther(!isOther)
    if (!isOther) {
      formik.setFieldValue('other', '')
    }
  }
  return (
    <StyledContainer>
      <FormWrapper>
        <Text type="Headline2" className="interview-headline">
          {headLine}
        </Text>
        <Text type="Subtitle1">{subTitle}</Text>
        <form className="interview-form" onSubmit={formik.handleSubmit}>
          <FormGroup>
            {data?.map((item) => (
              <SingleItem key={item.id} item={item} formik={formik} interview={interview} />
            ))}
          </FormGroup>
          <FormControlLabel
            control={<Checkbox color="secondary" onChange={handleChange} checked={isOther} />}
            label={<Text type="Body2">Other</Text>}
          />
          {isOther && (
            <OtherFieldInput
              className="other-input"
              type="text"
              name="other"
              placeholder="Type to add"
              value={formik.values.other}
              onChange={formik.handleChange}
            />
          )}
        </form>
      </FormWrapper>
    </StyledContainer>
  )
}

export default CheckBoxAndText
