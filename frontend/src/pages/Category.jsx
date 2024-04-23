import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../assets/all_products";
import Item from "../components/Item";

function Category({ category, banner }) {
  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        <div>
          <img
            src={banner}
            alt="image not available"
            className="block my-7 mx-auto"
          />
        </div>
        <div className="flexBetween my-8 mx-2">
          <h5>
            <span className="font-bold">Showing 1-12</span> out of 36 products
          </h5>
          <div className="flexBetween max-sm:p4 gap-x-4 px-8 py-3 rounded-5xl ">
            sort by <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {all_products.map((items) => {
            if (items.category === category)
              return (
                <Item
                  key={items.id}
                  id={items.id}
                  image={items.image}
                  name={items.name}
                  old_price={items.old_price}
                  new_price={items.new_price}
                ></Item>
              );
          })}
        </div>
        <div className="mt-16 text-center">
          <button className="btn_dark_rounded">Load More</button>
        </div>
      </div>
    </section>
  );
}

export default Category;
