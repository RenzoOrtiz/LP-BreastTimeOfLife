import BtnSimple from "../components/BtnSimple";
import BtnSimpleW from "../components/BtnSimpleW";
import { Carousel } from "flowbite-react";

import IconContainer from "../components/IconContainer";
import IconLocation from "../components/IconLocation";
import ImgFormatR40 from "../components/ImgFormatR40";
export default function Home() {
  return (
    <div className=" h-full">
      {/* Name and Slogan*/}
      <div className="pt-5">
        <h2 className="text-2xl font-bold text-[--primary-color] text-center">
          Breast time of life LLC
        </h2>
        <h1 className="text-xl font-extrabold text-[--primary-color] text-center">
          Healthy Beginnings for a bright Future Here to help you with your
          Lactation experience.
        </h1>
      </div>
      {/*Shortened services and call to action*/}
      <section className="px-7 pt-5 flex flex-wrap mb-4 ">
        <div className="p-4 md:pl-7 w-full md:w-1/2 text-center flex flex-col justify-center  items-center ">
          <div className="flex flex-col w-full pb-3">
            <span className="text-4xl font-bold text-[--primary-color]">
              Prenatal & Postpartum
            </span>
            <p className="text-lg text-[--primary-color]">Lactation Services</p>
          </div>
          <div className="flex flex-col w-full pb-4">
            <span className="text-4xl font-bold text-[--primary-color]">
              Lactation
            </span>
            <p className="text-lg text-[--primary-color]">
              Classes and Consultations
            </p>
          </div>
          <BtnSimple text="Book now" url="/services" />
        </div>
        <ImgFormatR40 src="/bbEat.jpg" alt={"imgBabyEat"} />
      </section>
      {/* About Pa */}
      <section className=" relative ">
        <div className="flex flex-wrap items-center h-full  md:h-[424px] lg:h-[680px]">
          <img
            src="/Elipse.svg"
            alt=""
            className=" absolute inset-0 w-full h-full  md:h-[424px] lg:h-[680px] object-cover -z-10"
          />
          <img
            src="/paulaDoc.jpg"
            alt="imgBaby"
            className="mask mask-circle rounded-[50%] h-auto md:w-1/2   p-9"
          />
          <div className="p-4 mb-4 md:pl-7 w-full md:w-1/2 text-center md:text-start  flex flex-col justify-center  items-center md:items-start ">
            <div className="flex flex-col w-full pb-3">
              <span className="text-4xl font-bold text-white">
                Laura I Maria-Roman
              </span>
              <span className="text-4xl font-bold text-white pb-3">
                BS, CLE, IBCLC
              </span>
              <p className="text-xl text-white">
                Nutritionist from Argentina and International Board Lactation
                Consultant from US.
              </p>
            </div>

            <BtnSimpleW text="Read more" url="/about" />
          </div>
        </div>
      </section>
      {/*Location and carousel*/}
      <section className="mb-[4rem]">
        <h2 className="mt-2 py-6 p-7 text-xl font-bold text-[--primary-color] text-start ">
          In person-Home Consultations Santa Clarita Valley, Stevenson Ranch,
          Acton, Agua Dulce, Castaic, San Fernando, Porter Ranch, Simi Valley,
          text for other locations.
        </h2>
        <div className="flex gap-3 place-items-center flex-col md:flex-row p-7">
          <span className="text-3xl font-extrabold text-[--primary-color] text-center">
            Come to our Office at
          </span>
          <IconContainer
            borderColor={"--primary-color"}
            className={"text-[--primary-color] size-[4rem]"}
          >
            <IconLocation className={"size-9 "} />
          </IconContainer>
          <span>
            <p className="text-xl font-bold text-[--primary-color] text-center">
              Santa Clarita Valley 27965 MythDr
            </p>
            <p className="text-xl font-bold text-[--primary-color] text-center">
              MythDr #101, Valencia, CA 91355
            </p>
          </span>
        </div>
        <Carousel className="p-7 h-[400px] duration-700">
          <div className="grid grid-cols-2 gap-4">
            <img src="/office1.jpg" alt="" className="h-full" />
            <img src="/office2.jpg" alt="" className="h-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/office3.jpg" alt="" className="h-full" />
            <img src="/office4.jpg" alt="" className="h-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/office5.jpg" alt="" className="h-full" />
            <img src="/office6.jpg" alt="" className="h-full" />
          </div>
        </Carousel>
      </section>
    </div>
  );
}
