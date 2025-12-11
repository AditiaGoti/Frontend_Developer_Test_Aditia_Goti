import { useState, useEffect } from 'react';

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const usePokemonDetail = (id) => {
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setDetailData(null);
      return;
    }

    const fetchPokemonDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `${POKE_API_BASE_URL}/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 404) {
             throw new Error(`Pokémon dengan ID "${id}" tidak ditemukan.`);
          }
          throw new Error('Gagal mengambil detail Pokémon.');
        }

        const detail = await response.json();
        const processedDetail = {
          id: detail.id,
          name: detail.name,
          image: detail.sprites.front_default,
          height: detail.height / 10, 
          weight: detail.weight / 10, 
          types: detail.types.map(t => t.type.name),
          stats: detail.stats.reduce((acc, stat) => {
            acc[stat.stat.name] = stat.base_stat;
            return acc;
          }, {}),
          abilities: detail.abilities.map(a => a.ability.name),
          base_experience: detail.base_experience,
        };

        setDetailData(processedDetail);

      } catch (err) {
        setError(err.message);
        setDetailData(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
    
  }, [id]); 
  return { detailData, loading, error };
};

export default usePokemonDetail;