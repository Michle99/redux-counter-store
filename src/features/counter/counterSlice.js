import { createSlice } from "@reduxjs/toolkit";

// step 5 - create a Redux State Slice
//Redux Toolkit's createSlice and createReducer APIs use 
//Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

// Define a type for the slice state
// interface CounterState {
//     value: number
// }

// // Define the initial state using that type
// const initialState: CounterState = {
//     value: 0
// }

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },

    reducers: {
        increment: state => {
             // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

//Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = ammount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(ammount));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
