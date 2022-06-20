import { getLibrary } from "../api/bookAPI"
// import { sleep } from "../utils"



export const validators = (values) => {
  const errors = {}

  if (!values.titulo) {
    errors.titulo = 'Por favor ingrese un titulo'
  }
  if (!values.autor) {
    errors.autor = 'Por favor ingrese un autor'
  }
  if (!values.editorial) {
    errors.editorial = 'Por favor ingrese una editorial'
  }
  if(!values.genero || values.genero === 'DEFAULT') {
    errors.genero = 'Por favor ingrese un genero'
    if (values.genero === "Otro" && !values.otroGenero) {
      errors.otroGenero = 'Por favor ingrese un genero'
    }
  }

  return errors
}


export const checkISBN = async (isbn) => {
  try {
    if (isbn.length === 13 || isbn.length === 10) {
      // await sleep(1000)
      const data = await getLibrary(isbn)
      if (data.error) {
        console.log(data.error)
        return "ISBN no encontrado"
      }
      return
    }
    return "ISBN debe ser de 10 o 13 digitos"
  } catch {
    return "Error al consultar ISBN"
  }

}
