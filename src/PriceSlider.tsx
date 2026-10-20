import  {  useState } from "react";
import Price from "./price";
import InputSlider from "./InputSlider";
import Billing from "./Billing";

import  {type ChangeEvent  } from "react";  
import ThankYouMessage from "./ThankYouMessage";



type startTrialDemo =  {
rangeValuePrice?:number;
isMonthly?:boolean;
}


const PriceSlider = () => {

   const [rangeValuePrice,setRangeValuePrice]=useState<number>(16)


   const [isMonthly,setIsMonthly] = useState<boolean>(false)

    const [startTrialPrice,setStartTrialPrice] =useState<startTrialDemo>({
    rangeValuePrice:rangeValuePrice,
    isMonthly:false,
    })

      const [showThankyouMessage,setShowThankyouMessage]=useState<boolean>(false)



    const min:number= 0 

    const max:number=32

  const percentage = ((rangeValuePrice - min) / (max - min)) * 100;

    const handlePriceRange = (e : ChangeEvent<HTMLInputElement>) => {
    setRangeValuePrice(Number(e.target.value))
   
    }


    const handleStartTrial = () => {
     const finalTrialPrice : startTrialDemo = {
     rangeValuePrice:rangeValuePrice,
      isMonthly
      
      }
     
    setStartTrialPrice(finalTrialPrice)

        
      console.log(finalTrialPrice)

      setShowThankyouMessage(true)
   
    
    }

    
    const handleMonthlyOrYearly = (e:ChangeEvent<HTMLInputElement>) => {
      setIsMonthly(e.target.checked)
    
    }
  return (
    <>
       {/* container for priceslider */}
      <div className="absolute sm:place-self-center sm:top-2 inset-x-0   h-auto  w-full  rounded-md bg-white flex flex-col gap-7 justify-center items-center shadow-gray-100 shadow-lg  p-2  sm:w-155 md:h-100">
      {showThankyouMessage ? (
        <ThankYouMessage startTrialPrice={startTrialPrice.rangeValuePrice}/>
      
      ) : (
      
      <>

      <div className="flex md:flex-row items-center  justify-center md:justify-between w-full md:w-140 p-2 md:p-4  ">
      
              <h2 className="text-center  text-NSlate-400 text-sm font-semibold tracking-wider">100K PAGEVIEWS</h2>

              <Price className="w-auto  hidden md:flex md:flex-row md:items-center md:gap-2">{rangeValuePrice}</Price>
      </div>
      
          <InputSlider rangeValuePrice={rangeValuePrice} min={min} max={max} percentage={percentage} handlePriceRange={handlePriceRange}/>

             

              <Price className="w-auto flex flex-row  items-center gap-3 md:hidden">{rangeValuePrice}</Price>
      
        <Billing isMonthly={isMonthly} handleMonthlyOrYearly={handleMonthlyOrYearly} />


          {/* line */}
              <div className="border-t-2 border-NSlate-200 border w-full "/>

              <div className="flex flex-col gap-8 md:flex-row items-center md:gap-0 md:justify-between   sm:w-135">
                <div className="flex flex-col gap-3 md:gap-2    w-full sm:w-50 items-center  md:items-start font-Monrope text-md text-NSlate-400 tracking-tight">
                <span className="flex flex-row gap-2 items-center  "><img src="./images/icon-check.svg" className="w-3 h-3" alt="checkicon" />Unlimited websites</span>
                <span className="flex flex-row gap-2 items-center"><img src="./images/icon-check.svg" className="w-3 h-3" alt="checkicon" />100% data ownership</span>
                <span className="flex flex-row gap-2  items-center" ><img src="./images/icon-check.svg"  className="w-3 h-3" alt="checkicon" />Email reports</span>
                </div>
                <button className="text-PIndigo-200 bg-NSlate-800 hover:bg-NSlate-800/90 rounded-full text-sm w-53 h-12 font-bold active:text-white hover:cursor-pointer" onClick={handleStartTrial}>Start my trial</button>
              </div>
                </>)}
          </div>
    </>
  );
};

export default PriceSlider;
