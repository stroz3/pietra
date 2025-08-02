import "./popUp.scss";

import Image from "next/image";
import React, { useState } from "react";

import Form from "@/components/form/Form";

export default function PopUp({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void;
}) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsOpen(false);
    }, 3000); // Hide success message and close popup after 3 seconds
  };

  return (
    <div className="popUp" onClick={() => setIsOpen(false)}>
      <div
        className="popUp__container"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="popUp__wrapper">
          <div className="popUp__block">
            {showSuccess ? (
              <div className="popUp__success">
                <h2>Успешно отправлено!</h2>
                <p>
                  Ваше сообщение успешно отправлено. Наш специалист свяжется с
                  вами в течение часа.
                </p>
              </div>
            ) : (
              <>
                <div className="popUp__title">
                  <h2>Заполните форму</h2>
                  <p>И наш специалист свяжется с вами в течение часа</p>
                </div>
                <Form classNameBtn={"btn-orange"} onSuccess={handleSuccess} />
              </>
            )}
          </div>
          <div className="popUp__block">
            <div className="popUp__img">
              <Image
                src={"/assets/popUp/popUp.png"}
                alt={"popUp-image"}
                width={420}
                height={652}
              />
            </div>
          </div>
          <span className={"popUp__close"} onClick={() => setIsOpen(false)}>
            &#x2715;
          </span>
        </div>
      </div>
    </div>
  );
}
