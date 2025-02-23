import { StyledContainer } from './index.styles.js'
import Material from '../../../components/MaterialTable/index.js'
import { BsFillEyeFill, BsPlusCircle, BsCheckCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Text } from '../../../atoms/index.js'
import { useApplyJob, useWithdrawJob } from '../../../service/API/candidate.js'
import { toast } from 'react-toastify'
import { useState } from 'react'

const columns = [
  { title: 'COMPANY NAME', field: 'companyName' },
  { title: 'POSITION', field: 'jobTitle' },
  { title: 'PUBLISHED DATE', field: 'publishDate' },
  { title: 'CLOSING DATE', field: 'closingDate' },
  { title: 'EMPLOYMENT TYPE', field: 'employeeType' },
  { title: 'SALARY', render: (rowData) => rowData.currency === 'GBP' && '£' + rowData.salaryAmount },
]

export default function SavedJobsPage() {
  const useWithdrawJobMutation = useWithdrawJob()
  const useApplyJobMutation = useApplyJob()
  const [applied, setApplied] = useState(false)
  const navigate = useNavigate()

  const handleApplyJob = (type, jobId) => {
    if (type === 'apply') {
      useApplyJobMutation.mutate(jobId, {
        onSuccess: () => {
          setApplied(!applied)
          toast.success('You have applied the job successfully.')
        },
        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    } else {
      useWithdrawJobMutation.mutate(jobId, {
        onSuccess: () => {
          setApplied(!applied)
          toast.success('You have withdrawn the job application successfully')
        },
        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    }
  }

  return (
    <>
      <Text type="Headline1">Saved Jobs</Text>
      <StyledContainer>
        <Material
          title="Browse your saved jobs with Talrise"
          columns={columns}
          baseUrl="/candidate/job/savedJobs"
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
            actionsColumnIndex: -1,
          }}
          localization={{
            header: {
              actions: 'VIEW | APPLY ',
            },
          }}
        />
      </StyledContainer>
    </>
  )
}
