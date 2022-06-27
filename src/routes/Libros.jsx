import { Component } from "react";
import { useParams  } from "react-router-dom"
import TarjetaDetalles from "../components/Cards/TarjetaDetalles"


function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Details extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className="p-4 max-w-7xl mx-auto">
        <TarjetaDetalles isbn={this.props.params.isbn} />
      </div>
    )

  }

}

export default withParams(Details)