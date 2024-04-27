import upload_area from "../assets/upload_area.svg";
import { MdAdd } from "react-icons/md";
import { useState } from "react";

function AddProduct() {
  const [image, setimage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imagehandler = (e) => {
    setimage(e.target.files[0]);
  };

  const changehandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:5000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("product Added") : alert("Product Added");
        });
    }
  };

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Product Title:</h4>
        <input
          type="text"
          name="name"
          placeholder="product title"
          className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
          onChange={changehandler}
          value={productDetails.name}
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Price:</h4>
        <input
          type="text"
          name="old_price"
          placeholder="old price"
          className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md "
          onChange={changehandler}
          value={productDetails.old_price}
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Offer Price:</h4>
        <input
          type="text"
          name="new_price"
          placeholder="product title"
          className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md "
          onChange={changehandler}
          value={productDetails.new_price}
        />
      </div>
      <div className="mb-3 flex items-center gap-x-4">
        <h4 className="bold-18 pb-2">Product Category</h4>
        <select
          name="category"
          id="category"
          className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none "
          value={productDetails.category}
          onChange={changehandler}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="w-20 rounded-sm inline-block"
          />
        </label>
        <input
          onChange={imagehandler}
          type="file"
          id="file-input"
          hidden
          className="bg-primary max-w-80 w-full py-3 px-4"
          name="image"
        />
      </div>
      <button
        onClick={() => Add_Product()}
        className="btn_dark_rounded mt-4 flexCenter gap-x-1 "
      >
        <MdAdd />
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
