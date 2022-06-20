import { useContext } from 'react'

import ItemCartTable from './ItemCartTable'

import CartContext from '../../context/cart/CartContext'

const Cart = () => {
  const { cartItems, total, realizarVenta } = useContext(CartContext)
  const cantidad = cartItems.length

  return (
    <div className="dropdown dropdown-left">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cantidad}</span>
        </div>
      </label>
      <div tabIndex="0" className="mt-3 card card-compact dropdown-content min-w-[13rem] bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cantidad} Items</span>
          <ItemCartTable items={cartItems}/>
          <span className="text-info self-end pr-4">Subtotal: $ {total}</span>
          <div className="card-actions">
            <button onClick={realizarVenta} className="btn btn-block">Realizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart