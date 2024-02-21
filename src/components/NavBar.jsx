import { useState } from "react";
import { BtnLeng } from "./btnLeng";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
];
function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-[80px] bg-white border-b-4 border-[#990000]">
      <div className="max-w-[1300px] mx-auto px-3 flex justify-between items-center h-full">
        <img src="/whiteLogo.svg" alt="" className="h-[75px]" />
        <div className="hidden md:flex">
          <ul className=" flex text-[#191919] font-bold  items-center gap-8">
            {links.map((li) => (
              <Link
                key={li.url}
                to={li.url}
                className="text-xl hover:scale-105 hover:border-b-2 hover:text-[#990000] border-[#990000] duration-500 cursor-pointer hover:text-lg "
              >
                {li.name}
              </Link>
            ))}

            <li>
              <BtnLeng />
            </li>
          </ul>
        </div>
        {/*hamburguer menu*/}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose
              size={30}
              className="text-[#990000] hover:scale-105 duration-500 cursor-pointer "
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="text-[#990000] hover:scale-105 duration-500 cursor-pointer"
            />
          )}
        </div>
        {/*mobile menu*/}
        <div
          className={
            nav
              ? "md:hidden w-full bg-[#990000] text-white text-center justify-center duration-700  absolute top-[80px] py-5 left-0 flex"
              : "hidden absolute w-full   duration-700 top-[80px]  text-center justify-center"
          }
        >
          <ul className="w-full flex flex-col">
            {links.map((li) => (
              <Link
                key={li.url}
                to={li.url}
                className="hover:scale-105 hover:border-b-2 border-white duration-500 cursor-pointer text-2xl w-full "
              >
                {li.name}
              </Link>
            ))}

            <li className="flex justify-center">
              <BtnLeng />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
