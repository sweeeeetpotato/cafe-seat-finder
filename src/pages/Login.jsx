import React from "react";
import LoginBox from "components/loginBox/LoginBox";
import { LoginHeader } from "components/header/Header";
import "../common/style.css";

export default function Login() {
  return (
    <section className="layout">
      <LoginHeader />
      <LoginBox />
    </section>
  );
}
