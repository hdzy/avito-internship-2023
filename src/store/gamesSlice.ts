import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GameMininmified, GamesState, Platforms, SortDirection, Sorting} from "../types";


const initialState: GamesState = {
    games: [],
    isLoading: true,
    amount: 0,
    gamesLimits: {
        start: 0,
        end: 12,
    },
    sort: Sorting.Relevance,
    sortDirection: SortDirection.ascending,
    platform: Platforms.All
}


const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        gamesLoading(state) {
            state.isLoading = true;
        },

        gamesReceived(state, action:PayloadAction<GameMininmified[]>) {
           const games = action.payload;

            games.forEach((e) => {
                let releaseDate = e.release_date;
                e.release_date =  releaseDate.substring(releaseDate.length - 2) + '.' + releaseDate.substring(releaseDate.length - 5, releaseDate.length - 3) + '.' + releaseDate.substring(0, 4);
            });

           state.games = [...state.games, ...games];
           state.isLoading = false;
        },

        updateAmount(state, action:PayloadAction<number>) {
            state.amount = action.payload;
        },

        /*
         * TODO: Ограничить максимальным количество игр запросы
         */

        updateGamesLimits(state) {
            state.gamesLimits = {
                start: state.gamesLimits.start + 12,
                end: state.gamesLimits.end + 12,
            };
        },

        updateSortStatus(state, action: PayloadAction<Sorting>) {
            state.sort = action.payload;
            state.games = [];

            state.gamesLimits = {
                start: 0,
                end: 12,
            }
        },

        updateSortDirection(state) {

            state.sortDirection = state.sortDirection === SortDirection.ascending ? SortDirection.descending : SortDirection.ascending
            state.games = [];

            state.gamesLimits = {
                start: 0,
                end: 12,
            }
        },

        updatePlatformStatus(state, action: PayloadAction<Platforms>) {
            state.platform = action.payload;
            state.games = [];

            state.gamesLimits = {
                start: 0,
                end: 12,
            }
        },

    }
});

export const { gamesReceived, updateGamesLimits, updateAmount, gamesLoading, updateSortStatus, updateSortDirection, updatePlatformStatus } = gamesSlice.actions;

export default gamesSlice.reducer;