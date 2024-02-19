import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container } from "./index";
import { logo } from "../assets/index";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
      setMobileMenu(false);
    } else {
      navigate("/explore/tv");
      setMobileMenu(false);
    }
  };

  return (
    <header
      className={`${
        mobileMenu ? "bg-black3" : "bg-black"
      } sticky w-full z-30 top-0`}
    >
      <Container>
        <div className="flex  py-2 justify-between w-full items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="hidden md:flex items-center max-md:gap-8 md:gap-12 lg:gap-16">
            <NavLink className={({ isActive }) => isActive ? "text-pink" : "text-white"} to="/explore/movie">
              <li>Movies</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-pink" : "text-white"} to="explore/tv">
              <li>TV Shows</li>
            </NavLink>
          </ul>
          <div className="flex gap-8 md:hidden">
            <div
              className="cursor-pointer p-2 rounded-full hover:bg-gray-700"
              onClick={() => setMobileMenu((prev) => !prev)}
            >
              {mobileMenu ? <VscChromeClose /> : <SlMenu />}
            </div>
          </div>
          <div
            className={`${
              mobileMenu && "animate-mobileMenu"
            } absolute bg-black3 z-10 translate-y-[-100%] border-t-[1px] left-0 w-full p-4`}
          >
            <ul className="flex flex-col gap-2">
              <li
                className="hover:text-pink cursor-pointer w-fit"
                onClick={() => navigationHandler("movie")}
              >
                Movies
              </li>

              <li
                onClick={() => navigationHandler("tv")}
                className="hover:text-pink cursor-pointer w-fit"
              >
                TV Shows
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
