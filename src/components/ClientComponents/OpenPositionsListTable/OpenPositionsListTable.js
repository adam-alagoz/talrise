import Material from '../../../components/MaterialTable'
import { StyledContainer } from './index.styles'
import { useNavigate } from 'react-router-dom'
import Text from '../../../atoms/Text'
import { BsCheckCircleFill, BsPlusCircle, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import { useState } from 'react'

export default function OpenPositionsListTable({ onSaveButtonClick }) { // buradaki onSaveButtonClick islevsiz, belki bir plan cercevesinde konmustur diye silmedik.
  const navigate = useNavigate()
  const [selectedIds, setSelectedIds] = useState([])
  const columns = [
    {
      title: 'POSITION NAME',
      field: 'jobTitle',
      render: (row) => <span className="capitalize">{row.jobTitle}</span>,
    },
    {
      title: 'DETAILS',
      field: 'candidate',
      render: (row) => (
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
          onClick={() => navigate(`/job/${row.id}`)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: '14px' }}>
            <ul className="requiredSpan">
              {row.requiredTechSkills?.map((technical, index) => {
                return (
                  <li className="technicalSpan" key={index}>
                    {technical?.technical?.name}
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <BsThreeDotsVertical color="gray" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      ),
    },
    {
      title: 'SELECT',
      field: 'status',
      render: (row) => (
        <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => handleSelect(row.id)}>
          {selectedIds.includes(row.id) ? (
            <BsCheckCircleFill style={{ size: '20px' }} color="purple" />
          ) : (
            <BsPlusCircle size="20px" />
          )}
        </div>
      ),
    },
    {
      title: 'SHORTLIST',
      field: 'shortlist',
      render: (row) => (
        <div style={{ textAlign: 'center' }}>
          {true ? <BsCheckCircleFill style={{ size: '20px' }} color="purple" /> : <BsThreeDots />}
          {/* !!! this logic should come from the admin that should shortlist the candidates for the spesific job !! */}
        </div>
      ),
    },
  ]

  const handleSelect = (rowId) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(rowId)) {
        return prevSelectedIds.filter((id) => id !== rowId)
      } else {
        return [...prevSelectedIds, rowId]
      }
    })
  }

  return (
    <StyledContainer>
      <Material
        title={
          <Text display="block" type="Headline3">
            Browse your open positions
          </Text>
        }
        columns={columns}
        baseUrl="/job"
        options={{
          search: true,
          searchFieldAlignment: 'left',
          searchFieldStyle: {
            disableUnderline: true,
            isFreeAction: true,
            borderRadius: '5px',
            paddingLeft: '15px',
            width: '100%',
          },
        }}
      />
    </StyledContainer>
  )
}
