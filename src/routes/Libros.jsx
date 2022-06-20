import { useParams  } from "react-router-dom"
import TarjetaDetalles from "../components/Cards/TarjetaDetalles"

const Details = () => {
  const { isbn } = useParams()

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <TarjetaDetalles isbn={isbn} />
    </div>
  )
}

export default Details