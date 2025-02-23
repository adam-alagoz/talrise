import React from 'react'
import { StyledContainer, AtomicButton, StyledBody, StyledForm, ButtonContainer } from './index.styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { MdOutlineAdd } from 'react-icons/md'
import { TextField, Text } from '../../atoms'
import SelectItem from '../../components/SelectItem'
import { useCreateLookUp } from '../../service/API/lookup'
import { useNavigate } from 'react-router-dom'

const types = [
  { id: 1, name: 'APPLICATION_STATUS' },
  { id: 2, name: 'BENEFIT' },
  { id: 3, name: 'CERTIFICATE' },
  { id: 4, name: 'CLIENT' },
  { id: 5, name: 'COMPANY_SIZE' },
  { id: 6, name: 'CONTRACT_TYPE' },
  { id: 7, name: 'CURRENCY' },
  { id: 8, name: 'DEGREE' },
  { id: 9, name: 'DEPARTMENT' },
  { id: 10, name: 'EMPLOYMENT_TYPE' },
  { id: 11, name: 'EXPERIENCE_YEARS' },
  { id: 12, name: 'INDUSTRY' },
  { id: 13, name: 'INTERVIEW_PROCESS' },
  { id: 14, name: 'LANGUAGE' },
  { id: 15, name: 'LANGUAGE_LEVEL' },
  { id: 16, name: 'NOTICE_PERIOD' },
  { id: 17, name: 'POSITION' },
  { id: 18, name: 'REJECT_REASON' },
  { id: 19, name: 'SALARY_AMOUNT' },
  { id: 20, name: ' SALARY_DURATION_TYPE' },
  { id: 21, name: ' SALARY_PREFERENCE' },
  { id: 22, name: ' SENIORITY_LEVEL' },
  { id: 23, name: ' SOFT_SKILL' },
  { id: 24, name: ' TOOL' },
  { id: 25, name: ' VISA_STATUS' },
  { id: 26, name: ' WORK_PLACE' },
]

const UpdateLookupPage = () => {
  const createLookUpMutation = useCreateLookUp()
  const navigate = useNavigate()

  const initialValues = {
    parentId: '',
    type: '',
    name: '',
  }

  const onSubmit = (values, { resetForm }) => {
    const payload = {
      name: values.name.trim(),
      parentId: values.parentId.trim().length ? values.parentId : 0,
      type: types[values.type - 1].name,
    }
    createLookUpMutation.mutate(payload, {
      onSuccess: (data) => {
        console.log('Succesfull')
        toast.success('Saved look up successfully')
        resetForm()
      },

      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    })
  }

  const validationSchema = yup.object({
    parentId: yup.number().typeError('Please enter a valid parent id'),
    name: yup.string().required('Please enter a name'),
    type: yup.string().required('Please choose a type'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <StyledBody>
      <Text type="Headline2" className="headline">
        Look - Up Files
      </Text>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledContainer>
          <TextField
            id="lookUpParentId"
            name="parentId"
            className="whiteInput"
            type="text"
            label="Parent ID"
            value={formik.values.parentId}
            onChange={formik.handleChange}
            error={formik.touched.parentId && Boolean(formik.errors.parentId)}
            helperText={formik.touched.parentId && formik.errors.parentId}
          />
        </StyledContainer>
        <StyledContainer>
          <SelectItem
            id="lookUpType"
            name="type"
            type="text"
            className="whiteInput"
            label="Type*"
            value={formik.values.type}
            handleChange={formik.handleChange}
            menuItems={types}
            variant="outlined"
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          />
        </StyledContainer>
        <StyledContainer>
          <TextField
            id="lookUpName"
            name="name"
            className="whiteInput"
            type="text"
            label="Name*"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
          />
        </StyledContainer>
        <ButtonContainer>
          <AtomicButton variant="contained" icon={<MdOutlineAdd />} type="submit" label="SAVE LOOK UP FILES" />
          <AtomicButton
            variant="contained"
            handleClick={() => {
              navigate('/settings')
            }}
            label="BACK"
          />
        </ButtonContainer>
      </StyledForm>
    </StyledBody>
  )
}

export default UpdateLookupPage
