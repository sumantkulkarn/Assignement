import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import PrimaryOpportunityLandmarks from "components/PrimaryOpportunityLandmarks";
import PrimaryOpportunityStatusbar from "components/PrimaryOpportunityStatusbar";
import PrimaryOpportunityStatuslink from "components/PrimaryOpportunityStatuslink";
import PrimaryOpportunityStatusofland from "components/PrimaryOpportunityStatusofland";
import PrimaryOpportunityStatusofland1 from "components/PrimaryOpportunityStatusofland1";
import PrimaryOpportunityTagpip from "components/PrimaryOpportunityTagpip";
import PrimaryOpportunityTertiarynav from "components/PrimaryOpportunityTertiarynav";

const PrimaryOpportunityPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100 font-switzer mx-auto relative w-[1440px] sm:w-full md:w-full">
        <Img
          className="absolute h-[1020px] inset-[0] justify-center m-auto w-[1440px]"
          src="images/img_basebg.svg"
          alt="basebg"
        />
        <div className="flex md:flex-col flex-row gap-[5px] items-start justify-evenly mt-auto mx-auto relative w-full">
          <Sidebar className="!sticky !w-80 bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Menu
              menuItemStyles={{
                button: {
                  padding: "59px",
                  backgroundColor: "#ffffff",
                  flexDirection: "column",
                  marginTop: "8px",
                  color: "#0000004c",
                  textAlign: "center",
                  fontWeight: 300,
                  fontSize: "18px",
                  [`&:hover, &.ps-active`]: {
                    backgroundColor: "#ffffffff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-end mb-[59px] pt-[59px] w-full"
            >
              <div className="bg-white-A700 flex flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-center justify-center p-[2.42px] w-auto">
                  <Img
                    className="h-9 sm:h-auto object-cover w-80 md:w-full"
                    src="images/img_logoback1.png"
                    alt="logobackOne"
                  />
                </div>
              </div>
              <MenuItem>
                <div className="flex items-center justify-start md:px-10 sm:px-5">
                  <Text>Cart</Text>
                </div>
              </MenuItem>
              <div className="bg-white-A700 flex flex-col items-center justify-end mt-0.5 py-[57px] w-full">
                <Text
                  className="mt-[3px] text-black-900 text-center text-lg"
                  size="txtSwitzerBold18"
                >
                  Market
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end mt-[5px] py-[55px] w-full">
                <Text
                  className="mt-[7px] text-black-900_4c text-center text-lg"
                  size="txtSwitzerLight18"
                >
                  Settings
                </Text>
              </div>
              <MenuItem>
                <div className="flex items-center justify-start md:px-10 sm:px-5">
                  <Text>logout</Text>
                </div>
              </MenuItem>
              <div className="bg-white-A700 h-[225px] w-full"></div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[5px] h-full items-start justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row gap-2.5 h-[107px] md:h-auto items-center justify-between md:px-10 sm:px-5 px-[50px] py-[30px] w-full">
              <Button
                className="cursor-pointer h-[52px] leading-[normal] min-w-[166px] text-center text-sm"
                shape="square"
                color="indigo_A200"
                size="md"
                variant="fill"
              >
                Complete Profile
              </Button>
              <Img
                className="h-[22px] w-[23px]"
                src="images/img_iconinteractions.svg"
                alt="iconinteraction"
              />
            </div>
            <PrimaryOpportunityTertiarynav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 h-[102px] md:h-auto items-center justify-between md:px-10 sm:px-5 px-[60px] py-[30px] w-full" />
            <div className="flex flex-col md:h-auto p-[60px] md:px-10 sm:px-5 relative w-full">
              <div className="bg-white-A700 flex flex-col gap-2.5 h-[807px] md:h-auto items-center justify-center mx-auto p-[60px] md:px-10 sm:px-5 w-full">
                <div className="h-[51px] relative w-full">
                  <div className="absolute h-[51px] inset-[0] justify-center m-auto w-full">
                    <div className="bg-white-A700 h-[51px] m-auto w-full"></div>
                    <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center left-[7%] my-auto w-[22%]">
                      <PrimaryOpportunityStatuslink className="flex flex-col gap-[5px] items-center justify-center w-auto" />
                      <PrimaryOpportunityStatuslink
                        className="flex flex-col gap-[5px] items-center justify-center w-auto"
                        categorytext="Theme  park site"
                      />
                    </div>
                  </div>
                  <PrimaryOpportunityStatuslink
                    className="absolute flex flex-col gap-[5px] h-max inset-y-[0] items-center justify-center left-[0] my-auto w-auto"
                    categorytext="jMarket"
                  />
                </div>
                <div className="flex flex-col h-[371px] md:h-auto items-end justify-end shadow-bs w-full">
                  <Img
                    className="md:h-auto h-full object-cover w-full"
                    src="images/img_unsplashs2wjvuamfy.png"
                    alt="unsplashs2wjvua"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-[-305px] mx-auto p-[5px] w-full z-[1]">
                <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start mx-auto p-[5px] w-full">
                  <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[274px] items-start justify-start p-[30px] sm:px-5 w-full">
                    <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[462px] sm:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.64px] w-auto"
                        size="txtSwitzerBold32"
                      >
                        Theme Park Site
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-center w-auto">
                        <div className="flex flex-row gap-[5px] h-[27px] md:h-auto items-center justify-start w-full">
                          <div className="flex flex-col h-6 items-center justify-start w-6">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bookmark.svg"
                              alt="bookmark"
                            />
                          </div>
                          <Text
                            className="flex-1 rotate-[1deg] text-base text-black-900_4c tracking-[-0.32px] w-auto"
                            size="txtSwitzerRegular16"
                          >
                            Address of the site
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 h-4 md:h-auto items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[79px] px-[5px]"
                            leftIcon={
                              <Img
                                className="h-4 mr-[5px]"
                                src="images/img_iconinteractions_gray_900_01.svg"
                                alt="Iconinteractions"
                              />
                            }
                            shape="square"
                            color="black_900_33"
                            variant="fill"
                          >
                            <div className="font-light leading-[normal] text-[10px] text-left">
                              Adult rides
                            </div>
                          </Button>
                          <PrimaryOpportunityTagpip className="h-4 px-[5px] relative w-[88px]" />
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[85px] px-[5px]"
                            leftIcon={
                              <Img
                                className="h-4 mr-[5px]"
                                src="images/img_iconinteractions_gray_900_01_16x16.svg"
                                alt="Iconinteractions"
                              />
                            }
                            shape="square"
                            color="black_900_33"
                            variant="fill"
                          >
                            <div className="font-light leading-[normal] text-[10px] text-left">
                              Restaurants
                            </div>
                          </Button>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[69px] px-[5px]"
                            leftIcon={
                              <Img
                                className="h-4 mr-[5px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbs_up"
                              />
                            }
                            shape="square"
                            color="black_900_33"
                            variant="fill"
                          >
                            <div className="font-light leading-[normal] text-[10px] text-left">
                              Premum
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-between w-full">
                        <Button
                          className="border border-indigo-A200 border-solid cursor-pointer flex items-center justify-center min-w-[226px]"
                          leftIcon={
                            <Img
                              className="h-4 mb-[3px] mr-2.5"
                              src="images/img_arrowleft.svg"
                              alt="arrow_left"
                            />
                          }
                          shape="square"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <div className="leading-[normal] text-left text-sm underline">
                            View opportunity on polygon
                          </div>
                        </Button>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-[462px] sm:w-full">
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="rotate-[1deg] text-black-900 text-xl tracking-[-0.40px] w-auto"
                            size="txtSwitzerRegular20"
                          >
                            200 Acres
                          </Text>
                          <Text
                            className="rotate-[1deg] text-[11px] text-black-900 tracking-[-0.22px] w-auto"
                            size="txtSwitzerRegular11"
                          >
                            <span className="text-black-900_4c font-switzer text-left font-normal">
                              Area
                            </span>
                            <span className="text-black-900 font-switzer text-left font-normal">
                              {" "}
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="rotate-[1deg] text-black-900 text-xl tracking-[-0.40px] w-auto"
                            size="txtSwitzerRegular20"
                          >
                            5 Lacks
                          </Text>
                          <Text
                            className="rotate-[1deg] text-[11px] text-black-900_4c tracking-[-0.22px] w-auto"
                            size="txtSwitzerRegular11Black9004c"
                          >
                            Starting price
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="rotate-[1deg] text-black-900 text-xl tracking-[-0.40px] w-auto"
                            size="txtSwitzerRegular20"
                          >
                            10 days{" "}
                          </Text>
                          <Text
                            className="rotate-[1deg] text-[11px] text-black-900_4c tracking-[-0.22px] w-auto"
                            size="txtSwitzerRegular11Black9004c"
                          >
                            Remaining Days
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="rotate-[1deg] text-black-900 text-xl tracking-[-0.40px] w-auto"
                            size="txtSwitzerRegular20"
                          >
                            2.5 years
                          </Text>
                          <Text
                            className="rotate-[1deg] text-[11px] text-black-900_4c tracking-[-0.22px] w-auto"
                            size="txtSwitzerRegular11Black9004c"
                          >
                            Next check
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2.5 items-end justify-start w-full">
                      <div className="flex flex-col gap-[5px] h-[109px] md:h-auto items-end justify-between w-auto">
                        <Button
                          className="cursor-pointer h-[52px] leading-[normal] text-center text-sm w-full"
                          shape="square"
                          color="indigo_A200"
                          size="md"
                          variant="fill"
                        >
                          Complete
                        </Button>
                        <Button
                          className="border border-indigo-A200 border-solid cursor-pointer flex h-[52px] items-center justify-center w-[136px]"
                          rightIcon={
                            <Img
                              className="h-3 ml-2.5 my-[3px]"
                              src="images/img_arrowright.svg"
                              alt="arrow_right"
                            />
                          }
                          shape="square"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          <div className="leading-[normal] text-left text-sm">
                            Site visit
                          </div>
                        </Button>
                      </div>
                      <PrimaryOpportunityStatusbar className="flex flex-col h-[37px] md:h-auto items-start justify-start w-full" />
                    </div>
                  </div>
                </div>
                <div className="h-[1451px] md:h-[949px] mt-[-535px] mx-auto w-full z-[1]">
                  <div className="absolute h-[530px] inset-x-[0] mx-auto shadow-bs top-[0] w-full"></div>
                  <div className="absolute flex flex-col gap-[5px] md:h-auto h-full inset-y-[0] items-center justify-start left-[0] my-auto w-auto">
                    <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start p-[30px] sm:px-5 w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.64px] w-auto"
                        size="txtSwitzerRegular32"
                      >
                        Overview
                      </Text>
                      <Text
                        className="max-w-[447px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                        size="txtSwitzerRegular16Black900"
                      >
                        Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you love.
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start p-[30px] sm:px-5 w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.64px] w-auto"
                        size="txtSwitzerRegular32"
                      >
                        Why ?
                      </Text>
                      <Text
                        className="max-w-[447px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                        size="txtSwitzerRegular16Black900"
                      >
                        Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you love.
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start p-[30px] sm:px-5 w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.64px] w-auto"
                        size="txtSwitzerRegular32"
                      >
                        What ?
                      </Text>
                      <Text
                        className="max-w-[447px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                        size="txtSwitzerRegular16Black900"
                      >
                        Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you
                        love!Our AI feature simplifies your life by automating
                        routine tasks. Spend more time on the things you love.
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start p-[30px] sm:px-5 w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.64px] w-[447px]"
                        size="txtSwitzerRegular32"
                      >
                        Landmarks
                      </Text>
                      <PrimaryOpportunityLandmarks className="bg-white-A700 flex flex-col gap-2.5 items-start p-2.5 w-full" />
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start p-[30px] sm:px-5 w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.64px] w-auto"
                        size="txtSwitzerRegular32"
                      >
                        Map
                      </Text>
                      <Img
                        className="h-[266px] sm:h-auto object-cover w-full"
                        src="images/img_whyinvest.png"
                        alt="whyinvest"
                      />
                      <div className="flex flex-col items-end justify-center w-full">
                        <Button
                          className="border border-indigo-A200 border-solid cursor-pointer flex h-[17px] items-center justify-center w-[136px]"
                          rightIcon={
                            <Img
                              className="mt-[3px] ml-2.5"
                              src="images/img_arrowbackiosnew.svg"
                              alt="arrow_back_ios_new"
                            />
                          }
                          shape="square"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        >
                          <div className="leading-[normal] text-left text-sm">
                            Schedule a call{" "}
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-blue_gray-100 flex sm:flex-col flex-row gap-[5px] items-start justify-evenly right-[0] shadow-bs1 top-[0] w-[473px] sm:w-full">
                    <List
                      className="flex flex-col gap-[5px] items-start w-[458px] md:w-full"
                      orientation="vertical"
                    >
                      <PrimaryOpportunityStatusofland className="bg-white-A700 h-[156px] md:h-[46px] my-0 p-5 relative w-full" />
                      <PrimaryOpportunityStatusofland1 className="bg-white-A700 h-[156px] md:h-[46px] my-0 p-5 relative w-full" />
                      <PrimaryOpportunityStatusofland1
                        className="bg-white-A700 h-[156px] md:h-[46px] my-0 p-5 relative w-full"
                        stepcounter="Step 2"
                      />
                      <PrimaryOpportunityStatusofland1
                        className="bg-white-A700 h-[156px] md:h-[46px] my-0 p-5 relative w-full"
                        stepcounter="Step 3"
                        paybutton="Complete"
                      />
                      <PrimaryOpportunityStatusofland1
                        className="bg-white-A700 h-[156px] md:h-[46px] my-0 p-5 relative w-full"
                        stepcounter="Step 4 "
                        paybutton="Complete"
                      />
                      <PrimaryOpportunityStatusofland1
                        className="bg-white-A700 h-[156px] md:h-[46px] my-0 p-5 relative w-full"
                        stepcounter="Step 5"
                        paybutton="Complete"
                      />
                    </List>
                    <div className="bg-white-A700 flex flex-col h-[514px] md:h-auto items-start justify-start w-full">
                      <div className="bg-black-900 h-[100px] w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryOpportunityPage;
