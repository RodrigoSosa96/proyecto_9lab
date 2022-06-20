import { Field } from 'react-final-form'
import { checkISBN } from '../../validators/book.validators';
import { formatPrecio, parsePrecio } from '../../utils';

import Error from './Error';
import FieldContainer from './FieldContainer';

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (
      <>
        {value === is ? children[1] : children[0]}
      </>
    )}
  </Field>
)

const RenderForm = ({ handleSubmit, form, submitting, pristine, submitError, invalid }) => {


  // form.batch(() => {
  //   form.change('isbn', '1234')
  //   form.change('titulo', 'Test') 
  // })

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg ">
      <div className="flex flex-wrap">
        <FieldContainer label="ISBN" check="Autocompletado con openlibrary.org" width='w-full'>
          <Field name='isbn' validate={checkISBN} component="input" type="text" placeholder="9780140328721" className="input w-full bg-gray-200"  />
          <Error name="isbn"  asyncValidation="Validacion desde openlibrary.org"/>
        </FieldContainer>
      </div>
      <div className="flex flex-wrap md:flex-nowrap	md:gap-2">
        <FieldContainer label="Titulo" >
          <Field name='titulo' component="input" type="text" placeholder="Fantastic Mr Fox" className="input bg-gray-200" />
          <Error name="titulo" />
        </FieldContainer>
        <FieldContainer label="Autor">
          <Field name="autor" component="input" type="text" placeholder="Roald Dahl" className="input bg-gray-200" />
          <Error name="autor" />
        </FieldContainer>
      </div>
      <div className="flex flex-wrap md:flex-nowrap	md:gap-2">
        <FieldContainer label="Editorial" >
          <Field name='editorial' component="input" type="text" placeholder="Puffin" className="input bg-gray-200" />
          <Error name="editorial" />
        </FieldContainer>
        <FieldContainer label="Generos">
          <Condition when="genero" is="Otro">
            <>
              <Field name="genero" component="select" type="text" placeholder="Roald Dahl" className="select bg-gray-200" >
                <option value="DEFAULT" disabled>Seleccione un genero</option>
                <option value="Fantasia">Fantasia</option>
                <option value="Ficción">Ficción</option>
                <option value="Ciencia ficción">Ciencia Ficción</option>
                <option value="Romance">Romance</option>
                <option value="Historia">Historia</option>
                <option value="Otro">Otro</option>
              </Field>
              <Error name="genero" />
            </>
            <>
              <Field name="otroGenero" component="input" type="text" placeholder="Otro" className="input bg-gray-200" />
              <Error name="otroGenero" />
            </>
          </Condition>
        </FieldContainer>
      </div>
      <div className="flex flex-wrap md:flex-nowrap	md:gap-2">
        <FieldContainer label="Precio" >
          <Field name='precio' format={formatPrecio} parse={parsePrecio} component="input" type="text" placeholder="$ 1.190" className="input bg-gray-200" />
          <Error name="precio" />
        </FieldContainer>
        <FieldContainer label="Cover Link">
          <Field name="cover" component="input" type="url" placeholder="https://covers.openlibrary.org/b/id/8739161-L.jpg" className="input bg-gray-200" />
          <Error name="cover" />
        </FieldContainer>
      </div>
      <div className='w-full max-w-lg'>
        <FieldContainer label="Descripción" width='w-full'>
          <Field name="description" component="textarea" placeholder="Descripción del libro" className="textarea bg-gray-200 h-32 overflow-hidden" />
        </FieldContainer>
      </div>
      <div className='form-control mt-3'>
        <label className="label cursor-pointer justify-start gap-8  ">
          <span className="label-text">Opciones avanzadas:</span>
          <input type="checkbox" disabled className="toggle toggle-sm	" />
          {submitError && <span className="label-text text-red-500">{submitError}</span>}
        </label>
      </div>
      <div className='flex gap-5 mt-5'>
        <button
          className={`btn btn-sm btn-outline ${submitting ? 'loading': ''}`}
  
          type="submit"
          disabled={submitting || invalid || pristine}
        >
          Enviar
        </button>
        <button
          className='btn btn-sm btn-outline'
          type='button'
          onClick={form.reset}
          disabled={submitting || pristine}
        >
          Reset
        </button>
      </div>
      {/* <FormSpy>
        {({ values }) => {
          return <pre>{JSON.stringify(values, null, 2)}</pre>
        }}
      </FormSpy> */}
    </form>
    )
    
}
  export default RenderForm