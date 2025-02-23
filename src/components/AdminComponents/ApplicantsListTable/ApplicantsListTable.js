import { StyledContainer } from './index.styles.js'
import Material from '../../MaterialTable/index.js'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useNavigate } from 'react-router-dom'
import Text from '../../../atoms/Text/index.js'
import { BsThreeDotsVertical } from 'react-icons/bs'
import React, { useState } from 'react'

const ApplicantsListTable = () => {
  const applicationStatuses = [
    'Pre-shortlist',
    'Admin Rejection',
    'Shortlist',
    'CV Screen',
    'Phone Interview',
    'Home Task',
    'First Round Interview',
    'Second Round Interview',
    'Third Round Interview',
    'Offer',
    'Placement',
    'Reject',
  ]

  const handleChange = () => {}

  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)

  const columns = [
    {
      title: 'CANDIDATE INFO',
      field: 'candidateFullName',
      render: (row) => (
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: '14px' }}>
            <span className='capitalize'>{row.candidateFullName}</span>
            <span>{row.candidateLocation}</span>
            <span style={{ fontSize: '12px' }}>{row.jobTitle}</span>
          </div>
          <div>
            <BsThreeDotsVertical
              onClick={() => navigate(`/admin/candidate/${row.candidateId}`)}
              color="gray"
              style={{ cursor: 'pointer' }}
            />{' '}
          </div>
        </div>
      ),
      sorting: false,
    },
    {
      title: 'COMPANY NAME',
      field: 'companyName',
      render: (row) => <span className='capitalize'>{row.companyName}</span>,
    },
    {
      title: 'APPLIED POSITION',
      field: 'appliedPosition',
    },
    {
      title: 'APPLIED DATE',
      field: 'appliedDate',
      render: ({ appliedDate: [day, month, year] }) => <span>{`${day}/${month}/${year}`}</span>,
    },
    {
      title: 'CLOSING JOB DATE',
      field: 'expectedClosureDate',
      render: ({ expectedClosureDate: [day, month, year] }) => <span>{`${day}/${month}/${year}`}</span>,
    },
    {
      title: 'JOB DETAILS',
      field: 'jobDetails',
      render: ({ jobId }) => (
        <MoreVertIcon
          style={{ color: 'gray', cursor: 'pointer' }}
          onClick={() => navigate(`/job/${jobId}?page=${currentPage}`)}
        />
      ),
    },
    {
      title: 'STATUS',
      field: 'jobInterviewStatus',
      render: (row) => (
        <select onChange={(e) => handleChange(e)} style={{ border: 'none' }} name="jobStatus" id="jobStatus">
          {applicationStatuses.map((item) => (
            <option key={item} defaultValue={row.status === item} value={item}>
              {item}
            </option>
          ))}
        </select>
      ),
    },
  ]

  return (
    <StyledContainer>
      <Material
        title={
          <Text display="block" type="Headline3">
            Browse applicants list
          </Text>
        }
        columns={columns}
        baseUrl="/admin/jobApplication/appliedJobs"
        options={{
          search: true,
          searchFieldStyle: {
            disableUnderline: true,
            isFreeAction: true,
          },
          onPageChange: (page) => {
            setCurrentPage(page)
          },
        }}
      />
    </StyledContainer>
  )
}
export default ApplicantsListTable
