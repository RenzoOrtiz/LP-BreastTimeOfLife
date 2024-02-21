import BtnSimple from "../components/BtnSimple";
import ImgFormatR40 from "../components/ImgFormatR40";

export default function About() {
  return (
    <section>
      <h2 className=" flex justify-center text-center text-5xl font-[FertigoPro-Regular2] py-[4rem] text-[--primary-color]">
        Hello Word <img src="/mariRed.svg" alt="" className="h-[50px] p-2" />
      </h2>
      {/*profetional experience*/}
      <section className="px-7 pt-5 flex flex-wrap mb-4 text-pretty text-xl ">
        <div className="p-4 md:pl-7 w-full md:w-1/2 text-start font-bold flex flex-col justify-center  items-center ">
          <p className="py-3">
            I’m Paula Inés Laria, I’m a Nutritionist from Argentina and
            International Board Lactation Consultant from US. I speak English
            and Spanish.
          </p>
          <p>
            At the present 2024 I have 17 yrs. of experience working with
            prenatal and postpartum families, classes and consultations, helping
            with Lactation. ( 7 years working in the Nutrition Program WIC, 8
            years working in 3 different Mayor Hospitals, 2 years Telehealth and
            9 years of Private Practice home visits).
          </p>
        </div>
        <ImgFormatR40 src="/docBb.jpg" alt={"imgBabyEat"} />
      </section>

      {/*personal experience*/}
      <section className="px-7 pt-5 flex flex-wrap mb-4 text-pretty text-xl">
        <ImgFormatR40 src="/docMom.jpg" alt={"imgBabyEat"} />
        <div className="p-4 md:pl-7 w-full md:w-1/2 text-start font-bold flex flex-col justify-center  items-center ">
          <p className="py-3">
            In my personal experience I’m a mother of 2 amazing kids 10 and 14
            yrs. old, I breastfed them for more than 2 yrs. each. Breastfeeding
            wasn’t easy at the beginning, and I learned so much with both of my
            babies.
          </p>
          <p>
            Despite the difficulties, breastfeeding is an experience that I will
            treasure for life. Below is a link if you would like to learn about
            my personal Breastfeeding experience, enjoy!!!
          </p>
        </div>
      </section>

      {/*helping*/}
      <section className="px-7 pt-5 flex flex-wrap mb-4 text-pretty text-xl ">
        <div className="p-4 md:pl-7  w-full md:w-1/2 text-start font-bold flex flex-col justify-center  items-center ">
          <p className="py-3">
            It’s an honor for me every time I have an opportunity to help a new
            family to achieve their infant feeding goals.
          </p>
          <p>
            Your infant feeding set the foundations for a healthy Life.
            Lactation can help human babies develop to their maximum potential.
            I’m here to help you!!!
          </p>
        </div>
        <ImgFormatR40 src="/docMam.jpg" alt={"imgBabyEat"} />
      </section>

      {/*reasons for helping mothers*/}
      <section className="px-7 pt-5 flex flex-wrap mb-4 text-pretty justify-center text-xl">
        <h2 className=" flex justify-center text-center text-5xl font-[FertigoPro-Regular2] py-[4rem] text-[--primary-color]">
          My reasons for helping mothers
          <img src="/mariRed.svg" alt="" className="h-[50px] p-2" />
        </h2>
        <p className="px-7 font-bold pb-3">
          Breastfeeding/ Chest feeding is essential to the life of a human
          being. As adults we can choose our options, our babies cannot. It is
          the Mother/ Adult Caregiver/ Parents who must make the right decision
          about feeding your baby.
        </p>
        <p className="px-7 font-bold">
          Breastfeeding is always the way to go unless there is a medical
          condition that does not allow it. Today we have so much information at
          our fingertips that even though our heart knows what is right, our
          brain gets confused and does not know how to proceed. Although our
          intentions may be good, bad information can often make us take the
          wrong path.
        </p>
        <img
          src="/helpMom.jpg"
          alt="img HelpMom"
          className="rounded-[40px] p-7 "
        />
        <p className="px-7 font-bold pb-3">
          In my professional experience, I have noticed that certain normal
          situations that may arise after birth and/or in the first weeks after
          leaving the hospital, can often be mistaken as problems by new
          parents. These obstacles cause the use of alternative feeding methods
          for an infant, which then turns into a process of situations that just
          complicates, or even eliminates the possibility of breastfeeding/
          chest feeding a baby. I also discovered that the more I know, the more
          I need to know.
        </p>
        <p className="px-7 font-bold">
          The more information a birthing person/ parent and family can get
          before the baby is born, the more successful their decisions will be.
          I strongly believe that 'Information is power'. When I know what other
          people are talking about, I can also suggest trying other
          alternatives, or wait before taking unnecessary action. This
          information can allow you to feel like another member of the medical
          team that will help you and your baby at birth. This way you won’t
          need to see things from the sidelines, you can understand what they
          are talking about and participate in decisions that may affect the
          well-being of your baby.
        </p>
        <h2 className=" flex justify-center text-center text-5xl font-[FertigoPro-Regular2] pb-2 pt-4 text-[--primary-color]">
          Please take a minute to think about this
          <img src="/mariRed.svg" alt="" className="h-[50px] p-2" /> <br />
        </h2>
        <h3 className=" flex justify-center text-center text-4xl font-[FertigoPro-Regular2] mb-4 text-[--primary-color]">
          If you had to choose between:
        </h3>
        <p className="px-7 font-bold text-start w-full">
          - A meal that is commercially elaborated, then frozen, then thawed or
          heated in the microwave.
        </p>
        <p className="px-7 font-bold text-start w-full">
          - Organic food that is fresh, and cooked by mom's hands.
        </p>
        <p className="px-7 font-bold text-start w-full py-5">
          Which one would you choose?
          <br />
          Undoubtedly, “Mom’s home-made food”, right? (BTW, I miss your food,
          Mom!)
        </p>
        <p className="px-7 font-bold text-start">
          From my point of view, making the decision on how to feed your baby is
          as important as the decision to bring a child into the world. It is my
          wish to be able to help you on this journey of making decisions, by
          simply offering you information based on scientific data. Choose
          wisely and know when and where to get help with breastfeeding.
        </p>
        <p className="px-7 font-bold text-start w-full py-5 text-[--primary-color]">
          With much Love,
          <br />
          Laura I Maria-Roman
        </p>
        <div className="flex flex-col w-full items-center mb-7">
          <span className="font-bold text-center my-3 ">To visit my blog</span>
          <BtnSimple text="Click here" className="font-bold"></BtnSimple>
        </div>
      </section>
    </section>
  );
}
