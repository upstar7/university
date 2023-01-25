import React from "react";
import { useState } from "react";
import Userprops from '@/data/user-props';
import plus from '../../../public/img/plus.svg'
import vector from '../../../public/img/vector.svg';
import Vector from "../../../public/img/Vector.png";
import filterIcon from '../../../public/img/filterIcon.svg';
import saveIcon from "../../../public/img/saveIcon.svg"
import { 
    Typography,
    Checkbox,
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
    Option
  } from "@material-tailwind/react";


  export function User() {
    
    const [userstate, setUserstate]=useState(true);
    
  return (
    <>

    <div className={`mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8 ${userstate?"":"hidden"}`}>
        <Card>
            <CardBody>
            <div className="w-full flex max-md:flex-col">
                    <Typography href='/#' className= 'mb-[54px] w-full flex justify-between space-x-3 text-[#92929D] ml-8 ' variant="h5" color="blue-gray">
                        <p className="text-[#280559] text-[36px] text-center">Users</p> 
                           
                        <Button className="flex text-center text-flex justify-center h-[50px] rounded-lg text-white p-3 w-[180px] items-center bg-[#280559]" onClick={() => setUserstate(false)}>
                            <img src={plus} alt='Add'/>
                            <p className="ml-1 text-center" >Create New User</p>
                        </Button> 
                     
                    </Typography>
            </div>
            <div className=" pl-12 rounded-lg flex w-full justify-between">
                {/* <Input size="lg" className="w-full" htmlFor="hs-table-search" label="🔍 Search user"/> */}
                <form className="w-full px-4">
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
                <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                    <img className="w-[20px]" src={filterIcon} alt="..."/>
                    <p className="mx-3 ">Filters</p>
                </button>
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
                                        className="w-[100px] py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID User
                                    </th>
                                    <th
                                        className="w-[83px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        className="w-[220px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        className="w-[115px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Role
                                    </th>
                                    <th
                                        className="w-[113px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Number
                                    </th>
                                    <th
                                        className="w-[200px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Position
                                    </th>
                                    <th
                                        className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Action
                                    </th>
                                    <th
                                        className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Option
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {Userprops.map((items) => (
                                <tr>
                                    <td
                                        className="w-[30px] items-center justify-start px-6 py-3"
                                    >
                                        <Checkbox />
                                    </td>
                                    <td className="py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.id}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-semibold text-gray-800 whitespace-nowrap">
                                        {items.name}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.email}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-left whitespace-nowrap">
                                        {items.role}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-left whitespace-nowrap">
                                        {items.number}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-left whitespace-nowrap">
                                        {items.position}
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


{/* ------------------------------------------ */}


    <div className={`mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8 min-w-min ${userstate?"hidden":""}`}>
        <div className="flex justify-between">
            <div className="flex-col mb-7">
                <h3 className="text-left text-4xl font-bold text-[#280559]">Add New User</h3>
                <p className="text-[#9898A3] text-lg text-left">add New User</p>
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
                <h3 className="text-left text-2xl font-semibold text-[#333333]">User Details</h3>
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 px-4  mb-8">
                <div className=" h-[57px] mb-10">
                    <p className="mb-4 font-medium text-base">Name</p>
                    <Select label="Select University">
                        <Option>Select University</Option>
                        <Option>Select University</Option>
                        <Option>Select University</Option>
                    </Select>
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
                    <p className="mb-4 font-medium text-base">Phone</p>
                    <div className="">
                        <Input label="+91" />
                    </div>
                </div>
           
           
                <div className=" h-[57px] mb-10">
                    <p className="mb-4 font-medium text-base">Role</p>
                    <Select label="Select Role">
                        <Option>Select Role</Option>
                        <Option>Select Role</Option>
                        <Option>Select Role</Option>
                    </Select>
                </div>
                <div className=" h-[57px] pl-3 mb-10">
                    <p className="mb-4 font-medium text-base">Position</p>
                    <div className="">
                        <Input label="Position" />
                    </div>
                </div>
                <div className=" h-[57px] pl-3 mb-10">
                    <p className="mb-4 font-medium text-base">Number</p>
                    <div className="">
                        <Input label="0123456" />
                    </div>
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
        </CardHeader>
        </Card>
       
        <Button className="bg-[#280559] px-4 rounded-[15px] w-[206px] h-[60px]"  onClick={() => setUserstate(true)}>
            <div className="flex flex-row justify-center items-center">
                <img src={saveIcon} alt='...'/>
                <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
            </div>
        </Button>
        
    </div>
    </>

  );
}

export default User;
