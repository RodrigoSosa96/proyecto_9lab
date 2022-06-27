import { Component } from 'react'
import { Link } from 'react-router-dom'
import SessionContext from '../../context/session/SessionContext'
import Cart from './Cart'


class Navbar extends Component {
  static contextType = SessionContext
  constructor() {
    super()
  }

  render() {
    const { switchAdmin, isAdmin } = this.context
    return (
      <div className="navbar items-center justify-between w-full max-w-4xl px-2 mx-auto my-1">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Librería Macondo</Link>
        </div>
        <div className="flex-none">
          {
            isAdmin
              ? <Link to="/admin" className="btn btn-ghost btn-sm">Admin</Link>
              : null
          }
          <button className="btn btn-ghost btn-sm" onClick={() => switchAdmin()}>{!isAdmin ? "Inicia sesión Admin" : "Cerrar Sesión"}</button>
          <Cart />
        </div>
      </div>
    )
  }
}

export default Navbar