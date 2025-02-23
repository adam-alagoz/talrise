import styled from 'styled-components'

export const StyledContainer = styled.div`
  ${'' /* width: 100vw; */}
  ${'' /* height: 100vh; */}
  margin-right: 15px;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .MuiDatePickerToolbar-root,
  .MuiDialogActions-root,
  .css-9reuh9-MuiPickersArrowSwitcher-root,
  .css-7kykdr-MuiButtonBase-root-MuiIconButton-root {
    display: none;
  }

  .css-l0iinn {
    margin: 0 auto;
    font-size: 14px;
  }

  .css-mvmu1r {
    margin: 10px 21px;
  }

  .Mui-selected-closingJobDates,
  .Mui-selected-closingJobDates:hover {
    background-color: #fb1826;
  }

  .Mui-selected-interviewDates,
  .Mui-selected-interviewDates:hover {
    background-color: #18a0fb;
  }

  .Mui-selected-eventDates,
  .Mui-selected-eventDates:hover {
    background-color: #fbbb18;
  }

  .Mui-selected-hover,
  .Mui-selected-hover:hover {
    background-color: #c3c4c7;
    position: relative;
    top: 0;
    &:hover {
      &:before {
        content: 'Events/Referals Contract';
        top: 32px;
        position: absolute;
        width: 151px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.25px;
        background-color: #f0f0f1;
        color: rgba(0, 11, 42, 0.88);
      }
    }
  }

  .reminders_footer {
    width: 320px;
    margin-top: 27px;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .datepicker {
  }
`

export const ColorContainer = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(p) => p.backgroundColor};
  border-radius: 50%;
  margin: 8px 12px 8px 8px;
`

export const Header = styled.div`
  width: 322px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid rgba(0, 39, 125, 0.12);
  background-color: #ffff;
  margin-bottom: 9px;
`
