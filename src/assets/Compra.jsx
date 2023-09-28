import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
//import Granito_Marmore from "./assets/Imagens/Cacos_De_Granito_e_Marmore.jpg"
import { Formulario } from './Formulario';

export const Compra=({onClick})=>{return (
    <div><h1>Cadastro de Resíduos</h1>
    <form action="">
        <label htmlFor="nome">Nome</label>
        <input type="text"id="nome" />
        <br />
        <label htmlFor="descricao">Descrição</label>
        <input type="text"id="descricao"/>
        <br/>
        <label htmlFor="dataCriacao">Data criação</label>
        <input type="date"id="dataCriacao"/>
        <br/>
        <label htmlFor="classificacao">Classificacao</label>
        <input type="enum"id="classificacao"/>
        <br/>
        <label htmlFor="quantidade">Quantidade</label>
        <input type="double"id="quantidade"/>
        <br/>
        <label htmlFor="valor">Valor</label>
        <input type="bigdecimal"id="valor"/>
        <br/>
        <label htmlFor="transporte">Transporte</label>
        <input type="text"id="transporte"/>

    


    </form>
     <button id="Voltar" onClick={onClick}>
            
            Voltar
            </button>
    <button id="Comprar" onClick={onClick}>

            Comprar
            </button>
    </div>
)
}
function Residuo() {
    const [autenticado, setAutenticado] = useState(false);
    const [nome,setNome] = useState(null);
    const [descricao,setDescricao] = useState(null);
    const [local,setLocal] = useState(null);
    const [dataCriacao,setDataCriacao] = useState(null);
    const [classificacao,setClassificacao] = useState(null);
    const [nicho,setNicho] = useState(null);
    const [quantidade,setQuantidade] = useState(null);
    const [valor,setValor] = useState(null);
    const [mensagemErro,setMensagemErro] = useState(null);
    const [exibirCadastro,setexibirCadastro]=useState(false);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/compras', {nome,descricao,local,dataCriacao,classificacao,nicho,quantidade,valor})
      .then(() => setAutenticado(true))
      .catch(() => setMensagemErro(true))
  }
}


function Compra(){
    const [autenticado, setAutenticado] = useState(false);
    const [usuario,setUsuario] = useState(null);
    const [senha,setSenha] = useState(null);
    const [mensagemErro,setMensagemErro] = useState(null);
    //const [exibirCadastro,setexibirCadastro]=useState(false);
    const [exibirCompra,setexibirCompra]=useState(false);
    
const residuos =[
    {
    
      img:"https://i.imgur.com/mSCMpek.jpg",
      nome:"Cacos de Granito e Mármore",
      descricao:"Vendo Cacos de Granito e Mármore",
      local:"Praia Grande-SP",
      dataCriacao:"2023-09-08",
      classificacao:"NÃO PERIGOSO",
      nicho:"CONSTRUÇÃO CIVIL",
      quantidade:"1000Kg",
      valor:"200.00"
  
  
    }
  ]
  return (
    </div>
  
      {
        residuos.map(residuo =>(
          <div><img src={residuo.img}
                nome={residuo.nome}
                width="200" height="200"></img>
        <ul><li>{residuo.descricao}</li>
            <li>{residuo.local} {residuo.dataCriacao}</li>
               <li>{residuo.classificacao}</li>
               <li>{residuo.nicho} </li>
               <li>{residuo.quantidade}</li>
               <li>{residuo.valor}</li>
               <button id="Comprar" onClick={() => setexibirCompra(true)}>
            
            Comprar
            </button>
        </ul>
       
      </div>
      
      
      

        ))
      }
      
   
     
          
     // <button onClick={()=>{
      //  setAutenticado(false)
      //  setMensagemErro(false)
      //  } }> Sair </button> 
    //</div>
  //)
