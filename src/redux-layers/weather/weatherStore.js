import { createStore } from "redux";
import weatherReducer from "./weatherReducer";
const weatherStore = createStore(weatherReducer);
export default weatherStore;
