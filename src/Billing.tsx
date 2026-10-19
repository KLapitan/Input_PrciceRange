

const Billing = () => {
  return (
    <div className='font-manrope flex flex-row  w-auto border border-y-amber-500 md:gap-2 sm:ml-14 md:ml-21'>

        <div className='border border-cyan-400 flex flex-row  gap-1 md:gap-2 items-center '>
            <span className='text-sm text-NSlate-400 '>Monthly Billing</span>
            <label className="relative inline-block h-6 w-10  shrink-0">
            <input type="checkbox" role="switch"  className="peer sr-only"/>
            <span className="absolute inset-0 bg-NSlate-200 rounded-full  peer-checked:bg-PGreen-400"/>
            <span className="absolute w-4 left-1 top-1 h-4 rounded-full bg-white peer-checked:translate-x-4 shrink-0 tracking-tight  transition-transform "></span>
            </label>

        </div>
   

            <div className='border border-pink-400 flex flex-row gap-2  items-center '>
            <span className='text-sm text-NSlate-400'>Yearly Billing</span>
          
            <span className="rounded-full w-14 h-7 bg-POrange-100 text-POrange-400 flex items-center justify-center text-center text-sm font-bold md:hidden">-25%</span>

             <span className="rounded-full w-20 h-5 bg-POrange-100 text-POrange-400  md:flex md:items-center md:justify-center text-[10px] font-bold hidden ">25% discount</span>
          </div>
        




      
    </div>
  );
}

export default Billing;
