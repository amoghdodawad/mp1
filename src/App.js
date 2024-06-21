import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import { persistor, store} from './redux/appStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Register from './components/Register';
import Pick from './components/Pick';
import Deliver from './components/Deliver';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={
              <Protected next='register'>
                <Register/>
              </Protected>
            }/>
            <Route path='/pick' element={
              <Protected next='pick'>
                <Pick/>
              </Protected>
            }/>
            <Route path='/deliver' element={
              <Protected next='deliver'>
                <Deliver/>
              </Protected>
            }/>
          </Routes>
        </PersistGate>
      </Provider>
      </BrowserRouter>
      
      {/* <Login/> */}
    </div>
  );
}

export default App;
