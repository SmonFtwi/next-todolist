import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a single task
export type Task ={
    id: number;
    Tasktitle: string;
    dueDate: string;
}

// Define the initial state
const initialState: { value: Task[] } = {
    value: []
};

// Create a slice
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.value.push(action.payload);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            state.value = state.value.map(task => 
                task.id === action.payload.id ? action.payload : task
            );
        }
    }
});

// Export actions and reducer
export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
