import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GameMininmified} from "../types";



type GamesState = {
    games: GameMininmified[],
    isLoading: boolean,
}

const initialState: GamesState = {
    games: [],
    isLoading: true,
}


const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        gamesLoading(state) {
            state.isLoading = true;
        },

        gamesReceived(state, action) {
           state.games = [...state.games, ...action.payload];
           state.isLoading = false;
        },
    }
});

export const { gamesReceived } = gamesSlice.actions;

export default gamesSlice.reducer;