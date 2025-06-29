import "./reasons.scss";
import "@/styles/main.scss";

import Image from "next/image";
import Link from "next/link";

export default function Reasons() {
  return (
    <div className="reasons">
      <div className="container">
        <h2 className="reasons__title-text">6 причин работать с нами</h2>
        <div className="reasons__wrapper">
          <div className="reasons__block">
            <div className="reasons__block-info">
              <div
                style={{
                  position: "relative",
                  width: "90px",
                  height: "90px",
                }}
              >
                <Image
                  src={"/assets/main/percent/Price.png"}
                  alt="image"
                  fill
                />
              </div>
              <p>Привлекательные цены и гибкие условия для оптовиков</p>
            </div>
            <div className="reasons__block-info">
              <div
                style={{
                  position: "relative",
                  width: "90px",
                  height: "90px",
                }}
              >
                <Image
                  src="/assets/main/percent/Reliability.png"
                  alt="image"
                  fill
                />
              </div>
              <p>Высокое качество изделий и надёжность на долгие годы</p>
            </div>
            <div className="reasons__block-info">
              <div
                style={{
                  position: "relative",
                  width: "90px",
                  height: "90px",
                }}
              >
                <Image
                  src="/assets/main/percent/Frame-2.png"
                  alt="image"
                  fill
                />
              </div>
              <p>Любые объёмы продукции</p>
            </div>
            <div className="reasons__block-info">
              <div
                style={{
                  position: "relative",
                  width: "90px",
                  height: "90px",
                }}
              >
                <Image
                  src="/assets/main/percent/Frame-3.png"
                  alt="image"
                  fill
                />
              </div>
              <p>Гарантия на весь ассортимент</p>
            </div>
          </div>
          <div className="reasons__block">
            <div className="reasons__block-button">
              <Link href={"/catalog"}>
                <button className="btn btn-orange">Перейти в каталог</button>
              </Link>
            </div>
            <div className="reasons__block-info">
              <div
                style={{
                  position: "relative",
                  width: "90px",
                  height: "90px",
                }}
              >
                <Image src="/assets/main/percent/Frame.png" alt="image" fill />
              </div>
              <p>Доставка по всей России</p>
            </div>
            <div className="reasons__block-info">
              <div
                style={{
                  position: "relative",
                  width: "90px",
                  height: "90px",
                }}
              >
                <Image
                  src="/assets/main/percent/Frame-1.png"
                  alt="image"
                  fill
                />
              </div>
              <p>Материалы всегда в наличии</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
