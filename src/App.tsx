import { useState } from "react";
import "./App.css";
import coin from "./assets/c1.png";
import bread from "./assets/bread.png";

import $ from "jquery";

function App() {
  const [count, setCount] = useState(0);

  function coinActions(e: any) {
    setCount(count + 1);
    let x = e.clientX;
    let y = e.clientY;
    let coin = document.querySelector(".coin");
    let breadElement = document.createElement("img");
    breadElement.id = "bread";
    breadElement.src = bread;
    breadElement.style.width = "5em";
    breadElement.style.height = "5em";
    breadElement.style.position = "absolute";
    breadElement.style.left = `${x}px`;
    breadElement.style.top = `${y}px`;
    breadElement.style.display = `inline`;
    coin?.appendChild(breadElement);
    $("#bread").animate({ top: "-=55px" });
    // breadElement.style.transform = "translateY(3in)";
    setTimeout(() => coin?.removeChild(breadElement), 700);
  }

  function openShop() {
    const x = document.getElementById("overlay");
    if (x) {
      x.style.display = "flex";
      x.style.flexDirection = "column";
      x.style.justifyContent = "center";
      x.style.alignItems = "center";
    }
  }

  function closeShop() {
    const x = document.getElementById("overlay");
    if (x) {
      x.style.display = "none";
    }
  }

  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-column">
        <div className="row" style={{ paddingTop: "5em" }}>
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              Bread = {count}
            </button>
          </div>
        </div>
        <div className="row">
          <div
            className="col d-flex justify-content-center"
            style={{ paddingTop: "5em" }}
          >
            <div className="coin">
              <a>
                <img
                  src={coin}
                  alt=""
                  onClick={(e) => coinActions(e)}
                  style={{
                    width: "20em",
                    height: "20em",
                    borderRadius: "35%",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center"
          style={{ paddingTop: "6em" }}
        >
          <div
            className="col d-flex justify-content-between"
            style={{ paddingTop: "2em", maxWidth: "19em" }}
          >
            <button
              type="button"
              className="btn btn-success"
              onClick={openShop}
              style={{ width: "8em", height: "4em" }}
            >
              Shop
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setCount(0)}
              style={{ width: "8em", height: "4em" }}
            >
              reset
            </button>
          </div>
        </div>
        <div id="overlay" className="">
          <h1
            style={{
              color: "white",
              background: "green",
              padding: "1em 2em 1em 2em",
              marginBottom: "2em",
              borderRadius: "20%",
            }}
          >
            SHOP
          </h1>
          <ul
            className="list-group"
            style={{ width: "100%", height: "30em", overflow: "scroll" }}
          >
            <li className="list-group-item" style={{ padding: "2em" }}>
              Cras justo odio
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Dapibus ac facilisis in
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Morbi leo risus
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Porta ac consectetur ac
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Vestibulum at eros
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Cras justo odio
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Dapibus ac facilisis in
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Morbi leo risus
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Porta ac consectetur ac
            </li>
            <li className="list-group-item" style={{ padding: "2em" }}>
              Vestibulum at eros
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-danger"
            onClick={closeShop}
            style={{ width: "8em", height: "4em", marginTop: "2em" }}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
