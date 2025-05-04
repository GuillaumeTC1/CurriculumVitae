import { useEffect, useState } from "react";

export function useAsync<T>(func: () => Promise<T>, deps?: React.DependencyList) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<T>();

    useEffect(
        () => {
            setLoading(true);
            setError(null);
            setData(undefined);

            func()
                .then(data => setData(data))
                .catch(error => setError(error))
                .finally(() => setLoading(false));

            return () => setLoading(false);
        },
    deps ?? []);

    return { loading, error, data };
}