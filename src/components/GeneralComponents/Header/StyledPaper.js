import { Search } from '@mui/icons-material'
import { IconButton, InputBase, Paper } from '@mui/material'

function StyledPaper({ width }) {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: width,
        height: 35,
        bgcolor: '#701d9f',
        border: '1px solid white',
        boxShadow: '0.5px 0.5px #fff',
      }}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <Search sx={{ color: 'white' }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'red', width: '150px' }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  )
}

export default StyledPaper
