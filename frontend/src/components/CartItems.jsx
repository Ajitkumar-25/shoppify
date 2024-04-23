import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

function CartItems() {
  const { all_products, cartItems, removeFromCart,totalCartAmount } = useContext(ShopContext);
  return (
    <section className="max_padd_container pt-20">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
            <th className="p-1 py-2">Product</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  key={e.id}
                  className="border-b border-slate-900/20 p-6 medium-14 text-center"
                >
                  <td>
                    <img
                      src={e.image}
                      alt="product image"
                      height={43}
                      width={43}
                      className="rounded-lg ring-1 ring-slate-900/5 my-1"
                    />
                  </td>
                  <td>
                    <div className="line-clamp-3">{e.name}</div>
                  </td>
                  <td>${e.new_price}</td>
                  <td className="w-16 h-16 bg-white">{cartItems[e.id]}</td>
                  <td>{cartItems[e.id] * e.new_price}</td>
                  <td>
                    <div className="bold-22 pl-1">
                      <button
                        onClick={() => removeFromCart(e.id)}
                        className="text-red-500"
                      >
                        <TbTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {/* CART DETAILS */}
      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]">
        <div className="flex flex-col gap-10">
          <h4 className="bold-20">Summary</h4>
          <div>
            <div className="flexBetween py-4">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className="text-gray-30 font-semibold">${totalCartAmount()}</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">Free</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16">Total:</h4>
              <h4 className="text-gray-30 font-semibold">${totalCartAmount()}</h4>
            </div>
          </div>
          <button className="btn_dark_rounded w-44">Checkout Now</button>
          <div className="flex flex-col gap-10">
            <h4 className="bold-20 capitalize">Enter Coupon Code Here</h4>
            <div className="flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10 ">
              <input
                className="bg-transparent border-none outline-none"
                type="text"
                placeholder="coupn code"
              />
              <button className="btn_dark_rounded">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartItems;
