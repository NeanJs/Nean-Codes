import Image from "next/image";
import { Link } from "react-scroll";
import { Button } from "../components/global/button";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const ROUTES = [
    {
      title: "Home",
      path: "home",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Services",
      path: "services",
    },
    {
      title: "Portfolio",
      path: "portfolio",
    },
    {
      title: "Startups",
      path: "startups",
    },
  ];
  const [floatNav, setFloatNav] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        setFloatNav(true);
      } else {
        setFloatNav(false);
      }
    };
  }, []);
  const handleMobileToggle = () => {
    const burger = document.querySelector(".mobile");
    burger.classList.toggle("pop");

    setToggle(!toggle);
  };
  return (
    <>
      <div className="logo lg:hidden flex fixed top-2 left-2 z-10">
        <Image
          src={"assets/nean_logo.svg"}
          alt="https://nijanadhikari.com.np"
          width={40}
          height={40}
        />
      </div>
      <div
        className="burger fixed top-2 z-50 right-2 cursor-pointer lg:hidden flex items-center justify-center "
        onClick={handleMobileToggle}
      >
        <span className="mobile pop"></span>
      </div>
      {/* <div className="menu fixed top-4 z-50 right-4 cursor-pointer lg:hidden flex">
        {toggle ? "Open" : "Close"}
      </div> */}
      <div
        className={`lg:w-screen min-w-fit w-[250px] min-h-[10vh] right-8 flex items-center justify-center fixed top-8 lg:top-0 lg:right-0 z-40 bg-white shadow-lg lg:shadow-none py-2 px-4 text-sm ease-linear duration-300 ${
          floatNav
            ? "lg:bg-white lg:shadow-lg"
            : "lg:bg-transparent lg:shadow-none"
        } ${!toggle ? "translate-x-[200%]" : "translate-x-0"}`}
      >
        <div
          className={`lg:w-nean_lg ease duration-300 mx-auto flex flex-col items-center py-4 px-0  gap-8 lg:flex-row justify-between lg:items-center w-full relative navigation 
          `}
        >
          <div className="logo lg:flex hidden">
            <Image
              src={"assets/nean_logo.svg"}
              alt="https://nijanadhikari.com.np"
              width={40}
              height={40}
            />
          </div>
          <div className="navbar flex flex-col lg:flex-row items-center gap-8 lg:gap-[40px]">
            <ul className="navlinks flex flex-col lg:flex-row justify-center gap-[40px]">
              {ROUTES.map((route, id) => (
                <Link
                  key={id}
                  to={route.path}
                  smooth
                  spy
                  delay={100}
                  className=" hover:text-nean_blue cursor-pointer text-center"
                  activeClass="text-nean_blue"
                >
                  {route.title}
                </Link>
              ))}
            </ul>
            <Link to={"contact"} smooth>
              <Button rounded>Say Hi!</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
