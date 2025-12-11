// src/components/PokemonDetail.js
import { useNavigate, useParams } from 'react-router-dom';
import PokemonDetail from '../../../component/PokemonDetail';
import usePokemonDetail from '../../../hooks/usePokedexDetail';
const Detail = () => {
    const { id } = useParams();
    const pokemonId = id;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }
    const { detailData: pokemon, loading, error } = usePokemonDetail(pokemonId);
    console.log("id", pokemon)

    if (!pokemonId) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                ID Pokémon tidak ditemukan di URL.
                <button onClick={handleBack} style={{ display: 'block', margin: '20px auto', padding: '10px' }}>
                    &larr; Kembali
                </button>
            </div>
        );
    }
    if (!pokemon) {
        return <div>Pokémon tidak ditemukan.</div>;
    }
    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Memuat Detail Pokémon (#{pokemonId})...</h2>
            </div>
        );
    }
    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                <h2>Terjadi Kesalahan!</h2>
                <p>{error}</p>
                <button onClick={handleBack} style={{ marginTop: '20px', padding: '10px' }}>
                    &larr; Kembali ke Daftar
                </button>
            </div>
        );
    }
    return (
        <PokemonDetail
            pokemon={pokemon}
            onBack={handleBack}
            id={pokemonId}
        />
    );
};

export default Detail;