'use client'

import { useState, useEffect } from "react";
import  CardDeleteButton  from "@/components/DeleteData";
import Project from "@/DB/Server.mjs";
import Loading from "./Loading";

type Project = {
    id: string;
    name: string;
    buy: number;
    categoria_id: string;
    createdAt: string;
    updateAt: string;
};

export default function GetDataProject() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch('http://localhost:9090/projects')
                .then(res => res.json())
                .then(dados => {
                    setLoading(true)
                    setProjects(dados)
                })
                .catch(error => console.error('Erro ao buscar projetos:', error));
        }, 3000);
    }, []);    

    if(!projects || projects.length === 0) {
        return <p>Plaishfdlasj</p>
    }
    if(!Loading) {
        return(
            <Loading/> 
        )
    }

    const ProjectData = projects.map((project) => (
        <ul key={project.id}>
            <p key={project.id}>{project.name} criado em: {project.createdAt}</p>
            <CardDeleteButton id={project.id} />
        </ul>
    ))

    return ProjectData
}