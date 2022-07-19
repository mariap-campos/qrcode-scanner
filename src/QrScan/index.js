import { useState } from "react";
import "../App.css";
// import QrReader from "react-qr-scanner";
import QrReader from "modern-react-qr-reader";
import { Link } from "react-router-dom";

function QrScan() {
  const [data, setData] = useState("No result");
  const [scanner, setScanner] = useState(true);
  const [error, setError] = useState();

  const previewStyle = {
    width: "100%",
  };

  if (error) {
    return <div>Sorry... somenthing went wrong</div>;
  }

  return (
    <div className="qrcode">
      {scanner && (
        // <QrReader
        //   delay={100}
        //   // legacyMode
        //   facingMode="rear"
        //   style={previewStyle}
        //   onError={(err) => {console.error(err)}}
        //   onScan={(data) => {
        //     if (data) {
        //       setData(data);
        //       setScanner(false);
        //     }
        //   }}
        // />

        <QrReader
          delay={300}
          facingMode={"environment"}
          onError={(err) => {
            setError(err);
            console.error(err);
          }}
          onScan={(data) => {
            if (data) {
              setData(data);
              setScanner(false);
            }
          }}
          style={previewStyle}
        />
      )}
      <p>{data.text}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default QrScan;
