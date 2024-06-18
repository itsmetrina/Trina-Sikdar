export interface MyProjects {
    src: string;
    link: string;
    h3: string;
    p: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    iconLink: string;
}

export interface MyExperience {
    company: string;
    role: string;
    startDate: Date;
    endDate: Date | string;
    description: string;
}