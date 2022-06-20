import { FORM_ERROR } from "final-form";
import { postBook, putBook } from "../../api/bookAPI"

export const handleSubmit = (method) => {
  let api
  switch (method.toLowerCase()) {
    case "post":
      api = postBook
      break;
    case "put":
      api = putBook
      break;
    default:
      api = putBook
      break;
  }
  
  return async (state) => {
    try {
      const res = await api(state)
      if (res.error) {
        return { [FORM_ERROR]: res.error }
      }
      return

    } catch {
      return { [FORM_ERROR]: "Error enviando formulario" }
    }
  }
} 
