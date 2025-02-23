import styled from 'styled-components'
import Text from '../Text/index'
import { TextField, Button } from '@mui/material'
import SelectItem from '../../components/SelectItem'

export const StyledBody = styled.div`
  width: 100%;
  margin-bottom: 4rem;

  .listedButton:hover {
    background-color: ${(p) => p.theme.colors.unselectedItems};
  }

  .added:hover {
    background-color: ${(p) => p.theme.colors.addedItems};
  }

  .add:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`
export const StyledGridLine = styled.div`
  display: grid;
  grid-template-columns: ${(p) =>
    p.label === 'Proficiency' ? '16.725rem 16.725rem' : '20rem 8rem'};
  grid-gap: 1rem;
  justify-content: start;
  align-content: start;
  row-gap: 0.625rem;
  column-gap: 1rem;

  &.searchLine {
    grid-template-columns: 2fr 1fr;
    column-gap: 3.75rem;
  }

  &.addedLine {
    padding: 0.5rem 0;

    @media (max-width: ${(p) => p.theme.breakPoints.lg}) {
      grid-template-columns: 1fr 8rem;
      column-gap: 0.625rem;
      &.searchLine {
        column-gap: 1.25rem;
      }
    }
  }
`
export const StyledTextField = styled(TextField)`
  width: calc(100% + 1.875rem);
  text-align: center;
  input {
    padding: 0.5rem 0.875rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    width: 100%;
  }
`

export const StyledButton = styled(Button)`
  &.listedButton {
    height: 2.1875rem;
    background-color: ${(p) => p.theme.colors.unselectedItems};
    color: ${(p) => p.theme.colors.black};
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 0.0156rem;
    text-transform: capitalize;
    overflow: hidden;
    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      font-size: 0.6rem;
      line-height: 0.7rem;
    }
  }

  &.added {
    width: 100%;
    background-color: ${(p) => p.theme.colors.addedItems};
    color: ${(p) => p.theme.colors.black};
    font-family: 'DM Sans';
    text-transform: capitalize;
    font-size: 0.8rem;
    line-height: 1rem;
    height: 2.1875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    min-width: 8rem;
    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      font-size: 0.6rem;
      line-height: 0.7rem;
    }

    .icon {
      position: absolute;
      right: 0.6rem;
      bottom: 0.7rem;
      color: ${(p) => p.theme.colors.black};
      width: 0.6rem;
      height: 0.6rem;
      @media (max-width: ${(p) => p.theme.breakPoints.lg}) {
        width: 0.5rem;
        height: 0.5rem;
        right: 0.5rem;
        bottom: 0.8rem;
      }
    }
  }
  &.link {
    color: ${(p) => p.theme.colors.primary};
    text-transform: Capitalize;
    justify-content: flex-start;
    height: 2.1875rem;
  }
`
export const StyledOverline = styled(Text)`
  color: ${(p) => p.theme.colors.overLineColor};
  display: block;
  margin-top: 1.0625rem;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  text-transform:capitalize;
`
export const StyledHeadline = styled(Text)`
  color: ${(p) => p.theme.colors.headLineColor};
  display: block;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
`
export const StyledSubtitle = styled(Text)`
  color: ${(p) => p.theme.colors.headLineColor};
  display: block;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  margin-left: 0;
  margin-right: 0;
`
export const StyledButtonBody = styled.div`
  display: grid;
  padding: 0.625rem 0;
  grid-template-columns: ${(props) => `repeat(${props.columnCount}, 1fr)`};
  align-content: start;
  justify-items: stretch;
  grid-template-rows: auto;
  padding-right: 0.625rem;
  row-gap: 0.625rem;
  column-gap: 1rem;
  height: 15.625rem;
  max-height: 12.5rem;
  overflow-y: auto;
  @media (max-width: ${(p) => p.theme.breakPoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    grid-template-columns: 1fr;
  }
`
export const StyledAddedScroll = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 0.625rem 0;
  height: 12.5rem;
  max-height: 11.875rem;
  overflow-y: auto;
`

export const StyledSelectItem = styled(SelectItem)`
  &.select-item {
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .MuiSelect-select {
    padding-top: 0.5rem;
    padding-bottom: 0.4rem;
    font-size: 1rem;
    font-family: 'DM Sans';
    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      font-size: 0.7rem;
      font-family: 'DM Sans';

    }
  }
`

export const StyledGridItem = styled.div`
  height: 2.125rem;
`
