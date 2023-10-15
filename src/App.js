import React from 'react'
import {Provider} from 'react-redux'
import store from './Store/store'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Navigation from './components/Navigation'
import './Styles/style.css'

function App() {
  return (
    <>
    <Provider store = {store}>
     <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path = '/cart' element={<Cart/>}/>
      </Routes>
     </Router>
     </Provider>
    </>  
  );
}

export default App;
