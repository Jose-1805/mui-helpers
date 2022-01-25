import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, Alert } from '@mui/material'

const BugList = ({ type, data }) => {
  let content = ''

  if (data.length) {
    if (type === 'general') {
      content = (
        <Alert variant='filled' severity='error'>
          <ul style={{ marginTop: '5px', paddingLeft: '1rem' }}>
            {data.map((el, i) => {
              return <li key={i}>{el}</li>
            })}
          </ul>
        </Alert>
      )
    } else {
      content = (
        <Box>
          <ul style={{ marginTop: '-5px', paddingLeft: '1rem' }}>
            {data.map((el, i) => {
              return (
                <li key={i}>
                  <Typography color='textPrimary' variant='caption'>
                    {el}
                  </Typography>
                </li>
              )
            })}
          </ul>
        </Box>
      )
    }
  }

  return <Box mt={type === 'general' && data.length ? 4 : 0}>{content}</Box>
}

BugList.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string
}

export default BugList
