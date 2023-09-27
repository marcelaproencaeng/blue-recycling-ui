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
  const logos =[
    {
    img:"https://i.imgur.com/H6NHjs0.jpg"

    }
]
//return(
 // <div>
 // {
  //  logos.map(logo =>(
   //   <div><img src={logo.img}
  //    width="200" height="200"></img>
  //    </div>
//))
 // }


const dados =[
  {
    title:"Cacos de Granito e Mármore",
    img:"https://i.imgur.com/mSCMpek.jpg",
    description:"Vendo Cacos de Granito e Mármore",
    name:"Cacos de Granito e Mármore",
    distance:"20m",
    place:"Praia Grande-SP",
    date:"08 de set"


  },
  {
    title:"Agregado Leve de E.V.A",
    img:"https://i.imgur.com/LHo30LN.jpg",
    description:"Vendo Agregado Leve de E.V.A",
    name:"Agregado de Construção de Demolição",
    distance:"2000Kg",
    place:"Estância Velha-RS",
    date:"27 de Ago"
  },
  {
    title:"Areia de Fundição",
    img:"https://i.imgur.com/xVZ7Yit.jpg",
    description:"Vendo Areia de Fundição",
    name:"Areia de Fundição-Construção e Demolição",
    distance:"1260Kg",
    place:"Santo Ângelo-RS",
    date:"23 de Jan"  
  },
  {
    title:"Borracha Silicone em Pó",
    img:"https://i.imgur.com/vsxZ5SP.jpg",
    description:"Vendo Borracha Silicone em Pó",
    name:"Borracha Silicone em Pó-Químicos",
    distance:"60.000Kg",
    place:"São caetano do Sul -SP",
    date:"20 de Out"
  },
  {
    title:"Nego De Fumo",
    img:"https://i.imgur.com/BkiBSN6.jpg",
    description:"Vendo Nego de Fumo",
    name:"Nego de Fumo-Químicos",
    distance:"300.000Kg",
    place:"Suzano -SP",
    date:"29 de Jun"
  },
  {
    title:"Plástico Flake Azul e Verde",
    img:"https://i.imgur.com/sdFNlCf.jpg",
    description:"Vendo Plástico Flake Azul e Verde",
    name:"Flake Azul e Verde-Plástico",
    distance:"60.000Kg",
    place:"Maracanaú-CE",
    date:"25 Jun"
  },
  {
    title:"Fibra de Vidro Desfiada",
    img:"https://i.imgur.com/JnHBDnt.jpg",
    description:"Vendo Fibra de Vidro Desfiada",
    name:"Fibra de Vidro Desfiada- Construção e Demolição",
    distance:"500.000Kg",
    place:"Garibaldi-RS",
    date:"20 Jan"
  },
  {
    title:"Pedrisco",
    img:"https://i.imgur.com/XTDadKe.jpg",
    description:"Vendo Pedrisco",
    name:"Pedrisco-Construção e Demolição",
    distance:"1000m",
    place:"Valinhos",
    date:"20 out"
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
