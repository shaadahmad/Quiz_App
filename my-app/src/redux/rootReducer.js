import { combineReducers } from "redux";
// import reducer from "./cakes/reducer";
// import cakeReducer from "./cakes/reducer";
// import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from './User/userReducer'
import newReducer from './Register/R_Reducer'

const rootReducer= combineReducers({
    // cake: reducer,
    // iceCream:iceCreamReducer,
    user:userReducer,
    auth:newReducer
})

export default rootReducer