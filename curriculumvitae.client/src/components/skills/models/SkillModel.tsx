export type Level = "expert" | "advanced" | "intermediate" | "beginner"

export type SkillModel = {
    type: string;
    name: string;
    logoUrl: string;
    relevance: number;
    level: Level;
    details?: string;
};
