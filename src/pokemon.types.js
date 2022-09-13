import PropTypes, { string } from 'prop-types';

export const PokemonRowTypes = {
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  pokemon: PropTypes.shape({
    type: PropTypes.arrayOf(string),
  }),
  onSelect: PropTypes.func,
};

export const PokemonDetailTypes = {
  name: PropTypes.object,
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    'Sp. Attack': PropTypes.number.isRequired,
    'Sp. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};
