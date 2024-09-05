import "./firstMain.scss";
import "@/styles/main.scss";

import Marquee from "react-fast-marquee";

import MainSlider from "@/components/ui/sliders/mainSlider/MainSlider";

export default function FirstMain() {
  return (
    <div className="main-first">
      <MainSlider />
      <div className="main-first__marquee-block">
        <Marquee speed={80}>
          <div className="main-first__marquee-block-wrapper">
            <p>Тротуарная плитка</p>
            <p>Тротуарные бордюры</p>
            <p>Блоки забора</p>
            <p>Навершия</p>
            <p>Водоотливы</p>
            <p>Тротуарная плитка</p>
            <p>Тротуарные бордюры</p>
            <p>Блоки забора</p>
            <p>Навершия </p>
            <p>Водоотливы</p>
          </div>
        </Marquee>
      </div>
      <div className="main-first__marquee-block marquee-block-green">
        <Marquee speed={80} direction={"right"}>
          <div className="main-first__marquee-block-wrapper ">
            <p>Тротуарная плитка</p>
            <p>Тротуарные бордюры</p>
            <p>Блоки забора</p>
            <p>Навершия</p>
            <p>Водоотливы</p>
            <p>Тротуарная плитка</p>
            <p>Тротуарные бордюры</p>
            <p>Блоки забора</p>
            <p>Навершия </p>
            <p>Водоотливы</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
