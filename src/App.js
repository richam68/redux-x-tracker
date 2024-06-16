import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Transactions from "../src/components/TransactionPage/Transactions";
import LandingPage from "../src/components/LandingPage/LandingPage";
import NavBar from "../src/components/LandingPage/Navbar";
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
