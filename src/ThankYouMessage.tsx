type trialProps = {
startTrialPrice:number,
}

const ThankYouMessage = ({startTrialPrice} : trialProps) => {
  return (
    <div>

          <span className="text-NSlate-400 text-7xl">Thank you!  </span>
          <span>Your trial price is ${startTrialPrice}.00</span>
    </div>
  );
}

export default ThankYouMessage;
