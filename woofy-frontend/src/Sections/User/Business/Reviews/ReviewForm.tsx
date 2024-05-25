import React, { useContext, useState } from 'react';
import Rating from '@mui/material/Rating';
import { UserContext } from '../../../../provider/UserProvider';
import SelectServiceTypeComponent from '../../selectButtons/SelectServiceTypeComponent';
import { BUSINESS_TYPES } from '../../../../models/Enums/Enums';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import { Typography, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { toast } from 'react-toastify';

interface ReviewFormProps {
    businessId: number;
    open: boolean;
    availableServices: BUSINESS_TYPES[]
    onClose: () => void;
    onSubmit: (review: string, rating: number, serviceType: BUSINESS_TYPES) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ open, onClose, onSubmit, businessId, availableServices }) => {
    const { userDetails } = useContext(UserContext);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [selectedService, setSelectedService] = useState<BUSINESS_TYPES>(BUSINESS_TYPES.BOARDING);
    const [reviewError, setReviewError] = useState('');
    const [ratingError, setRatingError] = useState('');
    const [serviceError, setServiceError] = useState('');


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Selected service: ${selectedService}`);
        console.log(`availableServices: ${JSON.stringify(availableServices)}`);
        console.log(`availableServices.includes(selectedService): ${availableServices.includes(selectedService)}`);

        if (!availableServices.includes(selectedService)) {
            setServiceError('This service is not available for this business');
            return;
        } else {
            setServiceError('');
        }

        if (!review) {
            setReviewError('Review is required');
        } else {
            setReviewError('');
        }

        if (!rating) {
            setRatingError('Rating is required');
        } else {
            setRatingError('');
        }

        if (!review || !rating) {
            return;
        }


        const createReviewRequest = {
            userId: userDetails.id,
            businessId: businessId,
            review: review,
            rating: rating,
            serviceType: selectedService,
        };

        console.log(createReviewRequest);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/reviews', createReviewRequest);
            toast.success('Review created successfully!');
            onClose();
            window.location.reload();
        } catch (error) {
            toast.error('Error creating review. Please try again.');
            console.log(`Error creating review: ${error}`);
            onClose();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6" align="center">Write a review</Typography>
                <SelectServiceTypeComponent setSelectedServices={setSelectedService} selectedServices={selectedService} labelText='Choose a service to review' />
                {serviceError && <p style={{ color: 'red' }}>{serviceError}</p>}
                <TextField
                    label="Your Review"
                    multiline
                    rows={4}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    variant="outlined"
                />
                {reviewError && <p style={{ color: 'red' }}>{reviewError}</p>}

                <Box component="fieldset" borderColor="transparent">
                    <Typography component="legend">Rate</Typography>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                setRating(newValue);
                            }
                        }}
                    />
                    {ratingError && <p style={{ color: 'red' }}>{ratingError}</p>}
                </Box>
                <Button type="submit" color="primary">
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default ReviewForm;