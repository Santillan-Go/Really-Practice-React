import {combineReducers} from "redux";
import { todoSlice } from "../FEATURE-S";
import { CartSlice } from "../features/cart/cartSlice";
import { counterReducer } from "../features/cart/counter/couterReducer";

const reducers=combineReducers({

    todos:todoSlice.reducer,
    cart:CartSlice.reducer,
    counter:counterReducer
});


export default reducers;