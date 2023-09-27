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
        <button id="Cadastrar-se" onClick={() => setexibirCadastro(true)}>
            
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
    nome:"Cacos de Granito e Mármore",
    img:"https://i.imgur.com/mSCMpek.jpg",
    descricao:"Vendo Cacos de Granito e Mármore",
    local:"Praia Grande-SP",
    dataCriacao:"2023-09-08",
    classificacao:"NÃO PERIGOSO",
    nicho:"CONSTRUÇÃO CIVIL",
    quantidade:"08 de set",
    valor:"200.00"


  },
  {
    nome:"Agregado Leve de E.V.A",
    img:"https://i.imgur.com/LHo30LN.jpg",
    descricao:"Vendo Agregado Leve de E.V.A",
    local:"Estância Velha-RS",
    dataCriacao:"2023-08-27",
    classificacao:"NÃO PERIGOSO",
    nicho:"CONSTRUÇÃO CIVIL",
    quantidade:"2000Kg",
    valor:"350.00"
  },
  {
    nome:"Areia de Fundição",
    img:"https://i.imgur.com/xVZ7Yit.jpg",
    descricao:"Vendo Areia de Fundição",
    local:"Santo Ângelo-RS",
    dataCriacao:"2023-01-23",
    classificacao:"NÃO PERIGOSO",
    nicho:"CONSTRUÇÃO CIVIL",
    quantidade:"1260Kg",
    valor:"190.00" 
  },
  {
    nome:"Borracha Silicone em Pó",
    img:"https://i.imgur.com/vsxZ5SP.jpg",
    descricao:"Vendo Borracha Silicone em Pó",
    local:"São caetano do Sul -SP",
    dataCriacao:"2023-10-20",
    classificacao:"PERIGOSO",
    nicho:"INDÚSTRIA QUÍMICA",
    quantidade:"60.000Kg",
    valor:"500.00"

  },
  {
    nome:"Nego De Fumo",
    img:"https://i.imgur.com/BkiBSN6.jpg",
    descricao:"Vendo Nego de Fumo",
    local:"Suzano -SP",
    dataCriacao:"2023-06-29",
    classificacao:"PERIGOSO",
    nicho:"INDÚSTRIA QUÍMICA",
    quantidade:"300.000Kg",
    valor:"2500.00"
  },
  {
    nome:"Plástico Flake Azul e Verde",
    img:"https://i.imgur.com/sdFNlCf.jpg",
    descricao:"Vendo Plástico Flake Azul e Verde",
    local:"Maracanaú-CE",
    dataCriacao:"2023-06-25",
    classificacao:"PERIGOSO",
    nicho:"INDÚSTRIA QUÍMICA",
    quantidade:"60.000Kg",
    valor:"400.00"
  },
  {
    nome:"Fibra de Vidro Desfiada",
    img:"https://i.imgur.com/JnHBDnt.jpg",
    descricao:"Vendo Fibra de Vidro Desfiada",
    local:"Garibaldi-RS",
    dataCriacao:"2023-01-20",
    classificacao:"PERIGOSO",
    nicho:"CONSTRUÇÃO CIVIL",
    quantidade:"500.000Kg",
    valor:"3200.00"
  },
  {
    nome:"Pedrisco",
    img:"https://i.imgur.com/XTDadKe.jpg",
    descricao:"Vendo Pedrisco",
    local:"Valinhos-SP Pedrisco-Construção e Demolição",
    dataCriacao:"2023-10-20",
    classificacao:"NÃO PERIGOSO",
    nicho:"CONSTRUÇÃO CIVIL",
    quantidade:"1000m",
    valor:"400.00"
  }
      
  
]
  return (
    
   
    <div>
      {
        dados.map(dado =>(
          <div><img src={dado.img}
                title={dado.nome}
                width="200" height="200"></img>
        <ul><li>{dado.descricao}</li>
            <li>{dado.local} {dado.dataCriacao}</li>
               <li>{dado.classificacao}</li>
               <li>{dado.nicho} </li>
               <li>{dado.quantidade}</li>
               <li>{dado.valor}</li>
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
