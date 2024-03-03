import { useState } from 'react'


let Weathy=()=> {
    return (
        <div className='w-full mt-8 h-[80%]'>

        <div className="max-w-screen-xl mx-auto  items-center  h-full flex">
<div className=' p-4 mx-auto w-[500px] shadow-lg rounded-3xl bg-[#000000d0] h-[450px]'>
<div aria-label='search container' className='flex justify-between'>
<input type="text" className='focus:outline-none hover:p-4 p-2 py-4 w-[90%] rounded-xl'/>
<button>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#ddd" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

</button>
</div>

</div>
        </div>
        </div>
    );
}

export default Weathy;