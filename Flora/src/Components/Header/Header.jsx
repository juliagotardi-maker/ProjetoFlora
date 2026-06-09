import logo from "../assets/logo.png";
import Footer from "../Footer/Footer.jsx"
import conta from "./assets/Conta.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usuarioLogado, logout } from "../../services/auth";
import "../Popup/Popup.css";
import api from "../../services/api";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [menuPerfil, setMenuPerfil] = useState(false);
  const [popup, setPopup] = useState(false);
  const [mensagemPopup, setMensagemPopup] = useState("");
  const [popupFoto, setPopupFoto] = useState(false);
  const [foto, setFoto] = useState(null);
  const [imagemFalhou, setImagemFalhou] = useState(false);
  const [fotoPerfilAtual, setFotoPerfilAtual] = useState(null); 

  const navigate = useNavigate();
  const logado = usuarioLogado();

  
  useEffect(() => {
    const readFromStorage = () => {
      const usuarioString = localStorage.getItem("usuario");
      let usuarioObj = null;
      try {
        usuarioObj = usuarioString ? JSON.parse(usuarioString) : null;
      } catch (error) {
        usuarioObj = null;
      }

      const fotoSalva = usuarioObj?.fotoPerfil ?? localStorage.getItem("fotoPerfil") ?? null;
      setFotoPerfilAtual(fotoSalva);
      setImagemFalhou(false);
    };

    readFromStorage();

    const handler = (e) => {
      const usuarioAtualizado = e?.detail ?? null;
      if (usuarioAtualizado) {
        const fotoSalva = usuarioAtualizado?.fotoPerfil ?? localStorage.getItem("fotoPerfil") ?? null;
        setFotoPerfilAtual(fotoSalva);
        setImagemFalhou(false);
      } else {
        readFromStorage();
      }
    };

    window.addEventListener("usuarioAtualizado", handler);
    return () => window.removeEventListener("usuarioAtualizado", handler);
  }, []);

  function sair() {
    logout();
    navigate("/");
  }

  async function EnviarFoto() {
    if (!foto) {
      setMensagemPopup("Selecione uma imagem!");
      setPopup(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("foto", foto);
      formData.append("file", foto);
      
      const usuarioString = localStorage.getItem("usuario");
      let usuarioObj = null;
      try {
        usuarioObj = usuarioString ? JSON.parse(usuarioString) : null;
      } catch (error) {
        console.warn("Erro ao ler usuário do localStorage:", error);
        usuarioObj = null;
      }

      const IdUsuario = usuarioObj?.IdUsuario ?? usuarioObj?.idUsuario ?? localStorage.getItem("idUsuario");

      if (!IdUsuario) {
        setMensagemPopup("Erro: ID do usuário não encontrado!");
        setPopup(true);
        return;
      }

      const endpoint = `Usuario/ImagemPerfil`;
      const response = await api.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          id: IdUsuario,
        },
      });

      const fotoRetornada = response.data?.fotoPerfil ?? response.data?.imagemPerfil;
      
      if (fotoRetornada) {
        setFotoPerfilAtual(fotoRetornada);

        const usuarioAtualizado = { ...usuarioObj, fotoPerfil: fotoRetornada };
        localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
        localStorage.setItem("fotoPerfil", fotoRetornada);
        setImagemFalhou(false);

        try {
          window.dispatchEvent(new CustomEvent("usuarioAtualizado", { detail: usuarioAtualizado }));
        } catch (e) {
          // se CustomEvent não estiver disponível por algum motivo, apenas ignore
        }
      }

      setMensagemPopup("Foto atualizada! Faça login novamente para ver a nova foto.");
      setPopup(true);
      setPopupFoto(false);
      setFoto(null);
      
    } catch (error) {
      console.error("Erro ao enviar foto:", error.response ?? error);
      const mensagemErro = error.response?.data?.title ||
        error.response?.data?.message ||
        JSON.stringify(error.response?.data) ||
        "Erro ao enviar foto!";
      setMensagemPopup(`Erro: ${mensagemErro}`);
      setPopup(true);
    }
  }

  const usuarioStorage = localStorage.getItem("usuario");
  const usuario = usuarioStorage ? JSON.parse(usuarioStorage) : null;
  
  let fotoPerfilUsuario = fotoPerfilAtual; 
  
  let imagemPerfil = Conta;
  
  if (fotoPerfilUsuario && !imagemFalhou) {
    const timestamp = new Date().getTime();
    imagemPerfil = `http://10.90.132.4/api/uploads/FotoPerfil/${fotoPerfilUsuario}?t=${timestamp}`;
  }

  const handleImageError = () => {
    setImagemFalhou(true);
  };

  return (
    <header>
      <nav className="menu">
        <button className="btn-menu" onClick={() => setMenu(!menu)}>
          ☰
        </button>

        {menu && (
          <div className="links-menu">
            <div className="links-menu">

            <button onClick={() => navigate("/")}>
              Início
            </button>
                    
            <button onClick={() => navigate("/buques")}>
              Buquês
            </button>
                    
            <button onClick={() => navigate("/plantas")}>
              Plantas
            </button>
                    
            <button onClick={() => navigate("/vasos")}>
              Vasos
            </button>
                    
            <button onClick={() => navigate("/presentes")}>
              Presentes
            </button>
                    
            <button onClick={() => navigate("/meusPedidos")}>
              Meus Pedidos
            </button>

            </div>
        </div>)}
      </nav>
      
      <img
        src={logo}
        className="logo"
        alt="logo"
        onClick={() => navigate("/")}
      />
      
      <p className="bemvindo">
        {usuario ? `🌷 Olá, ${usuario.usuario}!`: "Bem-vindo à Flora"}
     </p>
        <img
          src={imagemPerfil}
          className="login"
          alt="perfil"
          onClick={() => setMenuPerfil(!menuPerfil)}
          onError={handleImageError}
        />

        {menuPerfil && (
          <div className="menu-perfil">
            <div className="perfil-container">
              <div className="avatar-wrapper">
                <div
                  className="avatar-wrapper"
                  onClick={() => setPopupFoto(true)}
                >
                  <img 
                    src={imagemPerfil} 
                    className="avatar-img" 
                    alt="avatar"
                    onError={handleImageError}
                  />
                  <div className="editar-overlay">Editar</div>
                </div>
              </div>
              <h3 className="perfil-titulo">
              <h3 className="perfil-titulo"> {usuario ? `🌸 ${usuario.usuario}`: "Bem-vindo à Flora"} 
              </h3>
              </h3>

              {logado ? (
                <button onClick={sair} className="btn-criar-conta">
                  Sair
                </button>
              ) : (
                <button
                  onClick={() => navigate("/loginUsuarios")}
                  className="btn-criar-conta"
                >
                  login
                </button>
              )}

              <h3 className="perfil-titulo">
                {usuario ? `🌸 ${usuario.usuario}` : "Bem-vindo à Flora"} 
              </h3>

            </div>
          </div>
        )}
        
        {popup && (
          <div className="popup">
            <p>{mensagemPopup}</p>
            <button onClick={() => setPopup(false)}>Fechar</button>
          </div>
        )}
        
        {popupFoto && (
          <div className="modal-overlay">
            <div className="modal-foto">
              <h2>Alterar Foto de Perfil</h2>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFoto(e.target.files[0])}
              />
              <div className="botoes-modal">
                <button className="btn-upload" onClick={EnviarFoto}>
                  Salvar Foto
                </button>
                <button
                  className="btn-cancelar"
                  onClick={() => setPopupFoto(false)}
                >
                  Cancelar
                </button> 
            </div> 
        </div> 
    </div> )} 
</header> 
); 
}