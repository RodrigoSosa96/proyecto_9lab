import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Rows from "./Rows"
import RowSkeleton from "./RowSkeleton"

import { deleteBook, getBooks } from "../../api/bookAPI"



const Table = () => {
  const [selectedBooks, setSelectedBooks] = useState([])
  const [books, setBooks] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    getBooks().then(data => {
      setBooks(data)
      setLoading(false)
      
    }).catch(err => {
      console.log(err)
      setError(true)
    })
    
  }, [loading])




  const handleSelect = (isbn) => {
    const index = selectedBooks.indexOf(isbn)
    if (index === -1) {
      setSelectedBooks([...selectedBooks, isbn])
    }
    else {
      setSelectedBooks(selectedBooks.filter(b => b !== isbn))
    }
  }




  return (
    <>

      <table className="table  table-zebra table-compact w-full"  >
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox pointer-events-none" disabled />
              </label>
            </th>
            {
            !error ?
              <th>Libro</th> :
              <th className="text-red-500">Error al cargar los libros</th>
            }
            <th>Editorial</th>
            <th>Genero/s</th>
            <th>Cover</th>
            <th>Precio</th>
            <th>Modificar</th>
          </tr>
        </thead>
        <tbody >
          {
            loading
              ? <RowSkeleton />
              : <Rows books={books} handleSelect={handleSelect} />
          }

        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>
              <Link to={`form/post`} className="btn btn-sm btn-outline" disabled={loading}>Agregar Libro</Link>
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <a
                className="btn btn-sm btn-outline btn-error"
                disabled={loading || selectedBooks.length === 0}
                onClick={() => deleteBook(selectedBooks).then(() => {
                  setLoading(true)
                  setSelectedBooks([])
                })}
              >Eliminar</a>
            </th>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default Table