import React from "react";

import { Img, Line, List, Text } from "components";

const PrimaryOpportunityTertiarynav = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.64px] w-auto"
          size="txtSwitzerBold32"
        >
          {props?.text}
        </Text>
        <div className="flex flex-row h-8 md:h-auto items-center justify-between w-[250px]">
          <div className="h-8 relative w-[12%]">
            <div className="absolute bg-black-900 bottom-[19%] h-0.5 inset-x-[0] mx-auto w-full"></div>
            <div className="absolute flex flex-row gap-[5px] h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="bg-black-900 flex flex-col h-3 items-end justify-start mb-[11px] mt-[5px] p-0.5 rounded-[50%] w-3">
                <Img
                  className="h-0.5"
                  src="images/img_vector76.svg"
                  alt="vectorSeventySix"
                />
              </div>
              <Text
                className="mb-[5px] text-black-900 text-lg text-right tracking-[-0.36px]"
                size="txtSwitzerMedium18"
              >
                {props?.numbertext}
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-0.5 grid grid-cols-2 w-[88%]"
            orientation="horizontal"
          >
            <div className="h-8 md:h-[29px] relative w-full">
              <Line className="absolute bg-black-900_3f h-px inset-y-[0] left-[0] my-auto w-[71%]" />
              <div className="absolute h-8 md:h-[29px] inset-y-[0] my-auto right-[0] w-[37%]">
                <div className="absolute bg-black-900_3f bottom-[19%] h-0.5 right-[0] w-[77%]"></div>
                <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start left-[0] my-auto">
                  <Text
                    className="mb-[5px] text-black-900_3f text-lg text-right tracking-[-0.36px]"
                    size="txtSwitzerMedium18Black9003f"
                  >
                    {props?.numbertext1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-8 md:h-[29px] relative w-full">
              <Line className="absolute bg-black-900_3f h-px inset-y-[0] left-[0] my-auto w-[71%]" />
              <div className="absolute h-8 md:h-[29px] inset-y-[0] my-auto right-[0] w-[37%]">
                <div className="absolute bg-black-900_3f bottom-[19%] h-0.5 right-[0] w-[77%]"></div>
                <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start left-[0] my-auto">
                  <Text
                    className="mb-[5px] text-black-900_3f text-lg text-right tracking-[-0.36px]"
                    size="txtSwitzerMedium18Black9003f"
                  >
                    {props?.numbertext2}
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

PrimaryOpportunityTertiarynav.defaultProps = {
  text: "Choose your new site",
  numbertext: "1",
  numbertext1: "2",
  numbertext2: "3",
};

export default PrimaryOpportunityTertiarynav;
