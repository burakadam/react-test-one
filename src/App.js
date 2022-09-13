import './App.css';
import { useEffect, useReducer, useState } from 'react';

import { Container, Title, TwoColumnlayout } from './pokemons.styles';

import PokemonDetail from './components/PokemonDetail';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

import PokemonContext from './pokemon.context';

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error('No action');
  }
};

const initialState = {
  pokemons: [],
  filter: '',
  selectedPokemon: null,
};

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  useEffect(() => {
    fetch('http://localhost:3000/react-test-one/pokemon.json')
      .then((ress) => ress.json())
      .then((data) =>
        dispatch({
          type: 'SET_POKEMONS',
          payload: data,
        })
      );
  }, []);

  if (state.pokemons.length < 1) return <p>...loading</p>;

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <PokemonFilter />
        <TwoColumnlayout>
          <div>
            <PokemonTable />
          </div>
          <PokemonDetail />
        </TwoColumnlayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
