"use client";
import "./advert.scss";
import "@/styles/main.scss";

import Image from "next/image";
import { useEffect, useState } from "react";

import Price from "@/components/mainPage/price/Price";
import PopUp from "@/components/ui/popUp/PopUp";
import SliderGallary from "@/components/ui/sliders/sliderGallery/SliderGallary";
import { forms } from "@/data/forms";
import { products } from "@/data/products";
import { textures } from "@/data/textures";
import { useStoreCart } from "@/store/store";
import { textureFormType } from "@/types/productsType";
import formatNumber from "@/utils/formatNumber/formatNumber";
import checkLastId from "@/utils/localStore/checkLastId";

interface Product {
  params: {
    productId: string;
  };
}

interface facturesType {
  id: string;
  name: string;
  count: number;
}

interface CartFormType {
  factures: facturesType[];
  formsId: string[];
}

export default function Product({ params }: Product) {
  const { productId } = params;
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [cartForm, setCartForm] = useState<CartFormType>({
    factures: [],
    formsId: [],
  });
  const factures = useStoreCart((state) => state.factures);
  const increaseCount = useStoreCart((state) => state.increaseCount);
  const decreaseCount = useStoreCart((state) => state.decreaseCount);
  const setFactures = useStoreCart((state) => state.updateFactures);
  const addToCart = useStoreCart((state) => state.addToCart);
  const product = products.find((el) => el.id === productId);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [displayPrice, setDisplayPrice] = useState<number>(0);

  useEffect(() => {
    if (product?.textures) {
      setFactures(
        product.textures.map((texture) => ({
          id: texture.id,
          name: texture.name,
          img: texture.img,
          count: 0,
        })),
      );
    }
  }, [product, setFactures]);

  useEffect(() => {
    const newFactures = factures.map((el) => ({
      id: el.id,
      name: el.name,
      count: el.count,
    }));

    setCartForm((prevCartForm) => {
      const updatedFactures = newFactures.map((newFacture) => {
        const existingFacture = prevCartForm.factures.find(
          (f) => f.id === newFacture.id,
        );
        return existingFacture
          ? { ...existingFacture, count: newFacture.count }
          : newFacture;
      });

      return {
        ...prevCartForm,
        factures: updatedFactures,
      };
    });
  }, [factures]);

  function checkEmpty(): boolean {
    // Проверяем, если все объекты в factures имеют count === 0
    const allFacturesEmpty = cartForm.factures.every(
      (facture) => facture.count === 0,
    );

    // Проверяем, если formsId пустой
    const isFormsIdEmpty = cartForm.formsId.length === 0;

    // Если оба условия выполнены, возвращаем true, иначе false
    return allFacturesEmpty || isFormsIdEmpty;
  }

  function handleCheckboxChange(value: string) {
    setCheckedItems((prevItems) => {
      if (prevItems.includes(value)) {
        // If the item is already in the array, remove it
        return prevItems.filter((item) => item !== value);
      } else {
        // If the item is not in the array, add it
        return [...prevItems, value];
      }
    });
    const caption =
      product?.forms?.map((el) => el).find((el) => el.name === value)
        ?.caption ?? "";
    setCartForm((prevCartForm) => {
      const { formsId } = prevCartForm;
      if (formsId.includes(caption)) {
        return {
          ...prevCartForm,
          formsId: formsId.filter((id) => id !== caption),
        };
      } else {
        return {
          ...prevCartForm,
          formsId: [...formsId, caption],
        };
      }
    });
  }

  function calculateTotalPrice(cart: CartFormType): number {
    let totalPrice = 0;

    // Перебираем все фактуры в корзине
    cart.factures.forEach((factureItem) => {
      // Находим продукт по его ID
      const product = textures.find((texture) => texture.id === factureItem.id);

      // Перебираем все формы, указанные в cart
      cart.formsId.forEach((formId) => {
        // Находим форму по её ID
        const form = forms.find((f) => f.caption === formId);

        if (form) {
          // Получаем цену по форме
          const formPrice =
            product?.forms[form.caption as keyof textureFormType]?.pricePerUnit;

          if (formPrice !== undefined) {
            totalPrice += formPrice * factureItem.count; // Умножаем на количество
          }
        }
      });
    });

    return Math.ceil(totalPrice); // Округляем итоговую стоимость в большую сторону
  }

  useEffect(() => {
    const price = calculateTotalPrice(cartForm);
    setTotalPrice(price);
    animatePrice(price);
  }, [cartForm]);

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

  function handleClickAddToCart() {
    const formsForCart = forms.filter((form) =>
      cartForm.formsId.includes(form.caption),
    );
    if (!checkEmpty()) {
      addToCart({
        id: checkLastId() + 1,
        name: product?.name ?? "",
        img: product?.imageMain ?? {
          alt: "",
          src: "",
        },
        count: 1,
        price: displayPrice,
        facture: cartForm.factures.filter((el) => el.count > 0),
        form: [...formsForCart],
      });
      // router.push("/cart");
    }
  }

  return (
    <>
      <div className="advert">
        <div className="container">
          <div className="advert__wrapper">
            <div className="advert__info">
              <div className="advert__title">
                <h2>{product?.name}</h2>
                <SliderGallary />
              </div>
              <div className="advert__block advert-facture">
                <div className="advert__block-title">
                  <h2>Выберите фактуру</h2>
                </div>
                <div className="advert__block-wrapper">
                  {factures?.map((facture) => (
                    <Facture
                      key={facture.id}
                      imgSrc={facture.img}
                      name={facture.name}
                      count={facture.count}
                      onIncrease={() => increaseCount(facture.id)}
                      onDecrease={() => decreaseCount(facture.id)}
                    />
                  ))}
                </div>
              </div>
              <div className="advert__block advert-form">
                <div className="advert__block-title">
                  <h2>Выберите форму</h2>
                </div>
                <div className="advert__block-wrapper">
                  {product?.forms?.map((el) => (
                    <CheckBox
                      key={el.id}
                      checked={checkedItems.includes(el.name)}
                      label={el.name}
                      onChange={handleCheckboxChange}
                      value={el.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="advert__price-fixed">
              <h2 className="advert__price-title">
                {formatNumber(displayPrice)} ₽ / шт.
              </h2>
              <div className="advert__price-btns">
                <button
                  className="btn btn-orange"
                  onClick={handleClickAddToCart}
                  disabled={checkEmpty()}
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
            <div className="advert__price">
              <h2 className="advert__price-title desktop-block">
                {formatNumber(displayPrice)} ₽ / шт.
              </h2>
              <div className="advert__price-btns desktop-block">
                <button
                  className="btn btn-orange"
                  onClick={handleClickAddToCart}
                  disabled={checkEmpty()}
                >
                  Добавить в корзину
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => setIsOpen(true)}
                >
                  Связаться с менеджером
                </button>
              </div>

              <div className="advert__price-description">
                <h3 className="advert__price-under-title">Описание</h3>
                <p className="advert__price-text">
                  Он же бортовой камень. Незаменим для разделения проезжей части
                  и тротуара, велодорожек, пешеходных маршрутов от газонов и др.
                  зон городского общественного пространства. На участках
                  индивидуального домостроения может использоваться для декора в
                  ландшафтном дизайне, для защиты уровней почвы от размывания и
                  осыпания. Дополняет уложенную плитку, дополнительно защищая её
                  от износа и повреждений.
                </p>
              </div>
              <div className="advert__stats">
                <h3 className="advert__price-under-title">Характеристики</h3>
                <div className="advert__stats-block">
                  <span className="label">Длина</span>
                  <span className="value">500 мм.</span>
                  <span className={"advert__stats-dotted"}></span>
                </div>
                <div className="advert__stats-block">
                  <span className="label">Морозостойкость</span>
                  <span className="value">F300</span>
                  <span className={"advert__stats-dotted"}></span>
                </div>
              </div>
              <div className="advert__compound">
                <h3 className="advert__price-under-title">Состав</h3>
                <ul className="advert__compound-list">
                  <li>30% высокопрочный фибробетон марки М600</li>
                  <li>
                    70% натуральная крошка распределена по всему объему изделия
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Price />
        {isOpen ? <PopUp setIsOpen={setIsOpen} /> : null}
      </div>
    </>
  );
}

//.advert__
function Facture({
  imgSrc,
  name,
  count,
  onIncrease,
  onDecrease,
}: {
  imgSrc: string;
  name: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div className="advert__block-facture">
      <div className="advert__block-facture-image">
        <Image src={imgSrc} alt={"image"} width={40} height={40} />
        <p style={{}}>{name}</p>
      </div>
      <div className="advert__block-facture-count">
        <button
          className={"advert__btn"}
          onClick={onDecrease}
          disabled={count === 0}
        >
          &#8212;
        </button>
        <p
          style={{
            display: "flex",
            gridGap: "3px",
          }}
        >
          {count}
          <span> шт.</span>
        </p>
        <button className={"advert__btn"} onClick={onIncrease}>
          &#43;
        </button>
      </div>
    </div>
  );
}

function CheckBox({
  label,
  value,
  checked,
  onChange,
}: {
  label: string;
  value: string;
  checked: boolean;
  onChange: any;
}) {
  return (
    <>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange(value)}
        />
        <span className="checkmark"></span>
        {label}
      </label>
    </>
  );
}
