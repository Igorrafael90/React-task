import { useState } from "react";
import gasolina from "./img/gasolina.jpg"
import "./App.css"

export default function App() {
  const[number1, setnumber1] = useState(0);
  const[number2, setnumber2] = useState(0);
  const[result, setresult] = useState(0);
  const[response, setresponse] = useState("");

  function resultado() {
    const calculo = (Number(number1) / Number(number2))
    setresult(calculo);
    if(calculo < 0.7){
      setresponse("alcoll")
    }else if(number1 <= 0 && number2 <= 0){
      window.alert("Digite um numero valido")
      setresult(0)
      setresponse("digite numero valido")
    }else{
      setresponse("gasolina")
    }
  }

  return (
    <div>
      <img src={gasolina}></img>
      <label>Insira o valor da gasolina</label>
      <input
        type="number"
        value={number1}
        onChange={e => setnumber1(e.target.value)}
      />
      <label>Insira o valor do alcoll</label>
      <input
        type="number"
        value={number2}
        onChange={e => setnumber2(e.target.value)}
      />
      <button onClick={resultado}>Somar</button>
      <p>O preço foi de: {result.toFixed(2)}</p>
      <p>mais vantajoso: {response}</p>
    </div> 
  );
}
