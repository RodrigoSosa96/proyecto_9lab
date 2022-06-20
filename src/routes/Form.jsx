import { useEffect, useState } from 'react'
import { Form as FinalForm } from 'react-final-form'
import { useParams } from 'react-router-dom'
import { getBooks } from '../api/bookAPI'

import RenderForm from '../components/Form'
import { handleSubmit } from '../components/Form/HandleSubmit'

import { validators } from '../validators/book.validators'



const Form = () => {
  const [book, setBook] = useState({
    isbn: "",
    genero: "",
    titulo: "",
    autor: "",
    editorial: "",
    description: "",
    cover: "",
    precio: ""
  })


  const { isbn, method } = useParams()
  const submit = handleSubmit(method)
  
  useEffect(() => {
    if(isbn) {
      getBooks(isbn).then(res => {
        setBook(res)
      })
    }
  },[])

  return (
    <div className='flex flex-col items-center min-h-fit m-4'>
      <h1>Modificar Libros</h1>
      <FinalForm
        onSubmit={submit}
        initialValues={book}
        initialValuesEqual={(a, b) => a.isbn === b.isbn}
        validate={validators}
        subscription={{ submitting: true, pristine: true, submitError: true, invalid: true }}
        render={(props) => <RenderForm {...props} />}
      />
    </div>
  )
}

export default Form