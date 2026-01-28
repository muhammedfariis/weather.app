import Navbar from "../components/navbar";
import AppRouters from "../routes/approuter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRouters />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
