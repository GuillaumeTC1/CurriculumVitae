export enum SkillTypes {
    Software,
    Tech,
    Management,
    Language
}

export interface ISkill {
    type: SkillTypes;
    detail: string;
}