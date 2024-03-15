import { fetchPokemonInfo } from 'components/helpers/api';
import { Component } from 'react';
import toast from 'react-hot-toast';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: false,
  };
  async componentDidUpdate(prevProps, PrevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ pokemon: null, loading: true, error: false });
      try {
        const pokemonInfo = await fetchPokemonInfo(this.props.pokemonName);
        this.setState({ pokemon: pokemonInfo });
      } catch (error) {
        this.setState({
          loading: false,
          error: error,
        });
        toast.error('Something went wrong, please reload website!');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {error && <h1>There is no pokemon with name {pokemonName}</h1>}
        {!this.props.pokemonName && <div>Enter Pokemon Name</div>}
        {loading && <div>Loading...</div>}
        {pokemon && (
          <div>
            <h2>{pokemon.name}</h2>
            <img
              alt={pokemon.name}
              width="300"
              src={pokemon.sprites.other['official-artwork'].front_default}
            ></img>
          </div>
        )}
      </div>
    );
  }
}
