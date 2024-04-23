import POPULAR from "../assets/popular";
import Item from "./Item";
function Related() {
  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12  xl:w-[88%]">
        <h3 className="h3 text-center ">Related  Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16" />
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {POPULAR.map((items) => (
            <Item
              key={items.id}
              id={items.id}
              image={items.image}
              name={items.name}
              old_price={items.old_price}
              new_price={items.new_price}
            ></Item>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Related