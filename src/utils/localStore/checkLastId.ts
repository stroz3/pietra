export default function checkLastId(): number {
  const existingData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [];
  if (existingData.length !== 0)
    return existingData[existingData.length - 1].id;
  else return 0;
}
