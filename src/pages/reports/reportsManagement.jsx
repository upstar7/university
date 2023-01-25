import { useState } from 'react';
import Expenses from "./expenses";
import Income from "./income";
import Profit from "./profit";
import Reports from "./reports";
import ReportsCost from "./reportsCost";


export function ReportsManagement() {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsData = [
        {
          label: 'Balance Sheet',
          content:<Reports/>
        },
        {
          label: 'Profit Loss',
          content:<Profit/>
        },
        {
            label: 'Income Statement',
            content:<Income/>
        },
        {
            label: 'Expanses',
            content:<Expenses/>
        },
        {
            label: 'Cost Of Sale',
            content:<ReportsCost/>
        },
      ];
    return (
        <div className="mt-12 w-full bg-[#E8E9EB]">
          <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">Reports</p>
                <p className=" text-base font text-[#9898A3]">View Reports</p>
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

    )
}

export default ReportsManagement;


   