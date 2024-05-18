import React, { FunctionComponent, useState, useContext } from "react";
import { Box, Button, Container, TextField, Typography, TextareaAutosize } from "@mui/material";
import { toast } from "react-toastify";
import api from "../../../../api/api";
import { UserContext } from "../../../../provider/UserProvider";
import DogSizeInput from "../../selectButtons/DogSizeInput";
import SendIcon from '@mui/icons-material/Send';
import { Age, Size, TrainingLevel } from "../../../../models/Enums/Enums";
import DogModel from "../../../../models/DogModels/DogModel";
import { useRouter } from "../../../../routes/hooks";

type DogRegisterViewProps = {
    variant: 'customer' | 'business';
};

const DogRegisterView: FunctionComponent<DogRegisterViewProps> = ({ variant }) => {
    const router = useRouter();
    const { userDetails } = useContext(UserContext); // The user details
    const [selectedAge, setSelectedAge] = useState<Age>(Age.PUPPY);
    const [selectedSize, setSelectedSize] = useState<Size>(Size.SMALL);
    const [selectedTrainingLevel, setSelectedTrainingLevel] = useState<TrainingLevel>(TrainingLevel.BEGINNER);
    const [images, setImages] = useState<Array<File | null>>([null, null, null, null]);
    const [dog, setDog] = useState(
        new DogModel("", "", Age.PUPPY, Size.SMALL, TrainingLevel.BEGINNER, "", "")
    );

    const changeHandlerDog = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDog(prevState => ({ ...prevState, [name]: value }));
    };

    const clickAgeHandlerDog = (age: Age) => {
        setDog(prevState => ({ ...prevState, age }));
        setSelectedAge(age);
    };

    const clickSizeHandlerDog = (size: Size) => {
        setDog(prevState => ({ ...prevState, size }));
        setSelectedSize(size);
    };

    const clickTrainingLevelHandlerDog = (trainingLevel: TrainingLevel) => {
        setDog(prevState => ({ ...prevState, trainingLevel }));
        setSelectedTrainingLevel(trainingLevel);
    };

    const registerDogHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const dogData = {
            dogName: dog.dogName,
            dogBreed: dog.dogBreed,
            age: Age[dog.age],
            size: Size[dog.size],
            trainingLevel: TrainingLevel[dog.trainingLevel],
            about: dog.about,
            specialRequirements: dog.specialRequirements,
            pictures: null,
        };

        console.log(`Dog data to be registered: ${JSON.stringify(dogData)}`);

        try {
            const response = await api.post(`/dogs/create`, dogData);
            console.log(`Response from registering dog: ${response}`);
            const imageIDs = await uploadImages();
            const isUpdateSuccess = await updateImagesForDogEntity(imageIDs as number[]);
            router.push("/");
            window.scrollTo(0, 0);
            if (isUpdateSuccess) {
                toast.success("Dog registered successfully");
            } else {
                toast.error("Failed to register dog");
            }
        } catch (error) {
            toast.error("Failed to register dog");
            console.log(`Error to register dog: ${error}`);
        }
    };

    // Handle images
    const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        // Check if the selected file is an image
        if (!file.type.startsWith('image/')) {
            toast.error('Please select an image file');
            return;
        }

        if (file) {
            const newImages = [...images];
            newImages[index] = file;
            setImages(newImages);
        }
    };

    const uploadImages = async () => {
        try {
            const imageIDs = await Promise.all(
                images.map(async (image) => {
                    if (image) {
                        return savePhotoToDB(image);
                    }
                    return null;
                })
            );
            return imageIDs.filter((id) => id !== null); // Filter out null values
        } catch (error) {
            toast.error("Failed uploading images");
            return null;
        }
    };

    const savePhotoToDB = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await api.post('/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(`Response from the backend: ${response}`);
            return response.data.imageID; // return the ID of the saved image
        } catch (error) {
            toast.error("Failed uploading images for dog");
        }
    };

    const updateImagesForDogEntity = async (imageIDs: number[]) => {
        try {
            const response = await api.put(`/dogs/update/images/`, imageIDs);
            console.log(`Response from updating dog images: ${response}`);
            return true;
        } catch (error) {
            console.error(`Error updating dog images: ${error}`);
            return false;
        }
    };

    return (
        <Box sx={{ width: '100%', position: 'relative', backgroundColor: 'text.alternate', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', lineHeight: 'normal', tracking: 'normal' }}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start', px: { md: 5 } }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', maxWidth: 'calc(100% - 312px)', textAlign: 'center', fontSize: '29xl', color: 'text.alternate', fontFamily: 'text-medium-normal', px: { md: 5 } }}>
                    <Box sx={{ width: '100%', backgroundColor: '#006cbf', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', pt: 4, px: 2.5, pb: 7.5, gap: 0 }}>
                        <Typography variant="h1" sx={{ fontSize: '48px', lineHeight: '120%', fontFamily: 'Inter', color: 'white', textAlign: 'center' }}>
                            Set Up Your Dog Details
                        </Typography>
                        <Typography sx={{ fontSize: '18px', lineHeight: '150%', fontFamily: 'Inter', color: 'white', textAlign: 'center' }}>
                            Complete the forms below to provide information about your dog.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', backgroundColor: 'text.alternate', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', fontSize: '5xl', color: 'text.primary', gap: 2.5 }}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '100%' }}>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'start', pt: 2, pb: 1.5 }}>
                                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: 1 }}>
                                    <Typography variant="h3" sx={{ m: 0, width: '100%', fontSize: 'inherit', lineHeight: '34px', fontWeight: 'bold', fontFamily: 'inherit' }}>
                                        Dog Details Form
                                    </Typography>
                                    <Typography sx={{ width: '100%', fontSize: 'base', lineHeight: '150%' }}>
                                        Please fill the necessary information found in the following questions.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: '600px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', py: 0, px: 2.5, gap: 3 }}>
                                <TextField
                                    label="Dog Name"
                                    name="dogName"
                                    variant="outlined"
                                    fullWidth
                                    onChange={changeHandlerDog}
                                    required
                                />
                                <TextField
                                    label="Dog Breed"
                                    name="dogBreed"
                                    variant="outlined"
                                    fullWidth
                                    onChange={changeHandlerDog}
                                    required
                                />
                                <Typography variant="h6" sx={{ textAlign: 'left' }}>
                                    How Old is Your Dog?
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Button
                                        variant={selectedAge === Age.PUPPY ? "contained" : "outlined"}
                                        onClick={() => clickAgeHandlerDog(Age.PUPPY)}
                                    >
                                        Puppy <br /> 0-1 years
                                    </Button>
                                    <Button
                                        variant={selectedAge === Age.ADULT ? "contained" : "outlined"}
                                        onClick={() => clickAgeHandlerDog(Age.ADULT)}
                                    >
                                        Adult <br /> 1-9 years
                                    </Button>
                                    <Button
                                        variant={selectedAge === Age.SENIOR ? "contained" : "outlined"}
                                        onClick={() => clickAgeHandlerDog(Age.SENIOR)}
                                    >
                                        Senior <br /> 9 years +
                                    </Button>
                                </Box>
                                <DogSizeInput selectedSize={selectedSize} onSizeClick={clickSizeHandlerDog} multiple={false} />
                                <Typography variant="h6" sx={{ textAlign: 'left' }}>
                                    Training Level
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2 }}>
                                    <Button
                                        variant={selectedTrainingLevel === TrainingLevel.BEGINNER ? "contained" : "outlined"}
                                        onClick={() => clickTrainingLevelHandlerDog(TrainingLevel.BEGINNER)}
                                    >
                                        Beginner
                                    </Button>
                                    <Button
                                        variant={selectedTrainingLevel === TrainingLevel.INTERMEDIATE ? "contained" : "outlined"}
                                        onClick={() => clickTrainingLevelHandlerDog(TrainingLevel.INTERMEDIATE)}
                                    >
                                        Intermediate
                                    </Button>
                                    <Button
                                        variant={selectedTrainingLevel === TrainingLevel.ADVANCED ? "contained" : "outlined"}
                                        onClick={() => clickTrainingLevelHandlerDog(TrainingLevel.ADVANCED)}
                                    >
                                        Advanced
                                    </Button>
                                </Box>
                                <Typography variant="h6">About your Dog</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    placeholder="Tell us about your dog..."
                                    name="about"
                                    style={{ width: "100%", padding: 8, borderRadius: 4, borderColor: "rgba(0, 0, 0, 0.23)" }}
                                    onChange={changeHandlerDog}
                                />
                                <Typography variant="h6">Any Special Requirements For Your Dog?</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    placeholder="Let us know about your dog needs..."
                                    name="specialRequirements"
                                    style={{ width: "100%", padding: 8, borderRadius: 4, borderColor: "rgba(0, 0, 0, 0.23)" }}
                                    onChange={changeHandlerDog}
                                />
                                <Typography variant="h6">Add Pictures of Your Dog (at least 1 photo*)</Typography>
                                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                    {images.map((image, index) => (
                                        <label key={index} style={{ position: "relative" }}>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(event) => handleImageChange(index, event)}
                                                style={{ display: "none" }}
                                            />
                                            <img
                                                className="h-[100px] w-[100px] relative object-cover min-h-[100px] shrink-0 cursor-pointer"
                                                loading="lazy"
                                                alt=""
                                                src={image ? URL.createObjectURL(image) : "/service-avatar-image-1@2x.png"}
                                                onClick={() => document.getElementById(`fileInput-${index}`)?.click()}
                                            />
                                        </label>
                                    ))}
                                </Box>
                                <Button
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={registerDogHandler}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default DogRegisterView;
