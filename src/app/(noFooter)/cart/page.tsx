"use client";
import "./cart.scss";
import "@/styles/main.scss";
import "@/app/(pages)/catalog/[catalogId]/products-catalog/[productsCatalogId]/product/[productId]/advert.scss";

import Image from "next/image";
import { useEffect, useState } from "react";

import Form from "@/components/form/Form";
import { useStoreCart } from "@/store/store";
import { animatePrice } from "@/utils/animatePrice/animatePrice";
import formatNumber from "@/utils/formatNumber/formatNumber";

export default function Cart() {
  const cart = useStoreCart((state) => state.cart);
  const updateToCart = useStoreCart((state) => state.updateToCart);
  const [, setTotalPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((el) => (totalPrice += el.price));
    return totalPrice;
  };

  useEffect(() => {
    if (cart.length === 0) {
      animatePrice(0, setDisplayPrice);
    } else {
      const price = calculateTotalPrice();
      setTotalPrice(price);
      animatePrice(price, setDisplayPrice);
    }
  }, [cart]);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Скрыть сообщение через 3 секунды
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  function onIncrease(id: number) {
    updateToCart(
      cart.map((el) =>
        el.id === id
          ? {
              ...el,
              count: el.count + 1,
              price: (el.count + 1) * (el.price / el.count),
            }
          : el,
      ),
    );
  }

  function onDecrease(id: number) {
    const findCart = cart.find((el) => el.id === id);
    if (findCart?.count === 1) {
      updateToCart(cart.filter((el) => el.id !== id));
    } else {
      updateToCart(
        cart.map((el) =>
          el.id === id
            ? {
                ...el,
                count: el.count - 1,
                price: (el.count - 1) * (el.price / el.count),
              }
            : el,
        ),
      );
    }
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__title">
          <h2 className="cart__title-text">Отличный выбор</h2>
        </div>
        <div className="cart__wrapper">
          <div className="cart__blocks-facture">
            {cart.map((el, index) => (
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
            {showSuccess ? (
              <div className="cart__success">
                <h2>Успешно отправлено!</h2>
                <p>
                  Ваше сообщение успешно отправлено. Наш специалист свяжется с
                  вами в течение часа.
                </p>
              </div>
            ) : (
              <>
                <h2>Заполните форму для оформления вашего заказа</h2>
                <p>
                  А после оформления с вами для уточнения деталей свяжется наш
                  менеджер. Оставьте ваши контакты.
                </p>
                <Form
                  classNameBtn={"btn-orange"}
                  text={"Оформить заказ"}
                  onSuccess={() => setShowSuccess(true)}
                />
              </>
            )}
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
              onClick={() => onDecrease(id)}
              disabled={countValue === 0}
            >
              &#8212;
            </button>
            <p>{countValue + " шт."}</p>
            <button className={"advert__btn"} onClick={() => onIncrease(id)}>
              &#43;
            </button>
          </div>
          <div className="cart__block-price">
            <p>{formatNumber(priceValue ?? 0) + " ₽"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
