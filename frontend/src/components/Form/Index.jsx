import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api"
import "./index.css"

function Index() {

    const { id } = useParams()

    const [project, setProject] = useState();

    if (id != null) {
        useEffect(() => {
            api
                .get("/projects/" + id)
                .then((res) => setProject(res.data))
                .catch((err) => {
                    console.log("erro" + err);
                });
        }, []);
    }

    function saveProject(e) {
        e.preventDefault()
        let fields = {
            title: e.target.title.value,
            description: e.target.description.value,
            created_at: e.target.created_at.value
        }
        if (id == null) {
            api
                .post("/projects", fields)
                .then(() => window.location = "http://localhost:3000/list")
                .catch((err) => {
                    console.log("Erro: " + err)
                })
        } else {
            api
                .patch("projects/" + id, fields)
                .then(() => window.location = "http://localhost:3000/list")
                .catch((err) => {
                    console.log("Erro" + err)
                })

        }
    }

    function getToday() {
        const date = new Date();
        const day = date.getDate();
        const month = 1 + date.getMonth();
        const year = date.getFullYear();
        return `${year}-0${month}-${day}`
    }

    return (
        <>
            <form onSubmit={saveProject}>
                <div>
                    <label htmlFor="title">Título</label>
                    <input className="inp-size" type="text" required minLength={3} id="title" name="title" defaultValue={project?.title} />
                </div>
                <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea className="inp-size" required id="description" name="description" defaultValue={project?.description}></textarea>
                </div>
                <div>
                    <input type="date" defaultValue={getToday()} id="created_at" name="created_at" hidden />
                </div>
                <button className="click">Cadastrar</button>
            </form>
        </>
    )
}

export default Index