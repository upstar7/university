import React from "react";
import { 
  Button} from "@material-tailwind/react";
import Canvas from "@/widgets/charts/Canvas";
import applicationCardData from "@/data/application-data";
import tableCardData from "@/data/table-data copy";
import nametableCardData from "@/data/nametable-data";
import { statisticsCardsData} from "@/data";
import { StatisticsCard } from "@/widgets/cards";
import Horizontal from "@/widgets/charts/Horizontal-chart";
import ApexChart from "@/widgets/charts/stackedbar-chart";
import Pie01 from "@/widgets/charts/pie-chart01";
import Pie02 from "@/widgets/charts/pie-chart02";
import ApexChartBar from "@/widgets/charts/bar-chart";
import menuicon1 from '../../../public/img/menuicon1.svg'
export function Home() {
  return (
    <div className="mt-12 w-full bg-[#E8E9EB]">
      <div className="grid grid-cols-1 my-10">
       <p className=" text-4xl font-semibold text-[#280559]">Dashboard</p>
       <p className=" text-sm xl:text-base  font text-[#9898A3]">View all status from the dashbaord</p>
      </div>
      <div className="mb-12 grid gap-y-10 gap-x-3 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5">
        {statisticsCardsData.map(({ value, title}) => (
          <StatisticsCard
            value={value}
            title={title}
          />
        ))}
      </div>
      <div className=" mb-5 grid grid-cols-1 gap-y-12 gap-x-6 xl:grid-cols-2 laptop:grid-cols-4 lg:items-center ">
        <Pie01/>
        <ApexChartBar/>
        <Pie02/>  
        <Canvas/>
      </div>
      
      <div className=" mb-5 grid grid-cols-1 2xl:grid-cols-2 laptop:grid-cols-3 gap-y-12 gap-x-6">
        <Horizontal/>
        <ApexChart/>
        {nametableCardData.map((items)=>(
          <div className=" bg-white p-8 rounded-xl overflow-x-scroll">
            <div className="flex flex-row justify-between items-center ">
                <p className="antialiased w-1/2 text-base xl:text-xl text-black font-medium">{items.subject}</p>
                <Button variant="outlined" className="outline outline-1 outline-[#280559] w-[115px] h-[46px] rounded-[15px] justify-center p-0" fullWidth>
                  <p className=" text-sm xl:text-base  text-[#280559] normal-case text-center">View All</p>
                </Button>
            </div>
            <div className="flex flex-row justify-between items-center  my-5">
                <p className=" w-[320px] text-sm xl:text-base  text-[#92929D] font-medium">{items.name}</p>
                <p className="w-[75px] text-sm xl:text-base  text-[#92929D] normal-case text-center px-4">Action</p>
            </div>
            {items.tablelist.map((item) => (
              <div className="flex flex-row justify-between items-center  mt-6">
                  <p className="w-[320px] text-sm xl:text-lg  text-black font-medium">{item.data}</p>
                  <Button variant="outlined" className="outline outline-1 outline-[#280559] w-[78px] h-[28px] rounded-[15px] justify-center items-center p-0"  fullWidth>
                  <p className="text-sm xl:text-base  text-[#280559] normal-case text-center">View</p>
                  </Button>
              </div>
            ))}
          </div>
        ))}

        <div className=" bg-white p-8 rounded-xl overflow-x-scroll">
          <div className="flex flex-row justify-between items-center ">
              <p className="w-1/2 text-base xl:text-xl text-black font-medium">Application</p>
              <Button variant="outlined" className="outline outline-1 outline-[#280559] w-[115px] h-[46px] rounded-[15px] justify-center px-2 py-0" fullWidth>
              <p className=" text-sm xl:text-base  text-[#280559] normal-case text-center">View All</p>
              </Button>
          </div>
          <div className="flex flex-row justify-between items-center  my-5">
              <p className="w-[220px] text-sm xl:text-base  text-[#92929D] font-medium">University name</p>
              <p className="w-[75px] text-sm xl:text-base  text-[#92929D] normal-case text-center ">Status</p>
              <p className="w-[75px] text-sm xl:text-base  text-[#92929D] normal-case text-center ">Action</p>
          </div>
          {applicationCardData.map((item) => (
            <div className="flex flex-row justify-between items-center  mt-6">
              <p className="w-[195px] text-sm xl:text-lg text-black font-medium mx-2">{item.name}</p>
              <p className={`text-[${item.color}] w-[85px] text-sm xl:text-base  normal-case text-center mx-2`}>{item.status}</p>
              <Button variant="outlined" className="outline outline-1 outline-[#280559] w-[78px] h-[28px] rounded-[15px] justify-center items-center px-2 py-0"  fullWidth>
                <p className="text-sm xl:text-base  text-[#280559] normal-case text-center">View</p>
              </Button>
            </div>
          ))}
          
          </div>

      </div> 
      <div className="grid grid-cols-1 laptop:grid-cols-2  gap-y-12 gap-x-6 mb-5  ">
        {tableCardData.map((data) => (          
        <div className="bg-white p-8 rounded-xl overflow-x-scroll">
          <div className="flex flex-row justify-between items-center ">
              <p className="w-1/2 text-base xl:text-xl text-black font-medium">{data.subject}</p>
              <Button variant="outlined" className=" w-[115px] h-[46px] outline outline-1 outline-[#280559]   rounded-[15px] p-0" fullWidth>
                <p className=" text-sm xl:text-base  text-[#280559] normal-case text-center">View All</p>
              </Button>
          </div>

          <div className="flex flex-row justify-between items-center  my-5">
              <p className="w-[200px] text-sm xl:text-base text-[#92929D] font-medium">Recipient</p>
              <p className="w-[85px] text-sm xl:text-base  text-[#92929D] normal-case text-center ">Amount</p>
              <p className="w-[85px] text-sm xl:text-base  text-[#92929D] normal-case text-center ">Status</p>
              <p className="w-[78px] text-sm xl:text-base  text-[#92929D] normal-case text-center ">Action</p>
          </div>
          {data.tablelist.map((item) => (
            <div className="flex flex-row justify-between items-center mt-8">
              <p className="w-[200px] text-sm xl:text-lg text-black font-medium mx-2">{item.name}</p>
              <p className="text-[#333333] w-[85px] text text-sm xl:text-lg font-bold normal-case text-center mx-2">{item.amount}</p>
              <p className={`text-[${item.color}] w-[85px] text-sm xl:text-base  normal-case text-center mx-2`}>{item.status}</p>
              <Button variant="outlined" className="outline outline-1 outline-[#280559] w-[78px] h-[28px] rounded-[15px] justify-center items-center px-2 py-0"  fullWidth>
               <p className="text-sm xl:text-base  text-[#280559] normal-case text-center">View</p>
              </Button>
            </div>
          ))}
        </div>
        ))}

      </div>



      {/* <div className="mb-[30px]">

        <div className="w-full flex flex-row bg-white justify-between items-center p-12 mb-7 rounded-[34px] ">
          <div className="">
            <p className=" text-[32px] text-black font-semibold">We Need Additional Information</p>
            <p className=" text-2xl text-black font-normal">Please provide additional documentation to proceed with your application</p>
          </div>
          <Button className="w-[174px] h-[60px] bg-[#280559] rounded-2xl flex flex-row justify-center items-center">
            <img className="w-[20px] m-1" src={plus} alt='...'/>
            <p className="m-1 text-sm xl:text-base  text-white font-medium normal-case">Upload</p>
          </Button>
        </div>


        <div className=" bg-white p-12 rounded-[34px] overflow-x-auto  md:shrink-1">
          <div className=" w-full flex flex-row justify-between py-5 my-3">
            <p className="text-[32px] text-black font-bold">Your Applications</p>
            <Button className="w-[174px] h-[60px] bg-[#280559] rounded-2xl flex flex-row justify-center items-center">
              <img className="w-[20px] m-1" src={plus} alt='...'/>
              <p className="m-1 text-sm xl:text-base  text-white font-medium normal-case">Upload</p>
            </Button>
          </div>
          <div className=" flex flex-row justify-between py-5 my-3">
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
              <div className="flex flex-row gap-4">
                <button className=" shadow-lg w-[135px] h-[57px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
                  <img className="w-[20px]" src={filterIcon} alt="..."/>
                  <p className="mx-3 ">Filters</p>
                </button>
                <button className=" shadow-lg w-[135px] h-[57px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
                  <img className="w-[20px]" src={down} alt="..."/>
                  <p className="mx-3 ">Export</p>
                </button>
              </div>
          </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                  <tr>
                      <th
                          scope="col"
                          className="w-[50px] py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          
                      </th>
                      <th
                          scope="col"
                          className="w-[200px] py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          Date
                      </th>
                      <th
                          scope="col"
                          className="w-[83px] px-6 py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          Time
                      </th>
                      <th
                          scope="col"
                          className="w-[346px] px-6 py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          Email
                      </th>
                      <th
                          scope="col"
                          className="w-[113px] px-6 py-3 text-sm xl:text-lg font-bold text-center text-gray-500  "
                      >
                          Status
                      </th>
                      <th
                          scope="col"
                          className="w-[115px] px-6 py-3 text-sm xl:text-lg font-bold text-center text-gray-500  "
                      >
                          action
                      </th>
                      <th
                          scope="col"
                          className="w-[115px] px-6 py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          Option
                      </th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  {HomeApplicationData.map((items) => (
                  <tr>
                      <td className="py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div className="flex items-center h-7">
                          <Checkbox/>
                        </div>
                      </td>
                      <td className="py-4 text-sm xl:text-lg font-medium text-gray-800 whitespace-nowrap">
                          {items.date}
                      </td>
                      <td className="px-6 py-4 text-sm xl:text-lg text-gray-800 whitespace-nowrap">
                          {items.name}
                      </td>
                      <td className="px-6 py-4 text-sm xl:text-lg text-gray-800 whitespace-nowrap">
                          {items.Email}
                      </td>
                      <td className={`text-${items.color} px-6 py-4 text-sm font-semibold text-center whitespace-nowrap`}>
                          {items.status}
                      </td>
                      <td className=" textpy-4 text-sm xl:text-lg font-medium text-center whitespace-nowrap">
                        <Button variant="outlined" className=" rounded-2xl px-5 py-2"><p className=" text-center justify-center p-0 m-0">view</p></Button>
                      </td>
                      <td className="px-6 py-4 text-sm xl:text-lg font-medium text-left whitespace-nowrap">
                          {items.option}
                      </td>
                  </tr>
                  ))}  
                  
              </tbody>
            </table>
        </div>

      </div> */}


    {/* <div className="mb-[30px] flex flex-row justify-between">
      <div className="flex flex-grow bg-white rounded-3xl px-14 py-10">
        <div className=" flex justify-center mr-8 lg-max:hidden  w-[300px]">
          <RingChart/>
        </div>
        <div className="">
          <p className=" text-[32px] font-semibold text-black">Summary</p>
          <div className="flex flex-row">
          <div className=" w-1/2">
          {Summary.map((item)=>(
            <div className="flex flex-row">
                <div className="w-1/2 py-2">
                  <p className=" text-sm xl:text-base  font-normal text-black">{item.title}</p>
                </div>
                <div className="w-1/2 py-2">
                  <p className="text-[15px] font-medium text-black">{item.info}</p>
                </div>
            </div>
          ))}
          </div>
          <div className=" w-1/2">
            <div className="flex flex-row items-center justify-between my-2">
              <p className="text-sm xl:text-base  font-normal text-black">EMGS Approval Letter:</p>
              <Button className="bg-[#280559] w-[113px] h-8 py-1">
                <div className="flex flex-row justify-center items-center normal-case ">
                  <img className="w-[15px]" src={download}/>
                  <p className=" text-xs font-medium text-white">Download</p> 
                </div>
              </Button>
            </div>
            <div className="flex flex-row items-center justify-between my-2">
              <p className="text-sm xl:text-base  font-normal text-black">EMGS Approval Letter:</p>
              <Button className="bg-[#280559] w-[113px] h-8 py-1">
                <div className="flex flex-row justify-center items-center normal-case ">
                  <img className="w-[15px]" src={download}/>
                  <p className=" text-xs font-medium text-white">Download</p> 
                </div>
              </Button>
            </div>
            <div className="flex flex-row items-center justify-between my-2">
              <p className="text-sm xl:text-base  font-normal text-black">EMGS Approval Letter:</p>
              <Button className="bg-[#280559] w-[113px] h-8 py-1">
                <div className="flex flex-row justify-center items-center normal-case ">
                  <img className="w-[15px]" src={download}/>
                  <p className=" text-xs font-medium text-white">Download</p> 
                </div>
              </Button>
            </div>
          </div>
          </div>
          <p className=" text-sm xl:text-base  font-normal my-2   ">As per the announcement from the Malaysian Government on the transition to the endemic phase on 1 April 2022, the Travel Authorisation Letter is no longer part of the requirements for international Students to enter Malaysia.</p>
          <div className="bg-[#FFB93E] h-[59px] py-3  px-8 justify-center items-center rounded-xl">
            <p className="text-sm xl:text-base  font-normal my-2"><span className=" font-semibold">Important:</span> Kindly read the explanation below to understand the percentage.</p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-row bg-white rounded-3xl px-14 py-10 overflow-x-auto  md:shrink-0">
      <div className="w-1/2 ">
        <p className=" text-[32px] font-semibold text-black">What dose the color mean?</p>
        <div className="flex flex-row justify-center items-center">
          <div className="flex bg-[#0066FF] w-[95px] h-[172px] rounded-3xl justify-center items-center">
            <p className=" text-white text-2xl ">73%</p>
          </div>
          <div className="ml-6">
           <p className=" text-sm xl:text-base  font-normal mb-16">EMGS Has Received your passport</p>
           <p className=" text-sm xl:text-base  font-normal">We will now submit it to the Immigration Department for the issuance of student pass sticker</p>
          </div>
        </div>
      </div>
      <div className="1/2">
        <p className=" text-[32px] font-semibold text-black mb-10">Color Info</p>
        <div className="">
          <div className="flex flex-row items-center mb-5">
            <img src={ring01}/>
            <p className=" text-sm xl:text-base  font-normal ml-6  ">Your application is progressing accordingly.</p>
          </div>
          <div className="flex flex-row tems-center mb-5">
            <img src={ring02}/>
            <p className=" text-sm xl:text-base  font-normal ml-6 ">Your application is pending additional documents or correction by your institution.</p>
          </div>
          <div className="flex flex-row items-center mb-5">
            <img src={ring03}/>
            <p className=" text-sm xl:text-base  font-normal ml-6 ">Your application has been rejected/expired at the current stage. Please contact your institution for advice.</p>
          </div>
        </div>
      </div>
    </div>


      <div className=" bg-white p-12 rounded-[34px] overflow-x-auto  md:shrink-0">
          <div className=" w-full flex flex-row justify-between py-5 my-3">
            <p className="text-[32px] text-black font-bold">Your Applications</p>
            <Button className="w-[174px] h-[60px] bg-[#280559] rounded-2xl flex flex-row justify-center items-center">
              <img className="w-[20px] m-1" src={plus} alt='...'/>
              <p className="m-1 text-sm xl:text-base  text-white font-medium normal-case">Upload</p>
            </Button>
          </div>
          <div className="flex flex-row justify-between py-5 my-3">
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
              <div className="flex flex-row gap-4">
                <button className=" shadow-lg w-[135px] h-[57px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
                  <img className="w-[20px]" src={filterIcon} alt="..."/>
                  <p className="mx-3 ">Filters</p>
                </button>
                <button className=" shadow-lg w-[135px] h-[57px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
                  <img className="w-[20px]" src={down} alt="..."/>
                  <p className="mx-3 ">Export</p>
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                  <tr>
                      <th
                          scope="col"
                          className="w-[50px] py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          
                      </th>
                      <th
                          scope="col"
                          className="w-[200px] py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          Date
                      </th>
                      <th
                          scope="col"
                          className="w-[83px] px-6 py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          Time
                      </th>
                      <th
                          scope="col"
                          className="w-[346px] px-6 py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          Email
                      </th>
                      <th
                          scope="col"
                          className="w-[113px] px-6 py-3 text-sm xl:text-lg font-bold text-center text-gray-500  "
                      >
                          Status
                      </th>
                      <th
                          scope="col"
                          className="w-[115px] px-6 py-3 text-sm xl:text-lg font-bold text-center text-gray-500  "
                      >
                          action
                      </th>
                      <th
                          scope="col"
                          className="w-[115px] px-6 py-3 text-sm xl:text-lg font-bold text-left text-gray-500  "
                      >
                          Option
                      </th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  {HomeApplicationData.map((items) => (
                  <tr>
                      <td className="py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div className="flex items-center h-7">
                          <Checkbox/>
                        </div>
                      </td>
                      <td className="py-4 text-sm xl:text-lg font-medium text-gray-800 whitespace-nowrap">
                          {items.date}
                      </td>
                      <td className="px-6 py-4 text-sm xl:text-lg text-gray-800 whitespace-nowrap">
                          {items.name}
                      </td>
                      <td className="px-6 py-4 text-sm xl:text-lg text-gray-800 whitespace-nowrap">
                          {items.Email}
                      </td>
                      <td className={`text-${items.color} px-6 py-4 text-sm font-semibold text-center whitespace-nowrap`}>
                          {items.status}
                      </td>
                      <td className=" textpy-4 text-sm xl:text-lg font-medium text-center whitespace-nowrap">
                        <Button variant="outlined" className=" rounded-2xl px-5 py-2"><p className=" text-center justify-center p-0 m-0">view</p></Button>
                      </td>
                      <td className="px-6 py-4 text-sm xl:text-lg font-medium text-left whitespace-nowrap">
                          {items.option}
                      </td>
                  </tr>
                  ))}  
                  
              </tbody>
            </table>
      </div>
       */}
  </div>
  );
}

export default Home;
