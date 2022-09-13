import { Button } from '@mui/material';
import React from 'react';
import { PokemonRowTypes } from '../pokemon.types';

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(',')}</td>
    <td>
      <Button
        variant='contained'
        color='primary'
        onClick={() => onSelect(pokemon)}
      >
        Select!
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = PokemonRowTypes;

export default PokemonRow;
