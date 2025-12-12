// src/components/PokemonDetailPage.js
import { Box, Button, Grid, Typography } from '@mui/material';
import CircularStat from './CircularStat';

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
        <Box className="px-4 md:px-10 pb-10">
            <Box className="flex justify-center">
                <img
                    src="/logo.png"
                    alt="logo"
                    className="mt-5 w-48 h-auto md:w-72"
                />
            </Box>
            <Button
                onClick={onBack}
                className="my-6 px-4 py-2 font-semibold"
                sx={{
                    color: 'white',
                    backgroundColor: 'rgba(0, 200, 255, 0.3)',
                    '&:hover': { backgroundColor: 'rgba(0, 200, 255, 0.5)' }
                }}
            >
                ←
            </Button>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                className="mt-24"
            >
                <Grid item size={{sm:12,md:6, lg:3}} className="flex justify-center">
                    <Box
                        className="p-6 md:p-8 rounded-xl backdrop-blur-sm"
                        sx={{
                            boxShadow: '0 0 20px rgba(0, 89, 255, 0.5)',
                            border: '2px solid rgba(0, 153, 255, 0.4)',
                            background: 'rgba(10, 10, 20, 0.9)',
                            color: 'white',
                            width:600
                        }}
                    >
                        <Box className="text-center mb-4" sx={{mt:10}}>
                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                                className="w-50 h-50 md:w-56 md:h-56 rounded-full border-4 border-cyan-400 bg-gray-900 p-2 shadow-inner transition duration-300 hover:scale-105 animate-neon-pulse mx-auto"
                            />
                            <Typography
                                variant="h4"
                                className="capitalize font-bold"
                                sx={{ color: '#00eaff', textShadow: '0 0 8px rgba(0,255,255,0.8)', marginTop: 2 }}
                            >
                                {pokemon.name}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item size={{sm:12,md:5, lg:4}}> 
                    <Box className="border-2 border-cyan-700/50 rounded-xl p-4">

                        <div className="text-gray-300 text-sm md:text-base mb-3">
                            <Typography sx={{fontSize:24}}><strong>Tinggi:</strong> {pokemon.height} m</Typography>
                            <Typography sx={{fontSize:24}}><strong>Berat:</strong> {pokemon.weight} kg</Typography>
                        </div>
                        <Typography className="mt-3 text-sm md:text-base" sx={{fontSize:24}}>
                            <strong>Tipe:</strong>
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.5, mt: 2, mb: 2, flexWrap: 'wrap' }}>
                            {pokemon.types.map(type => (
                                <span
                                    key={type}
                                    className={` px-3 py-1 rounded-full font-medium text-xs md:text-sm uppercase ${getTypeColorClass(type)}`}
                                >
                                    {type}
                                </span>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        className="mt-6 p-4 rounded-xl"
                        sx={{
                            border: '2px solid #00BFFF50',
                            backgroundColor: 'rgba(0,0,0,0.4)'
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{fontWeight:600}}
                        >
                            Stats
                        </Typography>

                        <Grid container
                            spacing={2} 
                            justifyContent="center" 
                            sx={{
                                marginTop: 3, 
                                paddingX: { xs: 0, md: 2 } 
                            }}
                        >
                            {Object.entries(pokemon.stats).map(([statName, baseStat]) => (
                                <Grid item xs={6} sm={4} key={statName} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <CircularStat statName={statName} baseStat={baseStat} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PokemonDetailPage;