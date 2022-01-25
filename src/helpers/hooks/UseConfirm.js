import React, { useState } from 'react'
import DialogConfirm from '../dialog_confirm/DialogConfirm'

/**
 * Modal de confirmación con Promise
 *
 * @return     {Array}  Componente y función para solicitar confirmación.
 */
const useConfirm = () => {
  const [show, setShow] = useState(false)
  const [text, setText] = useState('¿Está seguro de realizar esta acción?')
  const [cancelText, setCancelText] = useState('Cancelar')
  const [confirmText, setConfirmText] = useState('Confirmar')
  const [resolvePromise, setResolvePromise] = useState(null)

  const Modal = () => (
    <DialogConfirm
      open={show}
      text={text}
      onConfirm={() => {
        setShow(false)
        resolvePromise(true)
      }}
      onCancel={() => {
        setShow(false)
        resolvePromise(false)
      }}
      cancelText={cancelText}
      confirmText={confirmText}
    />
  )

  /**
   * Lanza la solitud de confirmación
   *
   * @param      {string}  [newText=null]  Mensaje de confirmación
   * @return     {Promise}  Promise con respuesta del usuario.
   */
  const requestConfirmation = (
    newText = null,
    cancelTextValue = 'Cancelar',
    confirmTextValue = 'Confirmar'
  ) => {
    setCancelText(cancelTextValue)
    setConfirmText(confirmTextValue)
    return new Promise((resolve, reject) => {
      setText(Boolean(newText) ? newText : text)
      setShow(true)
      setResolvePromise(() => resolve)
    })
  }

  return [Modal, requestConfirmation]
}

export default useConfirm
