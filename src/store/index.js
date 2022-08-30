import { configureStore } from "@reduxjs/toolkit"
import authorization from "./Authorization.store"

const store = configureStore({
    reducer: {
        currentUser:authorization
    }
})

export default store;