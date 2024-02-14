import React from "react";

import { Img, Line, List, Text } from "components";

const PrimaryOpportunityLandmarks = (props) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="flex flex-1 flex-col gap-2.5 items-start justify-center w-full">
          <div className="flex flex-row gap-2.5 items-center justify-between w-full">
            <div className="flex flex-row gap-[5px] items-center justify-start w-[200px]">
              <Img
                className="h-[26px] w-6"
                src="images/img_airplane.svg"
                alt="airplane"
              />
              <Text
                className="text-indigo-A200_01 text-xl w-full"
                size="txtSwitzerRegular20IndigoA20001"
              >
                {props?.airporttext}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-center w-auto">
              <Text
                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                size="txtSwitzerRegular20"
              >
                {props?.distancetext}
              </Text>
              <Text
                className="text-[11px] text-black-900_4c tracking-[-0.22px] w-auto"
                size="txtSwitzerRegular11Black9004c"
              >
                {props?.airportcountertext}
              </Text>
            </div>
          </div>
          <Line className="bg-black-900_4c h-px w-full" />
        </div>
        <div className="flex flex-1 flex-col gap-2.5 items-start justify-center w-full">
          <div className="flex flex-row gap-2.5 items-center justify-between w-full">
            <div className="flex flex-row gap-[5px] items-center justify-start w-[200px]">
              <Img
                className="h-[26px] w-6"
                src="images/img_airplane.svg"
                alt="airplane"
              />
              <Text
                className="text-indigo-A200_01 text-xl w-full"
                size="txtSwitzerRegular20IndigoA20001"
              >
                {props?.airporttext1}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-center w-auto">
              <Text
                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                size="txtSwitzerRegular20"
              >
                {props?.distancetext1}
              </Text>
              <Text
                className="text-[11px] text-black-900_4c tracking-[-0.22px] w-auto"
                size="txtSwitzerRegular11Black9004c"
              >
                {props?.terminaltext}
              </Text>
            </div>
          </div>
          <Line className="bg-black-900_4c h-px w-full" />
        </div>
        <div className="flex flex-1 flex-col gap-2.5 items-start justify-center w-full">
          <div className="flex flex-row gap-2.5 items-center justify-between w-full">
            <div className="flex flex-row gap-[5px] items-center justify-start w-[200px]">
              <Img
                className="h-[26px] w-6"
                src="images/img_television.svg"
                alt="television"
              />
              <Text
                className="text-indigo-A200_01 text-xl w-full"
                size="txtSwitzerRegular20IndigoA20001"
              >
                {props?.highwaytext}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-center w-auto">
              <Text
                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                size="txtSwitzerRegular20"
              >
                {props?.distancetext2}
              </Text>
              <Text
                className="text-[11px] text-black-900_4c tracking-[-0.22px] w-auto"
                size="txtSwitzerRegular11Black9004c"
              >
                {props?.highwaynumbertext}
              </Text>
            </div>
          </div>
          <Line className="bg-black-900_4c h-px w-full" />
        </div>
      </List>
    </>
  );
};

PrimaryOpportunityLandmarks.defaultProps = {
  airporttext: "Airport",
  distancetext: "100 km",
  airportcountertext: "Airport 1",
  airporttext1: "Airport",
  distancetext1: "25 km",
  terminaltext: "Green Which Terminla",
  highwaytext: "Highway",
  distancetext2: "100 km",
  highwaynumbertext: "Highway number 5",
};

export default PrimaryOpportunityLandmarks;
