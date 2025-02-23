import React from 'react'
import { StyledContainer } from './index.styles.js'
import Material from '../../MaterialTable/index.js'
import Text from '../../../atoms/Text/index.js'
import { MdDeleteOutline } from 'react-icons/md'
import { useEditLookUp, useDeleteLookUp } from '../../../service/API/lookup.js'
import { toast } from 'react-toastify'

const LookUpTable = () => {
  const editLookUpMutation = useEditLookUp()
  const deleteLookUpMutation = useDeleteLookUp()
  const columns = [
    {
      title: 'ID',
      field: 'id',
      editable: 'never',
      render: (row) => <>{row.id}</>,
    },
    {
      title: 'TYPE',
      field: 'type',
      lookup: {
        0: 'BENEFIT',
        1: 'CERTIFICATE',
        2: 'COMPANY_SIZE',
        3: 'CONTRACT_TYPE',
        4: 'CURRENCY',
        5: 'EMPLOYMENT_TYPE',
        6: 'EXPERIENCE_YEARS',
        7: 'DEGREE',
        8: 'DEPARTMENT',
        9: 'INDUSTRY',
        10: 'INTERVIEW_PROCESS',
        11: 'LANGUAGE',
        12: 'LANGUAGE_LEVEL',
        13: 'NOTICE_PERIOD',
        14: 'POSITION',
        15: 'TOOL',
        16: 'SALARY_DURATION_TYPE',
        17: 'SALARY_PREFERENCE',
        18: 'SALARY_AMOUNT',
        19: 'SOFT_SKILL',
        20: 'VISA_STATUS',
        21: 'WORK_PLACE',
        22: 'REJECT_REASON',
        23: 'APPLICATION_STATUS',
        24: 'CLIENT',
        26: 'SENIORITY_LEVEL',
      },
      render: (row) => <>{row.type}</>,
    },
    {
      title: 'NAME',
      field: 'name',
      render: (row) => <>{row.name}</>,
    },
    {
      title: 'PARENT ID',
      field: 'parentId',
      render: (row) => <>{row.parentId}</>,
    },
  ]

  const handleEdit = async (newData) => {
    try {
      await editLookUpMutation.mutate(
        { ...newData, parentId: newData.parentId || 0 },
        {
          onSuccess: () => {
            toast.success('Look up edited successfully')
          },
          onError: (error) => {
            toast.error('There was an error editing this look up.Please check the data and try again.')
          },
        }
      )
    } catch (error) {
      console.error('Error editing data:', error)
    }
  }

  const handleDelete = async (rowData) => {
    try {
      await deleteLookUpMutation.mutate(rowData.id, {
        onSuccess: () => {
          toast.success('Look up deleted successfully')
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        },
        onError: (error) => {
          toast.error('This look up can not be deleted')
        },
      })
    } catch (error) {
      console.error('Error deleting data:', error)
    }
  }

  return (
    <StyledContainer>
      <Material
        title={
          <Text display="block" type="Headline3">
            Browse LookUp list
          </Text>
        }
        columns={columns}
        editable={{
          isEditable: (rowData) => rowData,
          onRowUpdateCancelled: (rowData) => console.log('Row editing cancelled'),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                handleEdit(newData)
                resolve()
              }, 1000)
            }),
        }}
        baseUrl="/lookUp"
        actions={[
          {
            icon: () => <MdDeleteOutline color="gray" />,
            tooltip: 'Delete',
            onClick: (event, rowData) => handleDelete(rowData),
          },
        ]}
        options={{
          search: true,
          searchFieldStyle: {
            disableUnderline: true,
            isFreeAction: true,
          },
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: ' DELETE | EDIT ',
          },
        }}
      />
    </StyledContainer>
  )
}

export default LookUpTable
