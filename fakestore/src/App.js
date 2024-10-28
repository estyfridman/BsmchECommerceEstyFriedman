import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/products";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/Electronicts">Electronicts</Link>
          <Link to="/Jewlery">Jewelry</Link>
          <Link to="/mensclothing">Men's Clothing</Link>
          <Link to="/womensclothing">Women's Clothing</Link>
          <Link to="/books">Books</Link>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Electronicts" element={<Products prodType='electronics'/>} />
          <Route path="/Jewlery" element={<Products prodType='jewelery'/>} />
          <Route path="/mensclothing" element={<Products prodType="men's clothing"/>} />
          <Route path="/womensclothing" element={<Products prodType="women's clothing"/>} />
          <Route path="/books" element={<Products prodType='books'/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
