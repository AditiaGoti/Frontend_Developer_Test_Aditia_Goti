// src/components/PokemonDetailPage.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
const MAX_STAT = 255;
const getStatColor = (baseStat) => {
    if (baseStat >= 150) return 'bg-red-600';
    if (baseStat >= 100) return 'bg-yellow-500';
    if (baseStat >= 75) return 'bg-green-500';
    return 'bg-blue-400';
};

const getTypeColorClass = (type) => {
    switch (type) {
        case 'fire': return 'bg-red-500 text-white';
        case 'water': return 'bg-blue-500 text-white';
        case 'grass': return 'bg-green-500 text-white';
        case 'electric': return 'bg-yellow-400 text-gray-800';
        case 'poison': return 'bg-purple-600 text-white';
        case 'fairy': return 'bg-pink-300 text-gray-800';
        case 'normal': return 'bg-gray-400 text-gray-800';
        default: return 'bg-gray-600 text-white';
    }
};

const PokemonDetailPage = ({ pokemon, onBack }) => {
    return (
        <Box>
            <Box sx={{ justifyContent: "center", display: "flex" }}>
                <img src='/logo.png' style={{ width: 300, height: 100, marginTop:20}} alt='logo' />
            </Box>

            <Box
                className="p-6 md:p-8 max-w-xl mx-auto rounded-xl backdrop-blur-sm"
                sx={{
                    boxShadow: '0 0 20px rgba(0, 89, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
                    border: '2px solid rgba(0, 153, 255, 0.4)',
                    background: 'rgba(10, 10, 20, 0.9)',
                    color: 'white',
                    position: "relative",
                    top: 30,
                }}
            >
                <Button
                    onClick={onBack}
                    className="mb-6 px-4 py-2 font-semibold transition"
                    sx={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 200, 255, 0.3)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 200, 255, 0.5)',
                        },
                    }}
                >
                    &larr;
                </Button>
                <Typography
                    variant="h4"
                    component="h2"
                    className="text-center capitalize font-bold"
                    sx={{
                        color: '#00eaff',
                        textShadow: '0 0 8px rgba(0, 255, 255, 0.8)',
                        marginBottom: 4
                    }}
                >
                    {pokemon.name}
                </Typography>

                <div className="text-center mb-8">
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="
                        w-40 h-40 mx-auto rounded-full 
                        border-4 border-cyan-400 
                        bg-gray-900 p-2 shadow-inner
                        transition duration-300 
                        hover:scale-105 
                        hover:shadow-2xl 
                        hover:border-4 border-cyan-400
                        animate-neon-pulse
                        cursor-pointer
                    "
                    />
                </div>

                <Box className="mb-1 border-cyan-700/50 pb-4 border-2 rounded-xl p-2 " >
                    <div className="grid grid-cols-2 gap-y-2 text-gray-300">
                        <Typography variant="body1"><strong>Tinggi:</strong> {pokemon.height} m</Typography>
                        <Typography variant="body1"><strong>Berat:</strong> {pokemon.weight} kg</Typography>
                    </div>

                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        <strong>Tipe:</strong>
                        {pokemon.types.map(type => (
                            <span
                                key={type}
                                className={`
                                ml-3 px-3 py-1 rounded-full font-medium text-sm uppercase 
                                ${getTypeColorClass(type)}
                            `}
                                style={{
                                    boxShadow: `0 0 5px ${type === 'electric' ? '#ffcc00' : '#00eaff'}`
                                }}
                            >
                                {type}
                            </span>
                        ))}
                    </Typography>
                </Box>
                <Typography variant="h5" component="h3" className="font-semibold" sx={{ color: '#00eaff', marginTop: 2 }}>
                    Base Stats
                </Typography>
                <div className="stats-list space-y-3 mt-4 mb-1 border-cyan-700/50 pb-4 border-2 rounded-xl p-2">
                    {Object.entries(pokemon.stats).map(([statName, baseStat]) => (
                        <div key={statName} className="flex items-center">
                            <span className="min-w-[100px] text-left uppercase text-sm font-medium text-gray-400">
                                {statName}:
                            </span>
                            <span className="w-10 text-right font-bold text-white ml-2">
                                {baseStat}
                            </span>
                            <div className="flex-grow h-3 bg-gray-700 rounded-full ml-4 overflow-hidden shadow-inner">
                                <div
                                    style={{
                                        width: `${(baseStat / MAX_STAT) * 100}%`
                                    }}
                                    className={`h-full rounded-full transition-all duration-500 ${getStatColor(baseStat)}`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

            </Box>
        </Box>
    );
};

export default PokemonDetailPage;