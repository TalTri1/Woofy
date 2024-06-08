import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, TextField, Grid, Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { UserContext } from "../../../provider/UserProvider";
import {api} from "../../../api/api";
import { Age, Size, TrainingLevel } from "../../../models/Enums/Enums";
import { formatEnumValue } from "../../../utils/format-enum-text";

const DogProfileView = () => {
    const { userDetails } = useContext(UserContext);
    const [dogData, setDogData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [dogProfile, setDogProfile] = useState({
        dogName: "",
        dogBreed: "",
        age: "",
        size: "",
        trainingLevel: "",
        about: "",
        specialRequirements: "",
        pictures: []
    });

    useEffect(() => {
        if (userDetails && userDetails.id) {
            api.post('dogs/getByUserId', { id: userDetails.id })
                .then(response => {
                    if (response.data) {
                        setDogData(response.data);
                        setDogProfile(response.data);
                    }
                })
                .catch(error => {
                    console.error('Error fetching dog', error);
                });
        }
    }, [userDetails]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDogProfile({
            ...dogProfile,
            [name]: value,
        });
    };


    const handleSave = async () => {
        try {
            await api.put(`dogs/${userDetails.id}`, dogProfile);
            setIsEditing(false);
            alert('Dog profile updated successfully');
        } catch (error) {
            console.error('Error updating dog profile:', error);
        }
    };

    if (!dogData) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "#0071c2",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 4,
                }}
            >
                <Typography
                    variant="h1"
                    sx={{ fontSize: "32px", fontWeight: "bold", color: "white" }}
                >
                    Dog Profile
                </Typography>
            </Box>
            <Box sx={{ padding: 4, flexGrow: 1, overflowY: 'auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    {dogProfile.pictures && dogProfile.pictures.length > 0 ? (
                        <img
                            src={dogProfile.pictures[0]} // Assuming the first image is the profile picture
                            alt="Dog Avatar"
                            style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                        />
                    ) : (
                        <img
                            src="/default-dog-avatar.png" // Default dog avatar
                            alt="Dog Avatar"
                            style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                        />
                    )}
                    <Button variant="outlined" sx={{ ml: 2 }}>
                        Edit photo
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button variant="contained" color="primary" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "Cancel" : "Edit"}
                    </Button>
                </Box>
                <Box sx={{ marginTop: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Dog Name"
                                variant="outlined"
                                fullWidth
                                name="dogName"
                                value={dogProfile.dogName}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Dog Breed"
                                variant="outlined"
                                fullWidth
                                name="dogBreed"
                                value={dogProfile.dogBreed}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Age</InputLabel>
                                <Select
                                    name="age"
                                    value={dogProfile.age}
                                    onChange={handleChange}
                                    label="Age"
                                    disabled={!isEditing}
                                >
                                    {Object.values(Age).map((age) => (
                                        <MenuItem key={age} value={age}>
                                            {formatEnumValue(age)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Training Level</InputLabel>
                                <Select
                                    name="trainingLevel"
                                    value={dogProfile.trainingLevel}
                                    onChange={handleChange}
                                    label="Training Level"
                                    disabled={!isEditing}
                                >
                                    {Object.values(TrainingLevel).map((level) => (
                                        <MenuItem key={level} value={level}>
                                            {formatEnumValue(level)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="About"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                name="about"
                                value={dogProfile.about}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Special Requirements"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                name="specialRequirements"
                                value={dogProfile.specialRequirements}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Size</InputLabel>
                                <Select
                                    name="size"
                                    value={dogProfile.size}
                                    onChange={handleChange}
                                    label="Size"
                                    disabled={!isEditing}
                                >
                                    {Object.values(Size).map((size) => (
                                        <MenuItem key={size} value={size}>
                                            {formatEnumValue(size)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                {isEditing && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default DogProfileView;
