import { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";

function ListProduct() {
  const [allproducts, setallproducts] = useState([]);

  const getallproducts = async () => {
    await fetch("http://localhost:5000/getallproducts")
      .then((res) => res.json())
      .then((data) => setallproducts(data));
  };
  useEffect(() => {
    getallproducts();
  }, []);

  const removeProduct = (id) => {
    return async () => {
      await fetch("http://localhost:5000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          alert("Deleted Successfully");
          getallproducts();
        });
    };
  };

  return (
    <div className="p-2 box-border bg-white mb-0 rounded-sm  w-full mt-4 sm:p-4 sm:m-7">
      <h4 className="bold-22 p-5 uppercase">Product List</h4>
      <div className="max-h-[77vh] overflow-auto px-4 text-center ">
        <table className="w-full mx-auto">
          <thead>
            <tr className="bg-primary bold-14 sm:regular-22 text-start py-12">
              <th className="p-2">Title</th>
              <th className="p-2">Products</th>
              <th className="p-2">Old price</th>
              <th className="p-2">New Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {allproducts.map((product, i) => (
              <tr
                key={i}
                className="border-b border-slate-900/20 text-gray-20 p-6 medium-14 "
              >
                <td className="flexStart sm:flexCenter">
                  <img
                    src={product.image}
                    alt=""
                    className="rounded-lg ring-1 ring-slate-900/5 my-1"
                    height={43}
                    width={43}
                  />
                </td>
                <td>
                  <div className="line-clamp-3">{product.name}</div>
                </td>
                <td>${product.old_price}/-</td>
                <td>${product.new_price}/-</td>
                <td>{product.category}</td>
                <td>
                  <div className="text-red-500 pl-6 bold-22 sm:pl-14">
                    <TbTrash onClick={removeProduct(product.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProduct;
