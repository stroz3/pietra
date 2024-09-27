"use client";

import "./projcets.scss";
import "@/styles/main.scss";

import Image from "next/image";
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
export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="projects">
      <div className="projects__background-image">
        <Image
          src={"/assets/main/projects/ProjectsBack.png"}
          alt={"backImage"}
          fill
          priority={true}
        />
      </div>
      <div className="projects__block-green">
        <h2>Познакомьтесь с нашими проектами и изделиями</h2>
      </div>
      <div className="container">
        <div className="projects__wrapper">
          {CatalogData.map((block) => (
            <Block
              key={block.id}
              name={block.name}
              availability={block.availability}
              image={block?.image}
              URL={`/catalog/${block.id}`}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      </div>
      {isOpen ? <PopUp setIsOpen={setIsOpen} /> : null}
    </div>
  );
}
// .projects__
