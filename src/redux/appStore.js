import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import orderReducer from "./deliverSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const combinedReducer = combineReducers({
    user: userReducer.reducer,
    order: orderReducer.reducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,combinedReducer);

export const store = configureStore({
    // reducer :{
    //     user: userReducer,
    //     user2: userReducer2
    // }
    reducer : persistedReducer,
    // middleware : [thunk]
});

export const persistor = persistStore(store);