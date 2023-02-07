import blogfech from "../axios/config";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";


const Edits = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [titulo, setTitulo] = useState();
    const [ano, setAno] = useState();
    const [imagem, setImagem] = useState();
    const [genero, setGenero] = useState();

    const[Filmes, setFilmes] = useState([])
    useEffect(() =>{

        const getFilmes= async () =>{
            await blogfech.get(`/Filmes/${id}`)
            .then((data) => {
                setFilmes(data.data);                
                console.log(data.data)
            })
            console.log(Filmes)
        }
        getFilmes()
    },[])

    const createPost = async (e) => {
        e.preventDefault()

        await blogfech.put(`/Filmes/${id}`,{
            titulo: titulo,
            ano: ano,
            genero: genero,
            imagem: imagem,
        })
        .then((sucesso) => {console.log(sucesso)
        navigate("/")})
    }

    return (
      <section>
      <div className='new-post'>
        <h2>Editar filme:</h2>
        <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="titulo">Nome:</label>
          <input 
          type="text" 
          name="titulo"
          id="titulo"
          placeholder='Digite o do filme'
          onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="ano">Ano do lançamento:</label>
          <textarea 
          name="ano" 
          id="ano" 
          placeholder='Digite o ano de lançamento'
          onChange={(e) => setAno(e.target.value)}
          >
          </textarea>
        </div>
        <div className="form-control">
          <label htmlFor="url">Insira a url da imagem:</label>
          <input 
          type="url" 
          name="url"
          id="url"
          placeholder=''
          onChange={(e) => setImagem(e.target.value)}
          />
          <div className="form-control">
          <label htmlFor="genero">Gênero do filme:</label>
          <input 
          type="text" 
          name="genero"
          id="genero"
          placeholder='Digite o genero'
          onChange={(e) => setGenero(e.target.value)}
          />
         </div>
        </div>
       
        <input type="submit" value="Criar Post"className='btn'/>
       </form>
      </div>
      </section>
    )
}

export default Edits