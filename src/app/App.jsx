import Navbar from "../components/navbar";
import AppRouters from "../routes/approuter";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
        <Navbar/>
    </>
  );
}

export default App;
