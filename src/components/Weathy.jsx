import { useState } from 'react'

let Weathy=()=> {
    const [searchClick, setSearchClick]=useState(false);
    return (
        <div className='w-full mt-8 h-[80%]'>

        <div className="max-w-screen-xl mx-auto  items-center  h-full flex">
<div className=' p-4 mx-auto w-[500px] shadow-lg rounded-3xl bg-[#000000d0] h-[450px]'>
<div aria-label='search container' className='flex justify-between bg-[#96969633] p-4 rounded-2xl'>
<input type="text" className='focus:outline-none text-[#eee] text-2xl py-4 w-[90%] bg-transparent rounded-xl'/>
<button onClick={()=>searchClick?setSearchClick(false):setSearchClick(true)}>
    {
        searchClick?(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-spin">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

        ):(
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#ddd" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
                    )

    }

</button>
</div>

</div>
        </div>
        </div>
    );
}

export default Weathy;