import Header from './components/Header';
import Nav from './components/Navigator';
import Article from './components/Article';
import Aside from './components/Sidebar'; 
import Footer from './components/Footer';

export default function App() {

  const post = {
    titulo: "Bem-vindo ao Café com a Dev!",
    data: "12 de Março de 2026",
    conteudo: [
      "Um espaço onde tecnologia e café se encontram.",
      "Se você é apaixonado por código, café ou ambos, está no lugar certo.",
      "E porque todo bom código merece uma pausa...",
      "Pega seu café e vem evoluir."
    ]
  };

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>

      <main>
        <Article 
          titulo={post.titulo}
          data={post.data}
          conteudo={post.conteudo}
        />
      </main>

      <Aside />
      <Footer />
    </>
  );
}