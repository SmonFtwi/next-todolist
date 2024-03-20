import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a single task
export type Task = {
    id: number;
    Tasktitle: string;
    dueDate: string;
    complete: boolean; // Add the complete property
  };
  

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
            // Filter out the task with the specified id
            state.value = state.value.filter(task => task.id !== action.payload);
            return state;
          },
        // Update the updateTask action to accept both the task id and the updated task
        updateTask: (state, action: PayloadAction<{ id: number; updatedTask: Task }>) => {
          const { id, updatedTask } = action.payload;
          const taskToUpdateIndex = state.value.findIndex(task => task.id === id);
           if (taskToUpdateIndex !== -1) {
              state.value[taskToUpdateIndex] = updatedTask;
    }
}

    }
});

// Export actions and reducer
export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
