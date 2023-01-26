import React from "react";
import { useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
  Input,
} from "@material-tailwind/react";
import plus from "../../../public/img/plus.svg";
import filterIcon from "../../../public/img/filterIcon.svg";
import vector from "../../../public/img/vector.svg";
import print from "../../../public/img/print.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import Sales_recording_data from "@/data/Sales-recording-data";
import AddField from "./AddField";

export function Sales() {
  const [salesState, setSalesState] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className={`mt-[30px] flex w-full flex-col gap-8 bg-[#E8E9EB] ${
          salesState ? "" : "hidden"
        }`}
      >
        <div>
          <div className=" rounded-[34px] bg-white p-2 xl:p-12">
            <div className="my-3 flex w-full flex-row items-center justify-between gap-3 py-5">
              <p className="text-[32px] font-bold">Sales recording</p>

              <Button
                className=" flex h-[60px] flex-row items-center justify-center rounded-2xl bg-[#280559] p-3 "
                onClick={() => setSalesState(false)}
              >
                <img className="m-1 w-[20px]" src={plus} alt="..." />
                <p className="m-1 text-base font-medium normal-case text-white">
                  Add New Sale
                </p>
              </Button>
            </div>
            <div className=" my-3 grid grid-cols-1 justify-between gap-3 py-5 xl:grid-cols-5">
              <form className="col-span-3 w-full px-4">
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
              <div className="col-span-2 flex flex-row gap-4">
                <div className=" grid  grid-cols-2 items-center lg:grid-cols-4">
                  <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
                    <p className="mx-3 text-[#BEBFC3] ">From Date</p>
                  </button>
                  <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
                    <p className="mx-3 text-[#BEBFC3] ">To Date</p>
                  </button>
                  <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
                    <img className="w-[20px]" src={filterIcon} alt="..." />
                    <p className="mx-3 ">Apply</p>
                  </button>
                  <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
                    <img className="w-[20px]" src={print} alt="..." />
                    <p className="mx-3 ">Print</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="w-[83px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                    >
                      <Checkbox />
                    </th>

                    <th
                      scope="col"
                      className="w-[96px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="w-[300px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="w-[350px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="w-[80px] px-6 py-3 text-center text-lg font-bold text-gray-500  "
                    >
                      Amount
                    </th>

                    <th
                      scope="col"
                      className="w-[115px] px-6 py-3 text-center text-lg font-bold text-gray-500  "
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="w-[115px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                    >
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Sales_recording_data.map((items) => (
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                        <Checkbox />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                        {items.Date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                        {items.Name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                        {items.Description}
                      </td>
                      <td
                        className={`text-${items.color} whitespace-nowrap px-6 py-4 text-center text-sm font-semibold`}
                      >
                        {items.Amount}
                      </td>
                      <td className=" textpy-4 whitespace-nowrap text-center text-lg font-medium">
                        <Button
                          variant="outlined"
                          className=" rounded-2xl px-5 py-2"
                        >
                          <p className=" m-0 justify-center p-0 text-center">
                            view
                          </p>
                        </Button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-center text-lg font-medium">
                        {items.option}
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

      {/* ----------------------------------------- */}

      <div
        className={`mt-[30px] flex w-full flex-col gap-8 bg-[#E8E9EB] ${
          salesState ? "hidden" : ""
        }`}
      >
        <div className="my-5 grid grid-cols-1">
          <p className=" text-4xl font-semibold text-[#280559]">Create Sales</p>
          <p className=" font text-base text-[#9898A3]">Create or edit Sales</p>
        </div>
        <div className="my-[30px] rounded-[34px] bg-white p-[39px]">
          <p className="my-8 text-2xl font-semibold text-[#333333]">
            Sale Details
          </p>
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 laptop:grid-cols-3">
            <div>
              <p className=" my-4 text-base font-semibold">Name of Sale</p>
              <Input className="h-[57px]" label="Sale Name Here"></Input>
            </div>
            <div>
              <p className=" my-4 text-base font-semibold">Descripton</p>
              <Input className="h-[57px]" label="Descripton"></Input>
            </div>
            <div>
              <p className=" my-4 text-base font-semibold">Amount</p>
              <form className="">
                <div className="relative">
                  <div className=" absolute top-[1px] left-[1px]   rounded-md bg-[#E5E8ED]">
                    <p className="p-[12px] text-base font-medium text-[#333333]">
                      USD:
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="w-full rounded-md border-[#E5E8ED] bg-gray-50 py-3  pl-16 pr-4  text-gray-500 outline-none"
                  />
                </div>
              </form>
            </div>
            <div>
              <p className=" my-4 text-base font-semibold">Date</p>
              <Input className="h-[57px]" label="DD/MM/YYYY"></Input>
            </div>
            <div>
              <p className=" my-4 text-base font-semibold">Add More Field</p>
              <Button
                className="h-[57px] w-full rounded-[7px] bg-[#F8F9FB] px-[11px] text-center text-[16px] font-semibold normal-case text-[#BEBFC3]"
                onClick={() => setOpenModal(true)}
              >
                Click to add more field
              </Button>
              <AddField open={openModal} close={() => setOpenModal(false)} />
            </div>
          </div>
        </div>
        <div>
          <Button
            className="rounded-[15px]  bg-[#280559]"
            onClick={() => setSalesState(true)}
          >
            <div className="flex flex-row items-center justify-center px-[33px] py-[10px]">
              <img src={saveIcon} alt="..." />
              <p className="px-[11px] text-base font-medium normal-case text-white ">
                Save Changes
              </p>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sales;
