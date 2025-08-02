export interface CatalogType {
  id: string;
  name: string;
  image?: ImageType;
  availability: boolean;
  subCatalogs: string[];
}

export interface ProductsType {
  id: string;
  name: string;
  description: string;
  imageMain?: ImageType;
  subCatalogId: string;
  availability: boolean;
  gallery?: GalleryType;
  characteristics?: CharacteristicType[];
  compounds?: CompoundType[];
  textures?: TextureType[];
  forms?: FormType[];
}

export interface ProductSubCatalogType {
  id: string;
  name: string;
  image: ImageType;
  availability: boolean;
  catalogId: string;
}

export interface GalleryType {
  images: ImageType[];
}

export interface ImageType {
  src: string;
  alt: string;
}

export interface CharacteristicType {
  id: string;
  name: string;
  description: string;
}

export interface CompoundType {
  id: string;
  description: string;
  percent: number;
}

interface formsTexturePricesType {
  pricePerUnit: number;
}

export interface textureFormType {
  square?: formsTexturePricesType;
  rhombus?: formsTexturePricesType;
  paving?: formsTexturePricesType;
  wave?: formsTexturePricesType;
  curb?: formsTexturePricesType;
  drain?: formsTexturePricesType;
  pillarBlock300x300?: formsTexturePricesType;
  pillarBlock350x350?: formsTexturePricesType;
  pillarBlock400x400?: formsTexturePricesType;
  capPillarBlock400x400?: formsTexturePricesType;
  capPillarBlock?: formsTexturePricesType;
  wall?: formsTexturePricesType;
  parapetWall?: formsTexturePricesType;
}

export interface TextureType {
  id: string;
  name: string;
  img: string;
  forms: textureFormType;
}

export interface FormType {
  id: string;
  name: string;
  caption: string;
  size: string;
}
