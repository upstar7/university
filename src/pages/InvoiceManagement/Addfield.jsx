import React from "react";
import { 
    Select,
    Option,
    Button,
    Input,
} from "@material-tailwind/react";  
import plus from '../../../public/img/plus.svg';

const CustomModal = (props) =>{
    const {
        myID, 
    } = props;
    console.log("my id===>");
    console.log(props);
    console.log(myID);

    return(
        <div id={myID} tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-2xl md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class=" text-2xl font-semibold text-[#333333] dark:text-white">
                        Add Field
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={myID}>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>

                <div class="p-6 space-y-6">
                    <div className="w-full flex flex-row  items-center">
                        <div className="w-1/2">
                         <p className=" text-base text-[#333333] font-semibold ">Select Field Type</p>
                        </div>
                        <div className="w-1/2">
                            <Select  className=" flex right-0 " label="Select Field Type">
                                <Option>Text</Option>
                                <Option>Select</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="w-1/2">
                            <p className=" text-base text-[#333333] font-semibold ">Lebel</p>
                        </div>
                        <div className="w-1/2">
                            <Input label="Lebel" className=""></Input>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                    <div className="w-1/2">
                            <p className=" text-base text-[#333333] font-semibold ">Lebel</p>
                        </div>
                        <div className="w-1/2">
                            <Input label="Placeholder" className=""></Input>
                        </div>
                    </div>
                </div>
                
                <div class="flex justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <Button className=" h-[60px] bg-[#280559] rounded-2xl flex flex-row justify-center items-center">
                        <img className="w-[20px] m-1" src={plus} alt='...'/>
                        <p className="m-1 text-base text-white font-medium normal-case">Add Field</p>
                    </Button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CustomModal;