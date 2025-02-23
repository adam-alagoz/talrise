import Button from '../../../../../atoms/Button'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  .containerList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 9.5rem;
    overflow-y: auto;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    column-gap: 0.3125rem;
  }

  .cert {
    padding: 0.4375rem;
    margin: 0.4375rem 0;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.unselectedItems};
    color: ${(p) => p.theme.colors.black};
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    word-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.0156rem;
    text-transform: capitalize;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
      0px 1px 5px 0px rgb(0 0 0 / 12%);
  }

  .containerAddedList {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 9.5rem;
    overflow-y: auto;
    margin-bottom: 5rem;
    column-gap: 0.3125rem;
    font-family: 'DM Sans';
    
  }
  .containerAdded {
    padding-left: 0.4375rem;
    margin: 0.4375rem 0;
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: ${(p) => p.theme.colors.addedItems};
    color: ${(p) => p.theme.colors.black};
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.0156rem;
    text-transform: capitalize;
    font-family: 'DM Sans';
  }

  .btn-cert {
    color: ${(p) => p.theme.colors.black};
    text-transform: none;
    padding-right: 0rem;
    cursor: pointer;
  }
  .gxSIwz span{
    margin: 0 2rem;
  }

  .text-example {
    display: block;
    margin-bottom: 1.25rem;
  }

  .containerAdd {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .certificateText {
    input {
      padding: 1.25rem;
      width: 100%;
      height: 1px;
      border: 0.0625rem solid rgba(0, 0, 0, 0.4);
      background: ${(p) => p.theme.colors.unselectedItems};
      border-radius: 4px;
    }
  }

  .suggested-text {
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 0.5rem;
    text-transform: none;

  }
`

export const AtomicButton = styled(Button)`
  &.seeMoreLess {
    text-transform: capitalize;
    cursor: pointer;
  }
  &.small {
    width: 4rem;
    height: 2.5rem;
    cursor: pointer;
  }
`

export const StyledP = styled.div``
