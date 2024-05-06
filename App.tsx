//React and Library Imports
import React from 'react'
import 'react-native-reanimated'
import 'react-native-gesture-handler'

//Redux Imports
import { Provider } from 'react-redux'
import { store } from './src/store/store'

//Routes
import Routes from './src/Routes/routes'
import Toast from 'react-native-toast-message'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
        <Toast />
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App