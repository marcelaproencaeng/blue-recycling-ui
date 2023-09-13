import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [autenticado, setAutenticado] = useState(false);



  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/logins/auth', {usuario: '', senha: ''})
      .then(() => setAutenticado(true))
      .catch(() => setAutenticado(false))
  }

  //capturar os valores dos inputs usuario e senha 
  //enviar os dados
  //endpoint no java para a rota

  if(autenticado === false) {
    return (
      <>
        <div>
          <form onSubmit={handleOnSubmit}>
            <div className="usuario">
              <label htmlFor="">Usuario</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" />
            </div>
          </form>
        </div>
      </>
    )
  }

  return (
    <div>Seja bem vindo</div>
  )
  
}

export default App
