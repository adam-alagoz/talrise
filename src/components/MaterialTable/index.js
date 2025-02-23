import MaterialTable from 'material-table'

import { StyledContainer } from './index.styles'
import { getData } from '../../service/service'

const defaultOptions = {
  search: false,
  debounceInterval: 1000,
  searchFieldAlignment: 'right',
  searchAutoFocus: true,
  searchFieldStyle: {
    disableUnderline: true,
  },

  headerStyle: {
    color: 'black',
    backgroundColor: '#E3E6F2',
    fontFamily: 'DM Sans',
    fontSize: '10px',
    fontWeight: 800,
    border: '1px solid #701d9f',
    textAlign: 'center',
  },

  rowStyle: {
    fontFamily: 'DM Sans',
    fontSize: '16px',
    border: '1px solid #eee',
  },

  cellStyle: {
    border: '1px solid #eee',
    alignItems: 'center',
    textAlign: 'center',
  },

  maxHeight: '500px',
}

function Material({ editable, title, columns, baseUrl, options, actions, localization }) {
  const handleApiCall = (query) =>
    new Promise((resolve) => {
      let url = `${baseUrl}?pageNumber=${query.page}&searchKeyword=${query.search}&pageSize=${query.pageSize}&sortBy=${
        query.orderBy?.field || 'id'
      }&sortDirection=${query.orderDirection || 'desc'}`
      getData(url).then((result) => {
        resolve({
          data: result.data.data,
          page: result.data.pageNumber,
          totalCount: result.data.totalCount,
          publishDate: result.data.publishDate,
        })
      })
    })

  return (
    <StyledContainer>
      <MaterialTable
        title={title}
        columns={columns}
        data={handleApiCall}
        onSearchChange={handleApiCall}
        options={{ ...defaultOptions, ...options }}
        editable={editable}
        actions={actions}
        localization={localization}
        style={{ fontFamily: 'DM Sans', maxHeight: '800px', overflow: 'scroll' }}
      />
    </StyledContainer>
  )
}

export default Material
