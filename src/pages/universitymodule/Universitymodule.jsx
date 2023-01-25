import { useState } from 'react';
import Academic from "./Academic";
import University from "./University";
import CreateUniversity from "./CreateUniversity";
import CreateAcademic from "./CreateAcademic";


export function Universitymodule() {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsData = [
        {
          label: 'University',
          content:<University/>
        },
        {
          label: 'Academic Programs',
          content:<Academic/>
        },
      ];
    return (
        <div className="mt-12 w-full bg-[#E8E9EB] ">
            <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">University Module</p>
                <p className=" text-base font text-[#9898A3]">View all University and programs</p>
            </div>
            <div className=" bg-white flex flex-row  items-center px-5 xl:px-[64px] mb-7 gap-10 rounded-[34px]">
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
                    <p className={`text-lg xl:text-2xl font-semibold ${
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

export default Universitymodule;


   