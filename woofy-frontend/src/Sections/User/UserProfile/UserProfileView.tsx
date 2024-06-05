import {FunctionComponent, useContext, useEffect, useState} from "react";
import UserProfileRow from "./UserProfileRow";
import { UserContext } from "../../../provider/UserProvider";
import { Box, Typography, Button } from "@mui/material";
import {getImage} from "../../../components/image/imageComponent";

const UserProfileView: FunctionComponent = () => {
    const { userDetails } = useContext(UserContext);
    const [imageSrc, setImageSrc] = useState("/user-avatar-image@2x.png");

    useEffect(() => {
        const fetchImage = async () => {
            if (userDetails?.profilePhotoID) {
                const image = await getImage(userDetails.profilePhotoID);
                setImageSrc(image);
            }
            else setImageSrc('/default-avatar-image@2x.png')
        };

        fetchImage();
    }, [userDetails]);
    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                backgroundColor: "text.alternate",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                letterSpacing: "normal",
                lineHeight: "normal",
            }}
        >
            <main
                style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                    textAlign: "left",
                    fontSize: "base",
                    color: "text.primary",
                    fontFamily: "text.medium.normal",
                    boxSizing: "border-box",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: "#006cbf",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        pt: 12,
                        px: 2.5,
                        pb: 8.5,
                        gap: 0,
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: "48px!important",
                            lineHeight: "120%",
                            fontFamily: "inter",
                            color: "white",
                            textAlign: "center",
                            position: "relative",
                        }}
                    >
                        Personal Details
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "start",
                        width: "100%",
                        maxWidth: "calc(100% - 312px)",
                        textAlign: "center",
                        fontSize: "29xl",
                        color: "text.alternate",
                        fontFamily: "text-medium-normal",
                        px: { md: 5 },
                    }}
                >
                    <Box sx={{ width: "100%", py: 6, px: 0, gap: 2 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "start",
                                py: 0,
                                pr: { lg: "822px", md: "411px", sm: "205px", xs: 5 },
                                pl: 0,
                                gap: 3,
                                flexWrap: { lg: "nowrap", sm: "wrap" },
                            }}
                        >
                            <img
                                src={imageSrc}
                                alt="User Avatar"
                                style={{ height: "100px", width: "100px", borderRadius: "50%"}}
                            />
                            <Button
                                variant="outlined"
                                sx={{
                                    py: 1,
                                    px: 2,
                                    height: "42px",
                                    borderRadius: "20px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 2,
                                    textTransform: "none",
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                    },
                                }}
                            >
                                <img
                                    src="/manage-button-icon--editalt.svg"
                                    alt=""
                                    style={{ height: "24px", width: "24px" }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: "base",
                                        fontFamily: "text.medium.normal",
                                        color: "color.neutral.darker",
                                        textAlign: "left",
                                        minWidth: "78px",
                                    }}
                                >
                                    Edit photo
                                </Typography>
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            overflowX: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "start",
                            py: 0,
                            pr: 6,
                            pl: 0,
                            boxSizing: "border-box",
                        }}
                    >
                        <UserProfileRow
                            fullNameLabel="Full name"
                            nameSurname={userDetails?.firstName + " " + userDetails?.lastName}
                        />
                        <UserProfileRow
                            fullNameLabel="Phone Number"
                            nameSurname={userDetails?.phoneNumber}
                            propMinWidth="89px"
                        />
                        <UserProfileRow
                            fullNameLabel="Permanent Address"
                            nameSurname={userDetails?.address}
                            propMinWidth="36px"
                        />
                        <UserProfileRow
                            fullNameLabel="City"
                            nameSurname={userDetails?.city}
                            propMinWidth="23px"
                        />
                        <UserProfileRow
                            fullNameLabel="Zip Code"
                            nameSurname={userDetails?.zipCode}
                            propMinWidth="53px"
                        />
                        <UserProfileRow
                            fullNameLabel="Email Address"
                            nameSurname={userDetails?.email}
                            propMinWidth="109px"
                        />
                        <UserProfileRow
                            fullNameLabel="Password"
                            nameSurname="*******"
                            propMinWidth="43px"
                        />
                    </Box>
                </Box>
            </main>
        </Box>
    );
};

export default UserProfileView;
