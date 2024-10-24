import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";

export default function NovoProjeto() {

    const navegate = useNavigate()

    function CriarProjeto(projeto) {
        projeto.cost = 0
        projeto.services = []

        fetch(
            "http://localhost:5000/projetos", {
                method: "Post",
                headers:  {
                    'content-type': "applications/json",
                },
                body: JSON.stringify(projeto)
            }
        )
        .then(resposta => resposta.json())
        .then(dado => {
            console.log(dado);
        })
        .catch(e => console.log(e))
    }

    return(
        <div className="h-screen w-screen text-center">
            <Header />
            <div className="min-h-min-70 p-2">
                <h1 className="text-4xl font-bold m-3">Criar projeto</h1>
                <p className="m-3">Crie seu projeto para depois adicionar os serviços.</p>
                <Form handleSubmit={CriarProjeto} dadoprojeto={undefined} />
            </div>
            <Footer />
        </div>
    )
}