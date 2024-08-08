import moment, { Duration } from "moment";

declare global {
    export interface Date {
        diff(other?: Date): number;
        duration(other?: Date): Duration;
        toLiteralDateString(): string;
        toLiteralDurationString(): string;
    }
}

/*
    Returns the number of milliseconds beetwen given dates. If "other" is not provided, returns diff with current date.
*/
Date.prototype.diff = function (other?: Date) {

    const start = moment(this)
    const end = moment(other ?? Date.now())
    return end.diff(start);
}

/*
    Returns a duration object of the difference beetwen given dates. If "other" is not provided, returns duration with current date.
*/
Date.prototype.duration = function (other?: Date) {

    return moment.duration(this.diff(other));
}

/*
    Returns a literal formatted date string.
*/
Date.prototype.toLiteralDateString = function () {

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return this.toLocaleDateString(undefined, options);
}