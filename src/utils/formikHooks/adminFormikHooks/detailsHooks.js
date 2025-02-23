import { useFormik } from 'formik'
import * as yup from 'yup'
import { useGetLookUpData } from '../../../service/API/lookup'
import { useDetailsMutation } from '../../../service/API/job'
import { toast } from 'react-toastify'
import { useUser } from '../../../redux/hooks/userHook'

export const useDetailsHook = () => {
  const { adminInfo, addAdminInfo, jobId } = useUser()
  const detailsMutation = useDetailsMutation()

  const { data: toolData } = useGetLookUpData('TOOL')
  const { data: softSkillData } = useGetLookUpData('SOFT_SKILL')
  const { data: experienceYearsData } = useGetLookUpData('EXPERIENCE_YEARS')

  const initialValues = {
    requiredTechSkills: { searchText: '', addedItemsFormik: [], seeMore: false, selectValues: {} },
    optionalTechSkills: { searchText: '', addedItemsFormik: [], seeMore: false, selectValues: {} },
    softSkills: {
      searchText: '',
      addedItemsFormik: adminInfo?.payload?.softSkills ?? [],
      seeMore: false,
      selectValues: {},
    },
  }

  const validationSchema = yup.object({
    requiredTechSkills: yup.object({
      add: yup.string().min(2),
      addedItemsFormik: yup.array(),
      seeMore: yup.boolean(),
      selectValues: yup.object(),
    }),
    optionalTechSkills: yup.object({
      add: yup.string().min(2),
      addedItemsFormik: yup.array(),
      seeMore: yup.boolean(),
      selectValues: yup.object(),
    }),
    softSkills: yup.object({
      add: yup.string().min(2),
      addedItemsFormik: yup.array(),
      seeMore: yup.boolean(),
      selectValues: yup.object(),
    }),
  })

  const onSubmit = async (values) => {
    const detailPayload = {
      requiredTechSkills:
        values?.requiredTechSkills?.addedItemsFormik?.length !== 0
          ? values?.requiredTechSkills?.addedItemsFormik[0].map(({ position, experienceYears }) => ({
              experienceYearsId: experienceYears?.id,
              technicalId: position?.id,
            }))
          : [],
      optionalTechSkills:
        values?.optionalTechSkills?.addedItemsFormik?.length !== 0
          ? values?.optionalTechSkills?.addedItemsFormik[0]?.map((position) => position.position.id)
          : [],
      softSkills: values?.softSkills?.addedItemsFormik || [],
    }
    try {
      await detailsMutation.mutateAsync({ data: detailPayload, jobId })
      addAdminInfo({
        ...adminInfo,
        detailPayload,
      })
      toast.success('Your job details data has been submitted successfully.')
    } catch (error) {
      toast.error('Sorry, There was a problem and job details could not be added.')
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return {
    formik,
    onSubmit,
    suggestedList: toolData?.data,
    softSkillSuggestedList: softSkillData?.data,
    selectList: experienceYearsData?.data,
  }
}
