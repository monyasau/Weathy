import { useState } from "react";

const TopNav=()=> {

  const [menu, setMenu] = useState(false);

  return (
    <>
            <nav className=" py-6 border-b">
      <div className="flex max-w-screen-xl w-full mx-auto justify-between py-2 md:px-0 px-4">
        <div>
          <a href="/" className="text-xl font-bold">
            ThisIsAbefe
          </a>
        </div>

        <div className="gap-14 hidden sm:flex">
          <a href="#" className="font-medium hover:underline">
            Home
          </a>
          <a href="#" className="text-dark-gray hover:underline">
            Designs
          </a>
          <a href="#" className="text-dark-gray hover:underline">
            Music
          </a>
          <a href="#" className="text-dark-gray hover:underline">
            Contact
          </a>
        </div>

        <div
          id="dropdownMenuToggleIcon"
          className="dropdown align-right sm:hidden items-center flex"
          onClick={() => setMenu(true)}
        >
          <a href="#" className="text-slate-600 font-bold mx-4">
            Menu
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {menu && (
          <>
          <div
          id="backdrop"
          className=" fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
          onClick={()=>setMenu(false)}
        ></div>
          <div
            id="smallScreenNavBar"
            className="fixed z-50 top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
          >
            <div
              id="closeSmNav"
              onClick={() => setMenu(false)}
              className="absolute top-5 right-5 w-8 h-8 flex justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible">
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>

            <ul className="space-y-6">
              <li>
                <a className="hover:text-sky-500" href="/">
                  Home
                </a>
              </li>

              <li>
                <a href="/designs" className="hover:text-sky-500">
                  Designs
                </a>
              </li>

              <li>
                <a className="hover:text-sky-500" href="/music">
                  Music
                </a>
              </li>

              <li>
                <a className="hover:text-red-500" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          </>
        )}
      </div>
      </nav>
    </>
  );
}
export default TopNav;