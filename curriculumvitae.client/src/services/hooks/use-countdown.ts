import { useEffect, useState } from "react";

export function useCountdown(time: number, timestep: number = 1) {

    const [countdown, setCountdowwn] = useState(time);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setCountdowwn(countdown - timestep)
        }, timestep * 1000);

        return () => clearInterval(timeout);
    }, [countdown]);

    return countdown;
}