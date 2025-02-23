import styled from 'styled-components'
import Button from '../../../../atoms/Button'

export const StyledContainer = styled.div`
  .addLocation {
    margin-bottom: 1.25rem;
    width: 10rem;
  }

  .btn-delete-container {
    display: flex;
    justify-content: flex-end;
  }

  .btn-delete {
    color: ${(p) => p.theme.colors.primary};
    text-transform: capitalize;
    display: flex;
    justify-content: flex-end;
  }

  .containerBox {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
    padding-top: 2.1875rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    .containerBox {
      flex-direction: column;
    }
  }
`

export const AtomicButton = styled(Button)`
  width: 7rem;
  height: 2.5rem;
  cursor: pointer;
`
