import { useAuthContext } from "@/components/auth/context";
import { useRefById } from "@/hooks/useRefById";
import { Tour, TourProps } from "antd";
import { useState } from "react";

export type ResumeTourProps = {}

const tourStorageKey = "gtc-net:resume-tour";

export const ResumeTour = (_: ResumeTourProps) => {

    const showTour: boolean = JSON.parse(localStorage.getItem(tourStorageKey) ?? "true");
    var authContex = useAuthContext();

    var [tourOpen, setTourOpen] = useState(showTour ? true : false);

    const closeTour = () => {
        setTourOpen(false);
        localStorage.setItem(tourStorageKey, "false");
    }

    // var infoRef = useRefById("info");
    var experiencesRef = useRefById("experiences");
    var educationRef = useRefById("education");
    var skillsRef = useRefById("skills");
    var chatRef = useRefById("chat-icon");

    const steps: TourProps['steps'] = [
        {
            title: 'Welcome aboard!',
            description: `Hey ${authContex.user?.given_name}, nice to see here.`
        },
        {
            title: 'Check out my previous experiences...',
            target: () => experiencesRef.current!
        },
        {
            title: '...and education...',
            target: () => educationRef.current!
        },
        {
            title: '...and skills there...',
            target: () => skillsRef.current!
        },
        {
            title: '...and finally an AI chat here where you can ask anything about Guillaume!',
            target: () => chatRef.current!
        }
    ];

    return (
        <Tour
            open={tourOpen}
            steps={steps}
            onClose={closeTour} />
    );
}