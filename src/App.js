import logo from "../src/assets/zelogo.png";
import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{}} className="App-logo" alt="logo" />
        <p>Aqui você pode scannear seu QrCode na tampinha e acumular pontos!</p>
        <Link to="/qrcode">Escaneie um QrCode!</Link>
      </header>
    </div>
  );
}

export default App;
