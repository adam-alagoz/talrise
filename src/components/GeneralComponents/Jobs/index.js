import { StyledContainer } from './index.styles.js'
import Material from '../../MaterialTable/index.js'
import { BsFillEyeFill, BsPlusCircle, BsCheckCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useApplyJob, useWithdrawJob } from '../../../service/API/candidate.js'
import { toast } from 'react-toastify'
import { useState } from 'react'

const columns = [
  {
    title: 'COMPANY NAME',
    field: 'companyName',
  },
  {
    title: 'POSITION',
    field: 'jobTitle',
  },
  {
    title: 'PUBLISHED DATE',
    field: 'publishDate',
  },
  {
    title: 'CLOSING DATE',
    field: 'closingDate',
  },
  {
    title: 'EMPLOYMENT TYPE',
    field: 'employeeType',
  },
  {
    title: 'SALARY',

    render: (rowData) => rowData.currency === 'GBP' && '£' + rowData.salaryAmount,
  },
]

const JobTable = () => {
  const navigate = useNavigate()
  const useWithdrawJobMutation = useWithdrawJob()
  const useApplyJobMutation = useApplyJob()
  const [applied, setApplied] = useState(false)

  const handleApplyJob = (type, jobId, resolve) => {
    if (type === 'apply') {
      useApplyJobMutation.mutate(jobId, {
        onSuccess: () => {
          setApplied(!applied)
          toast.success('You applied the job successfully.')
          window.location.reload()
        },
        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    } else {
      useWithdrawJobMutation.mutate(jobId, {
        onSuccess: () => {
          setApplied(!applied)
          toast.success('You withdraw the job application successfully')
          window.location.reload()
        },
        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    }
  }

  return (
    <StyledContainer>
      <Material
        title="Browse new jobs with Talrise"
        columns={columns}
        baseUrl="/candidate/job"
        actions={[
          {
            icon: () => <BsFillEyeFill style={{ color: 'gray' }} />,
            tooltip: 'View',
            onClick: (e, rowData) => {
              navigate(`/candidate/job/${rowData.jobId}`)
            },
          },
          (rowData) => ({
            icon: () => (!rowData.applied ? <BsPlusCircle color="gray" /> : <BsCheckCircle color="green" />),
            tooltip: !rowData.applied ? 'Apply' : 'Withdraw',
            onClick: () => {
              handleApplyJob(!rowData.applied ? 'apply' : '', rowData.jobId)
            },
          }),
        ]}
        options={{
          search: true,
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: 'VIEW | APPLY ',
          },
        }}
      />
    </StyledContainer>
  )
}
export default JobTable
