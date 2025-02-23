import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  padding: 1.875rem 1.9375rem 0rem 6.25rem;
  .list {
    list-style-type: disc;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
  li {
    margin-bottom: 2.1875rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.lg}) {
    width: 100%;
    padding-left: 2.5rem;
  }

  .headline {
    margin-bottom: 1.875rem;
    letter-spacing: 0.0094rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: ${(p) => p.theme.colors.white};
  }

  .text-paragraph {
    letter-spacing: 0.0313rem;
    line-height: 1.5rem;
    letter-spacing: 0.0313rem;
    color: ${(p) => p.theme.colors.white};
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const Image = styled.img`
  margin: 4.6875rem 0;
  transform: matrix(1, 0, 0, 1, 1, 1);

  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    width: 100%;
    padding-left: 0rem;
  }
`
export const StyledImgWrapper = styled.div`
  text-align: right;
`
