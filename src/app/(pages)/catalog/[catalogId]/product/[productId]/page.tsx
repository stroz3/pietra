"use client";
import "./advert.scss";
import "@/styles/main.scss";

import Image from "next/image";
import { useState } from "react";

import Price from "@/components/mainPage/price/Price";
import SliderGallary from "@/components/ui/sliders/sliderGallery/SliderGallary";

// import { useSearchParams } from "next/navigation";
interface Product {
  params: {
    productId: string;
  };
}

export default function Product({ params }: Product) {
  const { productId } = params;

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setCheckedItems((prevItems) => {
      if (prevItems.includes(value)) {
        // If the item is already in the array, remove it
        return prevItems.filter((item) => item !== value);
      } else {
        // If the item is not in the array, add it
        return [...prevItems, value];
      }
    });
  };
  // const decodeName = decodeURIComponent(name);
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  return (
    <>
      <div className="advert">
        <div className="container">
          <div className="advert__wrapper">
            <div className="advert__info">
              <div className="advert__title">
                <h2>Тротуарный бордюр {productId}</h2>
                <SliderGallary />
              </div>
              <div className="advert__block advert-facture">
                <div className="advert__block-title">
                  <h2>Выберите фактуру</h2>
                </div>
                <div className="advert__block-wrapper">
                  <Facture imgSrc={"/assets/image 71.png"} name={"name"} />
                  <Facture imgSrc={"/assets/image 71.png"} name={"name"} />
                  <Facture imgSrc={"/assets/image 71.png"} name={"name"} />
                  <Facture imgSrc={"/assets/image 71.png"} name={"name"} />
                  <Facture imgSrc={"/assets/image 71.png"} name={"name"} />
                  <Facture imgSrc={"/assets/image 71.png"} name={"name"} />
                  <Facture imgSrc={"/assets/image 71.png"} name={"name"} />
                </div>
              </div>
              <div className="advert__block advert-form">
                <div className="advert__block-title">
                  <h2>Выберите форму</h2>
                </div>
                <div className="advert__block-wrapper">
                  <CheckBox
                    checked={checkedItems.includes("Квадрат")}
                    label={"Квадрат"}
                    onChange={handleCheckboxChange}
                    value={"Квадрат"}
                  />
                  <CheckBox
                    checked={checkedItems.includes("Ромб")}
                    label={"Ромб"}
                    onChange={handleCheckboxChange}
                    value={"Ромб"}
                  />
                  <CheckBox
                    checked={checkedItems.includes("Крест")}
                    label={"Крест"}
                    onChange={handleCheckboxChange}
                    value={"Крест"}
                  />
                  <CheckBox
                    checked={checkedItems.includes("Прямоугольник")}
                    label={"Прямоугольник"}
                    onChange={handleCheckboxChange}
                    value={"Прямоугольник"}
                  />
                  <CheckBox
                    checked={checkedItems.includes("Круг")}
                    label={"Круг"}
                    onChange={handleCheckboxChange}
                    value={"Круг"}
                  />
                  <CheckBox
                    checked={checkedItems.includes("Звезда")}
                    label={"Звезда"}
                    onChange={handleCheckboxChange}
                    value={"Звезда"}
                  />
                </div>
              </div>
            </div>
            <div className="advert__price-fixed">
              <h2 className="advert__price-title">15 500 ₽ / шт.</h2>
              <div className="advert__price-btns">
                <button className="btn btn-orange">В корзину</button>
              </div>
            </div>
            <div className="advert__price">
              <h2 className="advert__price-title desktop-block">
                15 500 ₽ / шт.
              </h2>
              <div className="advert__price-btns desktop-block">
                <button className="btn btn-orange">Добавить в корзину</button>
                <button className="btn btn-light">
                  Связаться с менеджером
                </button>
              </div>
              <div className="advert__price-description">
                <h3 className="advert__price-under-title">Описание</h3>
                <p className="advert__price-text">
                  Он же бортовой камень. Незаменим для разделения проезжей части
                  и тротуара, велодорожек, пешеходных маршрутов от газонов и др.
                  зон городского общественного пространства. На участках
                  индивидуального домостроения может использоваться для декора в
                  ландшафтном дизайне, для защиты уровней почвы от размывания и
                  осыпания. Дополняет уложенную плитку, дополнительно защищая её
                  от износа и повреждений.
                </p>
              </div>
              <div className="advert__stats">
                <h3 className="advert__price-under-title">Описание</h3>
                <div className="advert__stats-block">
                  <span className="label">Длина</span>
                  <span className="value">500 мм.</span>
                  <span className={"advert__stats-dotted"}></span>
                </div>
                <div className="advert__stats-block">
                  <span className="label">Морозостойкость</span>
                  <span className="value">F300</span>
                  <span className={"advert__stats-dotted"}></span>
                </div>
              </div>
              <div className="advert__compound">
                <h3 className="advert__price-under-title">Описание</h3>
                <ul className="advert__compound-list">
                  <li>30% высокопрочный фибробетон марки М600</li>
                  <li>
                    70% натуральная крошка распределена по всему объему изделия
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Price />
      </div>
    </>
  );
}

//.advert__
function Facture({ imgSrc, name }: { imgSrc: string; name: string }) {
  const [count, setCount] = useState(0);
  return (
    <div className="advert__block-facture">
      <div className="advert__block-facture-image">
        <Image src={imgSrc} alt={"image"} width={40} height={40} />
        <p>{name}</p>
      </div>
      <div className="advert__block-facture-count">
        <button
          className={"advert__btn"}
          onClick={() => {
            if (count !== 0) {
              setCount(count - 1);
            }
          }}
          disabled={count === 0}
        >
          &#8212;
        </button>
        <p>{count + " шт."}</p>
        <button
          className={"advert__btn"}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          &#43;
        </button>
      </div>
    </div>
  );
}

function CheckBox({
  label,
  value,
  checked,
  onChange,
}: {
  label: string;
  value: string;
  checked: boolean;
  onChange: any;
}) {
  return (
    <>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange(value)}
        />
        <span className="checkmark"></span>
        {label}
      </label>
    </>
  );
}
