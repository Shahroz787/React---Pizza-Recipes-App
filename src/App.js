import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import { ProductsData, ProductsDataTwo } from "./Components/Products/Data";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={ProductsData} />
      <Feature />
      <Products heading="Another Treats for You" data={ProductsDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
