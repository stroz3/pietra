"use client";
import "./form.scss";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { useMutation } from "react-query";

import { cartObjectType } from "@/store/store";
import formatNumber from "@/utils/formatNumber/formatNumber";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  question: string;
  products?: cartObjectType[];
}

type styleForButton = {
  background?: string;
};
type styleForForm = {
  width?: string;
};
type classNameBtn = string;
type classNameForm = string;
type Form = {
  styleForButton?: styleForButton;
  styleForForm?: styleForForm;
  classNameBtn?: classNameBtn;
  classNameForm?: classNameForm;
  text?: string;
};

const defaultStyleForForm: styleForForm = {
  width: "100%",
};
const defaultStyleForButton: styleForButton = {};

const botToken = "7241664398:AAHwHuOGU7dS-3KplXErUFgXWzttmkhSydE";
const chatId = "-1002330721673";
const TELEGRAM_BOT_URI = `https://api.telegram.org/bot${botToken}/sendMessage`;

const sendMessageToTelegram = async (message: string): Promise<string> => {
  await axios.post(TELEGRAM_BOT_URI, {
    chat_id: chatId,
    text: message,
    parse_mode: "HTML",
  });
  return "Message sent successfully";
};

export default function Form({
  text,
  styleForButton,
  styleForForm,
  classNameBtn,
  classNameForm = "form-dark",
}: Form) {
  const { mutate, isLoading } = useMutation(
    async (message: string): Promise<string> => {
      return await sendMessageToTelegram(message);
    },
    {},
  );
  // const [isFormValid, setIsFormValid] = useState(false);
  // const cart = useStoreCart((state) => state.cart);
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    question: "",
    products: JSON.parse(localStorage.getItem("cart") || "[]") as any[],
  });
  useEffect(() => {
    validate();
  }, [formValues]);
  const validate = () => {
    const { name, phone, email, question } = formValues;

    if (!name || name.length < 2) {
      return false;
    }

    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return false;
    }
    if (!question || question.length < 2 || question.length > 255) {
      return false;
    }

    return true;
  };

  function changeValue(e: any) {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setFormValues({
      ...formValues,
      products: JSON.parse(localStorage.getItem("cart") || "[]") as any[],
    });
    const { name, phone, email, question, products } = formValues;
    let message = `
       <b>Заказ:</b>
       <blockquote>
Имя: ${name}
Телефон: ${phone}
Почта: ${email}
Сообщение: ${question}</blockquote>`;

    if (products?.length ?? 0 > 0) {
      message += `

<b>Корзина:</b>`;
      let totalPrice = 0;

      products?.forEach((product) => {
        const { name, count, price, form, facture } = product;
        totalPrice += count * price;

        message += `
        <blockquote>
Название: ${name}
Кол-во: ${count} шт
Цена: ${formatNumber(price)} руб. 
<b>Форма:</b>
    ${form.map(
      (el) => ` 
           Название: ${el.name},
           Размер: ${el.size}
        `,
    )} 
<b>Фактура:</b>
    ${facture?.map(
      (el) => ` 
           Название: ${el.name},
           Кол-во: ${el.count} шт
        `,
    )} 

</blockquote>`;
      });

      message += `
      <b>
Итоговая цена: ${formatNumber(totalPrice)} руб.
                </b>
`;
    }
    // console.log(message);
    mutate(message);
  }

  return (
    <form
      action=""
      className={classNameForm ?? ""}
      style={styleForForm || defaultStyleForForm}
    >
      <div className="input-container">
        <input
          type="text"
          id="name"
          placeholder=" "
          required
          onChange={(e) => changeValue(e)}
        />
        <label htmlFor="name">ФИО</label>
      </div>

      <div className="input-container">
        {/*<input*/}
        {/*  type="tel"*/}
        {/*  id="phone"*/}
        {/*  placeholder=" "*/}
        {/*  required*/}
        {/*  defaultValue={"+7"}*/}
        {/*  onChange={(e) => changeValue(e)}*/}
        {/*/>*/}
        <InputMask
          mask="+7 (999) 999-99-99"
          value={formValues.phone}
          onChange={(e) => changeValue(e)}
        >
          {/*{(inputProps) => (*/}
          {/*  <input*/}
          {/*    {...inputProps}*/}
          {/*    type="text"*/}
          {/*    id="phone"*/}
          {/*    placeholder="+7 (___) ___-__-__"*/}
          {/*  />*/}
          {/*)}*/}
        </InputMask>
        <label htmlFor="phone">Телефон</label>
      </div>

      <div className="input-container">
        <input
          type="email"
          id="email"
          placeholder=" "
          required
          onChange={(e) => changeValue(e)}
        />
        <label htmlFor="email">Эл. почта</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          id="question"
          placeholder=" "
          required
          onChange={(e) => changeValue(e)}
        />
        <label htmlFor="question">Опишите кратко ваш вопрос</label>
      </div>
      <button
        className={
          classNameBtn ? `btn ${classNameBtn} form__button` : "btn form__button"
        }
        onClick={(event) => handleSubmit(event)}
        style={styleForButton || defaultStyleForButton}
        disabled={!validate()}
      >
        {isLoading ? "Отправляем..." : (text ?? "Получить консультацию")}
      </button>
      <div className="checkbox-container">
        <input type="checkbox" id="policy" />
        <label htmlFor="policy">
          <span>
            <span>Я ознакомлен с&nbsp;</span>
            <Link href="#" className="checkbox-container-link">
              политикой обработки персональных данных
            </Link>
          </span>
        </label>
      </div>

      <div className="checkbox-container">
        <input type="checkbox" id="consent" />
        <label htmlFor="consent">
          <span>Я даю согласие на обработку своих персональных данных</span>
        </label>
      </div>
    </form>
  );
}
