import FirstPageArticle from "./components/FirstPage";

function HeroSec() {
  const articleData = {
    id: 1,
    intro: "Gaza : une situation humanitaire critique",
    title:
      "Reportage sur les dernières évolutions dans la bande de Gaza, entre espoir et difficultés.",
    img: "public/FP-test.webp",
    link: "/articles/gaza-situation",
  };

  return (
    <section className="Hero-Sec">
      <div className="padding-container-section">
        <FirstPageArticle data={articleData} />
      </div>
    </section>
  );
}

export default HeroSec;
