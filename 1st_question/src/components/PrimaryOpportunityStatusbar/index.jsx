import React from "react";

import { Text } from "components";

const PrimaryOpportunityStatusbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-end justify-between w-full">
          <Text
            className="text-2xl md:text-[22px] text-indigo-A200 sm:text-xl tracking-[-0.48px] w-auto"
            size="txtSwitzerBold24"
          >
            {props?.rscounter}
          </Text>
          <Text
            className="text-[15px] text-black-900_4c tracking-[-0.30px] w-auto"
            size="txtSwitzerRegular15"
          >
            {props?.rscounterOne}
          </Text>
        </div>
        <div className="gap-2.5 h-[5px] overflow-hidden relative w-full">
          <div className="w-full h-full absolute bg-gray_300"></div>
          <div
            className="h-full absolute bg-indigo_A200"
            style={{ width: "34%" }}
          ></div>
        </div>
      </div>
    </>
  );
};

PrimaryOpportunityStatusbar.defaultProps = {
  rscounter: "Rs 20,00,000",
  rscounterOne: "Rs 65.00,000",
};

export default PrimaryOpportunityStatusbar;
