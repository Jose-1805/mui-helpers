import React from 'react'
import { Box, Typography } from '@mui/material'

const HeaderModal = ({ text, icon, align, noBackground }) => {
  return (
    <Box
      p={1}
      bgcolor={noBackground ? null : 'light.main'}
      className='b-r-panel'
    >
      <Typography
        className='uppercase'
        color='textPrimary'
        align={align ? align : 'center'}
        variant='h5'
      >
        {icon && <span className='parent-icon-in-text-15'>{icon}</span>}
        {text}
      </Typography>
    </Box>
  )
}

export default HeaderModal
