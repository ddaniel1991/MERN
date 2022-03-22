import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import dishService from './dishService'


// get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

// declaring initial state
const initialState = {
    dishes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create new dish
export const createDish = createAsyncThunk('dishes/create', async (dishData, thunkAPI) => {
    try {
        // retrieve token from user
        const token = thunkAPI.getState().auth.user.token
        //makes call to dishService register function which will handle http request
        return await dishService.createDish(dishData, token)
    } catch (error) {
        //if an error is returned, search in several places for the error message and return it
        const message = (error.response && error.response.data && error.response.data.message) || 
            error.message || error.toString()
        
        // returns error message as payload
        return thunkAPI.rejectWithValue(message)    
    }
})
export const updateDish = createAsyncThunk()
export const getDishes = createAsyncThunk()
export const deleteDish = createAsyncThunk()



export const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {
        reset: (state) => initialState

    },
    extraReducers: (builder) => {
        builder
            .addCase(createDish.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createDish.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.dishes.push(action.payload)
            })
            .addCase(createDish.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    }
})


export const {reset} = dishSlice.actions
export default dishSlice.reducer