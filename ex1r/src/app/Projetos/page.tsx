import GetDataProject from "@/components/GetDataProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Projetos() {

    

    return(
        <div className="h-screen w-screen">
            <Header />
            <div className="min-h-min-70 p-2">
                <GetDataProject />
            </div>
            <Footer />
        </div>
    )
}