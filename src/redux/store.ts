import {configureStore} from "@reduxjs/toolkit"
import taskManager from './features/todos'
import popupTraker from './features/popup'
import selectedTask from './features/selectedTask'


export const store = configureStore ({

    reducer: {
        taskManager,
        popupTraker,
        selectedTask

        

    }
})

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;