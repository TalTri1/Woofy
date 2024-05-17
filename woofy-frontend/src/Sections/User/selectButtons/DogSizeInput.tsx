import React from "react";
import {Button, Box, Typography} from '@mui/material';
import {Size} from "../../../models/DogModels/DogModel";
import {formatEnumValue} from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";

type DogSizeInputProps = {
    selectedSize: Size | Size[];
    onSizeClick: (size: Size) => void;
    multiple: boolean;
};

const DogSizeInput: React.FC<DogSizeInputProps> = ({onSizeClick, selectedSize, multiple}) => {
    const dogSizes = [
        {size: Size.SMALL, weight: '2-9 kg'},
        {size: Size.MEDIUM, weight: '9-22 kg'},
        {size: Size.LARGE, weight: '22-45 kg'},
        {size: Size.GIANT, weight: '45 kg +'},
    ];

    const isSelected = (size: Size) => {
        if (multiple) {
            return Array.isArray(selectedSize) ? selectedSize.includes(size) : false;
        }
        return selectedSize === size;
    };

    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: 2}}>
            <Typography variant="h6" sx={{textAlign: 'center'}}>
                {multiple ? "Acceptable Dog Sizes" : "What is your dog's size?"}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2}}>
                {dogSizes.map(({size, weight}) => (
                    <Button
                        key={size}
                        variant={isSelected(size) ? "contained" : "outlined"}
                        onClick={() => onSizeClick(size)}
                        size="medium"
                    >
                        {size} <br/> {weight}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};
export default DogSizeInput;
