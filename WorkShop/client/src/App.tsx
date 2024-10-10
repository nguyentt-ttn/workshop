import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutWebsite from './pages/(website)/layout'
import HomePage from './pages/(website)/home/page'
import DashBoard from './pages/(admin)/dashboard/page'
import SignupPage from './pages/(auth)/sigup/page'
import NotFoundPage from './pages/(website)/404/page'
import AdminProductsPage from './pages/(admin)/dashboard/products/page'
import ShopClientPage from './pages/(website)/shop/page'
import LayoutAdminPage from './pages/(admin)/layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />} >
          <Route index element={<HomePage/> } />
          <Route path='sigup' element={<SignupPage/> } />
          <Route path='shop' element={<ShopClientPage/> } />
        </Route>
        <Route path='admin' element={<LayoutAdminPage />} >
          <Route index element={<Navigate to='dashboard'/> } />
          <Route path='dashboard' element={<DashBoard/> } />
          <Route path='products' element={<AdminProductsPage/> } />
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
