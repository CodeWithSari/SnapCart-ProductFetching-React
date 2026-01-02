import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer' 
import LandingPage from './Pages/LandingPage'
import Products from './Pages/Products'
import ViewProducts from './Pages/ViewProducts'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Pnf from './Pages/Pnf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="min-h-[80vh]">  
        <Routes>
          {/* http://localhost:5173/ */}
          <Route path="/" element={<LandingPage />} />
          {/* http://localhost:5173/Products */}
          <Route path="/Products" element={<Products />} />
          <Route path="/viewproducts/:id" element={<ViewProducts />} />
          {/* Add these new routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
<Route path="/wishlist" element={<Wishlist />} />

          <Route path="*" element={<Pnf />} />
        </Routes>
      </main>
      <Footer />  
    </>
  )
}

export default App