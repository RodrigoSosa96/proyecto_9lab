import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Rows from "./Rows"
import RowSkeleton from "./RowSkeleton"

import { deleteBook, getBooks } from "../../api/bookAPI"
import { BASE_URL } from "../../api/api"



const Table = () => {
  const [selectedBooks, setSelectedBooks] = useState([])
  const [books, setBooks] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    getBooks().then(data => {
      if (!data || data.error || data.length == 0) throw new Error
      setBooks(data)
      setLoading(false)

    }).catch(() => {
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
      {
        error &&
        <a  href={`${BASE_URL}reset`} class="alert alert-error shadow-lg mb-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error en la carga de datos, haz click para restablecer</span>
          </div>
        </a>
      }
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
                  // setLoading(true)
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