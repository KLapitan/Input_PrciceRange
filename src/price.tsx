// remove all import changeivent
// if we pass children as a argument
type PriceStyleProps = React.PropsWithChildren <{
className?:string;
}>

const Price = ({children, className } :PriceStyleProps) => {
  return (
      <p className={`${className}`}> <span className="text-4xl font-bold text-Nslate-800 ">${children}.00</span> <span className="text-Nslate-400 text-sm font-semibold">  / month</span> </p>
  );
}

export default Price;
