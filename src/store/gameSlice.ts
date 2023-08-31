import {Game, GameState} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: GameState = {
    game: null,
    isLoading: true,
    isError: false,
    requestRemains: 3
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        gameLoading(state) {
            state.isLoading = true;
        },

        updateGame(state, action: PayloadAction<Game>) {
           state.game = {...action.payload};
           state.isLoading = false;
        },

        errorGameLoading(state) {
            state.isError = true;
            state.requestRemains = state.requestRemains - 1;
        }
    }
});

export const {
    gameLoading,
    updateGame,
    errorGameLoading
} = gameSlice.actions;

export default gameSlice.reducer;