import { useEffect, useState } from 'react'
import { getBooks } from "../api/bookAPI"

import Card from '../components/Cards/Card'
import CardSkeleton from '../components/Cards/CardSkeleton'

const Home = () => {
  const [libros, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsj, setErrorMsj] = useState('fadf')

  useEffect(() => {
    setLoading(true)

    getBooks().then(books => {
      setBooks(books)
      setLoading(false)

    }).catch(err => {
      console.error(err)
      setError(true)
      setErrorMsj(err.message)
    })
  }, [])


  return (
    <div className='p-4 max-w-7xl mx-auto'>
      {error && <p className="text-2xl	text-red-500 text-center">{errorMsj}</p> }
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