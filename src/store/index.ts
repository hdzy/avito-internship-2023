import {configureStore} from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import gameReducer from './gameSlice';


const store = configureStore({
    reducer: {
       games: gamesReducer,
        game: gameReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;