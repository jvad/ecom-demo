import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Cart from "./components/Cart";
import { ShoeListProvider } from "./components/Context";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Notfound from "./components/Notfound";
import { makeStyles } from "@material-ui/core";
import Thanks from "./components/Thanks";

const useStyles = makeStyles((theme) => ({
  wraper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // width: "100%",
  },
  one: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ShoeListProvider>
      <div className={classes.wraper}>
        <div className={classes.one}>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />}>
              <Route path=":id" element={<ProductDetails />} />
              <Route path="/" element={<ProductList />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Thanks />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ShoeListProvider>
  );
}

export default App;
