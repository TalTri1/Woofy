import React, { Dispatch, SetStateAction } from "react";
import { Box, Button, Typography } from "@mui/material";
import {BUSINESS_TYPES} from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";


type SelectServiceInputProps = {
    setSelectedServices: Dispatch<SetStateAction<BUSINESS_TYPES >>;
    selectedServices: BUSINESS_TYPES;
};

const SelectServiceTypeComponent: React.FC<SelectServiceInputProps> = ({ setSelectedServices, selectedServices }) => {
    const services = [
        { type: BUSINESS_TYPES.BOARDING, icon: "/icon--moon.svg", text: "Boarding" },
        { type: BUSINESS_TYPES.DAY_CARE, icon: "/icon--sun1.svg", text: "Day Care" },
        { type: BUSINESS_TYPES.DOG_SITTER, icon: "/icon--bed.svg", text: "Sitter" },
        { type: BUSINESS_TYPES.DOG_WALK, icon: "/icon--walk.svg", text: "Walker" },
    ];

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
            <Typography variant="h6">Select Your Service Type</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, overflow: "auto" }}>
                {services.map(service => (
                    <Button
                        key={service.type}
                        variant={selectedServices === service.type ? "contained" : "outlined"}
                        onClick={() => setSelectedServices(service.type)}
                        sx={{
                            padding: 1,
                            color: selectedServices === service.type ? "white" : "inherit",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                filter: selectedServices === service.type ? "invert(1) brightness(2)" : "none",
                            }}
                        >
                            <img
                                className="w-7 h-7 relative overflow-hidden shrink-0"
                                alt=""
                                src={service.icon}
                            />
                        </Box>
                        <Box
                            className={`ServiceTypeButtonText ${selectedServices === service.type ? "white-text" : ""}`}
                            sx={{ marginLeft: 1, whiteSpace: "nowrap" }}
                        >
                            {service.text}
                        </Box>
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default SelectServiceTypeComponent;