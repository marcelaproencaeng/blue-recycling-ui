import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
export const Formulario=({onClick})=>{
   // private String razaoSocial;
    //private String cnpj;
   // private String ResiduoDeInteresse;
   // private Boolean isVendedor;
   // private Boolean hasTransporte;
   // private String email;



return (
    <div><h1>Cadastro de Resíduos</h1>
    <form action="">
        <label htmlFor="nome">Nome</label>
        <input type="text"id="nome" />
        <br />
        <label htmlFor="descricao">Descrição</label>
        <input type="text"id="descricao"/>
        <br/>
        <label htmlFor="local">Local</label>
        <input type="text"id="local"/>
        <br/>
        <label htmlFor="dataCriacao">Data criação</label>
        <input type="date"id="dataCriacao"/>
        <br/>
        <label htmlFor="classificacao">Classificacao</label>
        <input type="enum"id="classificacao"/>
        <br/>
        <label htmlFor="nicho">Nicho</label>
        <input type="enum"id="nicho"/>
        <br/>
        <label htmlFor="quantidade">Quantidade</label>
        <input type="double"id="quantidade"/>
        <br/>
        <label htmlFor="valor">Valor</label>
        <input type="bigdecimal"id="valor"/>

    


    </form>
     <button id="Voltar" onClick={onClick}>
            
            Voltar
            </button>
    <button id="Cadastrar" onClick={onClick}>

            Cadastrar
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
      .post('http://localhost:8080/api/v1/residuos', {nome,descricao,local,dataCriacao,classificacao,nicho,quantidade,valor})
      .then(() => setAutenticado(true))
      .catch(() => setMensagemErro(true))
  }
}
