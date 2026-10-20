
import PriceSlider from "../PriceSlider";

const HeroSection = () => {

  return (
    <main className="w-full  h-screen font-Manrope  bg-NSlate-50 ">

      <div className=" w-full bg-[url('/images/bg-pattern.svg')]  bg-no-repeat bg-cover bg-left h-80 sm:h-100 relative p-4 sm:p-0 ">
      
      {/* circles */}
        <div className="w-full h-50 md:h-58 bg-[url('/images/pattern-circles.svg')] bg-no-repeat bg-center relative z-40">
          <div className="w-full h-full absolute z-50 flex flex-col items-center justify-center text-lg gap-2">
            <h2 className=" font-bold text-lg text-NSlate-800 sm:text-4xl">Simple, traffic-based pricing</h2>
            <div className="flex flex-col items-center gap-1 sm:flex-row ">
            <p className="text-sm font-medium  text-NSlate-400 md:text-lg">Sign-up for our 30-day trial.</p>
            <p className="text-sm font-medium  text-NSlate-400 md:text-lg">No credit card required.</p>
            </div>
          </div>

        
        </div>

          <div className="relative  h-10 w-full ">
        <PriceSlider />
          </div>



      </div>
    </main>
  );
};

export default HeroSection;
