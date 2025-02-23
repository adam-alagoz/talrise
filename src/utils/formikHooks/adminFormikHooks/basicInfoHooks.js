import { useFormik } from 'formik'
import * as yup from 'yup'
import { useBasicInfo, useClientBasic, useClientBasicEdit } from '../../../service/API/job'
import { useUser } from '../../../redux/hooks'
import { toast } from 'react-toastify'
import { format } from 'date-fns'

export const useBasicInfoHook = () => {
  const { clientId, adminInfo, addAdminInfo, addJobId, userInfo } = useUser()
  const basicMutation = useBasicInfo()
  const clientBasicMutation = useClientBasic()
  const clientBasicEditMutation = useClientBasicEdit()

  const initialValues = {
    positionId: adminInfo?.basicInfo?.positionId ?? '',
    employmentTypeId: adminInfo?.basicInfo?.employmentTypeId ?? '',
    jobTitle: adminInfo?.basicInfo?.jobTitle ?? '',
    countryId: adminInfo?.basicInfo?.countryId ?? '',
    cityId: adminInfo?.basicInfo?.cityId ?? '',
    expectedClosureDate: adminInfo?.basicInfo?.expectedClosureDate ?? '',
    expectedStartDate: adminInfo?.basicInfo?.expectedStartDate ?? '',
    contractTypeId: adminInfo?.basicInfo?.contractTypeId ?? '',
    salaryAmountId: adminInfo?.basicInfo?.salaryAmountId ?? '',
    salaryPreferenceId: adminInfo?.basicInfo?.salaryPreferenceId ?? '',
    currencyId: adminInfo?.basicInfo?.currencyId ?? '',
    workPlaceIds: adminInfo?.basicInfo?.workPlaceIds ?? [],
    languageIds: adminInfo?.basicInfo?.languageIds ?? [],
  }

  const validationSchema = yup.object({
    positionId: yup.string().required('Please select position name.'),
    employmentTypeId: yup.string().required('Please select employment type.'),
    jobTitle: yup.string().required('Please select job title.'),
    cityId: yup.string().required('Please select city.'),
    countryId: yup.string().required('Please select country.'),
    expectedClosureDate: yup.date().required('Please enter application closing date.'),
    expectedStartDate: yup.date().required('Please enter expected start date.'),
    contractTypeId: yup.string().required('Please select contract type.'),
    salaryAmountId: yup.string().required('Please select salary range.'),
    salaryPreferenceId: yup.string().required('Please select salary range.'),
    currencyId: yup.string().required('Please select currency type.'),
    workPlaceIds: yup.array().required('Please select workplace.'),
    languageIds: yup.array().required('Please select language.'),
  })

  const formatDate = (date) => {
    return date instanceof Date ? format(date, 'yyyy-MM-dd') : date
  }

  const handleSubmit = async (values) => {
    const formattedValues = {
      ...values,
      expectedClosureDate: formatDate(values?.expectedClosureDate),
      expectedStartDate: formatDate(values?.expectedStartDate),
    }
    const payload = {
      positionId: values?.positionId, //bu job title
      employmentTypeId: values?.employmentTypeId,
      jobTitle: values?.jobTitle, //bu job title degil seniority
      locationId: values?.cityId,
      expectedClosureDate: formattedValues?.expectedClosureDate,
      expectedStartDate: formattedValues?.expectedStartDate,
      contractTypeId: values?.contractTypeId,
      salaryAmountId: values?.salaryAmountId,
      currencyId: values?.currencyId,
      workPlaceIds: values?.workPlaceIds,
      languageIds: values?.languageIds,
    }
    try {
      let responseData
      // Check if job ID exists
      if (!adminInfo?.basicInfo?.jobId) {
        // Check if the user is a SUPER_ADMIN
        responseData = userInfo.roles.includes('SUPER_ADMIN')
          ? await basicMutation.mutateAsync({ data: payload, clientId })
          : await clientBasicMutation.mutateAsync({ data: payload })
        addJobId(responseData.data.id)
      } else {
        // Use clientBasicEditMutation for updating an existing job
        responseData = await clientBasicEditMutation.mutateAsync({
          jobId: adminInfo.basicInfo.jobId,
          data: payload,
        })
      }
      const updatedAdminInfo = {
        ...adminInfo,
        basicInfo: {
          ...formattedValues, // Use formattedValues here instead of values
          jobId: responseData.data.id,
        },
      }
      addAdminInfo(updatedAdminInfo)
      toast.success('Your Basics info has been submitted successfully.')
    } catch (error) {
      toast.error('Please fill in the required fields')
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  return { formik, handleSubmit }
}
