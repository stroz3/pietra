"use client";
import "./subCatalog.scss";
import "@/styles/main.scss";

import { useState } from "react";

import Block from "@/components/mainPage/projects/layouts/Block";
import PopUp from "@/components/ui/popUp/PopUp";
import { CatalogData } from "@/data/catalog";
import { products } from "@/data/products";

interface SubCatalogParams {
  params: {
    catalogId: string;
  };
}

function getProductWord(count: number) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "товаров";
  }

  if (lastDigit === 1) {
    return "товар";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "товара";
  }

  return "товаров";
}

export default function SubCatalog({ params }: SubCatalogParams) {
  const { catalogId } = params;
  const subCatalog = products.filter((el) => el.catalogId === catalogId);
  const name = CatalogData.find((block) => block.id === catalogId)?.name;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="subCatalog">
      <div className="container">
        <div className="subCatalog__title">
          <h2 className="subCatalog__title-text">
            {name}
            <span>
              {` ${subCatalog.length}  ${getProductWord(subCatalog.length)}`}
            </span>
          </h2>
        </div>
        <div className="subCatalog__wrapper">
          {subCatalog.map((block) => (
            <Block
              key={block.id}
              name={block.name}
              availability={block.availability}
              image={block.imageMain}
              setIsOpen={setIsOpen}
              URL={`/catalog/${catalogId}/product/${block.id}`}
            />
          ))}
        </div>
      </div>
      {isOpen ? <PopUp setIsOpen={setIsOpen} /> : null}
    </div>
  );
}
