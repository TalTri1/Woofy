import React from "react";
import { Button, Box, Typography } from '@mui/material';
import { formatEnumValue } from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";
import {HOME_CONDITIONS} from "../../../models/Enums/Enums";

type FormUpdate = {
    selectedHomeConditions: HOME_CONDITIONS[];
    clickHomeConditionsHandler: (homeConditions: HOME_CONDITIONS) => void;
}

const HomeConditionComponent: React.FC<FormUpdate> = ({ clickHomeConditionsHandler, selectedHomeConditions }) => {
    const homeConditions = Object.values(HOME_CONDITIONS);

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Your Home Conditions</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                {homeConditions.map(condition => (
                    <Button
                        key={condition}
                        variant={selectedHomeConditions.includes(condition) ? "contained" : "outlined"}
                        onClick={() => clickHomeConditionsHandler(condition)}
                        size={"medium"}
                    >
                        {formatEnumValue(condition)}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}
export default HomeConditionComponent;
