import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    errors: null,
    isLoading: null,
    trigger: null,
    carForUpdate: null
}

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async (_, thunkAPI)=> {
        try{
            await new Promise((resolve, reject) => setTimeout(resolve, 2000))
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
);

const create = createAsyncThunk(
    "carSlice/create",
    async ({car}, thunkAPI)=> {
        try {
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            await carService.create(car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    "carSlice/updateById",
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteById = createAsyncThunk(
    "carSlice",
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        // setCars:(state, action) => {
        //     state.cars = action.payload;
        // }
        setCarForUpdate:(state, action) => {
            state.carForUpdate = action.payload.car;
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]:(state, action) => {
    //         state.cars = action.payload;
    //         state.isLoading = false;
    //         state.errors = null;
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.errors = action.payload;
    //         state.isLoading = false;
    //     },
    //     [getAll.pending]: state => {
    //         state.isLoading = true;
    //     }
    // }
    extraReducers: builder => {
        builder
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.cars = action.payload;
            //     state.isLoading = false;
            //     state.errors = null;
            // })
            // .addCase(getAll.rejected, (state, action) => {
            //     state.errors = action.payload;
            //     state.isLoading = false;
            // })
            // .addCase(getAll.pending, state => {
            //     state.isLoading = true;
            // })
            // .addCase(create.fulfilled, (state, action) => {
            //     state.trigger = !state.trigger;
            //     state.isLoading = false;
            //     state.errors = null;
            // })
            // .addCase(create.rejected, (state, action) => {
            //     state.errors = action.payload;
            //     state.isLoading = false;
            // })
            // .addCase(create.pending, state => {
            //     state.isLoading = true;
            // })
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(updateById.fulfilled, state => {
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(getAll, create, updateById, deleteById), state => {
                state.isLoading = false;
                state.errors = null;
            })
            .addMatcher(isRejected(getAll, create, updateById, deleteById), (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
            .addMatcher(isPending(getAll, create, updateById, deleteById), (state, action) => {
                state.isLoading = true;
            })
            .addMatcher(isFulfilled(create, updateById, deleteById), state => {
                state.trigger = !state.trigger;
            })
    }
});

const {reducer: carReducer, actions} = carSlice;

const carAction = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
};

export {carReducer, carAction}