import blogfech from "../axios/config";

import {useState, useEffect} from "react";

import { Link } from "react-router-dom";


import "./Home.css"


const Home = () => {
 
 const [Ferramenta,setFerramenta] = useState([]);

 const getFerramenta = async () => {
    try {
        const response = await blogfech.get("/Filmes");

        const data = response.data;


        setFerramenta(data);

    } catch (error) {
        console.log(error);
    }
 };
 
 useEffect(() => {

    getFerramenta();

 }, []);

 const excluir = async (id) =>{
     await blogfech.delete(`/Filmes/${id}`)
     .then((sucesso) => {console.log(sucesso)})
     alert("Item deletado")
 }

    return (
    <div className="Home">
        <h1>Últimos Posts</h1>
        {Ferramenta.length === 0 ? (
        <p>carregando...</p> 
        ) : (
            Ferramenta.map((Filmes) => (
                <div className="post" key={Filmes.id}>
                    <h3>{Filmes.titulo}</h3>
                    <h2>{Filmes.ano}</h2>
                    <p>{Filmes.genero}</p>
                    <img  src={Filmes.imagem} />
                    <div className="position-btn">
                    <Link className="btn2" to={`/EditarFilmes/${Filmes.id}`}>Editar</Link>
                    <button className="btn3" onClick={()=> excluir(Filmes.id)}>Excluir</button>
                    </div>
               
                </div>

                
            ))
        )}
    </div>
    );
};

export default Home

