import { useAsync } from "@/hooks/useAsync";
import { IMessage } from "./Message";
import axios from "axios";
import { useEffect } from "react";

export type UseMessageHistoryOptions = {
    onHistoryLoaded?: (history: IMessage[]) => void;
}

export const useMessageHistory = (options?: UseMessageHistoryOptions) => {

    const {
        data: history,
        loading: historyLoading
    } = useAsync(() => axios.get<IMessage[]>("/chat/history")
        .then(response => response.data));

    useEffect(() => {
        options?.onHistoryLoaded?.(history || []);
    }, [history]);

    return { history, historyLoading };
}