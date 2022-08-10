import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import MovieReducer from "./features/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movie: MovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
// Fix Redux run a saga by using agaMiddleware.run(saga, ...args)
for (let rootSagas in rootSaga) {
  sagaMiddleware.run(rootSaga[rootSagas]);
}

export default store;
