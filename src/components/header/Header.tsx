"use client";
import "@/styles/main.scss";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Basket } from "@/components/header/assets/Basket";
import { TelegramIcon } from "@/components/header/assets/TelegramIcon";
import { WhatsAppIcon } from "@/components/header/assets/WhatsAppIcon";

type Header = {
  progressLine: boolean;
};

import headerStyle from "./style/header.module.scss";

const HOME_PAGE = "/";
const ABOUT_PAGE = "about";
const CART_PAGE = "cart";
const CATALOG_PAGE = "cart";
const DELIVERY_PAGE = "delivery";

export default function Header({ progressLine = false }: Header) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollFraction = scrollTop / scrollHeight;
    const scrollPercent = Math.min(scrollFraction * 100, 100);
    setScrollPosition(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className={headerStyle.header}>
      <div className={"container"}>
        <div className={headerStyle.header__wrapper}>
          <div className={headerStyle.header__wrapperTitleBlock}>
            <h2 className={headerStyle.header__wrapperTitleText}>
              <Link href="/">PietraStyle</Link>
            </h2>
          </div>
          <div
            className={`${headerStyle.header__listMenu} ${isOpen ? headerStyle.open : ""}`}
          >
            <ul className={headerStyle.header__listLinks}>
              <li>
                <Link href={HOME_PAGE} onClick={toggleMenu}>
                  Главная
                </Link>
              </li>
              <li>
                <Link href={ABOUT_PAGE} onClick={toggleMenu}>
                  О нас
                </Link>
              </li>
              <li>
                <Link href={CATALOG_PAGE} onClick={toggleMenu}>
                  Каталог
                </Link>
              </li>
              <li>
                <Link href={DELIVERY_PAGE} onClick={toggleMenu}>
                  Доставка и оплата
                </Link>
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              gridGap: "10px",
              alignItems: "center",
            }}
          >
            <TelegramIcon />
            <WhatsAppIcon />
            <div className={headerStyle.header__number}>
              <p className={headerStyle.header__numberText}>
                +7 (495) 151-86-83
              </p>
              <p className={headerStyle.header__numberText}>
                +7 (936) 216-68-00
              </p>
            </div>
          </div>

          <Basket href={CART_PAGE} />
          <span className={headerStyle.header__burgerBtn}>
            <div className={headerStyle.burger} onClick={toggleMenu}>
              <div
                className={`${headerStyle.bar} ${isOpen ? headerStyle.open : ""}`}
              ></div>
              <div
                className={`${headerStyle.bar} ${isOpen ? headerStyle.open : ""}`}
              ></div>
              <div
                className={`${headerStyle.bar} ${isOpen ? headerStyle.open : ""}`}
              ></div>
            </div>
          </span>
        </div>
      </div>
      {progressLine ? (
        <div
          style={{
            position: "fixed",
            top: "108px",
            left: 0,
            width: "100%",
            height: "8px",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "#DADADA",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          ></div>

          {/* Основная линия (прогресс) */}
          <div
            style={{
              width: `${scrollPosition}%`,
              height: "8px",
              backgroundColor: "#3FB651",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "width 0.1s ease-out",
            }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}
