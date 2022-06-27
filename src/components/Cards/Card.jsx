import { Component } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/cart/CartContext"

class Card extends Component {
  static contextType = CartContext

  constructor(props) {
    super(props)
    
  }
  componentDidMount() {
    
  }
  render() {
    const { libro } = this.props
    const { addToCart } = this.context
    return(
      <div className="card bordered rounded-md bg-neutral hover:bg-neutral-focus ">
        <figure className="px-2 pt-3">
          <Link to={`libros/${libro.isbn}`}>
            <img className="object-contain w-full h-64" src={libro.cover} alt="Book" />
          </Link>
        </figure>
        <div className="card-body">
          <Link to={`libros/${libro.isbn}`} className="card-title cursor-pointer " title="Ver detalles">
            {libro.titulo}
          </Link>
          <p>$ {libro.precio ? libro.precio : "200"}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-outline " onClick={() => addToCart(libro)} > Agregar al carrito</button>
          </div>

        </div>
      </div>
    )
  }
}

export default Card