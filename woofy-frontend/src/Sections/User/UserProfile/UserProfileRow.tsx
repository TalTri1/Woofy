import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FullNameRowType = {
  fullNameLabel?: string;
  nameSurname?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const UserProfileRow: FunctionComponent<FullNameRowType> = ({
  fullNameLabel,
  nameSurname,
  propMinWidth,
}) => {
  const nameSurnameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="w-[1040px] box-border flex flex-row items-start justify-start pt-[22px] px-0 pb-6 gap-[24px] text-left text-base text-text-primary font-text-medium-normal border-t-[1px] border-solid border-text-primary">
      <div className="flex-1 relative leading-[150%] font-semibold">
        {fullNameLabel}
      </div>
      <div className="w-[720px] flex flex-row items-start justify-start gap-[24px] max-w-full">
        <div
          className="flex-1 relative leading-[150%] inline-block min-w-[91px] max-w-full"
          style={nameSurnameStyle}
        >
          {nameSurname}
        </div>
        <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-dark hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/manage-button-icon--editalt.svg"
          />
          <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-darker text-left inline-block min-w-[30px]">{`Edit `}</div>
        </button>
      </div>
    </div>
  );
};

export default UserProfileRow;
