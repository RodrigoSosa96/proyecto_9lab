import React from 'react'
import { Field } from 'react-final-form'
import { Icon } from '@iconify/react';



const FormControl = ({ label, isMandatory, children, width = "w-1/2", check }) => (
  // ! Chequear si width compila en producción
  <div class={`form-control w-full md:${width}`} >
    <label class="label">
      <span className='label-text font-semibold'>{label}</span>
    </label>
    {children}
    <label className="label">
      {isMandatory &&
        <span className='label-text-alt italic'>{isMandatory}</span>
      }
      {check &&
        <>
          <span className='label-text-alt italic'>{check} </span>
          <Icon icon="line-md:loading-loop" />
        </>}
    </label>
  </div>
)



const AddBook = ({ handleSubmit, form, submitting, pristine, values }) => (
  <form class="w-full max-w-lg ">
    <div class="flex flex-wrap">
      <FormControl label="ISBN" check="Autocompletado con openlibrary.org" width='w-full'>
        <Field name='isbn' component="input" type="text" placeholder="9780140328721" class="input w-full bg-gray-200"  />
      </FormControl>
    </div>
    <div class="flex flex-wrap md:flex-nowrap	md:gap-2">
      <FormControl label="Titulo" isMandatory >
        <Field name='titulo' component="input" type="text" placeholder="Fantastic Mr Fox" className="input bg-gray-200" />
      </FormControl>
      <FormControl label="Autor" isMandatory>
        <Field name="autor" component="input" type="text" placeholder="Roald Dahl" className="input bg-gray-200" />
      </FormControl>
    </div>
    <div class="flex flex-wrap md:flex-nowrap	md:gap-2">
      <FormControl label="Editorial" isMandatory >
        <Field name='editorial' component="input" type="text" placeholder="Fantastic Mr Fox" className="input bg-gray-200" />
      </FormControl>
      <FormControl label="Generos" isMandatory>
        <Field name="genero" component="select" type="text" placeholder="Roald Dahl" className="select bg-gray-200" >
          <option disabled selected>Seleccione un genero</option>
          <option value="1">Fantasia</option>
          <option value="2">Ficción</option>
          <option value="3">Ciencia Ficción</option>
          <option value="4">Romance</option>
          <option value="5">Historia</option>
          <option value="6">Otro</option>
        </Field>
      </FormControl>
    </div>
    <div className='w-full max-w-lg'>
      <FormControl label="Descripción" width='w-full'>
        <Field name="email" component="textarea" placeholder="Descripción del libro" className="textarea bg-gray-200 h-32" />
      </FormControl>
    </div>
    <div className='form-control'>
      <label class="label cursor-pointer justify-start gap-8  ">
        <span class="label-text">Opciones avanzadas:</span>
        <input type="checkbox"  class="toggle toggle-sm	" />
      </label>
    </div>
    <button type="submit" disabled={submitting || pristine}>
      Submit
    </button>
    <button
      type="button"
      onClick={form.reset}
      disabled={submitting || pristine}
    >
      Reset
    </button>
    <pre>{JSON.stringify(values, 0, 2)}</pre>

  </form>
  )
  
  export default AddBook