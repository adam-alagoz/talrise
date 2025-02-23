import styled from 'styled-components'

export const StyledKanbanBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const StyledKanbanBox = styled.div`
  display: flex;
  flex-direction: column;
  width:230px;
`
export const StyledKanbanList = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
  align-items: center;
  overflow-y: scroll;
  overflow-x:hidden
`

export const StyledKanbanHeadline = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  margin-top : 30px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1rem;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.0938rem;
  text-transform: uppercase;
  color: rgba(0, 11, 42, 0.88);
  width:215px;
  height: 3rem;
  background: rgba(72, 94, 173, 0.08);
`

export const StyledKanbanCard = styled.div`
  width: 215px;
  height: 178px;
  gap: 10px;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.0156rem;
  color: #545557;
  border: 1px solid #d8d8d8;
  margin-top: 5px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`



export const StyledHeader = styled.div`
  color: rgb(112, 29, 159);
  font-weight: 700;
  justify-content: space-between;
  `
  export const StyledTitle = styled.div`
  color: rgb(112, 29, 159);
  font-weight: 400;
  justify-content: space-between;
  `