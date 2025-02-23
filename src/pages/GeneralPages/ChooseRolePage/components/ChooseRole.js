import React, { useState } from 'react'
import Text from '../../../../atoms/Text'
import { BetweenContainer, StyledContainer, AtomicButton, StyledWrapper } from '../index.styles'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { RiHandbagFill, RiTeamFill } from 'react-icons/ri'
import { useUser } from '../../../../redux/hooks/userHook'
import { useCreateRole } from '../../../../service/API/shared'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorIcon from '../../../../assets/svg/ErrorIcon.svg'

function ChooseRole() {
  const navigate = useNavigate()
  const [selectedRoles, setSelectedRoles] = useState([])
  const { addUserInfo, addCandidateUserInfo, candidateUserInfo } = useUser()
  const createRoleMutation = useCreateRole()

  const handleChange = (user) => {
    setSelectedRoles(user.toLowerCase())
  }

  const handleSubmit = () => {
    createRoleMutation.mutate(selectedRoles, {
      onSuccess: ({ data }) => {
        localStorage.setItem('activeRole', selectedRoles.toUpperCase())
        const personnelInfo = {
          firstName: data.firstName,
          lastName: data.lastName,
          linkedIn: data.linkedIn,
          countryId: '',
          cityId: '',
          email: data.email,
          countryPhoneCode: '',
          mobile: '',
        }

        addCandidateUserInfo({ ...candidateUserInfo, personnelInfo: personnelInfo })
        addUserInfo({ ...data })
        localStorage.setItem('token', data.token)
        toast.success('You have chosen your role successfully.')
        navigate('/result/success')
      },
      onError: (error) => {
        const errors = error.response.data.errors
        const errorMessages = errors.map((error) => error.message).join(' & ')
        toast.error(errorMessages, { icon: <img src={ErrorIcon} alt={error.message} /> })
        navigate('/result/unsuccess')
      },
    })
  }
  return (
    <StyledWrapper>
      <StyledContainer>
        <>
          <Text display="block" className="text-example" type="Headline2">
            What is your current role?
          </Text>
          <AtomicButton
            className="btn"
            variant="outlined"
            type="submit"
            handleClick={() => handleChange('candidate')}
            icon={<FaUserAlt />}
            label={
              <Text className="text" type="Body1">
                Candidate
              </Text>
            }
            selected={selectedRoles === 'candidate'}
          />
          <AtomicButton
            className="btn disabled"
            variant="outlined"
            type="submit"
            handleClick={() => handleChange('client')}
            icon={<RiHandbagFill />}
            label={
              <Text className="text" type="Body1">
                Client
              </Text>
            }
            selected={selectedRoles === 'client'}
          />
          <AtomicButton
            disabled={true}
            className="btn"
            variant="outlined"
            type="submit"
            handleClick={() => handleChange('partner')}
            icon={<RiTeamFill />}
            label={
              <Text className="text-example text" type="Body1">
                Partner
              </Text>
            }
            selected={selectedRoles === 'partner'}
          />
        </>
      </StyledContainer>
      <BetweenContainer>
        <AtomicButton
          disabled={selectedRoles.length === 0}
          className="nextButton"
          color="secondary"
          variant={selectedRoles.length === 0 ? 'contained_disabled' : 'contained'}
          type="submit"
          handleClick={handleSubmit}
          label={
            <Text className="btn-next" type="Button" color="#FFFFFF">
              NEXT
            </Text>
          }
        />
      </BetweenContainer>
    </StyledWrapper>
  )
}

export default ChooseRole
