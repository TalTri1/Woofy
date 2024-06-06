import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, TextField, Grid, Button, Card, CardContent } from "@mui/material";
import { UserContext } from "../../../provider/UserProvider";
import api from "../../../api/api";
import DogSizeInput from "../selectButtons/DogSizeInput";
import HomeConditionComponent from "../selectButtons/HomeConditionComponent";
import PetsInHomeComponent from "../selectButtons/PetsInHomeComponent";

const ServicesProfileView = () => {
    const { userDetails } = useContext(UserContext);
    const [business, setBusiness] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [serviceData, setServiceData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`business/${userDetails.id}`);
                const data = response.data;
                setBusiness(data);
                setServiceData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userDetails.id]);

    const handleChange = (event, serviceType) => {
        const { name, value } = event.target;
        setServiceData((prevData) => ({
            ...prevData,
            [serviceType]: {
                ...prevData[serviceType],
                [name]: value,
            },
        }));
    };

    const handleSizeClick = (size, serviceType) => {
        setServiceData((prevData) => {
            const currentSizes = prevData[serviceType].acceptableDogSizes || [];
            const updatedSizes = currentSizes.includes(size)
                ? currentSizes.filter((s) => s !== size)
                : [...currentSizes, size];
            return {
                ...prevData,
                [serviceType]: {
                    ...prevData[serviceType],
                    acceptableDogSizes: updatedSizes,
                },
            };
        });
    };

    const handleHomeConditionsClick = (condition, serviceType) => {
        setServiceData((prevData) => {
            const currentConditions = prevData[serviceType].homeConditions || [];
            const updatedConditions = currentConditions.includes(condition)
                ? currentConditions.filter((c) => c !== condition)
                : [...currentConditions, condition];
            return {
                ...prevData,
                [serviceType]: {
                    ...prevData[serviceType],
                    homeConditions: updatedConditions,
                },
            };
        });
    };

    const handlePetsInHomeClick = (condition, serviceType) => {
        setServiceData((prevData) => {
            const currentConditions = prevData[serviceType].petsInHome || [];
            const updatedConditions = currentConditions.includes(condition)
                ? currentConditions.filter((c) => c !== condition)
                : [...currentConditions, condition];
            return {
                ...prevData,
                [serviceType]: {
                    ...prevData[serviceType],
                    petsInHome: updatedConditions,
                },
            };
        });
    };

    const handleImageChange = async (serviceType, newImage) => {
        try {
            const formData = new FormData();
            formData.append('file', newImage);
            const response = await api.post(`business/${userDetails.id}/upload`, formData);
            const imageUrl = response.data.url;

            setServiceData((prevData) => ({
                ...prevData,
                [serviceType]: {
                    ...prevData[serviceType],
                    images: [...(prevData[serviceType].images || []), imageUrl],
                },
            }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleSave = async () => {
        try {
            await api.put(`business/${userDetails.id}`, serviceData);
            setIsEditing(false);
            alert('Service details updated successfully');
        } catch (error) {
            console.error('Error updating service details:', error);
        }
    };

    if (!business) {
        return <Typography>Loading...</Typography>;
    }

    const renderService = (service, serviceType) => (
        <Box key={serviceType} sx={{ marginBottom: 4, paddingBottom: 4, borderBottom: '1px solid #ddd' }}>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {serviceData[serviceType].images && serviceData[serviceType].images.map((image, index) => (
                        <Card key={index} sx={{ width: 150, height: 150, position: 'relative' }}>
                            <CardContent>
                                <img src={image} alt={`Service ${serviceType} image ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </CardContent>
                        </Card>
                    ))}
                    {isEditing && (
                        <Box sx={{ width: 150, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}>
                            {/*<ImageUploader onImageUpload={(image) => handleImageChange(serviceType, image)} />*/}
                        </Box>
                    )}
                </Box>
            </Grid>
            <Typography variant="h6">{serviceType.replace(/([A-Z])/g, ' $1').trim()}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Price"
                        variant="outlined"
                        fullWidth
                        name="price"
                        value={serviceData[serviceType].price}
                        onChange={(event) => handleChange(event, serviceType)}
                        disabled={!isEditing}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Dog Capacity"
                        variant="outlined"
                        fullWidth
                        name="dogCapacity"
                        value={serviceData[serviceType].dogCapacity || ""}
                        onChange={(event) => handleChange(event, serviceType)}
                        disabled={!isEditing}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Start Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        name="startDate"
                        value={serviceData[serviceType].startDate}
                        onChange={(event) => handleChange(event, serviceType)}
                        disabled={!isEditing}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="End Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        name="endDate"
                        value={serviceData[serviceType].endDate}
                        onChange={(event) => handleChange(event, serviceType)}
                        disabled={!isEditing}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Start Time"
                        type="time"
                        variant="outlined"
                        fullWidth
                        name="startTime"
                        value={serviceData[serviceType].startTime}
                        onChange={(event) => handleChange(event, serviceType)}
                        disabled={!isEditing}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="End Time"
                        type="time"
                        variant="outlined"
                        fullWidth
                        name="endTime"
                        value={serviceData[serviceType].endTime}
                        onChange={(event) => handleChange(event, serviceType)}
                        disabled={!isEditing}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="About"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        name="about"
                        value={serviceData[serviceType].about}
                        onChange={(event) => handleChange(event, serviceType)}
                        disabled={!isEditing}
                    />
                </Grid>

                {/* Unique fields for boarding */}
                {serviceType === 'boardingEntity' && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <HomeConditionComponent
                                selectedHomeConditions={serviceData[serviceType].homeConditions || []}
                                clickHomeConditionsHandler={(condition) => handleHomeConditionsClick(condition, serviceType)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <PetsInHomeComponent
                                selectedPetsInHome={serviceData[serviceType].petsInHome || []}
                                clickPetsInHomeHandler={(condition) => handlePetsInHomeClick(condition, serviceType)}
                            />
                        </Grid>
                    </>
                )}

                {/* Unique fields for day care */}
                {serviceType === 'dayCareEntity' && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <HomeConditionComponent
                                selectedHomeConditions={serviceData[serviceType].homeConditions || []}
                                clickHomeConditionsHandler={(condition) => handleHomeConditionsClick(condition, serviceType)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <PetsInHomeComponent
                                selectedPetsInHome={serviceData[serviceType].petsInHome || []}
                                clickPetsInHomeHandler={(condition) => handlePetsInHomeClick(condition, serviceType)}
                            />
                        </Grid>
                    </>
                )}

                <Grid item xs={12}>
                    <DogSizeInput
                        selectedSize={serviceData[serviceType].acceptableDogSizes || []}
                        onSizeClick={(size) => handleSizeClick(size, serviceType)}
                        multiple={true}
                    />
                </Grid>
            </Grid>
        </Box>
    );

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
                    Services Profile
                </Typography>
            </Box>
            <Box sx={{ padding: 4, flexGrow: 1, overflowY: 'auto' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button variant="contained" color="primary" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "Cancel" : "Edit"}
                    </Button>
                </Box>
                <Box sx={{ marginTop: 4 }}>
                    {business.dogSitterEntity && renderService(business.dogSitterEntity, 'dogSitterEntity')}
                    {business.dogWalkerEntity && renderService(business.dogWalkerEntity, 'dogWalkerEntity')}
                    {business.boardingEntity && renderService(business.boardingEntity, 'boardingEntity')}
                    {business.dayCareEntity && renderService(business.dayCareEntity, 'dayCareEntity')}
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

export default ServicesProfileView;
