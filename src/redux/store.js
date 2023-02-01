import { createStore } from "redux"
import productReducer from "./reducers/productReducer";

const newStore = createStore(productReducer);

export default newStore;