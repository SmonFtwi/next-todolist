import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PopupState {
    addPopup: boolean;
    updatePopup: boolean;
}

const initialState: PopupState = {
    addPopup: false,
    updatePopup: false,
};

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setAddPopup: (state, action: PayloadAction<boolean>) => {
            state.addPopup = action.payload;
        },
        setUpdatePopup: (state, action: PayloadAction<boolean>) => {
            state.updatePopup = action.payload;
        },
    }
});

export const { setAddPopup, setUpdatePopup } = popupSlice.actions;
export default popupSlice.reducer;
