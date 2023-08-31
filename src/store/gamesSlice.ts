import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GameMininmified, GamesState, Platforms, SortDirection, Sorting} from "../types";


const initialState: GamesState = {
    games: [],
    isLoading: true,
    isError: false,
    requestRemains: 3,
    amount: 0,
    gamesLimits: {
        start: 0,
        end: 12,
    },
    sort: Sorting.Relevance,
    sortDirection: SortDirection.ascending,
    platform: Platforms.All,
    tags: [],
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

            if (Object.keys(games).length < 1) {
                state.isLoading = false;
                state.isError = false;
            } else {
                games.forEach((e) => {
                    let releaseDate = e.release_date;
                    e.release_date =  releaseDate.substring(releaseDate.length - 2) + '.' + releaseDate.substring(releaseDate.length - 5, releaseDate.length - 3) + '.' + releaseDate.substring(0, 4);
                });

                state.games = [...state.games, ...games];
                state.isLoading = false;
                state.isError = false;
            }
        },

        gamesError(state) {
            state.isError = true;
            state.requestRemains = state.requestRemains - 1;
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

        updateTags(state, action: PayloadAction<string>) {

            const index = state.tags.indexOf(action.payload);

            if (index === -1) {
                state.tags.push(action.payload);
            } else {
                state.tags.splice(index, 1);
            }

            state.games = [];

            state.gamesLimits = {
                start: 0,
                end: 12,
            }
        }

    }
});

export const {
    gamesReceived,
    updateGamesLimits,
    updateAmount,
    gamesLoading,
    gamesError,
    updateSortStatus,
    updateSortDirection,
    updatePlatformStatus,
    updateTags,
} = gamesSlice.actions;

export default gamesSlice.reducer;