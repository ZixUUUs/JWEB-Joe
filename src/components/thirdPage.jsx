function ThirdPage({ data }) {
  return (
    <article className="TP-article">
      <a href={data.link} className="TP-container">
        <div className="TP-img cover">
          <img src={data.img} alt={data.desc} />
        </div>
        <div className="TP-text">
          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </div>
      </a>
    </article>
  );
}
export default ThirdPage;
