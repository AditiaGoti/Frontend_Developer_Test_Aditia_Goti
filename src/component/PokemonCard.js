// src/components/PokemonCard.js
import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia, Chip } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import { useNavigate } from 'react-router-dom';

const scan = keyframes`
  0%   { transform: translateX(-40%); opacity: 0; }
  50%  { opacity: 0.4; }
  100% { transform: translateX(140%); opacity: 0.8; }
`;

const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
        case 'grass': return '#7AC74C';
        case 'poison': return '#A33EA1';
        case 'fire': return '#EE8130';
        case 'water': return '#6390F0';
        case 'bug': return '#A6B91A';
        default: return '#A8A878';
    }
};
const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pokemon/${pokemon.id}`);
    };
    const mainTypeColor = pokemon?.types.length > 0 ? getTypeColor(pokemon?.types[0]) : '#00eaff';
    const mainTypeShadow = `${mainTypeColor}E6`;
    const typeGlow = keyframes`
        0% { filter: drop-shadow(0 0 4px ${mainTypeColor}); }
        50% { filter: drop-shadow(0 0 10px ${mainTypeColor}); }
        100% { filter: drop-shadow(0 0 4px ${mainTypeColor}); }
    `;
    return (
        <Card
            onClick={handleClick}
            className="shadow-lg hover:shadow-xl transition duration-200"
            sx={{
                position: "relative",
                flex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "1rem",
                backdropFilter: "blur(8px)",
                background: `${mainTypeColor}99`,
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.00)",
                overflow: "hidden",
                transform: 'scale(1) translateY(0)',
                "&:hover": {
                    border: `1px solid ${mainTypeShadow}`,
                    animation: `${typeGlow} 2s infinite ease-in-out`,
                    transform: 'scale(1.03) translateY(-10px)',
                    zIndex: 10
                },

                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(90deg, rgba(90,200,250,0.08), rgba(52,211,153,0.08), rgba(245,158,11,0.08))",
                    opacity: 0.1,
                    pointerEvents: "none",
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background:
                        "linear-gradient(90deg, transparent, rgba(14, 178, 253, 0.9), transparent)",
                    animation: `${scan} 3.5s linear infinite`,
                },
            }}
        >
            <CardActionArea>
                <div className="flex justify-center pt-4">
                    <CardMedia
                        component="img"
                        image={pokemon.image}
                        alt={pokemon.name}
                        sx={{
                            width: 150,
                            height: 100,
                            objectFit: "contain",
                        }}
                    />
                </div>

                <CardContent className="text-center">
                    <Typography
                        sx={{
                            fontWeight: "bold", color: "white",
                            "&::before": { content: '"• "', color: "white", fontWeight: '900' },
                            "&::after": { content: '" •"', color: "white", fontWeight: '900' },
                        }}
                    >
                        {pokemon.name}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 1,
                            marginBottom: 2,
                            marginTop: 2
                        }}
                    >
                        {pokemon.types.map((type, index) => (
                            <Chip
                                key={index}
                                label={type.toUpperCase()}
                                size="small"
                                sx={{
                                    backgroundColor: getTypeColor(type),
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 4px',
                                    fontSize: '0.7rem',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                }}
                            />
                        ))}
                    </Box>
                    <div className="grid grid-cols-2 gap-y-2 text-gray-300">
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography variant="body1" sx={{ fontWeight: 700 }}>{pokemon.height} m</Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: 12 }}>Height</Typography>

                        </Box>
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography variant="body1" sx={{ fontWeight: 700 }}>{pokemon.weight} kg</Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: 12 }}>Weight</Typography>

                        </Box>
                    </div>

                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PokemonCard;