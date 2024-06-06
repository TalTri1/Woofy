import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { UserContext } from "../../../provider/UserProvider";
import UserProfileRow from "./UserProfileRow";
import { getImage } from "../../../components/image/imageComponent";

const UserProfileView: FunctionComponent = () => {
    const { userDetails } = useContext(UserContext);
    const [imageSrc, setImageSrc] = useState("/user-avatar-image@2x.png");

    useEffect(() => {
        const fetchImage = async () => {
            if (userDetails?.profilePhotoID) {
                const image = await getImage(userDetails.profilePhotoID);
                setImageSrc(image);
            } else {
                setImageSrc('/default-avatar-image@2x.png');
            }
        };

        fetchImage();
    }, [userDetails]);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                overflowY: "auto",
                backgroundColor: "white",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    mb: 4,
                    backgroundColor: "#0071c2",
                    color: "white",
                    py: 4,
                }}
            >
                <Typography variant="h1" sx={{ fontSize: "32px", fontWeight: "bold" }}>
                    Personal Details
                </Typography>
            </Box>

            <Box sx={{ padding: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <img
                        src={imageSrc}
                        alt="User Avatar"
                        style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                    />
                    <Button variant="outlined" sx={{ ml: 2 }}>
                        Edit photo
                    </Button>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <UserProfileRow fullNameLabel="Full name" nameSurname={userDetails?.firstName + " " + userDetails?.lastName} />
                    <UserProfileRow fullNameLabel="Phone Number" nameSurname={userDetails?.phoneNumber} />
                    <UserProfileRow fullNameLabel="Permanent Address" nameSurname={userDetails?.address} />
                    <UserProfileRow fullNameLabel="City" nameSurname={userDetails?.city} />
                    <UserProfileRow fullNameLabel="Zip Code" nameSurname={userDetails?.zipCode} />
                    <UserProfileRow fullNameLabel="Email Address" nameSurname={userDetails?.email} />
                    <UserProfileRow fullNameLabel="Password" nameSurname="*******" />
                </Box>
            </Box>
        </Box>
    );
};

export default UserProfileView;
