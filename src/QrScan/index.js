import { useState } from "react";
import "../App.css";
import QrReader from "react-qr-scanner";
import { Link } from "react-router-dom";

function QrScan() {
  const [data, setData] = useState("No result");
  const [error, setError] = useState();

  const previewStyle = {
    height: 340,
    width: "100%",
  };

  return (
    <div className="qrcode">
      <QrReader
        delay={100}
        style={previewStyle}
        onError={(err) => console.error(err)}
        onScan={(data) => setData(data)}
      />
      <p>{data}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default QrScan;
