import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GameMininmified} from "../types";



type GamesState = {
    games: GameMininmified[],
    isLoading: boolean,
    amount: number,
    gamesLimits: GamesLimits,

}

type GamesLimits = {
    start: number,
    end: number,
}

const initialState: GamesState = {
    games: [],
    isLoading: true,
    amount: 0,
    gamesLimits: {
        start: 0,
        end: 12,
    }
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

        updateAmount(state, action) {
            state.amount = action.payload;
        },

        updateGamesLimits(state) {
            state.gamesLimits = {
                start: state.gamesLimits.start + 12,
                end: state.gamesLimits.end + 12,
            };
        }
    }
});

export const { gamesReceived, updateGamesLimits, updateAmount, gamesLoading } = gamesSlice.actions;

export default gamesSlice.reducer;