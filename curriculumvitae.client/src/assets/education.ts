import { IFormation } from "../models/iformation";

export const education: IFormation[] = [
    {
        school: "Ecole Centrale de Marseille",
        diploma: "Master of Engineering",
        description: "Generalist degree (Computer Science Major) providing a solid scientific knowledge as wellas project management skills. Admission by competitive examination after two years ofpreparatory class. • President of the Ski Association (2020) • Tutor for Phocean Exchanges",
        startDate: new Date("09/01/2019"),
        endDate: new Date("09/30/2022"),
    },
    {
        school: "Université Aix-Marseille",
        diploma: "Master of Science",
        description: "Methods for automatic generation of 3D objects, geometry processing algorithms forcomputer-aided design, rendering, animation, virtual and augmented reality, and thevideo game industry.",
        startDate: new Date("09/01/2021"),
        endDate: new Date("09/30/2022"),
    },
    {
        school: "Lycée Jean Dautet",
        diploma: "Maths Sup/Maths Spé",
        description: "Very intensive 2 years program to prepare competitive examination of engineeringschools in France.",
        startDate: new Date("09/01/2017"),
        endDate: new Date("09/02/2019"),
    }
]