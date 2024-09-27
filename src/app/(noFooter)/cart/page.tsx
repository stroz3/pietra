"use client";
import "./cart.scss";
import "@/styles/main.scss";
import "../../(pages)/catalog/[catalogId]/product/[productId]/advert.scss";

import Image from "next/image";
import { useEffect, useState } from "react";

import Form from "@/components/form/Form";
import { cartObjectType, useStoreCart } from "@/store/store";
import formatNumber from "@/utils/formatNumber/formatNumber";

export default function Cart() {
  const updateToCart = useStoreCart((state) => state.updateToCart);
  const [newCartData, setNewCartData] = useState<cartObjectType[]>(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [],
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);
  useEffect(() => {
    updateToCart(newCartData);
  }, [newCartData]);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    newCartData.forEach((el) => (totalPrice += el.price));
    return totalPrice;
  };
  useEffect(() => {
    if (newCartData.length === 0) {
      animatePrice(0);
    } else {
      const price = calculateTotalPrice();
      setTotalPrice(price);
      animatePrice(price);
    }
  }, [totalPrice, newCartData]);

  function onIncrease(id: number) {
    setNewCartData((prevCartData) => {
      return prevCartData.map((el) =>
        el.id === id
          ? {
              ...el,
              count: el.count + 1,
              price: (el.count + 1) * el.price,
            }
          : el,
      );
    });
  }

  function onDecrease(id: number) {
    const findCart = newCartData.find((el) => el.id === id);
    if (findCart?.count === 1) {
      setNewCartData((prevCartData) =>
        prevCartData.filter((el) => el.id !== id),
      );
    } else {
      setNewCartData((prevCartData) => {
        return prevCartData.map((el) =>
          el.id === id
            ? {
                ...el,
                count: el.count - 1,
                price: (el.count - 1) * (el.price / el.count),
              }
            : el,
        );
      });
    }
  }

  function animatePrice(targetPrice: number) {
    let startPrice = 0;
    const duration = 500; // Общая продолжительность анимации (в миллисекундах)
    const steps = Math.ceil(duration / 30); // Количество шагов (каждые 30 мс)
    const increment = Math.ceil(targetPrice / steps); // Изменение цены за один шаг

    const interval = setInterval(() => {
      startPrice += increment;
      if (startPrice >= targetPrice) {
        startPrice = targetPrice; // Убедитесь, что мы не превышаем целевую цену
        clearInterval(interval); // Останавливаем интервал
      }
      setDisplayPrice(startPrice); // Обновляем отображаемую цену
    }, 30); // Обновляем каждые 30 мс
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__title">
          <h2 className="cart__title-text">Отличный выбор</h2>
        </div>
        <div className="cart__wrapper">
          <div className="cart__blocks-facture">
            {newCartData.map((el, index) => (
              <PriceBlock
                key={index}
                countValue={el.count}
                imgSrc={el.img.src}
                priceValue={el.price}
                name={el.name}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                id={el.id}
              />
            ))}
            <div className="cart__finally-price">
              <h2>
                <span>Итого:</span>
                <span>{formatNumber(displayPrice)} ₽</span>
              </h2>
            </div>
          </div>
          <div className="cart__block-form">
            <h2>Заполните форму для оформления вашего заказа</h2>
            <p>
              А после оформления с вами для уточнения деталей свяжется наш
              менеджер. Оставьте ваши контакты.
            </p>
            <Form classNameBtn={"btn-orange"} text={"Оформить заказ"} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface PriceBlock {
  id: number;
  imgSrc: string;
  name: string;
  countValue?: number;
  priceValue?: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

function PriceBlock({
  imgSrc,
  name,
  countValue,
  priceValue,
  onIncrease,
  onDecrease,
  id,
}: PriceBlock) {
  // const [count, setCount] = useState(countValue ?? 0);
  // const [price, setPrice] = useState(priceValue ?? 0);
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
                onDecrease(id);
              }}
              disabled={countValue === 0}
            >
              &#8212;
            </button>
            <p>{countValue + " шт."}</p>
            <button
              className={"advert__btn"}
              onClick={() => {
                onIncrease(id);
                // setPrice((prev) => prev + (priceValue ?? 0));
              }}
            >
              &#43;
            </button>
          </div>
          <div className="cart__block-price">
            <p>{priceValue + " ₽"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
