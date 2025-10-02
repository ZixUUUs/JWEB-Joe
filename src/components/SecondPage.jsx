function SecondPage({ data }) {
  return (
    <article className="SP-article">
      <div className="SP-img cover">
        <img src={data.img} alt={data.desc} />
      </div>
      <div className="SP-title">
        <h2>{data.title}</h2>
      </div>
      <div className="SP-text">
        <p>{data.text}</p>
      </div>
      <div className="SP-btn">
        <a href={data.link}>Voir l'article</a>
      </div>
    </article>
  );
}
export default SecondPage;
