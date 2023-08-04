import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./public/styling/style.css";
import { LoginForm, Navbar } from "./components/websiteComponents";

/*const LoginFormComponent = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};*/

const NavbarComponent = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

const appContainer = document.createElement("div");
appContainer.id = "app-container";

const header = document.getElementById("headerContainer");
const navbarRoot = createRoot(header);
navbarRoot.render(<NavbarComponent />);

document.body.appendChild(appContainer);
