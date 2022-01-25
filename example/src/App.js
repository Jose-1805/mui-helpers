import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'mui-helpers/dist/index.css'
import ExampleBoxLoading from './components/box_loading/ExampleBoxLoading'
import ExampleIcon from './components/icon/ExampleIcon'
import ExampleBugList from './components/bug_list/ExampleBugList'
import ExampleUseColorClasses from './components/use_color_classes/ExampleUseColorClasses'
import ExampleTransitionalModal from './components/transitional_modal/ExampleTransitionalModal'
import ExampleBtn from './components/btn/ExampleBtn'
import ExampleDialogConfirm from './components/dialog_confirm/ExampleDialogConfirm'

const App = () => {
  return (
    <Provider store={store}>
      <ExampleBoxLoading />
      <ExampleIcon />
      <ExampleBugList />
      <ExampleUseColorClasses />
      <ExampleTransitionalModal />
      <ExampleBtn />
      <ExampleDialogConfirm />
    </Provider>
  )
}

export default App
