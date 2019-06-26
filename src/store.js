import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

typeof window === "object" &&
typeof window.__REDUX_DEVTOOLS_EXTENSION___ !== "undefined"
  ? window.__REDUX_DEVTOOLS_EXTENSION___()
  : f => f;

export default store;
