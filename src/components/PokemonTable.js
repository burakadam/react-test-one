import { useContext } from 'react';
import PokemonContext from '../pokemon.context';
import PokemonRow from './PokemonRow';

const PokemonTable = () => {
  const {
    state: { pokemons, filter, selectedPokemonSet },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Stat</th>
        </tr>
      </thead>
      <tbody>
        {pokemons
          .filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .map((pokemon) => (
            <PokemonRow
              key={[pokemon.id, pokemon.name].join(':')}
              pokemon={pokemon}
              onSelect={(pokemon) =>
                dispatch({
                  type: 'SET_SELECTED_POKEMON',
                  payload: pokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
