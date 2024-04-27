import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
function Admin() {
  return (
    <div className="lg:flex">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
}

export default Admin;
