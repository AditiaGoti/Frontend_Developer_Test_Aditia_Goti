// src/components/PokemonList.js
import { useMemo, useState } from 'react';
import PokemonCard from './PokemonCard';
const PokemonList = ({ pokemons }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const filteredPokemons = useMemo(() => {
        return pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [pokemons, searchTerm]);

    const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPokemons = filteredPokemons.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="px-4 py-6 max-w-5xl mx-auto">
            <input
                type="text"
                placeholder="Cari Pokémon berdasarkan nama..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                }}
                className="
                    w-full p-3 mb-5 
                    rounded-lg border border-gray-300 
                    focus:outline-none 
                    focus:ring-2 focus:ring-blue-500
                    bg-white
                    animate-neon-pulse
                    text-black
                "
            />
            <div
                className="
                    grid 
                    grid-cols-2 
                    sm:grid-cols-3 
                    md:grid-cols-4 
                    lg:grid-cols-5 
                    gap-4
                "
            >
                {currentPokemons.length > 0 ? (
                    currentPokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-400">
                        Pokémon tidak ditemukan.
                    </p>
                )}
            </div>
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">

                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="
                            px-4 py-2 rounded-md 
                            bg-gray-200 hover:bg-gray-300 
                            disabled:bg-gray-300 disabled:cursor-not-allowed
                            transition
                        "
                    >
                        Previous
                    </button>

                    <span className="text-white font-semibold">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="
                            px-4 py-2 rounded-md 
                            bg-blue-500 text-white hover:bg-blue-600 
                            disabled:bg-blue-300 disabled:cursor-not-allowed
                            transition
                        "
                    >
                        Next
                    </button>

                </div>
            )}
        </div>
    );
};

export default PokemonList;
