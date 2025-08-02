"use client";
import "./form.scss";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import MaskedInput from "react-text-mask";

import { cartObjectType } from "@/store/store";
import { useStoreCart } from "@/store/store";
import formatNumber from "@/utils/formatNumber/formatNumber";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  question: string;
  products?: cartObjectType[];
  policy: boolean;
  consent: boolean;
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
  onSuccess?: () => void;
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
  onSuccess,
}: Form) {
  const { mutate, isLoading, isSuccess } = useMutation(
    async (message: string): Promise<string> => {
      return await sendMessageToTelegram(message);
    },
    {},
  );

  const updateToCart = useStoreCart((state) => state.updateToCart);

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    question: "",
    products:
      typeof window !== "undefined"
        ? (JSON.parse(localStorage.getItem("cart") || "[]") as any[])
        : [],
    policy: true,
    consent: true,
  });

  useEffect(() => {
    validate();
  }, [formValues]);

  useEffect(() => {
    if (isSuccess) {
      updateToCart([]); // Clear the cart
      onSuccess?.(); // Trigger success callback
    }
  }, [isSuccess, updateToCart, onSuccess]);

  const validate = () => {
    const { name, phone, email, policy, consent } = formValues;

    if (!name || name.length < 2) {
      return false;
    }

    const phoneRegex = /^\+7 \([1-9]\d{2}\) \d{3} \d{2} \d{2}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return false;
    }

    return !(!policy || !consent);
  };

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? Boolean(checked) : value;
    setFormValues((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setFormValues({
      ...formValues,
      products:
        typeof window !== "undefined"
          ? (JSON.parse(localStorage.getItem("cart") || "[]") as any[])
          : [],
    });
    const { name, phone, email, question, products } = formValues;
    let message = `
       <b>Заказ:</b>
       <blockquote>
Имя: ${name}
Телефон: ${phone}
Почта: ${email}
${question ? `Сообщение: ${question}` : ""}</blockquote>`;

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
        <MaskedInput
          mask={[
            "+",
            "7",
            " ",
            "(",
            /[1-9]/,
            /\d/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
          ]}
          value={formValues.phone}
          onChange={(e) => changeValue(e)}
          render={(ref, { ...inputProps }) => (
            <input
              ref={ref as React.LegacyRef<HTMLInputElement>}
              {...inputProps}
              placeholder="+7 (___) ___ __ __"
              type="text"
              id="phone"
            />
          )}
        />
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
        <input
          type="checkbox"
          id="policy"
          checked={formValues.policy}
          onChange={changeValue}
          required
        />
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
        <input
          type="checkbox"
          id="consent"
          checked={formValues.consent}
          onChange={changeValue}
          required
        />
        <label htmlFor="consent">
          <span>Я даю согласие на обработку своих персональных данных</span>
        </label>
      </div>
    </form>
  );
}
