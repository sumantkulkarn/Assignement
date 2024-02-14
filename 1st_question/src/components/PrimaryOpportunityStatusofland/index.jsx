import React from "react";

import { Button, Text } from "components";

const PrimaryOpportunityStatusofland = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex flex-row gap-[30px] items-start justify-between left-[4%] top-[13%] w-auto">
          <div className="bg-white-A700 border border-black-900 border-solid h-[19px] w-5"></div>
          <div className="flex flex-col items-start justify-center w-auto">
            <Text
              className="text-black-900 text-xl tracking-[-0.40px] w-full"
              size="txtSwitzerBold20"
            >
              {props?.completeprofiletext}
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-end justify-center my-auto right-[4%] w-[383px] sm:w-full">
          <Button
            className="cursor-pointer font-switzer h-[46px] leading-[normal] text-center text-sm w-[169px]"
            shape="square"
            color="indigo_A200"
            size="md"
            variant="fill"
          >
            {props?.completebutton}
          </Button>
        </div>
      </div>
    </>
  );
};

PrimaryOpportunityStatusofland.defaultProps = {
  completeprofiletext: "Complete Profile",
  completebutton: "Complete",
};

export default PrimaryOpportunityStatusofland;
