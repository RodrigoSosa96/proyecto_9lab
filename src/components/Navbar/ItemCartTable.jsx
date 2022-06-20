import { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'

const ItemCartTable = ({items}) => {
  const { decrementItem, incrementItem } = useContext(CartContext)
  
  if (items.length) return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>N°</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Precio</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((libro, key) => {
            return (
              <tr key={key}>
                <th>{libro.cantidad ?? 0}</th>
                <td>{libro.titulo}</td>
                <td>{libro.autor}</td>
                <td>$ {libro.precio || 0}</td>
                <td className='flex gap-1' >
                  <kbd className="btn h-auto kbd cursor-pointer" onClick={() => decrementItem(libro)}>▼</kbd>
                  <kbd className="btn h-auto kbd cursor-pointer" onClick={() => incrementItem(libro)}>▲</kbd>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ItemCartTable