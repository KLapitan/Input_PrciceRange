// error will show if the import dont have word type  , verbatimModuleSyntax
import  type { ChangeEvent } from "react";  


type InputProps = {
rangeValuePrice?:number,
percentage?:number,
handlePriceRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
min:number,
max:number,

}

const PriceSlider = ({rangeValuePrice , percentage, handlePriceRange, min ,max }:InputProps) => {
  return (
    <>
       {/* container for priceslider */}
      <div className="absolute inset-x-4  top-52 h-auto box-border  w-auto border-cyan-900 rounded-md bg-white flex flex-col gap-7 justify-center items-center shadow-white  p-2">
              <h2 className="text-center mt-8 text-NSlate-400 text-sm font-bold tracking-wider">100K PAGEVIEWS</h2>

              <label className="w-full border p-2">
              <input type="range"  className=" price-slider " min={min} max={max} defaultValue={rangeValuePrice} value={rangeValuePrice} onChange={handlePriceRange} style={{
              background:  `linear-gradient(to right, #10d5c2 ${percentage}%, #e5e7eb ${percentage}%)`
                }}/>
              </label>

            <p className="w-auto flex flex-row items-center gap-4"> <span className="text-4xl font-bold text-NSlate-800 ">${rangeValuePrice}.00</span> <span className="text-NSlate-400 text-xl">  / month</span> </p>

            <div className="flex flex-row items-center gap-3 w-auto border font-manrope-00">
            <div className="flex flex-row items-center gap-2">
            <p className=" text-sm text-NSlate-400">Monthly Billing</p>

            <label className="relative inline-block h-7 w-12  shrink-0">
            <input type="checkbox" role="switch"  className="peer sr-only"/>
            <span className="absolute inset-0 bg-NSlate-200 rounded-full  peer-checked:bg-PGreen-400"/>
            <span className="absolute w-5 left-1 top-1 h-5 rounded-full bg-white peer-checked:translate-x-5 shrink-0 tracking-tight  transition-transform "></span>
            </label>
            </div>

            <div className="flex flex-row items-center gap-2">
            <span className="font-monrope400 text-sm text-NSlate-400 tracking-tight">Yearly Billing</span>
            <span className="rounded-full w-14 h-7 bg-POrange-100 text-POrange-400  place-content-center text-center text-sm font-bold">-25%</span>
            </div>
            
             
      </div>
          {/* line */}
              <div className="border-t-2 border-NSlate-200 border w-full"/>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3  border w-full items-center font-Monrope text-md text-NSlate-400 tracking-tight">
                <span className="flex flex-row gap-2 items-center "><img src="./images/icon-check.svg" className="w-3 h-3" alt="checkicon" />Unlimited websites</span>
                <span className="flex flex-row gap-2 items-center"><img src="./images/icon-check.svg" className="w-3 h-3" alt="checkicon" />100% data ownership</span>
                <span className="flex flex-row gap-2  items-center" ><img src="./images/icon-check.svg"  className="w-3 h-3" alt="checkicon" />Email reports</span>
                </div>
                <button className="text-PIndigo-200 bg-NSlate-800 rounded-full text-sm py-4 px-14 font-bold">Start my trial</button>
              </div>
      </div>
    </>
  );
};

export default PriceSlider;
