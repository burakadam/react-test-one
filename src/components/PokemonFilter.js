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
  const { filter, filerSet } = useContext(PokemonContext);
  return (
    <Input value={filter} onChange={(event) => filerSet(event.target.value)} />
  );
};

export default PokemonFilter;
