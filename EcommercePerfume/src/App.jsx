import './App.css'
import MainLayout from './Layout/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './Pages/ProductsPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='product' element={<ProductPage />}></Route>
          </Route>

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
