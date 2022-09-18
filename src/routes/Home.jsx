import { useEffect, useState } from 'react'
import { BASE_URL } from '../api/api'
import { getBooks } from "../api/bookAPI"

import Card from '../components/Cards/Card'
import CardSkeleton from '../components/Cards/CardSkeleton'

const Home = () => {
  const [libros, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    getBooks().then(books => {
      if (!books || books.error || books.length == 0) throw new Error
      setBooks(books)
      setLoading(false)

    }).catch(err => {
      setError(true)
    })
  }, [])


  return (
    <div className='p-4 max-w-7xl mx-auto'>
      {
        error &&
        <a href={`${BASE_URL}reset`} class="alert alert-error shadow-lg mb-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error en la carga de datos, haz click para restablecer</span>
          </div>
        </a>
      }
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          loading
            ? <CardSkeleton span={8} />
            : libros.map(libro => (
              <Card key={libro.isbn} libro={libro} />
            ))
        }
      </div>
    </div>
  )
}

export default Home