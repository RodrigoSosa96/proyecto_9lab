import api from "./api";


export const postVenta = async ({ cartItems }) => {
  try {
    const data = {
      articles: cartItems.map((book) => ({
        isbn: book.isbn,
        cantidad: book.cantidad,
      })),
      timestamp: Date.now(),
    };
    const res = await api.post("/ventas", data)
    return res.data
  } catch {
    return { error: "POST error" }
  }
}