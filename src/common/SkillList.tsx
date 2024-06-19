import { SkillListProps } from "./interface"

const SkillList = ({ icon: Icon, color }: SkillListProps) => {
    return (
        <span>
            <Icon style={{ color }} />
            {/* <p>{skill}</p> */}
        </span>
    )
}

export default SkillList