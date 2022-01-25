import React from 'react'
import { Btn } from 'mui-helpers'

const ExampleBtn = () => {
  return (
    <React.Fragment>
      <Btn.Menu />
      <Btn.Save text='Mi texto de guardar' fullWidth />
      <Btn.FinishTaskOnlyIcon onClick={() => alert('ON CLICK')} />
    </React.Fragment>
  )
}

export default ExampleBtn
