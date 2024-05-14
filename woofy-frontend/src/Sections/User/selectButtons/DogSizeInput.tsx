import {Size} from "../../../models/DogModels/DogModel";
import React from "react";
import { Button, Box, Typography } from '@mui/material';

type DogSizeInputProps = {
    selectedSize: Size[];
    onSizeClick: (size: Size) => void;
}

const DogSizeInput: React.FC<DogSizeInputProps> = ({onSizeClick, selectedSize}) => {
    const dogSizes = [
        {size: Size.SMALL, weight: '2-9 kg'},
        {size: Size.MEDIUM, weight: '9-22 kg'},
        {size: Size.LARGE, weight: '22-45 kg'},
        {size: Size.GIANT, weight: '45 kg +'},
    ];

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Acceptable Dog Sizes</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                {dogSizes.map(({size, weight}) => (
                    <Button
                        key={size}
                        variant={selectedSize.includes(size) ? "contained" : "outlined"}
                        onClick={() => onSizeClick(size)}>
                        {size} <br/> {weight}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default DogSizeInput;