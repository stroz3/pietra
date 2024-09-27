"use client";
import "@/styles/main.scss";
import "./catalog.scss";

import { useState } from "react";

import Block from "@/components/mainPage/projects/layouts/Block";
import PopUp from "@/components/ui/popUp/PopUp";
import { CatalogData } from "@/data/catalog";

// const blocks = [
//   {
//     id: 1,
//     name: "Тротуарные изделия",
//     image: {
//       src: "/assets/main/projects/catalogMain1.png",
//       alt: "catalogMain1",
//     },
//     availability: true,
//   },
//   {
//     id: 2,
//     name: "Облицовочные изделия",
//     image: {
//       src: "/assets/main/projects/catalogMain2.png",
//       alt: "catalogMain1",
//     },
//     availability: true,
//   },
//   {
//     id: 3,
//     name: "Заборные изделия",
//     image: {
//       src: "/assets/main/projects/catalogMain3.png",
//       alt: "catalogMain1",
//     },
//     availability: true,
//   },
//   {
//     id: 3,
//     name: "Садовая и парковая мебель",
//     availability: false,
//   },
//   {
//     id: 4,
//     name: "Лестничные изделия",
//     availability: false,
//   },
// ];

export default function Catalog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="catalog">
        <div className="container">
          <div className="catalog__title">
            <h2 className="catalog__title-text">Каталог</h2>
          </div>
          <div className="catalog__wrapper">
            {CatalogData.map((block) => (
              <Block
                key={block.id}
                name={block.name}
                availability={block.availability}
                image={block?.image}
                setIsOpen={setIsOpen}
                URL={`/catalog/${block.id}`}
              />
            ))}
          </div>
        </div>
        {isOpen ? <PopUp setIsOpen={setIsOpen} /> : null}
      </div>
    </>
  );
}
//.catalog__
