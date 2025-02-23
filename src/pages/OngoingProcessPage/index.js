/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import {
  StyledBody,
  StyledKanbanBody,
  StyledButton,
  StyledButtonBody,
  StyledTable,
  StyledKanbanBox,
  StyledKanbanHeadline,
  StyledKanbanCard,
  StyledImage,
  StyledButtonInsideBody,
  StyledHeaderBody,
} from './index.styles'
import listIconUnselected from '../../assets/svg/listIconUnselected.svg'
import listIconSelected from '../../assets/svg/listIconSelected.svg'
import kanbanIconSelected from '../../assets/svg/kanbanIconSelected.svg'
import kanbanIconUnselected from '../../assets/svg/kanbanIconUnselected.svg'
import Text from '../../atoms/Text/index'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useGetOngoingProcessData, useGetUserData } from '../../service/API/candidate'
import { Chip } from '@mui/material'

const OngoingProcessPage = () => {
  const tableHeaders = ['POSITION', 'STATUS', 'COMPANY', 'DATE', 'DETAILS']
  const [kanbanDatasState, setKanbanDatasState] = useState([])
  const [tableCells, setTableCells] = useState([])
  const [jobListState, setJobListState] = useState([])
  const getOngoingDataMutation = useGetOngoingProcessData(93)
  const getUserDataMutation = useGetUserData()
  useEffect(() => {
    getUserDataMutation.mutate('', {
      onSuccess: ({ data }) => {
        setJobListState(data.positions)
      },
      onError: (error) => {
        console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const initialValues = {
    page: 'list',
    fliter: '',
    job: 'Java Developer',
  }

  const validationSchema = yup.object({
    page: yup.string(),
    job: yup.string(),
    filter: yup.string().min(2),
  })

  const onSubmit = (values) => {}

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  const handleClick = (type, job) => {
    let pageValue = formik.values.page
    let jobValue = formik.values.job
    if (type === 'page') {
      pageValue = formik.values.page === 'list' ? 'kanban' : 'list'
    } else {
      jobValue = job
    }
    formik.setValues({ ...formik.values, page: pageValue, job: jobValue })
    let jobId = 0
    if (type === 'job') {
      jobListState.forEach((item) => {
        if (item.position.name === job) {
          jobId = item.position.id
        }
      })

      getOngoingDataMutation.mutate(jobId, {
        onSuccess: ({ data }) => {
          setKanbanDatasState(data.data)
          const tableCellsLocal = data.data.map((item) => [
            item.position.name,
            item.status,
            item.companyName,
            item.date,
            ':',
          ])
          setTableCells(tableCellsLocal)
        },
        onError: (error) => {
          console.error('🚀 ~ file: index.js ~ line 21 ~ onSubmit ~ error', error)
        },
      })
    }
  }
  return (
    <StyledBody>
      <StyledHeaderBody>
        <Text type="Headline1">Ongoing Process</Text>
        <StyledButton variant="contained" color="secondary" className="applyButton">
          Apply for another job
        </StyledButton>
      </StyledHeaderBody>
      <StyledButtonBody>
        {jobListState.map((item) => (
          <StyledButton
            key={item.position.name}
            type="button"
            color="secondary"
            variant={formik.values.job === item.position.name ? 'contained' : 'text'}
            className="job-button"
            onClick={() => {
              handleClick('job', item.position.name)
            }}
          >
            {item.position.name}
          </StyledButton>
        ))}
      </StyledButtonBody>
      <StyledButtonBody>
        <Chip className="chip" label="+ Add Filter" variant="outlined" />
        <StyledButtonInsideBody className="buttonInsideBody">
          <Text type="Body1" className="body-text">
            View options :
          </Text>
          <StyledButton
            variant="text"
            className="kanban-button"
            onClick={() => {
              handleClick('page', '')
            }}
          >
            <StyledImage
              src={formik.values.page === 'kanban' ? kanbanIconSelected : kanbanIconUnselected}
            />
          </StyledButton>
          <StyledButton
            variant="text"
            className="list-button"
            onClick={() => {
              handleClick('page', '')
            }}
          >
            <StyledImage
              src={formik.values.page === 'kanban' ? listIconUnselected : listIconSelected}
            />
          </StyledButton>
        </StyledButtonInsideBody>
      </StyledButtonBody>
      {formik.values.page === 'list' && (
        <StyledTable tableHeaders={tableHeaders} tableCells={tableCells} />
      )}
      {formik.values.page === 'kanban' && (
        <StyledKanbanBody>
          <StyledKanbanBox>
            <StyledKanbanHeadline>PRE-SHORTLIST</StyledKanbanHeadline>
            {kanbanDatasState
              .filter((item) => item.status.includes('PRE_SHORT_LIST'))
              .map((item) => (
                <StyledKanbanCard key={item.id}>
                  {item.companyName}
                  <br />
                  {item.position.name}
                  <br />
                  Date:{item.date}
                </StyledKanbanCard>
              ))}
          </StyledKanbanBox>
          <StyledKanbanBox>
            <StyledKanbanHeadline>SHORTLISTED</StyledKanbanHeadline>
            {kanbanDatasState
              .filter((item) => item.status.includes('SHORT_LIST'))
              .map((item) => (
                <StyledKanbanCard key={item.id}>
                  {item.companyName}
                  <br />
                  {item.position.name}
                  <br />
                  Date:{item.date}
                </StyledKanbanCard>
              ))}
          </StyledKanbanBox>
          <StyledKanbanBox>
            <StyledKanbanHeadline>INTERVIEW</StyledKanbanHeadline>
            {kanbanDatasState
              .filter((item) => item.status.includes('INTERVIEW'))
              .map((item) => (
                <StyledKanbanCard key={item.id}>
                  {item.companyName}
                  <br />
                  {item.position.name}
                  <br />
                  Date:{item.date}
                </StyledKanbanCard>
              ))}
          </StyledKanbanBox>
          <StyledKanbanBox>
            <StyledKanbanHeadline>OFFER</StyledKanbanHeadline>
            {kanbanDatasState
              .filter((item) => item.status.includes('OFFER'))
              .map((item) => (
                <StyledKanbanCard key={item.id}>
                  {item.companyName}
                  <br />
                  {item.position.name}
                  <br />
                  Date:{item.date}
                </StyledKanbanCard>
              ))}
          </StyledKanbanBox>
          <StyledKanbanBox>
            <StyledKanbanHeadline>PLACEMENT</StyledKanbanHeadline>
            {kanbanDatasState
              .filter((item) => item.status.includes('PLACEMENT'))
              .map((item) => (
                <StyledKanbanCard key={item.id}>
                  {item.companyName}
                  <br />
                  {item.position.name}
                  <br />
                  Date:{item.date}
                </StyledKanbanCard>
              ))}
          </StyledKanbanBox>
          <StyledKanbanBox>
            <StyledKanbanHeadline>PROPOSAL</StyledKanbanHeadline>
            {kanbanDatasState
              .filter((item) => item.status.includes('PROPOSAL'))
              .map((item) => (
                <StyledKanbanCard key={item.id}>
                  {item.companyName}
                  <br />
                  {item.position.name}
                  <br />
                  Date:{item.date}
                </StyledKanbanCard>
              ))}
          </StyledKanbanBox>
        </StyledKanbanBody>
      )}
    </StyledBody>
  )
}

export default OngoingProcessPage
