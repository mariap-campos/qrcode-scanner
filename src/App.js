import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>POC para qrCode scan em webview</p>
        <Link to="/qrcode">Escaneie um QrCode!</Link>
      </header>
    </div>
  );
}

export default App;
