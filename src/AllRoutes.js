import {Routes, Route} from 'react-router-dom';
import Home from './screen/home/Home';
import About from './screen/about/About';
import Contact from './screen/contact/Contact'
import Products from './screen/products/Products'
import Register from './screen/register/Register'
import Login from './screen/login/Login'
const AllRoutes=()=>{
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<Products/>}/>
        </Routes>
    )
}
export default AllRoutes