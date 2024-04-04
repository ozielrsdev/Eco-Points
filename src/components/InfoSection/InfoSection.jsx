import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import InfoCard from "./InfoCard/InfoCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./InfoSection.css";

export default function InfoSection() {
  // eslint-disable-next-line no-unused-vars
  const { getData } = useFetch();
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    getData("https://ecopoints-api.onrender.com/api/infos").then((res) => {
      setInfos(res.infos);
    });
  }, []);

  return (
    <>
      <section className="infoSection">
        <h1 className="infoTitle">Como reciclar?</h1>
        <Swiper
          slidesPerView={1}
          effect={"coverflow"}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          grabCursor={true}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={true}
          navigation={{ clickable: true }}
        >
          {infos.length > 0 && (
            infos.map((card) => {
              return (
                <SwiperSlide key={card.id}>
                  <InfoCard title={card.title} content={card.content} />
                </SwiperSlide>
              );
            }))}
        </Swiper>
      </section>
    </>
  );
}
