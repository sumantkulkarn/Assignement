import React from "react";

import { Img, Text } from "components";

const PrimaryOpportunityStatuslink = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-center w-auto md:w-full">
          <Text
            className="text-gray-600 text-sm w-auto"
            size="txtSwitzerRegular14"
          >
            {props?.categorytext}
          </Text>
          <Img
            className="h-[18px] w-[18px]"
            src="images/img_arrowright_gray_600.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

PrimaryOpportunityStatuslink.defaultProps = { categorytext: "Category 1" };

export default PrimaryOpportunityStatuslink;
