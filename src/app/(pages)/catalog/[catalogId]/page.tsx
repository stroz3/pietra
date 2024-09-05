"use client";
import "./subCatalog.scss";
import "@/styles/main.scss";

import Block from "@/components/mainPage/projects/layouts/Block";

interface SubCatalogParams {
  params: {
    catalogId: string;
  };
}

const blocks = [
  {
    id: "1",
    name: "Бордюр",
    image: {
      src: "/assets/main/projects/catalogMain1.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "2",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "3",
    name: "Заборные изделия",
    image: {
      src: "/assets/main/projects/catalogMain3.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "4",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "5",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "6",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "7",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "8",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "9",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "10",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "10",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: "11",
    name: "Фасадные панели",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
];
export default function SubCatalog({ params }: SubCatalogParams) {
  const { catalogId } = params;
  const name = blocks.find((block) => block.id === catalogId)?.name;
  return (
    <div className="subCatalog">
      <div className="container">
        <div className="subCatalog__title">
          <h2 className="subCatalog__title-text">
            {name} <span>{blocks.length + " товаров"}</span>
          </h2>
        </div>
        <div className="subCatalog__wrapper">
          {blocks.map((block, index) => (
            <Block
              key={index}
              name={block.name}
              availability={block.availability}
              image={block?.image}
              URL={`/catalog/${catalogId}/product/${block.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
