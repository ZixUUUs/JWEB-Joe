import CatRub from "./components/CatRub";

function Rubrique() {
  const RubriqueData = [
    {
      Rub: "Actu",
      VideoData: [
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965025",
          id: "1",
          desc: "Un homme éclate de rire, figé entre légèreté et vertige.",
        },
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965026",
          id: "2",
          desc: "Un moment furtif capturé dans la rue, à la fois banal et troublant.",
        },
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965026",
          id: "2",
          desc: "La saison de Loup-Garou est ouvertes, les jeunes se regroupes a jouer ce jeu... ",
        },
      ],
    },
    {
      Rub: "Sport",
      VideoData: [
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965025",
          id: "3",
          desc: "Le Barça a sombré face au PSG, impuissant devant l'intensité parisienne.",
        },
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965027",
          id: "4",
          desc: "Un but d'anthologie qui a fait chavirer le Parc des Princes.",
        },
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965027",
          id: "4",
          desc: "Supporteur u Barça mal en points, des pleurs face au français",
        },
      ],
    },
    {
      Rub: "Culture",
      VideoData: [
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965025",
          id: "5",
          desc: "Berwadelic fusionne sonorités berbères et rock psychédélique, inchallah ils sortent une chanson ...",
        },
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965028",
          id: "6",
          desc: "Un live envoûtant où tradition et modernité se rencontrent.",
        },
        {
          link: "https://www.tiktok.com/@daily_o_aaaa_aahhh/video/7379029097822965028",
          id: "6",
          desc: "Le public de Radiohead ce revolte contre son groupe preferée, ce dernier fermant les yeux devant uin genocide",
        },
      ],
    },
  ];

  return (
    <section className="Rubrique-sec">
      {RubriqueData.map((rubrique, index) => (
        <CatRub key={index} data={rubrique} />
      ))}
    </section>
  );
}

export default Rubrique;
