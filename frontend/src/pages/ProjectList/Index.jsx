import React from "react";
import Table from "../../components/Table/Index"
import Anchor from "../../components/Anchor/Index"
import "./index.css"

function Index() {
    return (
        <>
            <Anchor link="" icon="fa-solid fa-pen-to-square" name="Cadastrar"/>
            <h1 className="title-list">Lista dos Projetos</h1>
            <Table />
        </>
    )
}

export default Index