import {RouteType} from "../types";
import Home from "../pages/Home/Home";
import {GamePage} from "../pages/GamePage/GamePage";
import ErrorPage from "../pages/404/ErrorPage";

export const routes: RouteType[] = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/game/:id',
        element: GamePage,
    },
    {
        path: '*',
        element: ErrorPage
    }
]