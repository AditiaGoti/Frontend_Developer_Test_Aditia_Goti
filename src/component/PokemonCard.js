// src/components/PokemonCard.js
import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@mui/material";
import { keyframes } from "@mui/system";
import { useNavigate } from 'react-router-dom';

const scan = keyframes`
  0%   { transform: translateX(-40%); opacity: 0; }
  50%  { opacity: 0.4; }
  100% { transform: translateX(140%); opacity: 0.8; }
`;
const electricGlow = keyframes`
  0% { filter: drop-shadow(0 0 4px #00eaff); }
  50% { filter: drop-shadow(0 0 10px #00eaff); }
  100% { filter: drop-shadow(0 0 4px #00eaff); }
`;
const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pokemon/${pokemon.id}`);
    };
    console.log("pokemon id", pokemon.id);
    
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
                background:
                    "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.00)",
                overflow: "hidden",

                "&:hover": {
                    border: "1px solid #00eaff",
                    boxShadow: "0 0 15px rgba(0,234,255,0.8)",
                    animation: `${electricGlow} 1.4s infinite ease-in-out`,
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
                            // width: 400,
                            height: 100,
                            objectFit: "contain",
                        }}
                    />
                </div>

                <CardContent className="text-center">
                    <Typography
                        sx={{
                            fontWeight: "bold", color: "black", "&:hover": {
                                color: "white"
                            },
                        }}
                    >
                        {pokemon.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PokemonCard;