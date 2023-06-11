import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TopSec from "./components/TopSec";
import MainCon from "./components/MainContent";
function TempName() {
  return (
    <div className="main--sec">
     <TopSec/>
     <MainCon/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TempName />);
// ReactDOM.render(<TempName />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
