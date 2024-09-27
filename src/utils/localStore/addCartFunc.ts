// import { FormType, ImageType } from "@/types/productsType";
//
// interface FactureType {
//   id: string;
//   name: string;
//   count: number;
// }
//
// interface cartObjectType {
//   id: number;
//   img: ImageType;
//   name: string;
//   count: number;
//   price: number;
//   facture?: FactureType[];
//   form: FormType[];
// }
//
// export default function addToCart(newData: cartObjectType) {
//   // Получаем данные из localStorage и проверяем, является ли это массивом
//   const existingData = JSON.parse(localStorage.getItem("cart") || "[]");
//   // Если existingData не является массивом, преобразуем его в пустой массив
//   const updatedData = Array.isArray(existingData)
//     ? [...existingData, newData] // добавляем новый элемент
//     : [newData]; // если данных не было, создаем новый массив с элементом
//
//   // Сохраняем обновленные данные в localStorage
//   localStorage.setItem("cart", JSON.stringify(updatedData));
// }
