import React from 'react'
import { Box } from '@mui/material'
import { useColorClasses } from 'mui-helpers'

const ExampleUseColorClasses = () => {
  const classes = useColorClasses()
  console.log(classes)
  return (
    <React.Fragment>
      <Box
        sx={{ width: '150px', height: '150px' }}
        border={1}
        m={1}
        className={classes['primary_main_border']}
      ></Box>
      <Box
        sx={{ width: '150px', height: '150px' }}
        border={1}
        m={1}
        className={classes['error_main_border'] + ' ' + classes['success_main']}
      ></Box>
    </React.Fragment>
  )
}

export default ExampleUseColorClasses
