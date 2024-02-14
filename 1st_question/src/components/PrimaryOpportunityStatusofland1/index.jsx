import React from "react";

import { Button, Text } from "components";

const PrimaryOpportunityStatusofland1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex flex-row gap-[30px] items-start justify-between left-[4%] top-[13%] w-auto">
          <div className="bg-white-A700 border border-black-900 border-solid h-[19px] w-5"></div>
          <div className="flex flex-col items-start justify-center w-auto">
            <Text
              className="text-black-900 text-xl tracking-[-0.40px] w-full"
              size="txtSwitzerRegular20"
            >
              {props?.stepcounter}
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-end justify-center my-auto right-[4%] w-[383px] sm:w-full">
          <Button
            className="!text-gray-100 cursor-pointer font-switzer h-[46px] leading-[normal] text-center text-sm w-[169px]"
            shape="square"
            color="indigo_A200_75"
            size="md"
            variant="fill"
          >
            {props?.paybutton}
          </Button>
        </div>
      </div>
    </>
  );
};

PrimaryOpportunityStatusofland1.defaultProps = {
  stepcounter: "Step 1",
  paybutton: "Pay",
};

export default PrimaryOpportunityStatusofland1;
