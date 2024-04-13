import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ProductCard from './components/ProductCard.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-4 grow">
        <h1 className='text-xl mt-10 mb-10'>Nuestros <strong>Productos</strong></h1>
        <ItemListContainer text="Nuestros Productos" />

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <ProductCard
            name="Brownie"
            price={200} />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>

      </main>
      <footer className='py-4 text-xs border-t border-gray-800'>
        <p>© 2024 <strong className='text-green-500'>Viviendo Sano</strong>. Todos los derechos reservados.</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
