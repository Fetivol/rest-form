import { fetchPokemonInfo } from 'components/helpers/api';
import { Component } from 'react';
import toast from 'react-hot-toast';

export default class PokemonInfo extends Component {
  async componentDidUpdate(prevProps, PrevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      try {
        const pokemonInfo = await fetchPokemonInfo(this.props.pokemonName);
        console.log(pokemonInfo);
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong, please reload website!');
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.pokemonName}</h1>
      </div>
    );
  }
}
