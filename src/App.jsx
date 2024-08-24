import { useState } from "react";
import "./style.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");

  async function handleSearch() {
    if (input === '') {
      alert("Espaço em branco");
      return;
    }
    try {
      const response = await api.get(`/${input}/json/`);
      if(response.data.erro){
        alert("CEP não encontrado");
        setInput("");
        return;
      };
    }catch{
      alert("CEP Inválido");
      setInput("");
      
      
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Busca CEP</h1>
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder="Digite o CEP"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            Buscar
          </button>
        </div>
        <div className="main">
          <h2>Cep: 31744775</h2>
          <span>Rua tal tal tal</span>
          <span>Bairro tal tal tal</span>
          <span>Cidade tal tal tal</span>
          <span>Estado tal tal tal</span>
        </div>
      </div>
    </>
  );
}

export default App;
