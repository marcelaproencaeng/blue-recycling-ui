import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Granito_Marmore from "./assets/Imagens/Cacos_De_Granito_e_Marmore.jpg"
import { Formulario } from './Formulario';

function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario,setUsuario] = useState(null);
  const [senha,setSenha] = useState(null);
  const [mensagemErro,setMensagemErro] = useState(null);
  const [exibirCadastro,setexibirCadastro]=useState(false);



  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/logins', {userName:usuario , password:senha })
      .then(() => setAutenticado(true))
      .catch(() => setMensagemErro(true))
  }
  

  //capturar os valores dos inputs usuario e senha 
  //enviar os dados
  //endpoint no java para a rota
if(exibirCadastro){
  return  <Formulario onClick={()=>{
    setexibirCadastro(false)
  }}></Formulario>
}
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
        <button id="Cadastra-se" onClick={() => setexibirCadastro(true)}>
            
        Cadastra-se
        </button>
          </div>
          </form>
        </div>
      </>
    )
  }
const dados =[
  {
    title:"Cacos de Granito e Mármore",
    img:"https://i.imgur.com/DQQBRtl.jpg",
    description:"Vendo Cacos de Granito e Mármore",
    name:"Cacos de Granito e Mármore",
    distance:"20m",
    place:"Praia Grande-SP",
    date:"08 de set"


  }
]
  return (
   
    <div>
      {
        dados.map(dado =>(
          <div><img src={dado.img}
                title={dado.title}
                width="200" height="100"></img>
        <ul><li>{dado.description}</li>
            <li>{dado.name}</li>
               <li>{dado.distance}</li>
               <li>{dado.place} {dado.date}</li>
        </ul>
      </div>

        ))
      }
     
          
      <button onClick={()=>{
        setAutenticado(false)
        setMensagemErro(false)
        } }> Sair </button> 
    </div>
  )
  
}

export default App
