import React from "react";
import {
  Select,
  Option,
  Button,
  Input,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import plus from "../../../public/img/plus.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import print from "../../../public/img/print.svg";
import invoice01 from "../../../public/img/invoice01.png";
import downloadIcon from "../../../public/img/downloadIcon.svg";

const PreviewInvoice = (props) => {
  return (
    <Dialog className="rounded-[24px] h-[96vh] overflow-auto custom-scroll" size="lg" open={props.open}>
      <DialogBody>
        <div className="relative h-full w-full md:h-auto">
          <div className="relative bg-white dark:bg-gray-700">
            <div className="flex items-start justify-between rounded-t p-4 dark:border-gray-600">
              <h3 className=" pt-3 text-2xl font-semibold text-[#333333] dark:text-white">
                PDF Preview
              </h3>
              <Button
                className="rounded-[15px]  bg-[#280559] mx-8"
                onClick={() => setOpenPreviewModal(true)}
              >
                <div className="flex flex-row items-center justify-center px-[10px] py-[10px]">
                  <img src={print} alt="..." />
                  <span className="px-[11px] text-base font-medium normal-case text-white ">
                    Print / Preview
                  </span>
                </div>
              </Button>
              {/* <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={props.close}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button> */}
            </div>

            <div className="space-y-6 mx-[50px] py-[54px] bg-[#D9D9D9]">
              <img
                className="m-auto w-auto"
                src={invoice01}
                alt="..."
              />
            </div>

            <div className="flex  flex-row justify-end space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600 mx-7">
              <Button
                className=" flex h-[60px] flex-row items-center justify-center rounded-2xl bg-[#280559]"
                onClick={props.close}
              >
                <img className="m-1 w-[20px]" src={downloadIcon} alt="..." />
                <span className="m-1 text-base font-medium normal-case text-white">
                  Download
                </span>
              </Button>
              <Button
                className=" flex h-[60px] flex-row items-center justify-center rounded-2xl border border-[#280559] bg-white"
                onClick={props.close}
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#280559"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="m-1 text-base font-medium normal-case text-[#280559]">
                  Close
                </span>
              </Button>
            </div>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default PreviewInvoice;
