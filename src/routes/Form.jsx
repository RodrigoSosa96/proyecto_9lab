import { Component } from 'react'
import { Form as FinalForm } from 'react-final-form'
import { useParams } from 'react-router-dom'
import { getBooks } from '../api/bookAPI'

import RenderForm from '../components/Form'
import { handleSubmit } from '../components/Form/HandleSubmit'

import { validators } from '../validators/book.validators'


function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class FormClass extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      book: {
        isbn: "",
        genero: "",
        titulo: "",
        autor: "",
        editorial: "",
        description: "",
        cover: "",
        precio: ""
      },
    }
    this.validators = validators
    this.getBooks = getBooks
    console.log(this.props.params.method)
    this.submit = handleSubmit(this.props.params.method)

  }

  componentDidMount() {
    const { isbn } = this.props.params
    if (isbn) {
      this.getBooks(isbn).then(res => {
        this.setState({ book: res })
      })
    }
  }

  render() {
    return (
      <div className='flex flex-col items-center min-h-fit m-4'>
        <h1>Modificar Libros</h1>
        <FinalForm
          onSubmit={this.submit}
          initialValues={this.state.book}
          initialValuesEqual={(a, b) => a.isbn === b.isbn}
          validate={this.validators}
          subscription={{ submitting: true, pristine: true, submitError: true, invalid: true }}
          render={(props) => <RenderForm {...props} />}
        />
      </div>
    )
  }
  

}

export default withParams(FormClass)