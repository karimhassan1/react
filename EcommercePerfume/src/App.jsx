import './App.css'
import MainLayout from './Layout/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './Pages/ProductsPage'
import NotFound from './Pages/NotFound'
import LoginPage from './Pages/LoginPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<ProductPage />}></Route>
            <Route path='/product/:id'></Route>
          </Route>
          <Route path='login' element={<LoginPage />} ></Route>
          <Route path='*' element={<NotFound />}></Route>

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
