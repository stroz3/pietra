import create from "zustand";

import { FormType, ImageType } from "@/types/productsType";

interface Facture {
  id: string;
  name: string;
  img: string;
  count: number;
}

interface FactureType {
  id: string;
  name: string;
  count: number;
}

export interface cartObjectType {
  id: number;
  img: ImageType;
  name: string;
  count: number;
  price: number;
  facture?: FactureType[];
  form: FormType[];
}

type FactureStore = {
  factures: { id: string; name: string; count: number; img: string }[];
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  updateFactures: (factures: Facture[]) => void;
  cart: cartObjectType[];
  addToCart: (item: cartObjectType) => void;
  updateToCart: (items: cartObjectType[]) => void;
};

export const useStoreCart = create<FactureStore>((set) => ({
  factures: [],
  cart: (() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  })(),
  increaseCount: (id) =>
    set((state) => ({
      factures: state.factures.map((facture) =>
        facture.id === id ? { ...facture, count: facture.count + 1 } : facture,
      ),
    })),
  decreaseCount: (id) =>
    set((state) => ({
      factures: state.factures.map((facture) =>
        facture.id === id && facture.count > 0
          ? { ...facture, count: facture.count - 1 }
          : facture,
      ),
    })),
  // Инициализируем корзину из localStorage
  // addToCart: (item) =>
  //   set((state) => {
  //     const updatedCart = [...state.cart, item];
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     return { cart: updatedCart };
  //
  //     // const updatedData = Array.isArray(state.cart)
  //     //     ? [...state.cart, item]
  //     //     : [item];
  //     //
  //     // localStorage.setItem("cart", JSON.stringify(updatedData)); // Сохраняем в localStorage
  //     // return { cart: updatedData };
  //   }),
  addToCart: (item) =>
    set((state) => {
      if (Array.isArray(item)) {
        return state; // Prevent adding an array to the cart
      }

      const updatedCart = Array.isArray(state.cart)
        ? [...state.cart, item]
        : [item]; // If cart is not an array, start a new array

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { cart: updatedCart };
    }),
  updateToCart: (items) =>
    set(() => {
      const updatedCart = items;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  // countCart: (state) => (Array.isArray(state.cart) ? state.cart.length : 0),
  updateFactures: (newFactures) => set({ factures: newFactures }),
}));
