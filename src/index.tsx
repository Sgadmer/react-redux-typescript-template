import React from "react";
import ReactDOM from "react-dom";

import App from "@app/App";

import "@styles/styles.css";

async function logAssync() {
  await setTimeout(() => {
    console.log("assync");
  }, 1000);
}
logAssync();

class Utils {
  static id = Date.now();
}

console.log(Utils.id);

ReactDOM.render(<App />, document.getElementById("root"));
