import styled from 'styled-components'

export const JoinContainer = styled.div`
  box-sizing: border-box;
  padding: 9.0625rem 1.9375rem 0rem 6.25rem;
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
    li::marker {
  content:counter(list-item)"-";
}
  }
`

export const Image = styled.img`
  margin-top: 5.625rem;
  transform: matrix(1, 0, 0, 1, 1, 1);

  @media (min-width: ${(p) => p.theme.breakPoints.lg}) {
    padding-left: 14.6875rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    width: 100%;
    padding-left: 0rem;
  }
`
export const StyledImgWrapper = styled.div`
  text-align: right;
`
