import { useState } from 'react';
import toast from 'react-hot-toast';

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Enter Pokemon name');
      return;
    }
    onSubmit(pokemonName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">Find</button>
    </form>
  );
}
// export default class PokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };
// handleNameChange = event => {
//   this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
// };
// handleSubmit = event => {
//   event.preventDefault();

//   if (this.state.pokemonName.trim() === '') {
//     toast.error('Enter Pokemon name');
//     return;
//   }
//   this.props.onSubmit(this.state.pokemonName);
// };

// render() {
//   return (
// <form onSubmit={this.handleSubmit}>
//   <input
//     type="text"
//     name="pokemonName"
//     value={this.state.pokemonName}
//     onChange={this.handleNameChange}
//   />
//   <button type="submit">Find</button>
// </form>
//   );
// }
// }
