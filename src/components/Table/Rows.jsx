import { Link } from 'react-router-dom'

import { formatPrecio } from '../../utils'


const Rows = ({ books, handleSelect }) => {
  return (
    <>
      {
        books.map(book => (
          <tr className="hover" key={book.isbn}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" onClick={() => handleSelect(book.isbn)} />
              </label>
            </th>
            <td className="align-top w-fit">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask w-12 h-16 rounded">
                    <img src={book.cover} alt={book.titulo} />
                  </div>
                </div>
                <div>
                  <div className="collapse w-80 max-w-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-medium">
                      <div className="font-bold">{book.titulo}</div>
                      <div className="text-xs font-mono   opacity-50 select-none">ISBN: {book.isbn}</div>

                    </div>
                    <div className="collapse-content ">
                      <p className="text-sm opacity-50  truncate whitespace-normal ">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td >
              <p className="text-sm">{book.editorial}</p>
              <br />
            </td>
            <td >
              <span className="badge badge-ghost badge-sm py-3">{!book.otroGenero ? book.genero : book.otroGenero}</span>
            </td>
            <td className="w-40 max-w-xs ">
              <p className="text-sm opacity-50 truncate">{book.cover}</p>
            </td>
            <td >
              <p className="text-sm">{formatPrecio(book.precio)}</p>
            </td>
            <td >
              <Link to={`form/put/${book.isbn}`} className="btn  btn-outline btn-sm ">Modificar</Link>
            </td>
          </tr>
        ))
      }
    </>

  )
}

export default Rows