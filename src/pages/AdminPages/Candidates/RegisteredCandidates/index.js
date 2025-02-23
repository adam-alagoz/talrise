import React from 'react'
import {
  StyledContainer,
  StyledInputContainer,
  AtomicButton,
  StyledFilterContainer,
  StyledButtonWrapper,
  StyledTextContainer,
  StyledHeaderContainer,
} from './index.styles.js'
import Material from '../../../../components/MaterialTable/index.js'
import { BsThreeDotsVertical, BsCheckCircle } from 'react-icons/bs'
import { BiMailSend } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { TextField, Text } from '../../../../atoms'

export default function RegisteredCandidates() {
  const navigate = useNavigate()

  const header = [
    {
      title: 'CANDIDATE NAME',
      field: 'fullName',
      render: (rowData) => <span className="capitalized">{rowData.fullName}</span>,
    },
    {
      title: 'CURRENT POSITION',
      field: 'currentPosition',
    },
    {
      title: 'REGISTERED DATE',
      field: 'registrationDate',
    },
    {
      title: 'COMPLETED PROFILE RATE',
      field: 'completeProfileRate',
      render: (rowData) => rowData.completeProfileRate + '%',
    },
    {
      title: 'SENDING MAIL',
      field: 'sendingMail',
      render: (rowData) =>
        !rowData?.sendingMail ? (
          <BiMailSend style={{ color: 'gray', fontSize: '25px' }} />
        ) : (
          <BsCheckCircle style={{ color: 'green' }} />
        ),
    },
  ]
  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledTextContainer>
          <Text>Apple</Text>
          <Text type="Subtitle1">Suitable Candidates</Text>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text>Java Developer</Text>
          <Text type="Subtitle1">(Pre-Short List)</Text>
        </StyledTextContainer>
      </StyledHeaderContainer>
      <StyledFilterContainer>
        <StyledButtonWrapper>
          <AtomicButton
            className="apply"
            variant="contained"
            type="submit"
            handleClick={() => navigate('')}
            label="FILTER"
            size="large"
          />
        </StyledButtonWrapper>
        <StyledInputContainer>
          <TextField type="text" label="Position Name" variant="outlined" name="position" value="Java Developer" />
          <TextField type="text" label="Location" variant="outlined" name="location" value="London" />
          <TextField type="text" label="Job Title" variant="outlined" name="jobTitle" value="Senior" />
          <TextField type="text" label="Skill Set" variant="outlined" name="skillSet" value="Java, .Net, AWS..." />
        </StyledInputContainer>
      </StyledFilterContainer>

      <Material
        title="Browse registered candidates"
        columns={header}
        baseUrl="/admin/candidate/registrations"
        actions={[
          {
            icon: () => <BsThreeDotsVertical style={{ color: 'gray' }} />,
            tooltip: 'View',
            onClick: (e, rowData) => {
              navigate(`/admin/candidate/${rowData.id}`)
            },
          },
        ]}
        options={{
          searchFieldStyle: {
            disableUnderline: true,
          },
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: 'DETAILS',
          },
        }}
      />
      <StyledButtonWrapper>
        <AtomicButton
          className="apply"
          variant="contained"
          type="submit"
          handleClick={() => navigate('')}
          label="SEND SHORTLIST"
          size="large"
        />
      </StyledButtonWrapper>
    </StyledContainer>
  )
}
