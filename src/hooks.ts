import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type { RootState, AppDispatch } from './store'
import {RefObject, useEffect, useState} from "react";

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useIsVisible(ref: RefObject<any> | null) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
    });

        if (ref) {
            observer.observe(ref?.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}
