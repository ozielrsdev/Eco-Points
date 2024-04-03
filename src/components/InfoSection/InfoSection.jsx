import InfoCard from "./InfoCard/InfoCard"
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Autoplay , Navigation, Pagination } from "swiper/modules";

import "./InfoSection.css";

export default function InfoSection() {
  return (
    <>
    <section className="infoSection">
        <h1 className="infoTitle">Como reciclar?</h1>
      <Swiper
        slidesPerView={1}
        effect={"coverflow"}
        loop={true}
        autoplay={
          {
            delay: 10000,
            disableOnInteraction:true
          }
        }
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={true}
        navigation={{ clickable: true }}
        
      >
        <SwiperSlide>
          <InfoCard
            title="Papel"
            content="  Comece picando os papéis que serão reciclados, coloque-os em uma bacia rasa e cubra-os com água. Deixe de molho por, pelo menos, 24 horas.
          Após o tempo de molho, adicione a mistura de papel com água no liquidificador e adicione mais água seguindo a proporção de para cada uma parte de papel adicione três partes de água. Bata bem no liquidificador.
          Para cada litro da mistura coloque 8 colheres de amido de milho e 20 gotas do limpador.
          Transfira a mistura para a bacia funda com água até a metade e misture bem.Coloque a peneira pelas laterais da bacia e vá até o fundo, subindo até formar uma camada de papel sobre a peneira, então coloque a peneira em uma superfície inclinada para escorrer a água e cubra com o pano para secar bem. Quando tiver escorrido bastante, vire a peneira em um outro pano ou jornal seco. Deixe secar por um dia com livros por cima pressionando`,
          "
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard
            title="Metal"
            content="  Comece picando os papéis que serão reciclados, coloque-os em uma bacia rasa e cubra-os com água. Deixe de molho por, pelo menos, 24 horas.
          Após o tempo de molho, adicione a mistura de papel com água no liquidificador e adicione mais água seguindo a proporção de para cada uma parte de papel adicione três partes de água. Bata bem no liquidificador.
          Para cada litro da mistura coloque 8 colheres de amido de milho e 20 gotas do limpador.
          Transfira a mistura para a bacia funda com água até a metade e misture bem.Coloque a peneira pelas laterais da bacia e vá até o fundo, subindo até formar uma camada de papel sobre a peneira, então coloque a peneira em uma superfície inclinada para escorrer a água e cubra com o pano para secar bem. Quando tiver escorrido bastante, vire a peneira em um outro pano ou jornal seco. Deixe secar por um dia com livros por cima pressionando`,
          "
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard
            title="Plástico"
            content="  Comece picando os papéis que serão reciclados, coloque-os em uma bacia rasa e cubra-os com água. Deixe de molho por, pelo menos, 24 horas.
          Após o tempo de molho, adicione a mistura de papel com água no liquidificador e adicione mais água seguindo a proporção de para cada uma parte de papel adicione três partes de água. Bata bem no liquidificador.
          Para cada litro da mistura coloque 8 colheres de amido de milho e 20 gotas do limpador.
          Transfira a mistura para a bacia funda com água até a metade e misture bem.Coloque a peneira pelas laterais da bacia e vá até o fundo, subindo até formar uma camada de papel sobre a peneira, então coloque a peneira em uma superfície inclinada para escorrer a água e cubra com o pano para secar bem. Quando tiver escorrido bastante, vire a peneira em um outro pano ou jornal seco. Deixe secar por um dia com livros por cima pressionando`,
          "
          />
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
}