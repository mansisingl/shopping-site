import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./routes/navigation/Navbar";
import Authentication from "./routes/authentication/Authentication";

const Shop = () => {
  return <h1>i am shop page</h1>
}

const App= () => {

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='authentication' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
