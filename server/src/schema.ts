import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    pokemons: [PokemonListData]!
    pokemon(id: String!): Pokemon
  }

  type PokemonListData {
    name: String
    url: String
  }

  type Pokemon {
    id: ID
    name: String
    types: [PokemonTypes]
    sprites: PokemonSprites
    height: Int
    weight: Int
  }

  type PokemonTypes {
    slot: Int
    type: [PokemonType]!
  }

  type PokemonType {
    name: String
    url: String
  }

  type PokemonSprites {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
    other: PokemonSpritesByOther
  }

  type PokemonSpritesByOther {
    deream_world: PokemonSpritesItem
    home: PokemonSpritesItem
    officialArtworks: PokemonSpritesItem
  }

  type PokemonSpritesItem {
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
`;
