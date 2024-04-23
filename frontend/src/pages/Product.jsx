import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import Display from "../components/Display";
import Description from "../components/Description";
import Related from "../components/Related";



function Product() {
  const { all_products } = useContext(ShopContext);
  const { id } = useParams();
  // console.log(id);
  const product = all_products.find((e) => e.id === Number(id));
  // console.log(product);
  if (!product) return <div>Product not found</div>;
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHd product={product} />
        <Display Product={product}/>
        <Description/>
        <Related/>
       
      </div>
    </section>
  );
}

export default Product;
