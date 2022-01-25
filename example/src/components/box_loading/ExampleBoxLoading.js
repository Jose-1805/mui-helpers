import React, { useState } from 'react'
import { BoxLoading, useBoxLoadingActions } from 'mui-helpers'

const ExampleBoxLoading = () => {
  const { actShowBoxLoading, actHideBoxLoading, actSetSrcDefault } =
    useBoxLoadingActions()

  const [show, setShow] = useState(false)

  const handleClickOpenWithState = () => {
    actSetSrcDefault(
      'https://thumbs.gfycat.com/AstonishingMassiveDiplodocus-size_restricted.gif'
    )
    actShowBoxLoading(
      'Box loading abierto desde el estado de la aplicación (espere 5 segundos)'
    )
    setTimeout(() => {
      actHideBoxLoading()
    }, 5000)
  }

  const handleClickWithoutState = () => {
    actSetSrcDefault(null)
    setShow(!show)
  }

  return (
    <React.Fragment>
      <BoxLoading fullScreen withState>
        <button onClick={handleClickOpenWithState}>
          ABRIR BOX LOADING PANTALLA COMPLETA (CON ESTADO)
        </button>
      </BoxLoading>

      <BoxLoading
        withState={false}
        show={show}
        noImage
        text='Controlado desde el estado del componente'
      >
        <div style={{ border: '1px solid blue', padding: '1rem' }}>
          <h2>EJEMPLO DE BOX LOADING SIN ESTADO DE LA APLICACIÓN</h2>
        </div>
      </BoxLoading>
      <button onClick={handleClickWithoutState}>
        {show ? 'CERRAR' : 'ABRIR'} BOX LOADING
      </button>
    </React.Fragment>
  )
}

export default ExampleBoxLoading
