
import React from "react"
import { Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import OverViewPage from "./pages/OverViewPage"
import SideBar from "./Componenets/SideBar/SideBar"
import User from './pages/Users'
import Sales from './pages/SalesPage'
import OrdersPage from "./pages/OrderPage"
import AnalyticsPage from "./pages/AnalyticsPage"
function App() {
  

  return (
    <>
    <div className="flex  h-screen bg-gray-200  text-black overflow-hidden">
    <div className=" fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br "/>
<div className="absoulate  inset-0 backdrop-blur-sm"/>
    </div>
    <SideBar/>
    <Routes>
      <Route path="/" element={<OverViewPage/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/users" element={<User/>}/>
      <Route path="/sales" element ={<Sales/>}/>
      <Route path="/orders" element={<OrdersPage/>}/>
      <Route path="/Analytics" element ={<AnalyticsPage/>}/>
      {/* <Route path="/setting" element={<SettingsPage/>}/> */}
    </Routes>

    </div>
    
      
    </>
  )
}

export default App
