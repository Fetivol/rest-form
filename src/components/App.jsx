import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import PokemonForm from './SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import PokemonInfo from './PokemonInfo/PokemonInfo';

export class App extends Component {
  state = {
    pokemonName: '',
  };
  handleFormSubmint = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <Layout>
        <PokemonForm onSubmit={this.handleFormSubmint} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <Toaster autoclose={2000} position="top-right" />
        <GlobalStyle />
      </Layout>
    );
  }
}
