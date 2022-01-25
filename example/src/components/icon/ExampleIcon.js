import React from 'react'
import { Icon } from 'mui-helpers'
import { Box } from '@mui/material'

const ExampleIcon = () => {
  return (
    <Box>
      <Icon name='AccountMultiple' color='primary' />
      <Icon name='AccountMultiple' color='secondary' type='filled' />
    </Box>
  )
}

export default ExampleIcon
