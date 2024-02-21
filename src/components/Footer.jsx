import IconContainer from "./IconContainer";
import IconGmail from "./IconGmail";
import IconIg from "./IconIg";
import IconWsp from "./IconWsp";
import IconYT from "./IconYT";
import LocationIcon from "./IconLocation";

export default function Footer() {
  return (
    <div className="w-full  bg-[#990000] ">
      <div className="h-2/3 py-7 flex justify-around items-center flex-wrap gap-3 ">
        {/* logo */}
        <div className="flex h-[100%] items-center pl-4">
          <span className="font-[FertigoPro-Regular2] text-white text-4xl pl-7">
            Breast time of life
          </span>
          <img src="/mariWhite.svg" alt="" className="h-[50px] p-2" />
        </div>
        {/* location */}
        <div className="flex h-[100%] items-center pl-4">
          <IconContainer className={"text-white p-2 "}>
            <LocationIcon height={"30px"}></LocationIcon>
          </IconContainer>
          <span className="border-0 md:border-r-4 py-2 pl-4 pr-9 text-3xl text-white">
            California
          </span>
        </div>
        {/* social media links */}
        <div className="flex h-[100%] items-center pl-4 gap-7">
          <IconContainer className={"text-white p-2 "}>
            <IconIg></IconIg>
          </IconContainer>
          <IconContainer className={"text-white p-2 "}>
            <IconYT></IconYT>
          </IconContainer>
          <IconContainer className={"text-white p-2 "}>
            <IconGmail></IconGmail>
          </IconContainer>
          <IconContainer className={"text-white p-1 "}>
            <IconWsp></IconWsp>
          </IconContainer>
        </div>
      </div>
      {/*copyrigth and credits   */}
      <div className="md:text-end text-center p-4 text-white my-auto h-1/3 ">
        © 2024 Synchro Systems. All Rights Reserved.
      </div>
    </div>
  );
}
