import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";

const Display = (props) => {
  const { image, name, new_price, old_price } = props.Product;

  return (
    <section className="">
      <div className="flex flex-col gap-14 xl:flex-row">
        <div className="flex gap-x-2">
          <div className="flex flex-col gap-[7px] flex-wrap">
            <img src={product_rt_1} alt="prdctImg" className="max-h-[99px]" />
            <img src={product_rt_2} alt="prdctImg" className="max-h-[99px]" />
            <img src={product_rt_3} alt="prdctImg" className="max-h-[99px]" />
            <img src={product_rt_4} alt="prdctImg" className="max-h-[99px]" />
          </div>
          <div>
            <img src={image} alt="no image" />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="h3">{name}</h3>
          <div className="flex gap-x-3 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>{111}</p>
          </div>
          <div className="flex gap-x-6 medium-28 my-2">
            <div className="line-through">{old_price}</div>
            <div className="text-secondary">{new_price}</div>
          </div>
          <div className="mb-4 ">
            <h4 className="bold-16">Select Size</h4>
            <div className="flex gap-3 my-3 ">
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flexCenter cursor-pointer "></div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flexCenter cursor-pointer "></div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flexCenter cursor-pointer "></div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flexCenter cursor-pointer "></div>
            </div>
            <div className="flex-flex-col gap-y-3 mb-4 max-w-[555px]">
              <button className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest">Buy it</button>
              <button className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest" >Add to cart</button>
            </div>
            <p><span className="medium-16 text-tertiary">Category:</span>Women | Jacket | Winter</p>
            <p><span className="medium-16 text-tertiary">Tags:</span> Modern | Latest</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
