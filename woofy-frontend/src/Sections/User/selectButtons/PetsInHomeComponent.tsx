import React from "react";
import { Button, Box, Typography } from '@mui/material';
import { formatEnumValue } from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";
import {PETS_IN_HOME} from "../../../models/Enums/Enums";

type FormUpdate = {
    selectedPetsInHome: PETS_IN_HOME[];
    clickPetsInHomeHandler: (homeConditions: PETS_IN_HOME) => void;
}

const PetsInHomeComponent: React.FC<FormUpdate> = ({ clickPetsInHomeHandler, selectedPetsInHome }) => {
    const petsInHomeConditions = Object.values(PETS_IN_HOME);

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Pets in Your Home</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                {petsInHomeConditions.map(condition => (
                    <Button
                        key={condition}
                        variant={selectedPetsInHome.includes(condition) ? "contained" : "outlined"}
                        onClick={() => clickPetsInHomeHandler(condition)}
                        size={"medium"}
                    >
                        {formatEnumValue(condition)}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}
export default PetsInHomeComponent;
