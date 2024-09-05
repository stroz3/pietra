import "./style/footer.scss";
import "@/styles/main.scss";

import Image from "next/image";
import Link from "next/link";

import { IconFooter } from "@/components/footer/assets/IconFooter";
import { LogoLight } from "@/components/footer/assets/LogoLight";

const ABOUT_PAGE = "about";
const CATALOG_PAGE = "cart";
const DELIVERY_PAGE = "delivery";
export default function Footer() {
  return (
    <div className="footer">
      <div
        className="footer__map"
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          zIndex: 0,
        }}
      >
        <Image
          src="/assets/footer/Map.png"
          fill
          style={{ objectFit: "cover" }}
          alt="map"
        />
      </div>
      <div className="container">
        <div className="footer__wrapper">
          <h2 className="footer__logo">
            <Link href="/">
              <LogoLight />
            </Link>
          </h2>
          <div className="footer__block-wrapper">
            <div className="footer__block">
              <div className="footer__info">
                <small className="footer__info-small">
                  Офис продаж и склад:
                </small>
                <p className="footer__info-p">
                  Московская область, Богородский городской округ, ДНП Лесное,
                  41
                </p>
              </div>
              <div className="footer__info">
                <small className="footer__info-small">График работы:</small>
                <p className="footer__info-p">
                  <span>Пн-Пят. с 9:00 до 19:00</span>
                  <span>Суб., Вс. — по договоренности</span>
                </p>
              </div>
              <small className="footer__block-small mobile">
                PietraStyle 2024{" "}
                <span>
                  <IconFooter />
                </span>{" "}
                Все права защищены! <br />
                <a href="" type="mail">
                  Пользовательские соглашения
                </a>
              </small>
            </div>

            <ul className="footer__list-links">
              <li>
                <Link href={ABOUT_PAGE}>О нас</Link>
              </li>
              <li>
                <Link href={CATALOG_PAGE}>Каталог</Link>
              </li>
              <li>
                <Link href={DELIVERY_PAGE}>Доставка и оплата</Link>
              </li>
            </ul>

            <div className="footer__block footer__block-second">
              <div>
                <h2 className="footer__block-number">+7 (936) 216-68-00</h2>
                <p className="footer__block-mail">
                  <a href="">info@ogt-group.ru</a>
                </p>
              </div>
              <small className="footer__block-small desktop">
                PietraStyle 2024{" "}
                <span>
                  <IconFooter />
                </span>{" "}
                Все права защищены! <br />
                <a href="" type="mail">
                  Пользовательские соглашения
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
