import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./routes/navigation/Navbar";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import CheckoutPage from "./components/checkout-page/CheckoutPage";


const App= () => {

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='authentication' element={<Authentication/>}/>
        <Route path='check-out' element={<CheckoutPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
