import logo from "../src/assets/zelogo.png";
import "./App.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { facingMode: { exact: "environment" } } })
  //     .then(function (stream) {
  //       if (stream.getVideoTracks().length > 0) {
  //         console.log(stream.getVideoTracks());
  //         window.location.reload(true);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [navigator]);
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
