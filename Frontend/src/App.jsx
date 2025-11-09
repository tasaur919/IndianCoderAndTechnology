import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Tutorials from './pages/Tutorials'
import CourseReview from './pages/CourseReview'
import Devtools from './pages/Devtools'
import Footer from './components/Footer'
import Payment from './pages/Payment'
import PlacementWeb from './pages/PlacementWeb'
// import ProtectedRoutes from './components/ProtectedRoutes'
import PaymentOption from './pages/PaymentOption'
import GradientGenerator from './components/GradientGenerator'
import AvtarGenerator from './components/AvtarGenerator'
import StockImage from './components/StockImage'
import TermAndConditions from './pages/TermAndConditions'
import RefundPolicy from './pages/RefundPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PageNotFound from './pages/PageNotFound'
import DummyJsonData from './components/DummyJsonData'
// import PhotoEditor from './components/PhotoEditor'

function App() {
  return (
    <div className='min-h-screen  bg-linear-to-tl from-gray-600 via-gray-800  to-gray-600 text-white justify-center items-top flex pt-1'>
      <BrowserRouter>
        <div className='w-11/12'>

         <NavBar/>

         
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tutorials' element={<Tutorials/>}/>
          <Route path='/termsandconditions' element={<TermAndConditions/>}/>
          <Route path='/refundpolicy' element={<RefundPolicy/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>

          <Route path='/devtools' element={
            //  <ProtectedRoutes>
            <Devtools/>
            // </ProtectedRoutes> 
            }/>
            <Route path='/devtools/gradientgenerate' element={<GradientGenerator/>} />
            <Route path='/devtools/avatargenerate' element={<AvtarGenerator/>} />
            <Route path='/devtools/freestockimage' element={<StockImage/>} />
            <Route path='/devtools/dummydata' element={<DummyJsonData/>} />
            {/* <Route path='/devtools/photoeditor' element={<PhotoEditor/>} /> */}

          <Route path='/coursereviews' index element={<CourseReview/>}/>
          <Route path='/placements/placement' element={<PlacementWeb/>}/>
          {/* <Route path='/placements/report' element={<Home/>}/> */}
          {/* <Route path='/placements/interview' element={<Home/>}/> */}
          <Route path='/payment' element={<Payment/>} />
          <Route path='/payment/qr' element={<PaymentOption/>} />
          <Route path='*' element={<PageNotFound/>}/>
         </Routes>

         
         <Footer/>
        </div>
         </BrowserRouter>
    </div>
  )
}

export default App