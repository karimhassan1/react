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
            <Route index element={<ProductPage />}></Route>
            <Route path='/product/:id'></Route>
          </Route>

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
