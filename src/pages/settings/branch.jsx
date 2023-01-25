import React from "react";
import { useState } from "react";
import {
Card,
CardHeader,
CardBody,
Button,
Menu,
MenuHandler,
MenuList,
MenuItem,
Input,
Select,
Option,
Checkbox,
} from "@material-tailwind/react";

import plus from '../../../public/img/plus.svg';
import vector from '../../../public/img/vector.svg';
import BranchProps from "@/data/branch-props";
import saveIcon from "../../../public/img/saveIcon.svg"




export function Branch() {
   
    const [states, setStates]=useState(true);

  return (
    <>
    <div className={`mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8 ${states?"":"hidden"}`}>
         <div className="flex justify-between">
            <div className="flex-col mb-7">
                <h3 className="text-left text-4xl font-bold text-[#280559]">Branch</h3>
                <p className="text-[#9898A3] text-lg text-left">Manage Branch</p>
            </div>
                <Button className="bg-[#280559]  rounded-[15px] w-[206px] h-[60px]" onClick={() => setStates(false)}>
                    <div className="flex flex-row justify-center items-center">
                        <img src={plus} alt='...'/>
                        <p className="text-white text-base font-medium normal-case">Add New Branch</p>
                    </div>
                </Button>
        </div>
        <Card>
            <CardBody>
            <div className=" pl-12 rounded-lg flex w-full justify-between">
                <p className="text-[#333333] text-[24px] font-semibold text-center">List of Branch</p>
            </div>
            </CardBody>
            <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border-none rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        className="w-[30px] items-center flex justify-start px-6 py-3"
                                    >
                                        <Checkbox />
                                    </th>
                                    <th
                                        className="w-[83px] py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Branch Name
                                    </th>
                                    <th
                                        className="w-[220px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Email
                                    </th>
                                    <th
                                        className="w-[115px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Branch manager
                                    </th>
                                    <th
                                        className="w-[113px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Country
                                    </th>
                                    <th
                                        className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Action
                                    </th>
                                    <th
                                        className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Option
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {BranchProps.map((items) => (
                                <tr>
                                    <td
                                        className="w-[30px] items-center justify-start px-6 py-3"
                                    >
                                        <Checkbox />
                                    </td>
                                    <td className="py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.branchname}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.email}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-left whitespace-nowrap">
                                        {items.branchmanager}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-left whitespace-nowrap">
                                        {items.country}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Button variant='outlined' className=' font-medium rounded-full text-sm outline-indigo-800'>View</Button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Button variant="text" className="">⋮</Button>
                                    </td>
                                </tr>
                                ))}  
                                
                            </tbody>
                        </table>
                        <div className="flex w-[95%] justify-between ml-16 items-center">
                            <div className="w-[50%] whitespace-nowrap items-center pl-2">
                                <p className=" text-base text-[#BEBFC3]" ><span className="text-[#280559]">1</span> - 5 of 56</p>
                            </div>
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
            </div>
        </Card>
    </div>


{/* ////////////////////////////////////////////////////////////////////// */}



<div className={`mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8 ${states?"hidden":""}`}>
    <div className="flex justify-between">
        <div className="flex-col mb-7">
            <h3 className="text-left text-4xl font-bold text-[#280559]">Create Branch</h3>
            <p className="text-[#9898A3] text-lg text-left">Create or edit Branch</p>
        </div>
        
    </div>
    <Card>
    <CardHeader
    color="transparent"
    floated={false}
    shadow={false}
    className="m-0 p-4 flex-col w-full justify-between items-center"
    >
        <div className="mb-3 flex w-full px-4 items-center">
            <h3 className="text-left text-2xl font-semibold text-[#333333]">Branch Details</h3>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-3 px-4 mb-8">
            <div className=" h-[57px] mb-10">
                <p className="mb-4 font-medium text-base">Branch Name</p>
                <div className="">
                    <Input label="Branch Name" />
                </div>
            </div>
            <div className=" h-[57px] mb-10 pl-3">
                <p className="mb-4 font-medium text-base">Address</p>
                <div className="">
                    <Input label="360 Huntington Ave. Boston, MA 02115" />
                </div>
            </div>
            <div className=" h-[57px] pl-3 mb-10">
                <p className="mb-4 font-medium text-base">Country</p>
                <Select label="Select Country">
                    <Option>Select Country</Option>
                    <Option>Select Country</Option>
                    <Option>Select Country</Option>
                </Select>
            </div>
       
            <div className=" h-[57px] mb-10">
                <p className="mb-4 font-medium text-base">Branch Manager</p>
                <div className="">
                    <Input label="Program Intake" />
                </div>
            </div>
            <div className=" h-[57px] pl-3 mb-10">
                <p className="mb-4 font-medium text-base">Email Address</p>
                <Select label="example@email.com">
                    <Option>alex@email.com</Option>
                    <Option>mistro@email.com</Option>
                    <Option>gentle@email.com</Option>
                </Select>
            </div>
            <div className=" h-[57px] pl-3 mb-10">
                <p className="mb-4 font-medium text-base">Phone Number</p>
                <div className="">
                    <Input label="+91" />
                </div>
            </div>
        
        
        <div className="px-4 flex">
            <div className=" h-[57px] mb-10">
                <p className="mb-4 font-medium text-base">Add Field</p>
                <div className="">
                    <Input disabled label="Click to add more field" className=" outline-none"/>
                </div>
            </div>
        </div>
    </div>
    </CardHeader>
    </Card>
    
        <Button className="bg-[#280559] px-4 rounded-[15px] w-[206px] h-[60px]" onClick={() => setStates(true)}>
            <div className="flex flex-row justify-center items-center">
                <img src={saveIcon} alt='...'/>
                <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
            </div>
        </Button>
   
    </div>
    </>
  );
}

export default Branch;
