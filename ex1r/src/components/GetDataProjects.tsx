'use client'

import { useState, useEffect } from "react";
import CardDeleteButton from "@/components/DeleteData";
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
    const [RLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:9090/projects')
                .then(res => res.json())
                .then(dados => {
                    setProjects(dados)
                    setLoading(false)
                })
                .catch(error => {
                    console.error('Erro ao buscar projetos:', error)
                    setLoading(false)
                });
        }, 3000);
    }, []);

    if(RLoading) {
        return <Loading/>
    } else if (projects.length === 0) {
        return <p>Sem projetos</p>
    }

    const ProjectData = projects.map((project) => (
        <div key={project.id}>
            <ul>
                <p key={project.id}>{project.name} criado em: {project.createdAt}</p>
                <CardDeleteButton id={project.id} />
            </ul>
        </div>
    ))

    return ProjectData
}