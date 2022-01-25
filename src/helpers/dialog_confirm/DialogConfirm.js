import React from 'react'
import {
  Box,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material'
import Btn from '../btn/Btn'
import HeaderModal from '../header_modal/HeaderModal'
import TransitionModal from '../transitional_modal/TransitionalModal'

const DialogConfirm = ({
  open,
  text,
  onCancel,
  onConfirm,
  cancelText = 'Cancelar',
  confirmText = 'Confirmar'
}) => {
  const handleCancel = () => {
    onCancel && onCancel()
  }

  const handleConfirm = () => {
    onConfirm && onConfirm()
  }

  return (
    <Dialog
      fullWidth
      maxWidth='xs'
      open={open}
      onClose={handleCancel}
      TransitionComponent={TransitionModal}
    >
      <DialogTitle>
        <HeaderModal text='Confirmar' />
      </DialogTitle>
      <DialogContent>
        <Typography align='center'>
          {text ? text : '¿Está seguro de realizar esta acción?'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Box p={2} pb={1} sx={{ width: '100%' }}>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={1}
          >
            <Grid item xs={6}>
              <Btn.Cancel
                fullWidth
                onClick={handleCancel}
                style={{ marginRight: '0.5rem' }}
                text={cancelText}
              />
            </Grid>
            <Grid item xs={6}>
              <Btn.Accept
                fullWidth
                onClick={handleConfirm}
                text={confirmText}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default DialogConfirm
