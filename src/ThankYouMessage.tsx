type trialProps = {
startTrialPrice:number,
}

const ThankYouMessage = ({startTrialPrice} : trialProps) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-auto font-manrope h-60">

          <span className="text-NSlate-800 text-3xl  md:text-7xl">Thank you!  </span>
          <span className="text-NSlate-400 text-sm md:text-lg">Your trial price is ${startTrialPrice}.00</span>
    </div>
  );
}

export default ThankYouMessage;
