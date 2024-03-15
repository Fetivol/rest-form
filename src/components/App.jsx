import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import PokemonForm from './SearchBar/SearchBar';

export class App extends Component {
  handleFormSubmint = pokemonName => {
    console.log(pokemonName);
  };
  render() {
    return (
      <Layout>
        <PokemonForm onSubmitProp={this.handleFormSubmint} />
        <GlobalStyle />
      </Layout>
    );
  }
}
