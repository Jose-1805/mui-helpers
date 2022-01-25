import React, { useState } from 'react'
import { DialogConfirm, useConfirm } from 'mui-helpers'
import { Button } from '@mui/material'

const ExampleDialogConfirm = () => {
  const [show, setShow] = useState(false)
  const [Modal, requestConfirmation] = useConfirm()
  return (
    <React.Fragment>
      <Button onClick={() => setShow(true)}>ABRIR CONTROLADO</Button>
      <Button
        onClick={() => {
          requestConfirmation().then((response) => {
            alert('La es ' + (response ? 'afirmativa' : 'negativa'))
          })
        }}
      >
        ABRIR CON HOOK
      </Button>
      <Modal />
      <DialogConfirm
        open={show}
        onCancel={() => setShow(false)}
        onConfirm={() => setShow(false)}
      />
    </React.Fragment>
  )
}

export default ExampleDialogConfirm
