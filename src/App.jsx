import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario,setUsuario] = useState(null);
  const [senha,setSenha] = useState(null);
  const [mensagemErro,setMensagemErro] = useState(null);



  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/logins', {userName:usuario , senha })
      .then(() => setAutenticado(true))
      .catch(() => setMensagemErro(true))
  }
  

  //capturar os valores dos inputs usuario e senha 
  //enviar os dados
  //endpoint no java para a rota

  if(autenticado === false) {
    return (
      <>
        <div>
          {
            mensagemErro && <p>Usuario ou senha inválidos.Tente novamente! </p>
          }
          <form onSubmit={handleOnSubmit}>
            <div className="usuario">
              <label htmlFor="">Usuario</label>
              <input type="text" onChange={(event) => {setUsuario(event.target.value)} } />
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" onChange={(event) => {setSenha(event.target.value)}} />
            </div>
          <div>
           <button onClick={() => handleOnSubmit()}>Logar </button>
           <button id="Excluir" onClick={() => setTarefas(tarefas)}>
        Excluir
        </button>
          </div>
          </form>
        </div>
      </>
    )
  }

  return (
   
    <div>
      <div><img src="Imagens/Cacos_De_Granito_e_Marmore.jpg"
                title="Cacos de Granito e Mármore"
                width="200" height="100"></img>
        <ul><li>Vendo Cacos de Granito e Mármore</li>
            <li>Cacos de Granito e Mármore-Construção e </li>
               <li>20m</li>
               <li>Praia Grande-SP  08 de set</li>
        </ul>
      </div>
      <div><img src="Imagens/Pedrisco.jpg"
                title="Pedrisco"
                width="200" height="200"></img>
        <ul><li>Vendo Pedrisco-Construção e Demolição</li>
            <li>Pedrisco-Construção e Demolição</li>
               <li>1000m</li>
               <li>Valinhos-SP 20 out</li>
        </ul>
      </div>
      <div><img src="Imagens/Agregado_EVA.jpg"
                title="Agregado Leve de E.V.A"
                width="200" height="200"></img>
        <ul><li>Vendo Agregado Leve de E.V.A</li>
               <li>Agregado de Construção e Demolição</li>
               <li>2000kg</li>
               <li>Estância Velha-RS 27 Ago</li>
            </ul>
      </div>
      <div><img src="Imagens/Nego_De_Fumo.jpg"
                title="Nego De Fumo"
                width="200" height="200"></img>
        <ul><li>Vendo Nego de Fumo </li>
               <li>Nego De Fumo-Químicos</li>
               <li>300.000Kg</li>
               <li>Suzano-SP 29 Jun</li>
            </ul>
      </div>
      <div><img src="Imagens/Flake_Azul_e_Verde_Plástico.jpg"
                title="Plástico Flake Azul e Verde"
                width="200" height="200"></img>
        <ul><li>Vendo Plástico Flake Azul e Verde</li>
               <li>Flake Azul e Verde-Plástico</li>
               <li>60.000Kg</li>
               <li>Maracanaú-CE 25 Jun</li>
            </ul>
      </div>
      <div><img src="Imagens/Fibra_De_Vidro.jpg"
                title="Fibra de Vidro Desfiada"
                width="200" height="200"></img>
        <ul><li>Vendo Fibra de Vidro Desfiada</li>
               <li>Fibra de Vidro Desfiada- Construção e Demolição</li>
               <li>500.000Kg</li>
               <li>Garibaldi-RS</li>
            </ul>
      </div>
      <div><img src="Imagens/Areia_De_Fundicao.jpg"
                title="Areia de Fundição"
                width="200" height="200"></img>
        <ul><li>Vendo Areia de Fundição</li>
               <li>Areia de Fundição-Construção e Demolição</li>
               <li>1260.000Kg</li>
               <li>Santo Ângelo-RS 23 Jan</li>
        </ul>
      </div>
      <div><img src="Imagens/Borracha_Silicone_Em_Po.jpg"
                title="Borracha Silicone em Pó"
                width="200" height="200"></img>
        <ul><li>Vendo Borracha Silicone em Pó-Químicos</li>
            <li>60.000Kg</li>
            <li>São caetano do Sul -SP 20 Out</li>
        </ul>
      </div>
          
      <button onClick={()=>{
        setAutenticado(false)
        setMensagemErro(false)
        } }> Sair </button> 
    </div>
  )
  
}

export default App
