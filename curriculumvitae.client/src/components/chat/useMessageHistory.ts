import { useAsync } from "@/hooks/useAsync";
import { IMessage } from "./Message";
import { useEffect } from "react";

async function fetchMessageHistory(): Promise<IMessage[]> {
    const response = await fetch("/chat/history");
    if (!response.ok) {
        throw new Error("Failed to fetch message history");
    }
    return response.json();
}

export type UseMessageHistoryOptions = {
    onHistoryLoaded?: (history: IMessage[]) => void;
}

export const useMessageHistory = (options?: UseMessageHistoryOptions) => {

    const {
        data: history,
        loading: historyLoading
    } = useAsync(fetchMessageHistory);

    useEffect(() => {
        options?.onHistoryLoaded?.(history || []);
    }, [history]);

    return { history, historyLoading };
}