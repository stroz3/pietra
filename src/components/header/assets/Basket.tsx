import Link from "next/link";

import { useStoreCart } from "@/store/store";

type Basket = {
  href: string;
};

export const Basket = ({ href }: Basket) => {
  // const cartLength = JSON.parse(localStorage.getItem("cart") || "[]").length;
  const cartCount = useStoreCart((state) =>
    Array.isArray(state.cart) ? state.cart.length : 0,
  );
  return (
    <Link href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M1 1H3.79441L7.51098 18.4316C7.64731 19.07 8.00094 19.6407 8.51097 20.0454C9.02101 20.4502 9.65556 20.6636 10.3054 20.6491H23.9701C24.606 20.6481 25.2226 20.4292 25.718 20.0285C26.2134 19.6279 26.5579 19.0695 26.6946 18.4456L29 8.01754H5.28942M10.7106 27.5965C10.7106 28.3716 10.085 29 9.31337 29C8.54172 29 7.91617 28.3716 7.91617 27.5965C7.91617 26.8214 8.54172 26.193 9.31337 26.193C10.085 26.193 10.7106 26.8214 10.7106 27.5965ZM26.0798 27.5965C26.0798 28.3716 25.4543 29 24.6826 29C23.911 29 23.2854 28.3716 23.2854 27.5965C23.2854 26.8214 23.911 26.193 24.6826 26.193C25.4543 26.193 26.0798 26.8214 26.0798 27.5965Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {cartCount > 0 ? <p>{cartCount}</p> : null}
    </Link>
  );
};
