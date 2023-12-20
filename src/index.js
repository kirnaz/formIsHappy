import React from "react";
import ReactDOMClient from "react-dom/client";
import App from './App.js'
import "./css/main.css"
const app = ReactDOMClient.createRoot(document.getElementById("app"));

app.render(<App />);
