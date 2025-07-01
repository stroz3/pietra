import { CatalogType } from "@/types/productsType";

export const CatalogData: CatalogType[] = [
  {
    id: "1",
    name: "Тротуарная и уличная отделка",
    availability: true,
    image: {
      src: "/assets/main/projects/catalogs/Sidewalk/Plitka/PlitkaKvadrat/BUI03432.jpeg",
      alt: "Sidewalk and street finishing",
    },
    subCatalogs: ["1"],
  },
  {
    id: "2",
    name: "Ограждения и парапеты",
    availability: true,
    image: {
      src: "/assets/main/projects/catalogs/Fences/StolbovoiBlok/BUI03649.jpeg",
      alt: "Fences and parapets",
    },
    subCatalogs: ["2"],
  },
  {
    id: "3",
    name: "Стеновая кладка и облицовка",
    image: {
      src: "/assets/main/projects/catalogs/Wall/Облицовка/BUI03477.jpg",
      alt: "Wall masonry and cladding",
    },
    availability: true,
    subCatalogs: ["3"],
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
