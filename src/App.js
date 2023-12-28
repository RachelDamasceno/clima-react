import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [local, setLocal] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&units=metric&appid=95d1f140502544a5c4c9cb20b917b212`;

  const pesquisarLocal = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocal("");
    }
  };

  return (
    <div className="App">
      <div className="conteiner">
        <div className="top">
          <div className="local">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}C</h1> : null}
          </div>
          <div className="discricao">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Digite o nome da cidade: "
            value={local}
            onChange={(event) => setLocal(event.target.value)}
            onKeyPress={pesquisarLocal}
          />
          <button>Pesquisar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
