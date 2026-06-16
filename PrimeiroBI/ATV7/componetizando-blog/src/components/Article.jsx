export default function Article({ titulo, data, conteudo }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <time>{data}</time>

      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure>
        <img src="memegato.jpg" alt="Gato fofo" />
        <figcaption>Vai ser sobre isso aqui galera, caos!</figcaption>
      </figure>
    </article>
  );
}