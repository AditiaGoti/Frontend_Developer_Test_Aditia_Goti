// src/components/CircularStat.js (Baru)

import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';

const STAT_CONFIG = {
    hp: { color: '#FF003A', Icon: (props) => <SvgIcon {...props}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></SvgIcon>, label: 'Hp' }, // Heart
    attack: { color: '#FF00FF', Icon: (props) => <SvgIcon {...props}><path d="M12 2L4 5V6C4 10.39 6.84 14.22 12 15C17.16 14.22 20 10.39 20 6V5L12 2M12 18L17 21L12 19L7 21L12 18Z" /></SvgIcon>, label: 'Attack' }, // Sword/Cross
    defense: { color: '#00FF4D', Icon: (props) => <SvgIcon {...props}><path d="M12 2L4 5V6C4 10.39 6.84 14.22 12 15C17.16 14.22 20 10.39 20 6V5L12 2M12 18L17 21L12 19L7 21L12 18Z" /></SvgIcon>, label: 'Defense' }, // Shield (Placeholder)
    'special-attack': { color: '#FF7F00', Icon: (props) => <SvgIcon {...props}><path d="M12 2L4 5V6C4 10.39 6.84 14.22 12 15C17.16 14.22 20 10.39 20 6V5L12 2M12 18L17 21L12 19L7 21L12 18Z" /></SvgIcon>, label: 'Special Attack' }, // Flame (Placeholder)
    'special-defense': { color: '#00BFFF', Icon: (props) => <SvgIcon {...props}><path d="M12 2L4 5V6C4 10.39 6.84 14.22 12 15C17.16 14.22 20 10.39 20 6V5L12 2M12 18L17 21L12 19L7 21L12 18Z" /></SvgIcon>, label: 'Special Defense' }, // Star (Placeholder)
    speed: { color: '#00EFFF', Icon: (props) => <SvgIcon {...props}><path d="M12 2L4 5V6C4 10.39 6.84 14.22 12 15C17.16 14.22 20 10.39 20 6V5L12 2M12 18L17 21L12 19L7 21L12 18Z" /></SvgIcon>, label: 'Speed' }, // Bolt (Placeholder)
};

const MAX_STAT = 255;

const CircularStat = ({ statName, baseStat }) => {
    const statKey = statName.toLowerCase().replace(/ /g, '-');
    const config = STAT_CONFIG[statKey] || { color: '#A8A878', Icon: (props) => <SvgIcon {...props}><circle cx="12" cy="12" r="10" /></SvgIcon>, label: statName };
    const percentage = Math.min(100, (baseStat / MAX_STAT) * 100);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            minHeight: '120px'
        }}>
            <Box sx={{ position: 'relative', width: 90, height: 90 }}>
                <svg width="90" height="90" viewBox="0 0 90 90" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <circle
                        cx="45" cy="45" r={radius}
                        fill="none"
                        stroke="#2D3748"
                        strokeWidth="5"
                    />
                </svg>
                <svg width="90" height="90" viewBox="0 0 90 90" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
                    <circle
                        cx="45" cy="45" r={radius}
                        fill="none"
                        stroke={config.color}
                        strokeWidth="5"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{ filter: `drop-shadow(0 0 4px ${config.color})` }}
                    />
                </svg>

                <Box sx={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <config.Icon sx={{ color: config.color, fontSize: 30, filter: `drop-shadow(0 0 3px ${config.color})` }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', marginTop: 0.5 }}>
                        {baseStat}
                    </Typography>
                </Box>
            </Box>

            <Typography variant="caption" sx={{ color: 'white', opacity: 0.7, marginTop: 1, textTransform: 'uppercase' }}>
                {config.label}
            </Typography>
        </Box>
    );
};

export default CircularStat;