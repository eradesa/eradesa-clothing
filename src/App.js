
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
//test 20220908

const Shop = () => {
  return <h1>I am the SHOP Page</h1>
}

const MenuItem2 = () => {
  return <h1>I am the MenuItem2 Page</h1>
}

const MenuItem3 = () => {
  return <h1>I am the MenuItem3 Page</h1>
}
const MenuItem4 = () => {
  return <h1>I am the MenuItem4 Page</h1>
}
const MenuItem5 = () => {
  return <h1>I am the MenuItem5 Page</h1>
}

const App = () =>{
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route /*path='home'*/ index element={<Home />} /> {/*index OR index={true} - binds a page to home page at start up*/}
        <Route path='shop' element={<Shop />} />
        <Route path='MenuItem2' element={<MenuItem2 />} />
        <Route path='MenuItem3' element={<MenuItem3 />} />
        <Route path='MenuItem4' element={<MenuItem4 />} />
        <Route path='MenuItem5' element={<MenuItem5 />} />      

      </Route>
      
       
    </Routes>
  );
};
export default App;
