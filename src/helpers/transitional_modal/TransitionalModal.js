import React from 'react'
import { Slide } from '@mui/material'

const TransitionModal = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

export default TransitionModal
