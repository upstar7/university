import { useState } from 'react';

import Branch from "./branch";
import Properties from "./properties";
import Settings from "./settings";
import StatusManagement from "./statusmanagement";
import User from "./user";
import Profiles from "./profiles";
import AddUser from "./adduser";
import AddBranch from "./addbranch";
import AddStatus from "./addstatus";


export function SettingsManagement() {
    

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsData = [
        {
          label: 'user',
          content:<User/>
        },
        {
          label: 'Branch',
          content:<Branch/>
        },
        {
            label: 'Profile',
            content:<Profiles/>
        },
        {
            label: 'Status',
            content:<StatusManagement/>
        },
        {
            label: 'Properties',
            content:<Properties/>
        },
        {
            label: 'Activity Log',
            content:<Settings/>
        },
      ];
    return (
        <div className="mt-12 w-full bg-[#E8E9EB] px-14">
            <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">Settings</p>
                <p className=" text-base font text-[#9898A3]">View all settings</p>
            </div>
            <div className="relative bg-white flex flex-row  items-center px-[64px] mb-7 gap-10   rounded-[34px]">
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

export default SettingsManagement;


   