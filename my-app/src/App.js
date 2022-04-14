import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import UserContainer from './component/UserContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import ProtectedPage from './component/ProtectedPage';
import AdminPage from './component/AdminPage';
import ProtectAdminPage from './component/ProtectAdminPage';
import NewQuestions from './component/NewQuestions';
import ProtectNewQuestion from './component/ProtectNewQuestion';




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register />}></Route>
            <Route path='/Quiz' element={<ProtectedPage><UserContainer /></ProtectedPage>}></Route>
            <Route path='/admin' element={<ProtectAdminPage><AdminPage /></ProtectAdminPage>}></Route>
            <Route path='/add' element={<ProtectNewQuestion><NewQuestions /></ProtectNewQuestion>}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
