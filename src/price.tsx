import type React from "react";


// if we pass children as a argument
type PriceStyleProps = React.PropsWithChildren <{
className?:string;
}>

const Price = ({children, className } :PriceStyleProps) => {
  return (
      <p className={`${className}`}> <span className="text-4xl font-bold text-NSlate-800 ">${children}.00</span> <span className="text-NSlate-400 text-sm font-semibold">  / month</span> </p>
  );
}

export default Price;
