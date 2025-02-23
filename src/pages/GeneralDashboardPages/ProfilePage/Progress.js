import * as React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import { Text } from '../../../atoms'

export default function LinearProgressWithLabel({ value = 0 }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '250px' }}>
      <Box sx={{ width: '100%', mr: 4 }}>
        <LinearProgress
          value={value}
          variant="determinate"
          sx={{
            backgroundColor: '#82CF73',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#44B300',
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Text display="block" className="text-example" type="Subtitle2">{`${Math.round(value)}%`}</Text>
      </Box>
    </Box>
  )
}
