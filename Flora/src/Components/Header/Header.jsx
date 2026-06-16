import "./header.css";
import logo from "../../assets/logo.png";
import conta from "../../assets/Conta.png";
import carrinho from "../../assets/carrinho.png"


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

        </nav>

        <div className="header-icons">

          <div className="carrinho-container">
          
            <span className="badge">0</span>
          
            <img
              src={carrinho}
              alt="Carrinho"
              className="icon-compra"
            />
        
          </div>
          
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