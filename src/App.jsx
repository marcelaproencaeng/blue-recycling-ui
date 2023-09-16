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
      <div>Seja bem vindo</div>
      <button onClick={()=>{
        setAutenticado(false)
        setMensagemErro(false)
        } }> Sair </button> 
    </div>
  )
  
}

export default App
