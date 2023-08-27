import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type { RootState, AppDispatch } from './store'
import {RefObject, useEffect, useState} from "react";
import {updateGamesLimits} from "./store/gamesSlice";

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useIsVisible(ref: RefObject<any>) {
    const [isIntersecting, setIntersecting] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)

            if (entry.isIntersecting) {
                dispatch(updateGamesLimits());
            }
    });

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}