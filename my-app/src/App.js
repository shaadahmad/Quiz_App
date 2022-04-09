import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import CakeCont from './component/cakeCont';
import HooksCake from './component/HooksCake'
import iceCont from './component/IceCont';
import IceCont from './component/IceCont';
import NewCakeContainer from './component/NewCakeContainer';
import UserContainer from './component/UserContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Routes>
  <Route path='/' element={<Register/>}></Route>
  <Route path='/Quiz' element={<UserContainer/>}></Route>
  <Route path='/login' element={<Login/>}></Route>

      </Routes>
      </BrowserRouter>
      {/* <HooksCake/> */}
      {/* <CakeCont /> */}
     {/* <IceCont/> */}
     {/* <NewCakeContainer/> */}
     {/* <Register/>
     <UserContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
