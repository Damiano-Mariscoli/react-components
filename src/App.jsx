import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "../components/hero/Hero.jsx";
import Header from "../components/header/Header";
import Footer from "../components/footer";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
