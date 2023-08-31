import { ComponentType } from "react";

export type Game = {
    id: number,
    title: string,
    status: string,
    thumbnail: string,
    short_description: string,
    description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    screenshots: Screenshots[],
    minimum_system_requirements: SystemRequirements | undefined,
}

export type SystemRequirements = {
    os: string,
    processor: string,
    memory: string,
    graphics: string,
    storage: string,
}

export type Screenshots = {
    id: number,
    image: string,
}


export type GameMininmified = {
    id: number,
    title: string,
    publisher: string,
    genre: string,
    thumbnail: string,
    release_date: string,
}

export type GamesState = {
    games: GameMininmified[],
    isLoading: boolean,
    amount: number,
    gamesLimits: GamesLimits,
    sort: Sorting,
    sortDirection: SortDirection,
    platform: Platforms,
    tags: string[],
}

type GamesLimits = {
    start: number,
    end: number,
}

export type RouteType = {
    path: string,
    element: ComponentType,
}

export type FilterItem = {
    key: Sorting | Platforms | string,
    label: JSX.Element,
}

export enum Sorting {
    Popularity = 'popularity',
    ReleaseDate = 'release-date',
    Alphabetical = 'alphabetical',
    Relevance = 'relevance',
}

export enum Platforms {
    All = 'all',
    PC = 'pc',
    Browser = 'browser',
}

/**
 * 0 - в порядке возрастания
 * 1 - в порядке убывания
 */
export enum SortDirection {
    ascending= 0,
    descending = 1,
}

