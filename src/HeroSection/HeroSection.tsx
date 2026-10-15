import { useState, type ChangeEvent } from "react";
import PriceSlider from "../PriceSlider";



const HeroSection = () => {

    const [rangeValuePrice,setRangeValuePrice]=useState<number>(16)
    const min:number= 0 

    const max:number=32

  const percentage = ((rangeValuePrice - min) / (max - min)) * 100;

    const handlePriceRange = (e :ChangeEvent<HTMLInputElement>) => {
    setRangeValuePrice(Number(e.target.value))
    
    }


  return (
    <main className="w-full max-w-7xl h-screen font-Manrope  bg-NSlate-50">

      <div className="box-border w-full bg-[url('./images/bg-pattern.svg')]  bg-no-repeat bg-cover bg-left h-80 relative border border-green-600 p-4 ">
      
      {/* circles */}
        <div className="w-full border h-50 bg-[url('./images/pattern-circles.svg')] bg-no-repeat bg-center relative z-40">
          <div className="w-full h-full border border-amber-600  absolute z-50 flex flex-col items-center justify-center text-lg gap-2">
            <h2 className=" font-extrabold text-NSlate-800">Simple, traffic-based pricing</h2>
            <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium  text-NSlate-400">Sign-up for our 30-day trial.</p>
            <p className="text-sm font-medium  text-NSlate-400">No credit card required.</p>
            </div>
          </div>

        
        </div>

      <PriceSlider rangeValuePrice={rangeValuePrice} percentage={percentage} handlePriceRange={handlePriceRange} min={min} max={max}/>



      </div>
    </main>
  );
};

export default HeroSection;
