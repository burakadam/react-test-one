import './App.css';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import PokemonDetail from './components/PokemonDetail';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

import PokemonContext from './pokemon.context';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 10px;
  margin: 1rem auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnlayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

function App() {
  const [pokemons, pokemonsSet] = useState([]);
  const [filter, filerSet] = useState('');
  const [selectedPokemon, selectedPokemonSet] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/react-test-one/pokemon.json')
      .then((ress) => ress.json())
      .then((data) => pokemonsSet(data));
  }, [filter]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        filter,
        filerSet,
        selectedPokemon,
        selectedPokemonSet,
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
