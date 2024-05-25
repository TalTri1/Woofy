import { FunctionComponent, useEffect, useState } from "react";
import { Business } from "../../../../models/BusinessModels/BusinessModel";
import { DogSitterModel } from "../../../../models/BusinessModels/BusinessTypesModels/HomeStay/DogSitterModel";
import { DogWalkerModel } from "../../../../models/BusinessModels/BusinessTypesModels/HomeStay/DogWalkerModel";
import { BoardingModel } from "../../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/BoardingModel";
import { DayCareModel } from "../../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/DayCareModel";
import { BUSINESS_TYPES } from "../../../../models/Enums/Enums";
import { getImage } from "../../../../components/image/imageComponent";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from 'react-modal';
import { formatEnumValue } from "../../../../utils/format-enum-text";
import { Box, Typography, Grid, Avatar, Divider } from '@mui/material';

interface BusinessFrameProps {
  business: Business;
  serviceData: DogSitterModel | DogWalkerModel | BoardingModel | DayCareModel | null;
  selectedService: BUSINESS_TYPES;
}
Modal.setAppElement('#root');

const BusinessFrame: FunctionComponent<BusinessFrameProps> = ({ business, serviceData, selectedService }) => {

  const [profileImage, setProfileImage] = useState("/user-avatar-image@2x.png");
  const [imageData, setImageData] = useState<{ img: string; title: string }[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [averageReview, setAverageReview] = useState<number | null>(null);
  const [reviewCount, setReviewCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (business?.profilePhotoID) {
        const profileImageResponse = await getImage(business.profilePhotoID);
        setProfileImage(profileImageResponse || "/user-avatar-image@2x.png");
      }
      if (business?.images) {
        const fetchedImages = await Promise.all(business.images.map(async (id) => {
          const imageSrc = await getImage(id);
          return { img: imageSrc || '', title: business.businessName };
        }));
        setImageData(fetchedImages.filter(image => image.img)); // Filter out any empty image URLs
      }
    };

    const fetchReviewsData = async () => {
      if (business?.id) {
        const averageReviewResponse = await fetch(`http://localhost:8080/api/v1/reviews/business/average/${business.id}`);
        const averageReviewData = await averageReviewResponse.json();
        setAverageReview(averageReviewData);

        const reviewCountResponse = await fetch(`http://localhost:8080/api/v1/reviews/business/count/${business.id}`);
        const reviewCountData = await reviewCountResponse.json();
        setReviewCount(reviewCountData);
      }
    };

    fetchImages();
    fetchReviewsData();
  }, [business.id]);

  const renderDetailBox = (title: string, values: string[]) => (
      <Box sx={{ border: 1, borderColor: 'grey.300', borderRadius: 1, p: 2, mb: 2, width: '100%', height: '100%' }}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Grid container spacing={1}>
          {values.map((value, index) => (
              <Grid item xs={12} key={index} display="flex" alignItems="center">
                <img
                    src="/check.svg"
                    alt="check"
                    style={{ height: 24, width: 24 }}
                />
                <Typography sx={{ ml: 1 }}>{value}</Typography>
              </Grid>
          ))}
        </Grid>
      </Box>
  );

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, width: '100%' }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4" fontWeight="bold">
              {business.businessName}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src="/icon--map.svg" alt="" style={{ height: 32, width: 32 }} />
              <Typography variant="body1">{business.address}, {business.city}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src="/vector.svg" alt="" style={{ height: 18.9, width: 20 }} />
              <Typography variant="body1">
                {reviewCount === 0 ? "No reviews yet" : `(${averageReview} stars) • ${reviewCount} reviews`}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src={profileImage} alt={`${business.firstName} ${business.lastName}`} sx={{ width: 64, height: 64 }} />
              <Typography variant="h6" fontWeight="bold">{`${business.firstName} ${business.lastName}`}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
              <Typography variant="h5" fontWeight="bold">{`${serviceData ? serviceData.price : ""} ₪ `}</Typography>
              <Typography variant="body1">
                {selectedService === BUSINESS_TYPES.BOARDING ? "Per Night*" : "Per Service*"}
              </Typography>
            </Box>
            {selectedService === BUSINESS_TYPES.BOARDING || selectedService === BUSINESS_TYPES.DAY_CARE ? (
                <Box>
                  <Typography variant="body1">Dog Capacity: {serviceData ? serviceData.dogCapacity : "N/A"}</Typography>
                </Box>
            ) : null}
            <Box>
              <Typography variant="body1">Working Hours: {serviceData ? `${serviceData.startTime} - ${serviceData.endTime}` : "N/A"}</Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <ImageList sx={{ width: '100%', height: 200 }} variant="quilted" cols={4} rowHeight={121}>
              {imageData.map((item) => (
                  <ImageListItem key={item.img} cols={1} rows={1}>
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setSelectedImage(item.img);
                          setModalIsOpen(true);
                        }}
                    />
                  </ImageListItem>
              ))}
            </ImageList>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Image Modal"
            >
              <img src={selectedImage} alt="Selected" />
              <button
                  onClick={() => setModalIsOpen(false)}
                  style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                X
              </button>
            </Modal>
          </Box>
        </Box>
        <Divider />
        <Typography variant="h5" fontWeight="bold">About {business.businessName}</Typography>
        <Typography variant="body1">{serviceData ? serviceData.about : "N/A"}</Typography>
        <Divider />
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            {selectedService === BUSINESS_TYPES.BOARDING || selectedService === BUSINESS_TYPES.DAY_CARE ? (
                <>
                  {serviceData && (serviceData as BoardingModel | DayCareModel).homeConditions.length > 0 && (
                      <Grid item xs={12} sm={6} md={4}>
                        {renderDetailBox("Home Conditions", (serviceData as BoardingModel | DayCareModel).homeConditions.map(formatEnumValue))}
                      </Grid>
                  )}
                  {serviceData && (serviceData as BoardingModel | DayCareModel).petsInHome.length > 0 && (
                      <Grid item xs={12} sm={6} md={4}>
                        {renderDetailBox("Pets in Home", (serviceData as BoardingModel | DayCareModel).petsInHome.map(formatEnumValue))}
                      </Grid>
                  )}
                </>
            ) : null}
            {serviceData && (
                <Grid item xs={12} sm={6} md={4}>
                  {renderDetailBox("Working Days", (serviceData.workingDays || []).map(day => day))}
                </Grid>
            )}
            {serviceData && (
                <Grid item xs={12} sm={6} md={4}>
                  {renderDetailBox("Acceptable Dog Sizes", (serviceData.acceptableDogSizes || []).map(formatEnumValue))}
                </Grid>
            )}
          </Grid>
        </Box>
      </Box>
  );
};

export default BusinessFrame;
