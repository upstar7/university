import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import LeadData from "@/data/lead-table-props";
import Userprops from "@/data/user-props";
import plus from "../../../public/img/plus.svg";
import filterIcon from "../../../public/img/filterIcon.svg";
import down from "../../../public/img/downIcon.svg";
import vector from "../../../public/img/vector.svg";

export function UsersByEmail() {
  return (
    <div className="mt-12 w-full bg-[#E8E9EB]">
      <div>
        <div className=" rounded-[34px] bg-white p-2 xl:p-12">
          <div className=" my-3 flex w-full flex-row justify-between pb-6">
            <p className="text-[32px] font-bold text-black">Users</p>
          </div>
          <div className=" flex w-full justify-between rounded-lg pb-4 pl-12">
            {/* <Input size="lg" className="w-full" htmlFor="hs-table-search" label="🔍 Search user"/> */}
            <form className="w-full px-4">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 left-3 my-auto h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-md border bg-gray-50 py-3 pl-12 pr-4 text-gray-500 outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>
            </form>
            <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
              <img className="w-[20px]" src={filterIcon} alt="..." />
              <p className="mx-3 ">Filters</p>
            </button>
          </div>
          <div className="flex flex-col overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="w-[50px] py-3 text-left text-lg font-bold text-gray-500  "
                  ></th>
                  <th
                    scope="col"
                    className="w-[200px] py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    ID User
                  </th>
                  <th
                    scope="col"
                    className="w-[83px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-[346px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="w-[113px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Branch
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Userprops.map((items, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 text-sm font-medium text-gray-800">
                      <div className="flex h-7 items-center">
                        <Checkbox />
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 text-lg font-medium text-gray-800">
                      {items.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left text-lg font-semibold">
                      {items.phone}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left text-lg font-medium">
                      {items.position}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left text-lg font-medium">
                      {items.branch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 ">
            <p className="px-5 text-base text-[#92929D]">
              <span className="text-[#280559]">1</span>-5 of 56
            </p>
            <div className="flex flex-row items-center justify-center">
              <p className="text-base text-[#92929D]">The page you’re on</p>
              <div className=" w-[77px]">
                <Menu>
                  <MenuHandler>
                    <button className=" flex h-[40px] w-[77px] flex-row items-center justify-center rounded-2xl shadow-lg outline-1 outline-[#CBD2DC]">
                      <p className="mx-3">1</p>
                    </button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5</MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg outline-2 outline-black">
                <img src={vector} alt="..." />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg outline-2 outline-black">
                <img className=" rotate-180" src={vector} alt="..." />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersByEmail;
