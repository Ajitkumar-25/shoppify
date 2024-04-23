import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";

import logout from "../assets/logout.svg";
import user from "../assets/user.svg";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const { totalCartItems } = useContext(ShopContext);

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-transparent ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        {/* logo */}
        <div>
          <Link>
            <img src={logo} alt="image not found" height={60} width={66} />
          </Link>
        </div>
        {/* navbar Desktop */}
        <Navbar
          containerStyles={" hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />

        {/* Navbar Mobile */}

        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 P-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 P-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />

        {/* Hamburger */}
        <div className="flexBetween sm:gap-x-6 bold-16">
          {!menuOpened ? (
            <MdMenu
              className=" md:hidden cursor-pointer
         hover:text-secondary mr-2  p-1 rounded-full h-8 w-8"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer
               hover:text-secondary mr-2  p-1 rounded-full h-8 w-8 "
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween gap-x-6 ">
            <NavLink to={"cart"} className={""}>
              <FaOpencart className=" p-1 h-8 w-8 ring-slate-900/30 font-extrabold " />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-8 -right-4">
                {totalCartItems()}
              </span>
            </NavLink>
            <NavLink
              to={"/"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              <img src={logout} height={19} width={19} />
              Logout
            </NavLink>
            <NavLink
              to={"login"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              <img src={user} height={19} width={19} />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
