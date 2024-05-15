import React from "react";
import { Button, Box, Typography } from '@mui/material';
import {
    HOME_CONDITIONS
} from "../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/StayAtBusinessBaseModel";
import { formatEnumValue } from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";

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
                        sx={{ minWidth: '120px' }}
                    >
                        {formatEnumValue(condition)}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}
export default HomeConditionComponent;
