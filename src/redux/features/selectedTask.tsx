
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from './todos';

interface SelectedTaskState {
  selectedTask: Task | null;
}

const initialState: SelectedTaskState = {
  selectedTask: null,
};

const selectedTaskSlice = createSlice({
  name: 'selectedTask',
  initialState,
  reducers: {
    setSelectedTask: (state, action: PayloadAction<Task | null>) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { setSelectedTask } = selectedTaskSlice.actions;
export default selectedTaskSlice.reducer;
