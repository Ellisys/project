import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import api from "../../services/api"
import "./index.css"

function Index() {

    const [project, setProject] = useState();

    useEffect(() => {
        api
            .get("/projects")
            .then((res) => setProject(res.data))
            .catch((err) => {
                console.log("erro" + err);
            });
    }, []);

    function removeProject(id) {
        if (confirm("Você está prestes a deletar o projeto de ID: " + id + ". Tem certeza?")) {
            api
                .delete("/projects/" + id)
                .then((res) => console.log(res.date))
                .catch((err) => {
                    console.error("erro" + err)
                })
            window.location.reload()
        }
    }

    return (
        <>
            <section>
                <article className="head">
                    <p>ID</p>
                    <p>Projeto</p>
                    <p>Descrição</p>
                    <p>Criado em</p>
                    <p>Editar</p>
                    <p>Excluir</p>
                </article>
                {
                    project?.map((item) => {
                        return (
                            <article className="body">
                                <span>{item.id}</span>
                                <span>{item.title}</span>
                                <span><textarea>{item.description}</textarea></span>
                                <span>{item.created_at}</span>
                                <span><Link className="pencil" to={"/update/" + item.id} ><i class="fa-solid fa-pen"></i></Link></span>
                                <span><button onClick={e => removeProject(item.id)} className="trash" to=""><i class="fa-solid fa-trash-can"></i></button></span>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Index