import Home from "./pages/Home";
import NFT from "./pages/NFT";
import Tracker from "./pages/Tracker/Tracker";
import CoinPage from "./pages/CoinPage/CoinPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/nft" element={<NFT />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/tracker/coin/:id" element={<CoinPage />} />
      </Routes>
    </Router>
  );
};

export default App;
