import FirstPageArticle from "./components/FirstPage";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function HeroSec() {
  const articleData = {
    id: 1,
    intro: "Gaza : une situation humanitaire critique",
    title:
      "Reportage sur les dernières évolutions dans la bande de Gaza, entre espoir et difficultés.",
    img: "/FP-test.webp",
    link: "/articles/gaza-situation",
  };

  return (
    <section className="Hero-Sec">
      <div className="padding-container-section">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <FirstPageArticle data={articleData} />
          </SwiperSlide>
          <SwiperSlide>
            <FirstPageArticle data={articleData} />
          </SwiperSlide>
          <SwiperSlide>
            <FirstPageArticle data={articleData} />
          </SwiperSlide>
          <SwiperSlide>
            <FirstPageArticle data={articleData} />
          </SwiperSlide>
          <SwiperSlide>
            <FirstPageArticle data={articleData} />
          </SwiperSlide>
          <SwiperSlide>
            <FirstPageArticle data={articleData} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSec;
