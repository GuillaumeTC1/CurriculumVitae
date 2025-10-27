export type Proficiency = "expert" | "advanced" | "intermediate" | "beginner"

export type SkillModel = {
    category: string;
    name: string;
    logoUrl: string;
    relevance: number;
    proficiency: Proficiency;
    details?: string;
};
