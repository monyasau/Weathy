import { useState } from "react";
import weathyIcon from "../assets/weathy.svg"

const TopNav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
    <div className="w-full text-[#ffffff] bg-[#00000022] py-8 backdrop-blur-[40px] ">
      <div className="max-w-screen-xl flex px-4 md:px-0  py-6 items-center justify-between mx-auto w-full h-4">
        <div className="text-2xl font-bold flex  ">
          <a href="/Home" className="">
            Weathy
          </a>
<img src={weathyIcon} alt="" />
        </div>

          {menu?
          <>
        <div className="w-[320px] max-w-[90%] shadow-lg sm:static absolute top-5 right-2 sm:w-auto z-50 bg-white rounded-lg  p-6 ">
          <div className="sm:gap-14 gap-y-5 sm:mt-0 sm:flex-row md:space-y-0 text-xl  flex flex-col ">

        <svg
              viewBox="0 0 10 10"
              className="w-[13px] h-[13px] sm:hidden  right-4 absolute text-[#858788] "
              aria-label="close button"
              onClick={() => setMenu(false)}
              >
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                ></path>
            </svg>
          <a href="https://monyasau.netlify.app" className="text-[#000000d0] hover:underline ">
            Contact Me
          </a>
          
                </div>
                </div>
                <div
          id="backdrop"
          className=" fixed h-[100vh] inset-0 z-40 bg-black/20 backdrop-blur-[.7px] dark:bg-slate-900/80"
          onClick={()=>setMenu(false)}
        ></div>
            </>
        :
        <>
        <div className="flex gap-4 p-1  sm:hidden   text-[#858788]" onClick={() => setMenu(true)}>
          
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="full"
              viewBox="0 0 24 24"
              strokeWidth="0.5"

              
              stroke="#858788"
              className=" w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M.5 4c0-.83.67-1.5 1.5-1.5h20a1.5 1.5 0 0 1 0 3H2A1.5 1.5 0 0 1 .5 4m0 8c0-.83.67-1.5 1.5-1.5h20a1.5 1.5 0 0 1 0 3H2A1.5 1.5 0 0 1 .5 12m0 8c0-.83.67-1.5 1.5-1.5h20a1.5 1.5 0 0 1 0 3H2A1.5 1.5 0 0 1 .5 20"
              />
            </svg>
        </div>

            <div className="hidden sm:block">
              <div className=" sm:flex gap-14">
              <a href="https://monyasau.netlify.app" className=" hover:underline ">
            Contact Me
          </a>
              </div>
            </div>
        
        </>
        
          }
      </div>
    </div>
    </>
  );
};

export default TopNav;
