import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './App';
import { Provider } from "react-redux"
import store from "./redux/configStore"
import { PersistGate } from "redux-persist/integration/react"
import { checkUserSession }   from './redux/user/userAction';
import { persistStore } from "redux-persist";
import LoadingPage from './pages/loading/loading.component';



const persistor = persistStore(store) 

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(<LoadingPage />, document.getElementById("root"))

store.dispatch(checkUserSession())

const timerId = setInterval(() => {
  if (store.getState().user.isFetched){
    clearInterval(timerId)
    ReactDOM.render(jsx, document.getElementById("root"))
  }
} , 500);




