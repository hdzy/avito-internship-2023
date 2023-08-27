import {RefObject} from "react";

export type Game = {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    screenshots: Screenshots[],
}

type Screenshots = {
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

