import Home from "../pages/search";
import ROUTES from "../common/path";
import{Route , Routes}from"react-router-dom"
import Search from "../pages/search";

const AppRouters = ()=>{

  return(
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
         <Route path={ROUTES.SEARCH} element={<Search/>} />
      </Routes>
    
    </>
  )


}

export default AppRouters
