import React from "react";
import { TextField, Box, Typography, Button } from '@mui/material';
import DogSizeInput from "../../selectButtons/DogSizeInput";
import { Size } from "../../../../models/DogModels/DogModel";
import { WEEKDAYS } from "../../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";

type FormUpdate = {
    selectedSize: Size[];
    onSizeClick: (size: Size) => void;
    selectedDays: WEEKDAYS[];
    clickWorkingDaysHandler: (day: WEEKDAYS) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const BusinessTypesBaseRegistration: React.FC<FormUpdate> = ({
                                                                 onSizeClick,
                                                                 selectedSize,
                                                                 handleInputChange,
                                                                 selectedDays,
                                                                 clickWorkingDaysHandler
                                                             }) => {
    return (
        <Box component="form" sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <DogSizeInput selectedSize={selectedSize} onSizeClick={onSizeClick} />
            <Typography variant="h6">Dog Capacity Per Day</Typography>
            <TextField
                fullWidth
                placeholder="Number of Dogs*"
                type="number"
                name="dogCapacity"
                required={true}
                onChange={handleInputChange}
            />
            <Typography variant="h6">About yourself</Typography>
            <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Tell us about the Service..."
                name="about"
                onChange={handleInputChange}
            />
            <Typography variant="h6">Asked Price For Service (Per Visit)</Typography>
            <TextField
                fullWidth
                placeholder="Price*"
                type="number"
                required={true}
                name="price"
                onChange={handleInputChange}
            />
            <Typography variant="h6">Availability For Service</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <TextField
                    fullWidth
                    label="Start Date"
                    type="date"
                    name="startDate"
                    required={true}
                    onChange={handleInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    label="End Date"
                    type="date"
                    name="endDate"
                    required={true}
                    onChange={handleInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
            <Typography variant="h6">Working Days</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
                {Object.values(WEEKDAYS).map(day => (
                    <Button
                        key={day}
                        variant={selectedDays.includes(day) ? "contained" : "outlined"}
                        onClick={() => clickWorkingDaysHandler(day)}
                    >
                        {day}
                    </Button>
                ))}
            </Box>
            <Typography variant="h6">Working Hours</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <TextField
                    fullWidth
                    label="Start Time"
                    type="time"
                    name="startTime"
                    required={true}
                    onChange={handleInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    label="End Time"
                    type="time"
                    name="endTime"
                    required={true}
                    onChange={handleInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
        </Box>
    )
}

export default BusinessTypesBaseRegistration;
