import Home from "../pages/home";
import ROUTES from "../common/path";
import{Route , Routes}from"react-router-dom"
import Navbar from "../components/navbar";


const AppRouters = ()=>{

  return(
    <>
      <Routes>

        <Route path={ROUTES.HOME} element={<Home/>}/>
         
      </Routes>
    
    </>
  )


}

export default AppRouters
