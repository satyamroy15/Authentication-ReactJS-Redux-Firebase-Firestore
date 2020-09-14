import { applyMiddleware, createStore } from "redux"
import thunkMiddleware  from "redux-thunk"
import { verifyUser } from "./actions"
import  rootReducer  from "./reducers"

// Export function to return the configured store
export default function configureStore(persistedState){
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyUser());
    return store;
}

