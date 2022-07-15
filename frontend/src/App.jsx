import * as React from "react";
import {
    Routes,
    Route
} from "react-router-dom";

import ProjectCad from "./pages/ProjectCad/Index"
import ProjectList from "./pages/ProjectList/Index"
import "./main.css"
import "./assets/js/all.min.js"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProjectCad />} />
                <Route path="/update/:id" element={<ProjectCad />} />
                <Route path="/list" element={<ProjectList />} />
            </Routes>
        </>
    );
}

export default App