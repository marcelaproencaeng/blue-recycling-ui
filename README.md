# Blue Recycling

npm run dev


Formulário

    private String razaoSocial;
    private String cnpj;
    private String ResiduoDeInteresse;
    private Boolean isVendedor;
    private Boolean hasTransporte;
    private String email;

    #


 
export const Formulario=({onClick})=>{
   // private String razaoSocial;
    //private String cnpj;
   // private String ResiduoDeInteresse;
   // private Boolean isVendedor;
   // private Boolean hasTransporte;
   // private String email;



return (
    <div><h1>Cadastro</h1>
    <form action="">
        <label htmlFor="razaoSocial">Razão Social</label>
        <input type="text"id="razaoSocial" />
        <br />
        <label htmlFor="cnpj">Cnpj</label>
        <input type="text"id="cnpj"/>
        <p>Você é vendedor?</p>
        <input type="radio"id="sim" name="vendedor"/>
        <label htmlFor="sim">sim</label>
        <input type="radio" id="nao" name="vendedor"/>
        <label htmlFor="nao">não</label>
        <p>Você tem transporte?</p>
        <input type="radio" id="sim" name="transporte"/>
        <label htmlFor="sim">sim</label>
        <input type="radio" id="nao" name="transporte"/>
        <label htmlFor="nao">não</label>


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
    const [razaoSocial,setRazaoSocial] = useState(null);
    const [cnpj,setCnpj] = useState(null);
    const [mensagemErro,setMensagemErro] = useState(null);
    const [exibirCadastro,setexibirCadastro]=useState(false);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/usuarios', {razaoSocial , cnpj })
      .then(() => setAutenticado(true))
      .catch(() => setMensagemErro(true))
  }
}
