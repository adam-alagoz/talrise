import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  StyledKanbanBody,
  StyledKanbanList,
  StyledKanbanBox,
  StyledKanbanHeadline,
  StyledKanbanCard,
  StyledHeader,
  StyledTitle,
} from './index.styles'
import { useGetAdminJobs, useUpdateJobStatus } from '../../../service/apis'
import { statuses } from '../../../utils/JobList'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const KanbanTable = () => {
  const { data: result } = useGetAdminJobs()
  const changeStatusMutation = useUpdateJobStatus()
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])
  const [hoverOver, setHoverOver] = useState(null)

  useEffect(() => {
    const kanbanData = result?.data?.data || []
    setJobs(kanbanData)
  }, [result])

  const updateStatus = async (updatedJob) => {
    try {
      await changeStatusMutation.mutate(updatedJob)
    } catch (error) {
      console.error('Error updating status:', error)
    }
    const updatedJobs = jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    setJobs(updatedJobs)
  }

  const handleDrop = (e, status) => {
    e.preventDefault()
    setHoverOver(null)
    const id = e.dataTransfer.getData('id')
    const job = jobs?.find((j) => Number(j.id) === Number(id))
    if (job) {
      updateStatus({ ...job, status: status })
    }
  }
  const handleDragEnter = (status) => {
    setHoverOver(status)
  }

  return (
    <>
      <StyledKanbanBody>
        {statuses.map((status) => {
          const jobsInColumn = jobs.filter((job) => job.status === status)
          const column = {
            status,
            jobs: jobsInColumn,
          }

          return (
            <StyledKanbanBox
              onDrop={(e) => handleDrop(e, column.status)}
              onDragOver={(e) => {
                e.preventDefault()
              }}
              onDragEnter={(e) => handleDragEnter(column.status)}
              key={column.status}
            >
              <StyledKanbanHeadline
                style={{ backgroundColor: hoverOver === column.status ? 'rgba(112, 29, 159,0.4)' : 'rgba(72, 94, 173, 0.08)' }}
              >
                {column.status} {'>'}{' '}
              </StyledKanbanHeadline>
              <StyledKanbanList>
                {column.jobs.map((job) => (
                  <StyledKanbanCard draggable onDragStart={(e) => e.dataTransfer.setData('id', job.id)} key={job.id}>
                    <StyledHeader style={{ justifyContent: 'space-between' }}>
                      {job.companyName}
                      <MoreVertIcon
                        style={{ color: 'gray', cursor: 'pointer', float: 'right' }}
                        onClick={() => {
                          navigate(`/job/${job.id}`)
                        }}
                      />
                    </StyledHeader>
                    <StyledTitle>{job.jobTitle}</StyledTitle>

                    <div>
                      Closing Date:
                      {job.expectedClosureDate
                        .map((item) => (item < 10 ? `0${item}` : item))
                        .reverse()
                        .join('/')}
                    </div>
                    <div>Employment Type :{job.employeeType}</div>
                    <div>
                      Salary:
                      {job.salary
                        .split('-')
                        .map((item) => '£' + item)
                        .join('-')}
                    </div>
                  </StyledKanbanCard>
                ))}
              </StyledKanbanList>
            </StyledKanbanBox>
          )
        })}
      </StyledKanbanBody>
    </>
  )
}

export default KanbanTable
