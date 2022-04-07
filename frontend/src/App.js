import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import Food from './pages/Food'
import DisplayFood from './components/DisplayFood'
import './index.css';


function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dishes' element={<Food/>} />
            <Route path='/dishes/add' />
            <Route path='/dishes/:id' element={<DisplayFood />} />
            <Route path='/dishes/:id/edit' />

          </Routes>

        </div>
      </Router>  
      <ToastContainer />
    </>
  );
}

export default App;
