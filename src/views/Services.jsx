import { Carousel } from "flowbite-react";
import BtnSimpleW from "../components/BtnSimpleW";
import Testimonial from "../components/Testimonial";

export default function Services() {
  return (
    <section>
      <h2 className="text-center text-5xl font-[FertigoPro-Regular2] py-[4rem] text-[--primary-color]">
        Services
      </h2>

      {/*Check insurance */}
      <div className="flex p-6 bg-[--primary-color] mb-4 flex-wrap flex-col md:flex-row md:h-[10rem]">
        <aside className="px-16 text-white text-xl w-full md:w-1/2 flex  h-full flex-col justify-center">
          <span className="font-extrabold py-2">Check your insurance</span>
          <p>
            Click the button if you want to check if your insurance can cover
            your visit
          </p>
        </aside>
        <div className="w-full md:w-1/2 flex items-center h-full justify-center">
          <BtnSimpleW text="Check" />
        </div>
      </div>

      {/*Appointment schedule" */}
      <section className="h-[29rem] bg-blue-gray-400"></section>

      {/*Testimonials*/}
      <section className="flex place-items-center flex-col">
        <h2 className="text-center text-5xl font-[FertigoPro-Regular2] py-[4rem] text-[--primary-color]">
          Testimonials
        </h2>
        <p className="w-3/4 px-4 font-bold text-[--primary-color]">
          Our main mission, the one that fills our days with a sense of utmost
          accomplishment, is to provide an invaluable service to parents, and in
          turn, the little ones who need a hand getting started with one of
          life’s biggest challenges. Proper nutrition. These happy parents have
          been kind enough to express their gratitude in writing, and we are
          more than proud to share this with you:
        </p>
        <Carousel
          className="mb-9 overflow-hidden"
          theme={{
            control: {
              icon: "text-[--primary-color] size-[6rem] rounded-full border-4 border-[--primary-color] absolute ",
            },
            root: {
              leftControl: "absolute left-14 top-[50%]",
              rightControl: "absolute right-14 top-[50%]",
            },
          }}
        >
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
        </Carousel>
      </section>
    </section>
  );
}
