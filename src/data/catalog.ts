import { CatalogType } from "@/types/productsType";

export const CatalogData: CatalogType[] = [
  {
    id: "1",
    name: "Тротуарная и уличная отделка",
    availability: true,
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "Sidewalk and street finishing",
    },
    subCatalogs: ["1"],
  },
  {
    id: "2",
    name: "Ограждения и парапеты",
    availability: true,
    image: {
      src: "/assets/main/projects/catalogMain3.png",
      alt: "Fences and parapets",
    },
    subCatalogs: [],
  },
  {
    id: "3",
    name: "Стеновая кладка и облицовка",
    image: {
      src: "/assets/main/projects/catalogMain1.png",
      alt: "Wall masonry and cladding",
    },
    availability: true,
    subCatalogs: [],
  },
  // ,
  // {
  //   id: "4",
  //   name: "Лестничные изделия",
  //   availability: false,
  //   subCatalogs: [],
  // },
  // {
  //   id: "5",
  //   name: "Садовая и Парковая мебель",
  //   availability: false,
  //   subCatalogs: [],
  // },
];
