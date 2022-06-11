import React from 'react'
import { Form, Field } from 'react-final-form'
import AddBook from './AddBook.Form'


const Admin = () => {
  const onSubmit = (data) => {
    console.table(data)
  }
  const validator = () => {
    // debugger
    console.log("validate")
  }
  return (
    <div className='flex flex-col items-center min-h-fit m-4'>
      <h1>Agregar Libros</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={(props) => <AddBook {...props} />}
      />
    </div>
  )
}

export default Admin