import "../styles/hero.css";
import Hero from '../components/Hero'
import Header from "../components/Header";
import Solutions from "../components/Solutions";
import Testemunhos from "../components/Testemunhos";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Solutions />
            <Testemunhos />
            <FAQ />
            <Footer />
        </>
    )
}