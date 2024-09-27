import { CatalogType } from "@/types/productsType";

export const CatalogData: CatalogType[] = [
  {
    id: "1",
    name: "Облицовочные изделия",
    availability: true,
    image: {
      src: "/assets/main/projects/catalogMain2.png",
      alt: "Облицовочные изделия",
    },
    subCatalogs: ["1"],
  },
  {
    id: "2",
    name: "Заборные изделия",
    availability: true,
    image: {
      src: "/assets/main/projects/catalogMain3.png",
      alt: "Заборные изделия",
    },
    subCatalogs: ["2", "3", "4", "5"],
  },
  {
    id: "3",
    name: "Тротуарыные изделия",
    image: {
      src: "/assets/main/projects/catalogMain1.png",
      alt: "Тротуарные изделия",
    },
    availability: true,
    subCatalogs: ["6", "7", "8", "9"],
  },
  {
    id: "4",
    name: "Лестничные изделия",
    availability: false,
    subCatalogs: [],
  },
  {
    id: "5",
    name: "Садовая и Парковая мебель",
    availability: false,
    subCatalogs: [],
  },
];
