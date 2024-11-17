'use client'

import { useState, useEffect } from "react";

type Project = {
    id: number;
    name: string;
    buy: number;
    categoria_id: string;
    createdAt: string;
    updateAt: string;
};

export default function GetDataProject() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('http://localhost:9090/projects')
            .then(res => res.json())
            .then(dados => setProjects(dados))
            .catch(error => console.error('Erro ao buscar projetos:', error));
    }, []);

    return (
        <div>
            {
                projects.map((project) => (
                    
                    <>
                        <p key={project.id}>{project.createdAt}</p>
                        <button type="button">deletar</button>
                    </>
                    
                ))
            }
        </div>
    )
}