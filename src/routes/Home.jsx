import { Component } from 'react'
import { getBooks } from "../api/bookAPI"

import Card from '../components/Cards/Card'
import CardSkeleton from '../components/Cards/CardSkeleton'

class Home extends Component {

  constructor() {
    super()
    this.state = {
      libros: [],
      loading: false  
    }
  }
  componentDidMount() {
    this.setState({ loading: true })
    getBooks().then(books => {
      if(books.error) throw books.error
      this.setState({ libros: books, loading: false })
    }).catch(err => {
      console.error(err)
      this.setState({ loading: true })
    })
  }

  render() {
    return (
      <div className='p-4 max-w-7xl mx-auto'>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            this.state.loading
              ? <CardSkeleton span={8} />
              : this.state.libros.map(libro => (
                <Card key={libro.isbn} libro={libro} />
              ))
          }
        </div>
      </div>
    )
  }
}

export default Home