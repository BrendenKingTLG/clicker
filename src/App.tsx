import { useState } from "react";
import "./App.css";
import coin from "./assets/1.png";
import bread from "./assets/bread.png";

import $ from "jquery";

function App() {
  const [count, setCount] = useState(199);
  const [clickStrength, setClickStrength] = useState(1);

  const shopMap = new Map<string, Map<string, string>>([
    [
      "clickPower",
      new Map([
        ["message", "you doubled your click power"],
        ["effect", "2"],
      ]),
    ],
    [
      "xcoin",
      new Map([
        ["message", "you are using xcoin"],
        ["effect", "2"],
      ]),
    ],
  ]);

  function coinActions(e: any) {
    setCount(count + clickStrength);
    console.log(count);
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

  function buyitem(itemName: string, cost: number) {
    let message = "";
    let effect = 0;
    if (count >= cost) {
      if (shopMap.has(itemName)) {
        message = shopMap.get(itemName)!.get("message") as string;
        effect = parseInt(shopMap.get(itemName)!.get("effect") as string);
      }
      let shop = document.getElementById("overlay");
      let breadElement = document.createElement("p");
      breadElement.className = "alert alert-danger text-center";
      breadElement.style.width = "20em";
      breadElement.style.height = "3em";
      breadElement.style.position = "absolute";
      breadElement.textContent = message;
      breadElement.style.display = `inline`;
      shop?.appendChild(breadElement);
      setCount(count - cost);
      setClickStrength(clickStrength + effect);
      console.log(shopMap.get(itemName)?.get("effect") as string);
      setTimeout(() => shop?.removeChild(breadElement), 1000);
    } else {
      let shop = document.getElementById("overlay");
      let breadElement = document.createElement("p");
      breadElement.className = "alert alert-danger text-center";
      breadElement.style.width = "20em";
      breadElement.style.height = "2em";
      breadElement.style.position = "absolute";
      breadElement.textContent = "Not Enough Coins";
      breadElement.style.display = `inline`;
      shop?.appendChild(breadElement);
      setTimeout(() => shop?.removeChild(breadElement), 700);
    }
  }

  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-column">
        <div className="row" style={{ paddingTop: "3em" }}>
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
            style={{ paddingTop: "4em" }}
          >
            <div className="coin">
              <a>
                <button
                  id="coin"
                  className="btn"
                  onClick={(e) => coinActions(e)}
                  style={{
                    width: "20em",
                    height: "20em",
                    borderRadius: "50%",
                    boxShadow: "0 5px #666",
                    backgroundColor: "#04AA6D",
                  }}
                >
                  A-COIN
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center"
          style={{ paddingTop: "2em" }}
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
            <li
              className="list-group-item d-flex justify-content-between"
              style={{ padding: "2em" }}
              onClick={() => buyitem("clickPower", 200)}
              id="clickPower"
            >
              <p>Click Power</p>
              <p>200</p>
            </li>
            <li
              className="list-group-item d-flex justify-content-between"
              style={{ padding: "2em" }}
              onClick={() => buyitem("xcoin", 400)}
              id="xcoin"
            >
              <p>X-Coin</p>
              <p>400</p>
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
