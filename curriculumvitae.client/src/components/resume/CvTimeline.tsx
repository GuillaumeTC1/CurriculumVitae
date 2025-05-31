import { Timeline } from "antd";
import { ReactNode } from "react";

export type CvTimelineProps<T> = {
    items: T[]
    render: (item: T) => ReactNode
}

export const CvTimeline = <T,>(props: CvTimelineProps<T>) => {

    return (
        <Timeline
            mode="left"
            items={props.items!.map(item => ({
                children: props.render(item)
            }))} />
    );
}