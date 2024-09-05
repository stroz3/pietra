"use client";
import "./cart.scss";
import "@/styles/main.scss";
import "../../(pages)/catalog/[catalogId]/product/[productId]/advert.scss";

import Image from "next/image";
import { useState } from "react";

import Form from "@/components/form/Form";

export default function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__title">
          <h2 className="cart__title-text">Отличный выбор</h2>
        </div>
        <div className="cart__wrapper">
          <div className="cart__blocks-facture">
            <PriceBlock
              countValue={1}
              imgSrc={"/assets/main/projects/catalogMain1.png"}
              priceValue={2000}
              name={"Тротуарный бордюр"}
            />
            <PriceBlock
              countValue={1}
              imgSrc={"/assets/main/projects/catalogMain1.png"}
              priceValue={2000}
              name={"Тротуарный бордюр"}
            />
            <PriceBlock
              countValue={1}
              imgSrc={"/assets/main/projects/catalogMain1.png"}
              priceValue={2000}
              name={"Тротуарный бордюр"}
            />
            <PriceBlock
              countValue={1}
              imgSrc={"/assets/main/projects/catalogMain1.png"}
              priceValue={2000}
              name={"Тротуарный бордюр"}
            />
            <PriceBlock
              countValue={1}
              imgSrc={"/assets/main/projects/catalogMain1.png"}
              priceValue={2000}
              name={"Тротуарный бордюр"}
            />

            <PriceBlock
              countValue={1}
              imgSrc={"/assets/main/projects/catalogMain1.png"}
              priceValue={2000}
              name={"Тротуарный бордюр"}
            />
            <div className="cart__finally-price">
              <h2>
                <span>Итого:</span>
                <span>255 000 ₽</span>
              </h2>
            </div>
          </div>
          <div className="cart__block-form">
            <h2>Заполните форму для оформления вашего заказа</h2>
            <p>
              А после оформления с вами для уточнения деталей свяжется наш
              менеджер. Оставьте ваши контакты.
            </p>
            <Form classNameBtn={"btn-orange"} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface PriceBlock {
  imgSrc: string;
  name: string;
  countValue?: number;
  priceValue?: number;
}

function PriceBlock({ imgSrc, name, countValue, priceValue }: PriceBlock) {
  const [count, setCount] = useState(countValue ?? 0);
  const [price, setPrice] = useState(priceValue ?? 0);
  return (
    <div className="advert__block-facture">
      <div className="advert__block-facture-image">
        <Image src={imgSrc} alt={"image"} width={90} height={90} />
      </div>
      <div className="advert__block-facture-wrapper">
        <p>{name}</p>
        <div className="advert__block-block-wrapper">
          <div className="advert__block-facture-count">
            <button
              className={"advert__btn"}
              onClick={() => {
                if (count !== 0) {
                  setCount(count - 1);
                  const prev = price / count;
                  setPrice(price - prev);
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
                setPrice((prev) => prev + (priceValue ?? 0));
              }}
            >
              &#43;
            </button>
          </div>
          <div className="cart__block-price">
            <p>{price + " ₽"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
