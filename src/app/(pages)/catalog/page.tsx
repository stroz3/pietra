import "@/styles/main.scss";
import "./catalog.scss";

import Block from "@/components/mainPage/projects/layouts/Block";

const blocks = [
  {
    id: 1,
    name: "Тротуарные изделия",
    image: {
      src: "/assets/main/projects/catalogMain1.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: 2,
    name: "Облицовочные изделия",
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: 3,
    name: "Заборные изделия",
    image: {
      src: "/assets/main/projects/catalogMain3.png",
      alt: "catalogMain1",
    },
    availability: true,
  },
  {
    id: 3,
    name: "Садовая и парковая мебель",
    availability: false,
  },
  {
    id: 4,
    name: "Лестничные изделия",
    availability: false,
  },
];

export default function Catalog() {
  return (
    <>
      <div className="catalog">
        <div className="container">
          <div className="catalog__title">
            <h2 className="catalog__title-text">Каталог</h2>
          </div>
          <div className="catalog__wrapper">
            {blocks.map((block, index) => (
              <Block
                key={index}
                name={block.name}
                availability={block.availability}
                image={block?.image}
                URL={`/catalog/${block.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
//.catalog__
