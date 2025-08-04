import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./pages/List";
import CreateAccount from "./pages/CreateAccount";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </Router>
  );
}

export default App;
