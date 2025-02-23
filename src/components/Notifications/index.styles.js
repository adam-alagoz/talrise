import styled from 'styled-components'
import { Button } from '../../atoms'

export const StyledButton = styled(Button)`
  border-radius: 15px;
  color: rgba(0, 32, 81, 0.5);
`
export const AtomicButton = styled(Button)`
  margin-bottom: 1rem;
  width: 10rem;
  font-weight: 500;
`

export const StyledContainer = styled.div`
  margin-right: 15px;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px 16px 16px;

    .listItem {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      margin-top: 16px;

      .textContainer {
        display: flex;
        flex-direction: column;

        .message,
        .date {
          color: #000000;
          margin: 0;
        }

        .message {
          font-size: 14px;
          line-height: 20px;
        }

        .date {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
`
export const ColorContainer = styled.div`
  width: 30px;
  height: 30px;
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