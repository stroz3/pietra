import "../projcets.scss";

import Image from "next/image";
import Link from "next/link";

type Image = {
  src?: string;
  alt?: string;
};

interface Block {
  name: string;
  image?: Image;
  availability: boolean;
  URL?: string;
  setIsOpen: any;
}

// const linkToCatalog = `/catalog/${}`;

export default function Block({
  name,
  image,
  availability,
  URL,
  setIsOpen,
}: Block) {
  const defaultImageSrc = "/assets/main/projects/Group.png";
  const defaultImageAlt = "notInCatalog";
  // const encodedName = encodeURIComponent(name);

  const imageSrc = image?.src || defaultImageSrc;
  const imageAlt = image?.alt || defaultImageAlt;
  return (
    <div className="projects__block">
      <div className="projects__block-wrapper">
        <div className="projects__block-title">
          <p className="projects__block-title-text">{name}</p>
        </div>
        <div
          className={
            availability
              ? "projects__block-image"
              : "projects__block-image not-available"
          }
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={availability ? 364 : 100}
            height={availability ? 268 : 100}
            priority
          />
          {!availability && (
            <p>
              Данный продукт находится на этапе разработки, но вы можете
              уточнить у менеджера наличие данной продукции
            </p>
          )}
        </div>
      </div>
      <div className="projects__block-buttons">
        <Link href={availability ? (URL ?? "") : ""}>
          <button
            className={availability ? `btn btn-orange` : "btn btn-gray"}
            onClick={(event) => {
              if (!availability) {
                event.preventDefault();
                setIsOpen(true);
              }
            }}
          >
            {availability ? "Перейти в каталог" : "Уточнить наличие"}
          </button>
        </Link>
      </div>
    </div>
  );
}
