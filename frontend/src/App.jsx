import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Prodcut from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";

import bannermens from "./assets/bannermens.png";
import bannerwomens from "./assets/bannerwomens.png";
import bannerkids from "./assets/bannerkids.png";

function App() {
  return (
    <main className="bg-primary text-tertiary">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Category category="men" banner={bannermens} />} />
          <Route path="/womens" element={<Category  category='women' banner={bannerwomens}/>} />
          <Route path="/kids" element={<Category category="kid" banner={bannerkids} />} />
          <Route path="/product" element={<Prodcut />} />
          <Route path="/product/:id" element={<Prodcut />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;
