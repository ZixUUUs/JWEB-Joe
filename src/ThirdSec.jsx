import ThirdPage from "./components/thirdPage";

function ThirdSec() {
  const featuredMatches = {
    id: 1,
    desc: "Barcelone vs PSG",
    text: "Nikmou ytoh ya3ti nahkmek nikek man9tlkch kolyoum tet3adeb hata tweli t7alel ya l9a7ba",
    img: "public/nikmo.webp",
    link: "/Sport/barca-psg-2025",
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
