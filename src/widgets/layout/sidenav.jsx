import PropTypes from "prop-types";
import { useState, useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import menuIcon from "../../../public/img/menuIcon.svg";
import menuicon1 from "../../../public/img/menuicon1.png";
import {
  Avatar,
  Button,
  IconButton,
  Bars3Icon,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import userpt from "../../../public/img/sidebar/userpt.svg";
import logout from "../../../public/img/sidebar/logout.svg";
import { useEffect } from "react";
import { DashboardNavbar } from ".";
export function Sidenav({ brandImg, brandName, routes, role }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-blue-gray-800",
    white: "bg-blue-gray-800",
    transparent: "bg-transparent",
  };
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="absolute left-[-10px] top-3">
        <DashboardNavbar />
      </div>
      <aside
        className={` ${
          openSidenav
            ? "translate-x-0"
            : "-translate-x-[370px] sm:translate-x-0 "
        } fixed inset-0 z-50 my-4 ml-4 h-full  w-[100px]   rounded-xl bg-[#280559] transition-transform duration-300 sm:w-[100px] lg:w-[350px] `}
      >
        <div className="mb-4 flex flex-row justify-center">
          <button
            className="sm:hidden "
            onClick={() => setOpenSidenav(dispatch, false)}
          >
            <img
              src={`${toggle ? menuIcon : menuicon1}`}
              className=" mx-5 h-[18px] w-[27px]"
            />
          </button>
          <div className="flex items-center justify-center pt-4">
            <img src={brandImg} className=" h-[45px] w-[192px] lg-max:hidden" />
          </div>
        </div>

        <div className="mx-3 px-3 lg-max:mx-0">
          <p className=" pb-4 text-[#92929D] lg-max:hidden">{brandName}</p>

          {routes.map(({ layout, title, pages }, key) => (
            <ul key={key} className="mb-4 flex flex-col items-center gap-1">
              {title && (
                <li className="mx-3.5 mt-4 mb-2">
                  <Typography
                    variant="small"
                    color={sidenavType === "dark" ? "white" : "blue-gray"}
                    className="font-black uppercase opacity-75"
                  >
                    {title}
                  </Typography>
                </li>
              )}
              {pages
                .filter(({ id }) => role.includes(id))
                .map(({ icon1, icon2, name, path }) => (
                  <li className="w-full" key={name}>
                    <NavLink to={`/${layout}${path}`}>
                      {({ isActive }) => (
                        <div className="flex flex-row items-center">
                          <div
                            className={`${
                              isActive ? "" : "hidden"
                            } absolute left-0 h-8 w-1 rounded-sm bg-white`}
                          />
                          <div
                            className={`bg-${
                              isActive ? "white" : ""
                            } flex w-full items-center rounded-2xl py-5 px-7 capitalize `}
                          >
                            {isActive ? icon2 : icon1}
                            <div
                              className={`text-${
                                isActive ? "[#280559]" : "white"
                              } mx-4 flex text-base font-medium capitalize lg-max:hidden`}
                            >
                              {name}
                            </div>
                          </div>
                        </div>
                      )}
                    </NavLink>
                  </li>
                ))}
            </ul>
          ))}
        </div>
        <div className=" absolute left-8 bottom-10 flex justify-around ">
          <NavLink to="/">
            <div className="flex flex-row">
              <img src={userpt} />
              <div className=" left-5 mx-4 lg-max:hidden">
                <p className=" text-white  lg-max:hidden ">USER</p>
                <p className=" text-[#AAABAF] lg-max:hidden ">user@email.com</p>
              </div>
              <img className=" ml-6  lg-max:hidden" src={logout} />
            </div>
          </NavLink>
        </div>
      </aside>
    </>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo.svg",
  brandName: "MENU",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
