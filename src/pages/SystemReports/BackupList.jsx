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
import Backup from "@/data/backup-props";
import vector from "../../../public/img/vector.svg";
import fileIcon from "../../../public/img/fileIcon.svg";

export function Leads() {
  return (
    <div className="mt-12 w-full bg-[#E8E9EB]">
      <div>
        <div className=" rounded-[34px] bg-white p-2 xl:p-12">
          <div className="flex w-full flex-row justify-between pb-6">
            <p className="text-[32px] font-bold text-black">Backup List</p>
          </div>
          <div className="flex flex-col overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="border-hidden bg-white">
                <tr>
                  <th
                    scope="col"
                    className="w-[500px] py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-[100px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="w-[200px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Size
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Backup.map((items, index) => (
                  <tr key={index} className="border-hidden">
                    <td className="flex flex-row whitespace-nowrap py-4 text-lg font-medium text-gray-800 ">
                      <img
                        className="h-[28px] w-[24px]"
                        src={fileIcon}
                        alt="..."
                      />
                      <p className="mx-6">{items.name}</p>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.size}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leads;
