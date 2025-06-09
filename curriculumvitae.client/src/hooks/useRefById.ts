import { useEffect, useRef } from "react"

export const useRefById = (id: string) => {

    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = document.getElementById(id);

        //@ts-ignore
        if (element) ref.current = element;
    }, [id])

    return ref;
}