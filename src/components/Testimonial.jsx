import IconQuotes from "./IconQuotes";

export default function Testimonial() {
  return (
    <blockquote className=" mx-auto w-3/5 flex items-center h-[100%] justify-center flex-col mb-9 mt-2">
      <IconQuotes className={"size-16 text-[--primary-color]"}></IconQuotes>
      <div className=" w-full rounded-[40px] border-4 border-[--primary-color] p-5 ">
        <p className=" font-bold mb-4">
          Paula played a critical role in my experiences of breastfeeding my two
          boys. She demonstrates professionalism and expertise. Paula knew just
          what I needed to make my experience successful. With her gentle
          guidance and kind explanation, I felt relaxed and motivated. When I
          struggled, she was there to help me improve and I was able to continue
          breastfeeding more comfortably and joyfully. When my friends had
          questions or setbacks she was happy and eager to offer her support,
          even by phone. I’m grateful for her. I’ve known Paula for more than
          three years and she is truly compassionate, caring, and optimistic. I
          would happily recommend Paula.
        </p>
        <footer className="font-bold text-[--primary-color]">
          Crystal W. <br />
          <cite>Santa Clarita, California</cite>
        </footer>
      </div>
    </blockquote>
  );
}
