import "./form.scss";

import Link from "next/link";

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
};
const defaultStyleForForm: styleForForm = {
  width: "100%",
};
const defaultStyleForButton: styleForButton = {};

export default function Form({
  styleForButton,
  styleForForm,
  classNameBtn,
  classNameForm = "form-dark",
}: Form) {
  return (
    <form
      action=""
      className={classNameForm ?? ""}
      style={styleForForm || defaultStyleForForm}
    >
      <div className="input-container">
        <input type="text" id="name" placeholder=" " required />
        <label htmlFor="name">ФИО</label>
      </div>

      <div className="input-container">
        <input
          type="tel"
          id="phone"
          placeholder=" "
          required
          defaultValue={"+7"}
        />
        <label htmlFor="phone">Телефон</label>
      </div>

      <div className="input-container">
        <input type="email" id="email" placeholder=" " required />
        <label htmlFor="email">Эл. почта</label>
      </div>

      <div className="input-container">
        <input type="text" id="question" placeholder=" " required />
        <label htmlFor="question">Опишите кратко ваш вопрос</label>
      </div>
      <button
        className={
          classNameBtn ? `btn ${classNameBtn} form__button` : "btn form__button"
        }
        style={styleForButton || defaultStyleForButton}
      >
        Получить консультацию
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
