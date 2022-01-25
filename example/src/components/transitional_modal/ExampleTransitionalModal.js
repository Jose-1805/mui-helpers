import React, { useState } from 'react'
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import { TransitionModal } from 'mui-helpers'

const ExampleTransitionalModal = () => {
  const [show, setShow] = useState(false)
  const handleCancel = () => {
    setShow(false)
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth='xs'
      open={show}
      onClose={handleCancel}
      TransitionComponent={TransitionModal}
    >
      <DialogTitle>
        <Typography variant='h4'>Transitional modal</Typography>
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button fullWidth onClick={handleCancel}>
          CERRAR
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ExampleTransitionalModal
