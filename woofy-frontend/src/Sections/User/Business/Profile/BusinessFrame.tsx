import { FunctionComponent } from "react";

const BusinessFrame: FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[400px] max-w-full text-left text-xl text-text-primary font-text-medium-normal mq750:gap-[16px] mq750:min-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="flex flex-row items-center justify-start text-21xl">
          <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">{`Business Name `}</h1>
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
              Location
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
            className="h-16 w-16 relative rounded-13xl object-cover"
            loading="lazy"
            alt=""
            src="/user-avatar-image@2x.png"
          />
          <div className="relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
            Business Owner Name
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-13xl">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch h-[42px] relative inline-block mq450:text-base">
                <b className="leading-[130%]">{`170 ₪ `}</b>
                <span className="text-xl leading-[150%] font-semibold text-color-neutral-neutral">
                  Per Night*
                </span>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start pt-2 px-0 pb-0 box-border gap-[16px] max-w-full mq750:flex-wrap">
              <button className="cursor-pointer [border:none] py-3 px-6 bg-app1 flex-1 rounded-11xl flex flex-row items-center justify-center box-border min-w-[359px] max-w-full hover:bg-cornflowerblue mq750:min-w-full">
                <b className="flex-1 relative text-base leading-[150%] inline-block font-text-regular-normal1 text-white text-center max-w-full">
                  Add To Cart
                </b>
              </button>
              <div className="h-12 w-12 rounded-71xl flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--heart.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-13xl">
        <div className="self-stretch h-px relative bg-text-primary box-border border-[1px] border-solid border-color-neutral-neutral" />
        <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
          About Business Name
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border max-w-full">
          <div className="flex-1 relative leading-[150%] inline-block max-w-full mq450:text-base mq450:leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
        </div>
        <div className="self-stretch h-px relative bg-text-primary box-border border-[1px] border-solid border-color-neutral-neutral" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5px] max-w-full text-5xl">
          <div className="self-stretch bg-text-alternate flex flex-row items-end justify-start py-6 px-3 box-border max-w-full">
            <div className="flex-1 flex flex-col items-center justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start">
                <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-bold font-inherit mq450:text-lgi mq450:leading-[27px]">
                  Home Conditions
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-2 px-0 gap-[16px] text-base">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[507px] pl-0 gap-[16px] mq750:pr-[253px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%] inline-block min-w-[45px]">
                    Home
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[471px] pl-0 gap-[16px] mq750:pr-[235px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%] inline-block min-w-[81px]">
                    Apartment
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[424px] pl-0 gap-[16px] mq750:pr-[212px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%] inline-block min-w-[128px]">
                    Has Fenced Yard
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[353px] pl-0 gap-[16px] mq750:pr-44 mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%]">
                    Dogs Allowed on Furniture
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[391px] pl-0 gap-[16px] mq750:pr-[195px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%]">
                    Dogs Allowed on Bed
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[448px] pl-0 gap-[16px] mq750:pr-56 mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%] inline-block min-w-[104px]">
                    Non-Smoking
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-text-alternate flex flex-row items-end justify-start py-6 px-3 box-border max-w-full">
            <div className="flex-1 flex flex-col items-center justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start">
                <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-bold font-inherit mq450:text-lgi mq450:leading-[27px]">
                  Pets in Home
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-2 px-0 gap-[16px] text-base">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[468px] pl-0 gap-[16px] mq750:pr-[234px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%] inline-block min-w-[84px]">
                    Own a Dog
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[472px] pl-0 gap-[16px] mq750:pr-[236px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%] inline-block min-w-[80px]">
                    Own a Cat
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[425px] pl-0 gap-[16px] mq750:pr-[212px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%] inline-block min-w-[127px]">
                    Own Caged Pets
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[445px] pl-0 gap-[16px] mq750:pr-[222px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%] inline-block min-w-[107px]">
                    Has Cheildren
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[359px] pl-0 gap-[16px] mq750:pr-[179px] mq750:box-border mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check.svg"
                  />
                  <div className="relative leading-[150%]">
                    Only One Client at a Time
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative bg-text-primary box-border border-[1px] border-solid border-color-neutral-neutral" />
        </div>
      </div>
    </div>
  );
};

export default BusinessFrame;
