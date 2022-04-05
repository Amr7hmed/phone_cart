import './App.css';
import { Redirect, Switch, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
// import Component
import Home from './Pages/Home.jsx';
import About from './Pages/About';
import Products from './Pages/Products';
import Prodect from './Pages/Product';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';


function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Prodect} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/cart" component={Cart}/>
        <Redirect  path="/"/>
      </Switch>
    </>
  );
}

export default App;
/*
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </>
  );
}

export default App;

*/