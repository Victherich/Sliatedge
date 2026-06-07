
import './App.css';
import Landingpage from './components/Landingpage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import UserSignup from './components/Signup';
import UserLogin from './components/Login';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Landingpage/>}/>
  <Route path='/signup' element={<UserSignup/>}/>
  <Route path='/login' element={<UserLogin/>}/>
  <Route path='/userdashboard' element={<UserDashboard/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
  );
}

export default App;
