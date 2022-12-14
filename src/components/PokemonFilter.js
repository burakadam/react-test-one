import styled from '@emotion/styled';
import { useContext } from 'react';
import PokemonContext from '../pokemon.context';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 5px;
  margin: 1rem auto;
`;

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <Input
      value={filter}
      onChange={(event) =>
        dispatch({ type: 'SET_FILTER', payload: event.target.value })
      }
    />
  );
};

export default PokemonFilter;
