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

interface BusinessFrameProps {
  business: Business;
  serviceData: DogSitterModel | DogWalkerModel | BoardingModel | DayCareModel | null;
  selectedService: BUSINESS_TYPES;
}

const BusinessFrame: FunctionComponent<BusinessFrameProps> = ({ business, serviceData, selectedService }) => {

  const [profileImage, setProfileImage] = useState("/user-avatar-image@2x.png");
  const [imageData, setImageData] = useState<{ img: string; title: string }[]>([]);


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

    fetchImages();
  }, [business.id]);

  const renderDetailBox = (title: string, values: string[]) => (

    <div className="border rounded-md p-4 mb-4 w-full">
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="flex flex-wrap">
        {values.map((value, index) => (
          <div key={index} className="flex items-center w-full md:w-1/2 lg:w-1/3">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt="check"
              src="/check.svg"
            />
            <div className="ml-2">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[400px] max-w-full text-left text-xl text-text-primary font-text-medium-normal mq750:gap-[16px] mq750:min-w-full">
      <div className="self-stretch flex flex-row items-start justify-between gap-[24px] max-w-full">
        <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="flex flex-row items-center justify-start text-21xl">
            <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
              {business.businessName}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-start text-center">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/icon--map.svg"
              />
              <div className="relative leading-[150%] font-medium inline-block min-w-[83px] mq450:text-base mq450:leading-[24px]">
                {business.address + `,` + business.city}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start text-center">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <img
                  className="h-[18.9px] w-5 relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                (4.5 stars) • 10 reviews
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              // Here is the profile image
              className="h-16 w-16 relative rounded-13xl object-cover"
              loading="lazy"
              alt=""
              src={profileImage}
            />
            <div className="relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
              {`${business.firstName} ${business.lastName}`}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-full">
          <h2 className="self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
            Gallery
          </h2>
          <ImageList
            sx={{ width: 500, height: 200 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {imageData.map((item) => (
              <ImageListItem key={item.img} cols={1} rows={1}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-13xl">
        <div
          className="self-stretch h-px relative bg-text-primary box-border border-[1px] border-solid border-color-neutral-neutral" />
        <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
          About {business.businessName}
        </h1>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border max-w-full">
          <div
            className="flex-1 relative leading-[150%] inline-block max-w-full mq450:text-base mq450:leading-[24px]">
            {serviceData ? serviceData.about : "error"}
          </div>
        </div>
        <div
          className="self-stretch h-px relative bg-text-primary box-border border-[1px] border-solid border-color-neutral-neutral" />
        <div className="self-stretch flex items-start justify-start gap-[0.5px] max-w-full text-5xl">
          {selectedService === BUSINESS_TYPES.BOARDING || selectedService === BUSINESS_TYPES.DAY_CARE ? (
            <>
              {renderDetailBox("Home Conditions", (serviceData as BoardingModel | DayCareModel).homeConditions || [])}
              {renderDetailBox("Pets in Home", (serviceData as BoardingModel | DayCareModel).petsInHome || [])}
            </>
          ) : null}
          {renderDetailBox("Dog Capacity", [`${serviceData ? serviceData.dogCapacity : "error"}`])}
          {serviceData && renderDetailBox("Working Days", (serviceData.workingDays || []).map(day => day))}
          {serviceData && renderDetailBox("Working Hours", [`${serviceData.startTime} - ${serviceData.endTime}`])}
          {serviceData && renderDetailBox("Acceptable Dog Sizes", (serviceData.acceptableDogSizes || []))}
        </div>
      </div>
    </div>
  );
};

export default BusinessFrame;
