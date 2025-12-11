// src/components/NotFoundPage.js

import { Box, Button, Typography } from '@mui/material'; // Pastikan import dari @mui/material
import { keyframes } from "@mui/system"; // keyframes import dari @mui/system sudah benar
import { useNavigate } from 'react-router-dom';

const scan = keyframes`
    0%   { transform: translateX(-40%); opacity: 0; }
    50%  { opacity: 0.4; }
    100% { transform: translateX(140%); opacity: 0; } /* Set opacity kembali ke 0 */
`;


const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "40vh",
                    textAlign: "center",
                    padding: 10,
                    margin: "0 auto",
                    maxWidth: 900,
                    position: "relative",
                    top: 90,
                    borderRadius: "1rem",
                    backdropFilter: "blur(50px)",
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.03) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 0 15px rgba(0,234,255,0.8)",
                    overflow: "hidden",
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
                <Typography variant="h1" component="h1" color="error" gutterBottom sx={{
                    textShadow: "0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,0,0.4)"
                }}>
                    404
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom color="white">
                    Sistem Pokedex Gagal: Halaman Tidak Ditemukan
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGoHome}
                >
                    Kembali ke Halaman Utama
                </Button>
            </Box>
    );
};

export default NotFoundPage;