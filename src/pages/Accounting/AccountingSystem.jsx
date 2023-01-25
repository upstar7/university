import { Routes, Route } from "react-router-dom";
import Sales from "./Sales";
import Cost from "./Cost";
import Debit from "./Debit";
import Expenses from "./Expenses";
import CreateSales from "./CreateSales";
import CreateCostOfSales from "./CreateCostOfSales";
import CreateExpanses from "./CreateExpanses";


import { useState } from 'react';

const tabsData = [
  {
    label: 'Sales',
    content:<Sales/>
  },
  {
    label: 'Cost of Sales',
    content:<Cost/>
  },
  {
    label: 'Debit & Credit',
    content:<Debit/>
  },
  {
    label: 'Expanses',
    content:<Expenses/>
  },
 
];

export function AccountingSystem() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="mt-12 w-full bg-[#E8E9EB]">
    <div className="grid grid-cols-1 my-10">
        <p className=" text-4xl font-semibold text-[#280559]">Accounting Module</p>
        <p className=" text-base font text-[#9898A3]">View Accounting</p>
    </div>
    <div className=" bg-white flex flex-row  items-center px-5 xl:px-[64px] mb-7 gap-10 rounded-[34px] overflow-x-auto">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (

            <button
              key={idx}
              className={` py-9  border-t-4 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-[#280559]'
                  : 'border-transparent hover:border-gray-200 '
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
             <p className={`text-[24px] font-semibold ${
                idx === activeTabIndex
                  ? 'text-[#280559]'
                  : 'text-[#92929D] '
              }`}>{tab.label}</p> 
            </button>
      
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div>
       {tabsData[activeTabIndex].content}
      </div>
    </div>
  );
}

export default AccountingSystem;


   