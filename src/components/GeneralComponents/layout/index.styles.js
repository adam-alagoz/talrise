import styled from 'styled-components'
import layoutLogo from '../../../assets/svg/layout_logo.svg'
import vector from "../../../assets/svg/Vector.svg"

export const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
`

export const StyledLayout = styled.div`
  min-height: calc(92vh - 40px);
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  background-color: rgb(101,128,157);
  padding: 4vh 6.9%;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position: bottom left;
  overflow-y: auto;

  @media all and (min-width: ${(p) => p.theme.breakPoints.sm}) {
    flex-direction: row;
  }
`

export const StyledLeft = styled.div`
  width: ${({ variant }) => {
    if (variant === 'progressBar') return '34%'
    if (variant === 'half') return '50%'
    return '100%'
  }};
  min-height: calc(92vh - 40px);
  box-sizing: border-box;
  display: flex;
  position: relative;
  justify-content: center;
  background: ${(p) => p.theme.colors.layoutLeftBgColor};
  border: 0.0625rem solid ${(p) => p.theme.colors.layoutLeftBorderColor};
  box-shadow: 0rem 0.25rem 0.25rem ${(p) => p.theme.colors.blackForShadow};
  border-radius: 5px;
  background-image: url(${layoutLogo});
  background-repeat: no-repeat;
  background-position: 0.9375rem 0.9375rem;
  background-color: #701D9F;
  position: relative;
  padding-top: 100px;
  .navigate {
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    cursor: pointer;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    margin-bottom: 1.625rem;
    width: 100%;
  }
`

export const StyledRight = styled.div`
  min-height: calc(92vh - 40px);
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: ${(p) => p.theme.colors.white};
  border: 0.0625rem solid ${(p) => p.theme.colors.layoutLeftBorderColor};
  box-shadow: 0rem 0.25rem 0.25rem ${(p) => p.theme.colors.blackForShadow};
  border-radius: 5px;
  position: relative;
  width: ${({ variant }) => {
    if (variant === 'progressBar') return '66%'
    if (variant === 'half') return '50%'
    return '100%'
  }};

  .layout-button {
    position: absolute;
    bottom: 4rem;
    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.0781rem;
  }
  .layout-save-exit {
    position: absolute;
    top: 2rem;
    right: 4rem;
    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.0781rem;
    color: ${(p) => p.theme.colors.primary};
    z-index: 1;
  }

  .layout-back {
    left: 7%;
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary};
  }

  .layout-next {
    right: 7%;
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.white};
  }
  .layout-back:hover {
    background-color: ${(p) => p.theme.colors.white};
  }

  .layout-next:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    width: 100%;
  }
`
