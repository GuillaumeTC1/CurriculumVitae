export type AboutModel = {
    name: string;
    email: string;
    jobTitle: string;
    description: string;
};

export type EducationModel = {
    institutionName: string;
    degree: string;
    description: string;
    startDate: string;
    endDate?: string;
    logoUrl?: URL;
};

export type ExperienceModel = {
    companyName: string;
    jobTitle: string;
    description: string;
    startDate: string;
    endDate?: string;
    logoUrl?: URL;
};
