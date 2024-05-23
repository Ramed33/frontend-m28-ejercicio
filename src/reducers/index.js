import { combineReducers } from "redux";
import { shoppingCartReducer } from "./shoppingCartReducer";

const reducer = combineReducers({
    shopping: shoppingCartReducer,
});

export default reducer;