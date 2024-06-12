import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Transactions from "./tracker/Transactions";
import LandingPage from "./tracker/LandingPage";
import NavBar from "../src/tracker/Navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <div className="App">
        <NavBar />
          <Routes>
            <Route
              path="/" element={<LandingPage/>}
            ></Route>
              <Route
              path="/transaction" element={<Transactions/>}
            ></Route>
           
          </Routes>
           
        </div>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
