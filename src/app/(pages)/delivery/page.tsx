import "./style/delivery.scss";
import "@/styles/main.scss";

export default function Delivery() {
  return (
    <div className="delivery">
      <div className="container">
        <div className="delivery__wrapper">
          <h1 className="delivery__main-title">Доставка и оплата</h1>
          <div className="delivery__block-text">
            <p className="delivery__block-text-danger">
              ВНИМАНИЕ! Стоимость и срок доставки рассчитывается в соответствии
              с километражом и тоннажом
            </p>
            <p className="delivery__block-text-normal">
              Стоимость доставки по МО и в другие регионы России у нас
              значительно ниже стоимости доставки, предоставляемые другими
              транспортными компаниями!
            </p>
            <p className="delivery__block-text-normal">
              По предварительному согласованию Вы можете получить заказанный
              товар на нашем складе по адресу Богородский р-н, ДНП Лесное, 41,
              Пн-Пят. с 9:00 до 19:00
            </p>
            <p className="delivery__block-text-normal">
              При оформлении заказа заключается договор Оплата производится по
              реквизитам организации банковским переводом
            </p>
            <p className="delivery__block-text-bold">
              В нашем интернет-магазине вы можете выбрать наиболее удобный для
              вас способ оплаты. Мы предлагаем следующие варианты:
            </p>
            <ul className="delivery__block-text-list">
              <li>
                <span>Наличными</span> — оплата производится курьеру при
                получении товара или при личной встрече в офисе компании.
              </li>
              <li>
                <span>Банковской картой</span> — принимаются карты Visa,
                MasterCard, Мир и другие.
              </li>
              <li>
                <span>Безналичный расчет</span> — для юридических лиц и
                корпоративных клиентов доступен вариант безналичной оплаты.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
