import "./App.css";
import Bookview from "./components/Bookview/Bookview";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Signin from "./pages/signin/Signin";
import { Routes, Route } from "react-router-dom";
import Routing from "./components/Router/Routing";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
