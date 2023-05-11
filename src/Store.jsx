import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const Store = configureStore({
    reducer: {todo: Slice }
})

export default Store;


