import "./header_login.css";
import logo from "../../assets/logo.png";
import conta from "../../assets/Conta.png";
import carrinho from "../../assets/carrinho.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header_login() {
  const [abrirPopup, setAbrirPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar">
        Localizados em Lençóis Paulista
      </div>

      <header className="header">
        <img src={logo} alt="Flora" className="logo" />

        <div className="header-icons">

          <div className="carrinho-container">
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