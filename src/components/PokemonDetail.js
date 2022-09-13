import { useContext } from 'react';
import PokemonContext from '../pokemon.context';
import { PokemonDetailTypes } from '../pokemon.types';

const PokemonDetail = () => {
  const {
    state: { selectedPokemon },
  } = useContext(PokemonContext);
  return selectedPokemon ? (
    <div>
      <h1>{selectedPokemon.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

PokemonDetail.propTypes = PokemonDetailTypes;

export default PokemonDetail;
