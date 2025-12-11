import { Box } from '@mui/material';
import PokemonList from '../../component/PokemonList';
import usePokedexData from '../../hooks/usePokedexData';

function Page() {
    const { pokemonData, loading, error } = usePokedexData(20, 0);
    return (
        <div>
            <Box sx={{ justifyContent: "center", display: "flex" }}>
                <img src='/logo.png' style={{ width: 300, height: 100, marginTop: 20 }} alt='logo' />
            </Box>
            {loading ? (
                <div className="flex justify-center items-center mt-72 space-x-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
                    <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                    <span className="ml-4 text-white font-medium">Memuat Pokémon...</span>
                </div>
            ) : error ? (
                <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>
            ) : (

                <PokemonList pokemons={pokemonData} />

            )}
        </div>
    );
}

export default Page;