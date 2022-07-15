import React from "react";
import Form from "../../components/Form/Index"
import Anchor from "../../components/Anchor/Index"

import "./index.css"

function Index() {

    return (
        <>
            <Anchor link="list" icon="fa-solid fa-list" name="Listagem" />
            <h1 className="title-cad">Cadastro de Projetos</h1>
            <Form />
        </>
    )
}

export default Index