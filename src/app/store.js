import  { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//step 1 => npm install @reduxjs/toolkit react-redux
//step 2 => create a redux store
export default configureStore({
    reducer: {
        //step 6- Add Slice Reducers to Store
        counter: counterReducer,
    }
})

