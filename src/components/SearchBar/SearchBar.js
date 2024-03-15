import { Component } from 'react';

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };
  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitProp(this.state.pokemonName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">Find</button>
      </form>
    );
  }
}
