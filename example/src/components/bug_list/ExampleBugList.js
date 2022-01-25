import React from 'react'
import { BugList } from 'mui-helpers'

const ExampleBugList = () => {
  return (
    <BugList
      type='general'
      data={[
        'Primer mensaje de error',
        'Segundo mensaje de error',
        'Tercer mensaje de error'
      ]}
    />
  )
}

export default ExampleBugList
