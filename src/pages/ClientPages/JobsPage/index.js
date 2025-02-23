import { useNavigate } from 'react-router-dom'
import { Text } from '../../../atoms'
import { StyledButtonContainer, StyledHeader } from './index.styles'
import Button from '../../../atoms/Button'
import { StyledContainer } from '../../GeneralPages/Page404/index.styles'

export default function JobsCreate() {
  const navigate = useNavigate()
  
  return (
    <StyledContainer> 
      <StyledHeader>       
          <Text type="Headline1" className="headline">
            Jobs
          </Text>                  
      </StyledHeader>
          <Text type="Subtitle1" className="text-example" >
            Let's create a new job to find your next dream candidate.
          </Text>       
      <StyledButtonContainer> 
         <Button className="button layout-button" 
           variant="contained" 
           handleClick= {()=>
            navigate('/admin/jobs/create-jobs/create-a-job/basics')
           }
           label="CREATE A JOB"
         />
      </StyledButtonContainer>
    </StyledContainer>        
  )
}