import { useEffect, useState } from 'react'
import { getBooks } from "../api/bookAPI"

import Card from '../components/Cards/Card'
import CardSkeleton from '../components/Cards/CardSkeleton'

const Home = () => {
  const [libros, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getBooks().then(books => {
      setBooks(books)
      setLoading(false)
    })
  }, [])


  return (
    <div className='p-4 max-w-7xl mx-auto'>
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