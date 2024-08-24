import { useState } from "react";
import "./style.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === '') {
      alert("Espaço em branco");
      return;
    }
    try {
      const response = await api.get(`/${input}/json/`);
      setCep(response.data);
      setInput("");

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

        {Object.keys(cep).length > 0 && (
          <div className="main">
          <h2>Cep:{cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}</span>
          <span>{cep.uf}</span>
        </div>
        )
        }

        
      </div>
    </>
  );
}

export default App;
