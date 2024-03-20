import {configureStore} from "@reduxjs/toolkit"
import taskManager from './features/todos'


export const store = configureStore ({

    reducer: {
        taskManager,
        

    }
})

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;