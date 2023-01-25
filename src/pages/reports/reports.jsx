import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import search from '../../../public/img/search.png';
import { Checkbox } from "@material-tailwind/react";
import settingData from "@/data/settings-table-props";
import { NavLink } from "react-router-dom";
import plus from '../../../public/img/plus.svg';
import vector from '../../../public/img/vector.svg';
import Vector from "../../../public/img/Vector.png";
import print from "../../../public/img/print.png";
import filterIcon from '../../../public/img/filterIcon.svg';
import { 
    Button,
    Menu,
      MenuHandler,
      MenuList,
      MenuItem,
  } from "@material-tailwind/react";
import Currency  from "@/data/assets-props";



export function Reports() {
   
  return (
    <div className=" mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8">
        <Card>
            <CardBody>
            <div className=" bg-white p-2 xl:p-12 rounded-[34px]">
                <p className="text-[32px] font-bold">Balance Sheet</p> 
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
            </CardBody>
        </Card>

            <Card>
                <CardBody>
                        <div className="mb-3 mt-3 flex w-full px-4 items-center">
                            <h3 className="text-left text-2xl font-semibold text-[#333333]">Assets</h3>
                        </div>  
                    <div className="flex flex-col overflow-x-auto">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 w-full">
                                <tr className=" justify-between">
                                    
                                    <th
                                        className="w-full py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Name
                                    </th>
                                    <th
                                        className=" px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Currency
                                    </th>
                                    <th
                                        className=" px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Amount
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className=" text-lg font-semibold">
                                    <td>
                                        Current assets
                                    </td>
                                </tr>
                                {Currency.map((items) => (
                                <tr>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.name}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.currency}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.amount}
                                    </td>
                                </tr>
                                ))}  
                                <tr className=" text-lg font-semibold">
                                    <td>
                                        Total current assets
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        USD
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        $122.00
                                    </td>
                                </tr>
                                <tr className=" text-[22px] font-semibold divide-y-8">
                                    <td>
                                        Total Assets
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        
                                    </td>
                                    <td className="text-2xl font-semibold">
                                        $1,217.00
                                    </td>
                                </tr>
                                
                            
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        <Card>
            <CardBody>
            <div className="mb-3 mt-3 flex w-full px-4 items-center">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">Equity</h3>
            </div>  
            <div className="flex flex-col justify-between">
                <div className="overflow-x-auto ">
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 w-full">
                            <tr className=" justify-between">
                                
                                <th
                                    className="w-full py-3 text-base font-bold text-left text-gray-500"
                                >
                                    Name
                                </th>
                                <th
                                    className=" px-6 py-3 text-base font-bold text-left text-gray-500"
                                >
                                    Currency
                                </th>
                                <th
                                    className=" px-6 py-3 text-base font-bold text-left text-gray-500"
                                >
                                    Amount
                                </th>
                                
                            </tr>
                        </thead>
                            
                        <tbody className="divide-y divide-gray-200">
                            <tr className=" text-lg font-semibold">
                                <td>
                                    Shareholder's Equity
                                </td>
                            </tr>
                            {Currency.map((items) => (
                            <tr>
                                <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                    {items.name}
                                </td>
                                <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                    {items.currency}
                                </td>
                                <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                    {items.amount}
                                </td>
                            </tr>
                            ))}  
                            <tr className=" text-lg font-semibold">
                                <td>
                                        Total current assets
                                </td>
                                <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                    USD
                                </td>
                                <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                    $122.00
                                </td>
                            </tr>
                            <tr className=" text-2xl font-semibold divide-y-8">
                                <td>
                                    Total Assets
                                </td>
                                <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                    
                                </td>
                                <td className="text-[22px] font-semibold">
                                    $1,217.00
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            </CardBody>
           
        </Card>
        <Card>
            <CardBody>
            <div className="mb-3 mt-3 flex w-full px-4 items-center">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">Balance</h3>
            </div> 
                <div className="mb-3 px-4 mt-3 flex w-full justify-between items-center">
                    <h3 className=" text-xl font-semibold text-[#333333]">Total Balance</h3>
                    <h3 className=" text-xl font-semibold text-[#333333]">$208.00</h3>
                </div> 
            </CardBody>
        </Card>
    </div>
  );
}

export default Reports;
