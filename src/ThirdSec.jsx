import ThirdPage from "./components/thirdPage";

function ThirdSec() {
  const featuredMatches = {
    id: 1,
    desc: "Fuck natanyahu",
    title: "FDP de premiere",
    text: "Le tueurs d'enfant frappe encore et l'amerique aime sucuer les juifs",
    img: "public/nikmo.webp",
    link: "/Politique/politique-putes",
  };
  return (
    <section className="ThirdSec">
      <div className="padding-container-section ">
        <ThirdPage data={featuredMatches} />
      </div>
    </section>
  );
}
export default ThirdSec;
