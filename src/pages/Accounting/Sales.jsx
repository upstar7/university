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
import plus from '../../../public/img/plus.svg';
import filterIcon from '../../../public/img/filterIcon.svg';
import vector from '../../../public/img/vector.svg';
import print from '../../../public/img/print.svg';
import saveIcon from '../../../public/img/saveIcon.svg';
import Sales_recording_data from "@/data/Sales-recording-data";



export function Sales() {

    const [salesState, setSalesState]=useState(true);

    return (
        <>
    <div className={`mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8 ${salesState?"":"hidden"}`}>
            <div>
            <div className=" bg-white p-2 xl:p-12 rounded-[34px]">
                <div className="flex flex-row w-full justify-between items-center py-5 my-3 gap-3">
                        <p className="text-[32px] font-bold">Sales recording</p>
                    
                            <Button className=" h-[60px] bg-[#280559] rounded-2xl flex flex-row justify-center items-center p-3 " onClick={() => setSalesState(false)}>
                            <img className="w-[20px] m-1" src={plus} alt='...'/>
                            <p className="m-1 text-base text-white font-medium normal-case">Add New Sale</p>
                            </Button>
      
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
                                        className="w-[83px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        <Checkbox/>
                                    </th>
                                                                    
                                    <th
                                        scope="col"
                                        className="w-[96px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Date
                                    </th>
                                    
                                    <th
                                        scope="col"
                                        className="w-[300px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[350px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[80px] px-6 py-3 text-lg font-bold text-center text-gray-500  "
                                    >
                                        Amount
                                    </th>
                                    
                                    <th
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
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {Sales_recording_data.map((items) => (
                                <tr>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        <Checkbox/>
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        {items.Date}
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        {items.Name}
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        {items.Description}
                                    </td>
                                    <td className={`text-${items.color} px-6 py-4 text-sm text-center font-semibold whitespace-nowrap`}>
                                        {items.Amount}
                                    </td>
                                    <td className=" textpy-4 text-lg font-medium text-center whitespace-nowrap">
                                        <Button variant="outlined" className=" rounded-2xl px-5 py-2"><p className=" text-center justify-center p-0 m-0">view</p></Button>
                                    </td>
                                    <td className="px-6 py-4 text-lg font-medium text-center whitespace-nowrap">
                                        {items.option}
                                    </td>
                                </tr>
                                ))}  
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 ">
                        <p className="text-base text-[#92929D] px-5"><span className="text-[#280559]">1</span>-5 of 56</p>  
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-base text-[#92929D]">The page you’re on</p>
                            <div className=" w-[77px]">
                                <Menu>
                                    <MenuHandler>
                                    <button className=" shadow-lg w-[77px] h-[40px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
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
                            <button className="w-10 h-10 rounded-xl shadow-lg outline-2 outline-black flex justify-center items-center"><img src={vector} alt="..."/></button>
                            <button className="w-10 h-10 rounded-xl shadow-lg outline-2 outline-black flex justify-center items-center"><img className=" rotate-180" src={vector} alt="..."/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


{/* ----------------------------------------- */}


    <div className={`mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8 ${salesState?"hidden":""}`}>
        <div className="grid grid-cols-1 my-5">
            <p className=" text-4xl font-semibold text-[#280559]">Create Sales</p>
            <p className=" text-base font text-[#9898A3]">Create or edit Sales</p>
        </div>
        <div className="bg-white rounded-[34px] p-[39px] my-[30px]">

            <p className="text-[#333333] text-2xl font-semibold my-8">Sale Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-[30px]">
                <div>
                    <p className=" text-base font-semibold my-4">Name of Sale</p>
                    <Input className="h-[57px]" label="Sale Name Here"></Input>
                </div>
                <div>
                    <p className=" text-base font-semibold my-4">Descripton</p>
                    <Input className="h-[57px]" label="Descripton"></Input>
                </div>
                <div>
                    <p className=" text-base font-semibold my-4">Amount</p>
                    <form className="">
                        <div className="relative">
                            <div className=" absolute top-[1px] left-[1px]   bg-[#E5E8ED] rounded-md">
                                <p className="text-[#333333] text-base font-medium p-[12px]">USD:</p>
                            </div>
                            <input
                                type="text"
                                placeholder="0.00"
                                className="w-full py-3 pl-16 pr-4 text-gray-500  rounded-md border-[#E5E8ED]  outline-none bg-gray-50"
                            />
                        </div>
                    </form>
                </div>
                <div>
                    <p className=" text-base font-semibold my-4">Date</p>
                    <Input className="h-[57px]" label="DD/MM/YYYY"></Input>
                </div>
                <div >
                    <p className=" text-base font-semibold my-4">Add More Field</p>
                    <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                </div>
            </div>
        </div>
        <div>
        <Button className="bg-[#280559]  rounded-[15px]" onClick={() => setSalesState(true)}>
            <div className="flex flex-row justify-center items-center px-[33px] py-[10px]">
                <img src={saveIcon} alt='...'/>
                <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
            </div>
        </Button>
        </div>
        </div> 
        </> 
    )
}

export default Sales;