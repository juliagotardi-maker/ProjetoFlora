import "./header.css";
import logo from "../../assets/logo.png";
import conta from "../../assets/Conta.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="top-bar">
        🚚 Entregamos para Lençóis Paulista e Região
      </div>

      <header className="header">
        <img
          src={logo}
          alt="Flora"
          className="logo"
        />

        <nav className="menu">
          <a href="#">Buquês</a>
          <a href="#">Arranjos</a>
          <a href="#">Plantas</a>
          <a href="#">Paisagismo</a>
          <a href="#">Presentes</a>
        </nav>   
      <div className="header-icons">
      <Link to="/login">
        <img
          src={conta}
          alt="Conta"
          className="icon-user"
        />
      </Link>
    </div>
      </header>
    </>
  );
}