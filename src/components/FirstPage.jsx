function FirstPageArticle({ data }) {
  return (
    <a href={data.link}>
      <article className="FP-article">
        <div className="FP-img cover">
          <img src={data.img} alt={data.title} />
        </div>
        <div className="FP-intro">
          <p>{data.intro}</p>
        </div>
        <div className="FP-title">
          <h2>{data.title}</h2>
        </div>
      </article>
    </a>
  );
}
export default FirstPageArticle;
