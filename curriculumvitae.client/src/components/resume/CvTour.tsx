import { useAuthContext } from "@/components/auth/context";
import { Tour, TourProps } from "antd";
import { RefObject, useState } from "react";

export type CvTourProps = {
    experiencesRef: RefObject<HTMLElement>;
    educationRef: RefObject<HTMLElement>;
    personalsRef: RefObject<HTMLElement>;
    awardsRef: RefObject<HTMLElement>;
}

const cvTourStorageKey = "CvTourShow";

export const CvTour = (props: CvTourProps) => {

    const showTour: boolean = JSON.parse(localStorage.getItem(cvTourStorageKey) ?? "true");

    var authContex = useAuthContext();

    var [tourOpen, setTourOpen] = useState(showTour ? true : false);

    const closeTour = () => {
        setTourOpen(false);
        localStorage.setItem(cvTourStorageKey, "false");
    }

    const steps: TourProps['steps'] = [
        {
            title: 'Welcome abroad!',
            description: `Hey ${authContex.user?.given_name}, nice to see here.`
        },
        {
            title: 'Check out my previous experiences...',
            target: () => props.experiencesRef.current!
        },
        {
            title: '...and education...',
            target: () => props.educationRef.current!
        },
        {
            title: '...and personnal projects there...',
            target: () => props.personalsRef.current!
        },
        {
            title: '...and awards here.',
            target: () => props.awardsRef.current!
        }
    ];

    return (
        <Tour
            open={tourOpen}
            steps={steps}
            onClose={closeTour} />
    );
}