import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './component/Login';
import Signup from './component/Signup';
import Welcome from "./component/Welcome";
import DryFruits from "./component/DryFruits"
import Veggies from "./component/Veggies";
import Fruits from "./component/Fruits";
import IceCream from "./component/IceCream";
import Juice from "./component/Juice";
import Payment from "./component/Payment";
import Seeds from "./component/Seeds";
function App() {
  return(
  <div>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
  <Route path='/Welcome' element={<Welcome/>}></Route>
  <Route path='/DryFruits' element={<DryFruits/>}></Route>
  <Route path='/Veggies' element={<Veggies/>}></Route>
  <Route path='/Fruits' element={<Fruits/>}></Route>
  <Route path='/IceCream' element={<IceCream/>}></Route>
  <Route path='/Juice' element={<Juice/>}></Route>
  <Route path='/Payment' element={<Payment/>}></Route>
  <Route path='/Seeds' element={<Seeds/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;
