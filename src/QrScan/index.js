import { useState } from "react";
import "../App.css";
// import QrReader from "react-qr-scanner";
import QrReader from "modern-react-qr-reader";
import { Link } from "react-router-dom";

function QrScan() {
  const [data, setData] = useState("");
  const [facingMode, setFacingMode] = useState("user");
  const [scanner, setScanner] = useState(true);
  const [error, setError] = useState();

  const previewStyle = {
    width: "100%",
  };

  if (error) {
    return <div>Sorry... somenthing went wrong {error} </div>;
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
          facingMode={facingMode}
          onError={(err) => {
            setError(err);
            console.error(err);
          }}
          onScan={(data) => {
            if (data) {
              console.log(data);
              setData(data);
              // setScanner(false);
            }
          }}
          style={previewStyle}
        />
      )}
      <p>Código: {data}</p>
      <button
        onClick={() => {
          if (facingMode === "environment") {
            setFacingMode("user");
          } else {
            setFacingMode("sdsds");
          }
        }}
      >
        Rotacionar: {facingMode}{" "}
      </button>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default QrScan;
