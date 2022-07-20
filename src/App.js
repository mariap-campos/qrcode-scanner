import logo from "../src/assets/zelogo.png";
import "./App.css";

import { Link } from "react-router-dom";

function App() {
  navigator.getUserMedia(
    { video: true },
    function (stream) {
      stream.getTracks().forEach((x) => x.stop());
    },
    (err) => console.log(err)
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Aqui você pode scannear seu QrCode na tampinha e acumular pontos!</p>
        <Link to="/qrcode">Escaneie um QrCode!</Link>
      </header>
    </div>
  );
}

export default App;
