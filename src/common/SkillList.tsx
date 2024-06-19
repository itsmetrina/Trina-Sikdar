import { Tooltip, IconButton } from "@mui/material"
import { SkillListProps } from "./interface"

const SkillList = ({ icon: Icon, skill, color }: SkillListProps) => {
    return (
        <Tooltip title={ skill }>
            <IconButton>
                <Icon style={{ color }} />
            </IconButton>
        </Tooltip>
    )
}

export default SkillList