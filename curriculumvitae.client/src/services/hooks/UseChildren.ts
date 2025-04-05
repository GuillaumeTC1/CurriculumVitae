import { useMemo } from "react";

export function useChildren<T>(children: T | T[]) : T[] {

    return useMemo(
        () => Array.isArray(children) ? children : [children]
        , [children])
}