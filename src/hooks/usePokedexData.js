import { useState, useEffect } from 'react';

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const usePokedexData = (limit = 1000, offset = 0) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        setError(null);
        const listResponse = await fetch(`${POKE_API_BASE_URL}?limit=${1000}&offset=${offset}`);
        if (!listResponse.ok) {
          throw new Error('Gagal mengambil daftar Pokémon.');
        }
        const listData = await listResponse.json();
        const detailPromises = listData.results.map(async (pokemon) => {
          const detailResponse = await fetch(pokemon.url);
          if (!detailResponse.ok) {
            console.warn(`Gagal mengambil detail untuk ${pokemon.name}`);
            return null; 
          }
          const detail = await detailResponse.json();
          return {
            id: detail.id,
            name: detail.name,
            image: detail.sprites.front_default,
            height: detail.height / 10, 
            weight: detail.weight / 10, 
            types: detail.types.map(t => t.type.name),
            stats: detail.stats.reduce((acc, stat) => {
                acc[stat.stat.name] = stat.base_stat;
                return acc;
            }, {})
          };
        });

        const detailedPokemons = (await Promise.all(detailPromises)).filter(p => p !== null);
        setPokemonData(detailedPokemons);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, [limit, offset]); 

  return { pokemonData, loading, error };
};

export default usePokedexData;