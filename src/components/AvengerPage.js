import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import AvengerDetails from "./AvengersDetails";
import AvengerMovies from "./AvengerMovies";

class AvengerPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  const id = this.props.match.params.id;
  const avenger = this.props.avengers.find(avenger => `${avenger.id}` === id); //interpolation changes number id to a 'string'
  return (
  <div>
      <Link to={`/avengers/${this.props.match.params.id}/details`}>Avenger Details</Link>
      <Link to={`/avengers/${this.props.match.params.id}/movies`}>Movies</Link>
      <Route
        path="/avengers/:id/details"
        render={props => <AvengerDetails details={avenger.description}/>}
      />
      <Route
        path="/avengers/:id/movies"
        render={props => <AvengerMovies movies={avenger.movies}/>}
      />
    </div>
  )
  }
}

export default AvengerPage;
