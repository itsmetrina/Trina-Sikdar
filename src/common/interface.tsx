import { IconType } from "react-icons";

export interface MyProjects {
    src: string;
    link: string;
    h3: string;
    p: string;
}

export interface Skill {
    name: string;
    iconLink: IconType;
    duration: number;
    y: number;
}

export interface SkillListProps {
    icon: React.ElementType;
    duration: number;
    y: number;
}

export interface MyExperience {
    company: string;
    role: string;
    startDate: Date;
    endDate: Date | string;
    description: string;
}