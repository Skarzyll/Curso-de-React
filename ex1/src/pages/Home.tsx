import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    return(
        <div className="h-screen w-screen"> 
            <Header />
            <div className="min-h-min-70 bg-zinc-300">Home</div>
            <Footer />
        </div>
    )
}