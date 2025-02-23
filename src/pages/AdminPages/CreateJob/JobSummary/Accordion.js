import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { CustomExpandIcon } from '../../CreateClient/ClientProfile';
import {
  AtomicButton,
  StyledAccordionBox,
  StyledAccordionContainer,
  StyledButtonContainer,
} from './index.styles';
import { Text } from '../../../../atoms';

function Accordions({ data }) {
  const handleAccordionSave = (componentName, onSave) => {
  const findComponent = data.find((item) => item.name === componentName).formik
    onSave(findComponent.values);
  };

  return (
    <StyledAccordionBox>
      {data?.map(({ onSave, component, name }, index) => (
        <Accordion key={name} disableGutters={true} elevation={0}>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <Text display="block" className="text-example" type="Subtitle1">
              {name}
            </Text>
          </AccordionSummary>
          <hr />
          <StyledAccordionContainer>
            <AccordionDetails>{component}</AccordionDetails>
            <StyledButtonContainer>
              {/* <AtomicButton
                className="layout-button layout-cancel"
                variant="contained"
                label="cancel"
                onClick={() => handleAccordionSave(onSave)}
              >
                Cancel
              </AtomicButton> */}
              <AtomicButton
                onClick={(e) => handleAccordionSave(e.target.value, onSave)}
                value={name}
                className="layout-button layout-save"
                variant="contained"
                label="save"
              >
                SAVE
              </AtomicButton>
            </StyledButtonContainer>
          </StyledAccordionContainer>
        </Accordion>
      ))}
    </StyledAccordionBox>
  );
}

export default Accordions;

