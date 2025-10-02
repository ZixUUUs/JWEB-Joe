import SecondPage from "./components/SecondPage";
function SecondSec() {
  const featuredMatches = {
    id: 1,
    desc: "Barcelone vs PSG",
    title: "Résultat dramatique en Ligue des Champions",
    text: "PSG renverse la vapeur dans le temps additionnel",
    img: "public/SP-test.webp",
    link: "/Sport/barca-psg-2025",
  };
  return (
    <section className="Second-sec">
      <div className="padding-container-second-sec">
        <SecondPage data={featuredMatches} />
      </div>
    </section>
  );
}
export default SecondSec;
