import { createStore , applyMiddleware  } from "redux"
import rootReducer from "./root-reducer"
import logger from "redux-logger"
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [ thunk , sagaMiddleware ]

if(process.env.NODE_ENV === "development" ){
    middlewares.push(logger);
}


const store = createStore(rootReducer, applyMiddleware(...middlewares))

 sagaMiddleware.run(rootSaga)

export default store 