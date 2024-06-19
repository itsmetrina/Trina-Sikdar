import { IconType } from "react-icons";

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
    iconLink: IconType;
    color: string;
}

export interface SkillListProps {
    icon: React.ElementType;
    skill: string;
    color: string;
}

export interface MyExperience {
    company: string;
    role: string;
    startDate: Date;
    endDate: Date | string;
    description: string;
}