import React from "react";
import { Link } from "react-router-dom";
import { 
  Button,
  Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Checkbox
} from "@material-tailwind/react";
import UniversityModul_university_data from "@/data/UniversityModul-university-data";
import plus from '../../../public/img/plus.svg';
import filterIcon from '../../../public/img/filterIcon.svg';
import down from '../../../public/img/downIcon.svg';
import vector from '../../../public/img/vector.svg';
import print from '../../../public/img/print.svg';
import devit_recording_data from "@/data/Sales-recording-data";
export function Debit() {
   
    return (
        <div className="mt-[30px] w-full bg-[#E8E9EB]">
             <div>
             <div className=" bg-white p-2 xl:p-12 rounded-[34px]">
             <div className="flex flex-row w-full justify-between items-center py-5 my-3 gap-3">
                        <p className="text-[32px] font-bold">Debit & Credit</p>
                    </div>
                    <div className=" justify-between py-5 my-3 gap-3 grid grid-cols-1 xl:grid-cols-5">
                        <form className="w-full px-4 col-span-3">
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
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
                                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                                />
                            </div>
                        </form>
                        <div className="flex flex-row gap-4 col-span-2">
                            <div className=" items-center  grid grid-cols-2 lg:grid-cols-4">
                                <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                                    <p className="mx-3 text-[#BEBFC3] ">From Date</p>
                                </button>
                                <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                                    <p className="mx-3 text-[#BEBFC3] ">To Date</p>
                                </button>
                                <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                                    <img className="w-[20px]" src={filterIcon} alt="..."/>
                                    <p className="mx-3 ">Apply</p>
                                </button>
                                <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                                    <img className="w-[20px]" src={print} alt="..."/>
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
                                    className="w-[30px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                >
                                    
                                </th>
                                                                
                                <th
                                    scope="col"
                                    className="w-[100px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                >
                                    Date
                                </th>
                               
                                <th
                                    scope="col"
                                    className="w-[300px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                >
                                    Name
                                </th>
                                {/* <th
                                    scope="col"
                                    className="w-[350px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                >
                                    Description
                                </th> */}
                                {/* <th
                                    scope="col"
                                    className="w-[80px] px-6 py-3 text-lg font-bold text-center text-gray-500  "
                                >
                                    Amount
                                </th> */}
                                <th
                                    scope="col"
                                    className="w-[80px] px-6 py-3 text-lg font-bold text-center text-gray-500  "
                                >
                                    Debit
                                </th>
                                <th
                                    scope="col"
                                    className="w-[80px] px-6 py-3 text-lg font-bold text-center text-gray-500  "
                                >
                                    Credit
                                </th>
                                
                                {/* <th
                                    scope="col"
                                    className="w-[115px] px-6 py-3 text-lg font-bold text-center text-gray-500  "
                                >
                                    Action
                                </th>
                                <th
                                    scope="col"
                                    className="w-[115px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                >
                                    Option
                                </th> */}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {devit_recording_data.map((items) => (
                            <tr>
                                <td className="px-6 py-4 text-lg items-center text-gray-800 whitespace-nowrap">
                                    <Checkbox/>
                                </td>
                                <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                    {items.Date}
                                </td>
                                <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                    {items.Name}
                                </td>
                                {/* <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                    {items.Description}
                                </td>
                                <td className={`text-${items.color} px-6 py-4 text-sm text-center font-semibold whitespace-nowrap`}>
                                    {items.Amount}
                                </td> */}
                                <td className="px-6 py-4 text-lg text-gray-800 text-center whitespace-nowrap">
                                    {items.Debit}
                                </td>
                                <td className={`text-${items.color} px-6 py-4 text-sm text-center font-semibold whitespace-nowrap`}>
                                    {items.Credit}
                                </td>
                                {/* <td className=" textpy-4 text-lg font-medium text-center whitespace-nowrap">
                                    <Button variant="outlined" className=" rounded-2xl px-5 py-2"><p className=" text-center justify-center p-0 m-0">view</p></Button>
                                </td>
                                <td className="px-6 py-4 text-lg font-medium text-center whitespace-nowrap">
                                    {items.option}
                                </td> */}
                            </tr>
                            ))}  
                            <tr>
                            
                                <td className="px-6 py-4 text-center text-2xl  font-semibold  text-gray-800 ">
                                Total Cost 
                                </td>
                                <td></td>
                                <td></td>
                                <td className="px-6 py-4 text-center text-2xl font-bold  text-gray-800 ">
                                $353.00
                                </td>
                                <td className="px-6 py-4 text-center text-2xl font-bold  text-gray-800 ">
                                $1,470.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Debit;