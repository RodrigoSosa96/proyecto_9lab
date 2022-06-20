import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import CardSkeleton from "./CardSkeleton"

import CartContext from "../../context/cart/CartContext"
import SessionContext from "../../context/session/SessionContext"

import { formatPrecio } from "../../utils"
import { getBooks } from "../../api/bookAPI"

const TarjetaDetalles = ({ isbn }) => { 
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { addToCart } = useContext(CartContext)
  const {isAdmin} = useContext(SessionContext)
  


  useEffect(() => {
    setLoading(true)
    getBooks(isbn).then(book => {
      if (book.length || book.error) return
      setBook(book)
      setLoading(false)
    })
  }, [isbn])

  useEffect(() => {
    
  })

  
  if(loading) return (
    <CardSkeleton/>
  )
  return (
    <div className="card md:card-side  rounded-none">
      <figure className="min-w-[20%] "><img className='object-contain md:object-cover w-full h-64 md:h-auto  ' src={book.cover} alt="Book" /></figure>
      <div className="card-body">
        <h2 className="card-title">{book.titulo}</h2>
        <p className="font-mono text-xs">ISBN: {book.isbn}</p>
        <p className="max-w-prose">{book.description}</p>
        <div>
          <div className="stats stats-vertical  md:stats-horizontal w-full ">
            <div className="stat">
              <div className="stat-title">Autor</div>
              <div className="stat-value text-lg">{book.autor}</div>
              <div className="stat-desc">Editorial: {book.editorial}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Precio</div>
              <div className="stat-value text-lg">{formatPrecio(book.precio)}</div>
              <div className="stat-desc">Pesos argentinos</div>
            </div>

            <div className="stat">
              <div className="stat-title">Genero/s</div>
              <div className="badge badge-outline">{!book.otroGenero ? book.genero : book.otroGenero}</div>
            </div>

          </div>

        </div>
        <div className="card-actions justify-end">
          {isAdmin && <Link className="btn btn-outline " to={`/admin/form/put/${book.isbn}`}>Editar</Link>}
          <button className="btn btn-outline " onClick={() => addToCart(book)} >Agregar al carrito</button>

        </div>
        
      </div>
      
    </div>
  )
}

export default TarjetaDetalles