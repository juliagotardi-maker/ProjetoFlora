import { useState } from "react";
import "./header.css";

import logo from "../../assets/logo.png";
import conta from "../../assets/Conta.png";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [perfil, setPerfil] = useState(false);

  return (
    <header>
      <button
        className="btn-menu"
        onClick={() => setMenu(!menu)}
      >
        ☰
      </button>

      <img
        src={logo}
        alt="Flora"
        className="logo"
      />

      <p className="bemvindo">
        🌷 Bem-vindo à Flora
      </p>

      <img
        src={conta}
        alt="Conta"
        className="login"
        onClick={() => setPerfil(!perfil)}
      />

      {menu && (
        <div className="links-menu">
          <button>Início</button>
          <button>Buquês</button>
          <button>Plantas</button>
          <button>Vasos</button>
          <button>Presentes</button>
        </div>
      )}

      {perfil && (
        <div className="menu-perfil">
          <div className="perfil-container">
            <img
              src={conta}
              alt="Perfil"
              className="avatar-img"
            />

            <h3 className="perfil-titulo">
              Cliente Flora
            </h3>

            <button className="btn-criar-conta">
              Entrar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}