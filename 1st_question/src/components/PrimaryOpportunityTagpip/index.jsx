import React from "react";

import { Img, Text } from "components";

const PrimaryOpportunityTagpip = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-black-900_33 flex flex-col md:h-auto h-full inset-[0] items-center justify-start m-auto px-[5px] w-auto md:w-full">
          <Img
            className="h-4 w-4"
            src="images/img_contrast.svg"
            alt="contrast"
          />
        </div>
        <Text
          className="absolute bottom-[0] right-[7%] text-[10px] text-black-900_7f w-auto"
          size="txtSwitzerLight10"
        >
          {props?.textvalue}
        </Text>
      </div>
    </>
  );
};

PrimaryOpportunityTagpip.defaultProps = { textvalue: "Family Rides" };

export default PrimaryOpportunityTagpip;
