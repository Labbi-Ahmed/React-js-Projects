import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
