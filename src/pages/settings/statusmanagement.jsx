import React from "react";
import { useState } from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Button,
    Input,
    Select,
    Option
} from "@material-tailwind/react";
import {  } from "@material-tailwind/react";
import plus from '../../../public/img/plus.svg';
import vector from '../../../public/img/vector.svg';
import Vector from "../../../public/img/Vector.png";
import TitleData from "@/data/status-props";
import saveIcon from "../../../public/img/saveIcon.svg"


export function StatusManagement() {
    
    const [status, setStatus]=useState(true);  

  return (
    <>
    <div className={`mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8 ${status?"":"hidden"}`}>
     
        <div className="flex justify-between">
            <div className="flex-col mb-7">
                <h3 className="text-left text-4xl font-bold text-[#280559]">Status Management</h3>
                <p className="text-[#9898A3] text-lg text-left">Status Management</p>
            </div>
            <Button className="bg-[#280559] w-[206px] h-[60px] rounded-[15px]" onClick={() => setStatus(false)}>
                <div className="flex flex-row justify-center items-center">
                    <img src={saveIcon} alt='...'/>
                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                </div>
            </Button>
        </div>
        <div className="mb-4">
        {TitleData.map((items) => (
            <Card className="mb-4">
            <CardBody className="mb-4" >
                <div className="w-full flex max-md:flex-col ">
                    <Typography href='/#' className= 'mb-[54px] w-full flex justify-between space-x-3 text-[#92929D] ml-8 ' variant="h5" color="blue-gray">
                        <p className="text-[#333333] text-[24px] font-semibold text-center">
                            {items.tname}
                            </p> 
                 
                            <Button className="w-[206px] h-[60px] last:flex text-center text-flex justify-center rounded-[15px] text-white p-3 items-center bg-[#280559]"  onClick={() => setStatus(false)}>
                                <img src={plus} alt='Add'/>
                                <p className="ml-1 text-center">Add New Status</p>
                            </Button> 
               
                    </Typography>
                </div>
                <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border-none rounded-lg">
                            <table className="w-[50%] divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            className="w-[83px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            Status Name
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
                                    {items.statusname.map((item) => (
                                    <tr>
                                        <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                            
                                            {item.sname}
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
                        </div>
                    </div>
                </div>
                </div>
            </CardBody>
        </Card>
        ))}
        </div>
    </div>

{/* //////////////////////////////////////////////////////////////////////////////////////// */}

<div className={`mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8 ${status?"hidden":""}`}>
    <div className="flex justify-between">
        <div className="flex-col mb-7">
            <h3 className="text-left text-4xl font-bold text-[#280559]">Create Status</h3>
            <p className="text-[#9898A3] text-lg text-left">Create or edit Status</p>
        </div>
        <Button className="bg-[#280559]  rounded-[15px] w-[206px] h-[60px]">
            <div className="flex flex-row justify-center items-center">
                <img src={saveIcon} alt='...'/>
                <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
            </div>
        </Button>
    </div>
    <Card>
    <CardHeader
    color="transparent"
    floated={false}
    shadow={false}
    className="m-0 p-4 flex-col w-full justify-between items-center"
    >
        <div className="mb-3 flex w-full px-4 items-center">
            <h3 className="text-left text-2xl font-semibold text-[#333333]">Status Details</h3>
        </div>  
        <div className="px-4 flex mb-8">
            <div className="w-[420px] h-[57px] mb-3">
                <p className="mb-4 font-medium text-base">Status Name</p>
                <div className="">
                    <Input label="Branch Name" />
                </div>
            </div>
            
        </div>
    </CardHeader>
    </Card>
        <Button className="bg-[#280559] px-4 rounded-[15px] w-[206px] h-[60px]" onClick={() => setStatus(true)}>
            <div className="flex flex-row justify-center items-center">
                <img src={saveIcon} alt='...'/>
                <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
            </div>
        </Button>
    </div>
    </>

  );
}

export default StatusManagement;
