import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin-right: 30px;
  width: 360px;
  height: 108px;
`

export const InContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 6.375rem;
  padding: 1.0625rem 1.3125rem;
  width: 100%;
  border: 1px solid rgba(0, 39, 125, 0.12);
  border-bottom: 3px solid ${(p) => p.theme.colors.primary};
  background-color: white;
`

export const Title = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  color: rgba(0, 11, 42, 0.6);
`

export const Number = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 2.125rem;
  line-height: 2.25rem;
  padding-top: 1rem;
  color: rgba(0, 11, 42, 0.6);
`
