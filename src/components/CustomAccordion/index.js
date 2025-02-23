import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import { AtomicButton, StyledAccordionBox, StyledAccordionContainer, StyledButtonContainer } from './index.styles'
import { Text } from '../../atoms'
import { FaAngleDown, FaPen } from 'react-icons/fa'

function CustomAccordion({ data }) {
  const CustomExpandIcon = () => {
    return (
      <Box
        sx={{
          '.Mui-expanded & > .expandIconWrapper': {
            display: 'none',
          },
          '.collapseIconWrapper': {
            display: 'none',
          },
          '.Mui-expanded & > .collapseIconWrapper': {
            display: 'block',
          },
        }}
      >
        <div className="expandIconWrapper">
          <FaPen />
        </div>
        <div className="collapseIconWrapper">
          <FaAngleDown />
        </div>
      </Box>
    )
  }

  return (
    <StyledAccordionBox>
      {data.map((item) => (
        <Accordion key={item.id ?? item} disableGutters={true} elevation={0}>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <Text display="block" className="text-example" type="Subtitle1">
              {item.name}
            </Text>
          </AccordionSummary>
          <hr />
          <StyledAccordionContainer>
            <AccordionDetails>{item.component}</AccordionDetails>
            <StyledButtonContainer>
              <AtomicButton className="layout-button layout-cancel" variant="contained" label="cancel">
                Cancel
              </AtomicButton>
              <AtomicButton className="layout-button layout-save" variant="contained" label="save">
                SAVE
              </AtomicButton>
            </StyledButtonContainer>
          </StyledAccordionContainer>
        </Accordion>
      ))}
    </StyledAccordionBox>
  )
}

export default CustomAccordion
