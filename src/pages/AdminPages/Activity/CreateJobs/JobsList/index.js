import React, { useState } from 'react'
import JobsListTable from '../../../../../components/AllTables/JobsListTable'
import KanbanTable from '../../../../../components/AllTables/KanbanTable'
import ViewShortList from '../../../../../components/ViewShortList'
import { StyledBody } from './index.styles'
import ViewOptions from '../../../../../components/ViewOptions'
const JobsList = () => {
  const [showList, setShowList] = useState(true)
  const [showTable, setShowTable] = useState(false)

  return (
    <StyledBody>
      {!showTable ? (
        <ViewShortList
          children={
            <>
              <ViewOptions showList={showList} setShowList={setShowList} showTable={showTable} setShowTable={setShowTable} />
              <JobsListTable showList={showList} setShowList={setShowList} />
            </>
          }
        />
      ) : (
        <ViewShortList
          children={
            <>
              <ViewOptions showList={showList} setShowList={setShowList} showTable={showTable} setShowTable={setShowTable} />
              <KanbanTable showTable={showTable} setShowTable={setShowTable} />
            </>
          }
        />
      )}
    </StyledBody>
  )
}

export default JobsList
