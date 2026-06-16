import "./header.css";

import logo from "../../assets/logo.png";
import conta from "../../assets/Conta.png";
import carrinhoImg from "../../assets/carrinho.png";

export default function Header() {
  return (
    <>
      <div className="top-bar">
        Rua dos Bobos, n°0 - Bairro da Alegria - Lençóis Paulista - SP
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

          <img
            src={carrinhoImg}
            alt="Carrinho"
            className="icon-user"
          />

          <img
            src={conta}
            alt="Conta"
            className="icon-user"
          />

        </div>

      </header>
    </>
  );
}