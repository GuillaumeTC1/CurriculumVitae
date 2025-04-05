import clsx, { ClassValue } from "clsx";

export function cnMerge(...classes: ClassValue[]) {

    return clsx(...classes);
}