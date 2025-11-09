import { DependencyList, useEffect } from "react";

type ScrollToEndRef = React.RefObject<HTMLDivElement | null>;

export const useScrollToEnd = (ref: ScrollToEndRef, dependencies: DependencyList) => {

    if (!ref) return;

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, dependencies);
}