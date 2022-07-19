import { useState } from "react";
import "../App.css";
import logo from "../../src/assets/zelogo.png";

import QrReader from "modern-react-qr-reader";
import { Link } from "react-router-dom";

function QrScan() {
  const [data, setData] = useState("");
  const [error, setError] = useState();

  const previewStyle = {
    width: "100%",
  };

  if (error) {
    return <div>Sorry... somenthing went wrong {JSON.stringify(error)} </div>;
  }

  return (
    <div className="qrcode">
      <img
        src={logo}
        style={{ marginBottom: 40 }}
        className="App-logo"
        alt="logo"
      />

      <QrReader
        delay={300}
        constraints={{ facingMode: { exact: "environment" } }}
        onError={(err) => {
          setError(err);
          console.error("error", err);
        }}
        onScan={(data) => {
          if (data) {
            console.log(data);
            setData(data);
          }
        }}
        style={previewStyle}
      />

      <p>
        Código: <strong>{data}</strong>
      </p>

      <Link to="/">Voltar</Link>
    </div>
  );
}

export default QrScan;
