import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Transactions from "../src/components/TransactionPage/Transactions";
import LandingPage from "../src/components/LandingPage/LandingPage";
import NavBar from "../src/components/LandingPage/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "../src/NotFound";
import { useState } from "react";

function App() {
  const [visitedLandingPage, setLandingPage] = useState(false);

 
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LandingPage onVisit={() => setLandingPage(true)}/>}></Route>
            <Route path="/transaction" element={visitedLandingPage ? <Transactions /> : <Navigate to = "/"/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
