
// we goterror verbalModuleSyntax
// if we dont put type insde with ChangeEvent
import  { type ChangeEvent } from "react";  

type InputProps = {
rangeValuePrice?:number,
percentage?:number,
handlePriceRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
min:number,
max:number,
}


const InputSlider = ({rangeValuePrice, min , max, handlePriceRange , percentage}:InputProps) => {
 
 
  return (
    <label className="w-full md:w-135  p-2">
              <input type="range"  className=" price-slider hover:cursor-grab  " min={min} max={max}  value={rangeValuePrice} onChange={handlePriceRange} style={{
              background:  `linear-gradient(to right, #10d5c2 ${percentage}%, #e5e7eb ${percentage}%)`
                }}/>
              </label>

  );
}

export default InputSlider;
