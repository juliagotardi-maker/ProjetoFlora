import "./header.css";
import logo from "../../assets/logo.png";
import conta from "../../assets/Conta.png";
import carrinho from "../../assets/carrinho.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [abrirPopup, setAbrirPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar">
        Rua dos Bobos, n°0 - Bairro da Alegria - Lençóis Paulista - SP
      </div>

      <header className="header">
        <img src={logo} alt="Flora" className="logo" />

        <nav className="menu">
          <a href="#">Buquês</a>
          <a href="#">Arranjos</a>
          <a href="#">Plantas</a>
          <a href="#">Paisagismo</a>
        </nav>

        <div className="header-icons">

          <div
            className="carrinho-container"
            onClick={() => navigate("/carrinho")}
          >
            <span className="badge">0</span>
            
            <img
              src={carrinho}
              alt="Carrinho"
              className="icon-compra"
            />
          </div>

          <div className="conta-container">
            <img
              src={conta}
              alt="Conta"
              className="icon-user"
              onClick={() => setAbrirPopup(!abrirPopup)}
            />

            {abrirPopup && (
              <div className="popup-conta">
                <button onClick={() => navigate("/login")}>
                  Fazer login
                </button>
              </div>
            )}
          </div>

        </div>
      </header>
    </>
  );
}