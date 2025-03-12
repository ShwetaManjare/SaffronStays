import { ArrowCircleRightRounded, FacebookOutlined, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Box, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

const SocialContact = () => {
    return (
        <Paper 
            sx={{ 
                display: "flex", 
                flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
                marginTop: "80px", 
                flexWrap: "wrap",
                background: "linear-gradient(270deg, #4CAF50, #2196F3,#090979,#f54a6c,#fdbb2d)",
                backgroundSize: "400% 400%",
                animation: "moveGradient 6s ease infinite",
                color: "white",
                padding: 2,
                textAlign: "center",
                "@keyframes moveGradient": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                }
            }}
        >
            {/* Social Media Section */}
            <Grid 
                sx={{ 
                    width: { xs: '100%', md: '50%' }, 
                    height: { xs: "auto", md: "150px" },
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: 2, 
                    padding: 2,
                    borderBottom: { xs: "1px solid white", md: "none" },
                    borderRight: { xs: "none", md: "1px solid white" }
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    Leading the way in adventure
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <FacebookOutlined fontSize="large" sx={{ color: "white" }} />
                    <Instagram fontSize="large" sx={{ color: "white" }} />
                    <Twitter fontSize="large" sx={{ color: "white" }} />
                    <YouTube fontSize="large" sx={{ color: "white" }} />
                </Box>
            </Grid>

            {/* Newsletter Section */}
            <Grid 
                sx={{ 
                    width: { xs: '100%', md: '50%' }, 
                    height: { xs: "auto", md: "150px" },
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: 2, 
                    padding: 2
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    Join our Newsletter
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: "100%", maxWidth: "300px" }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="Enter your email"  
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "4px"
                        }}                 
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <ArrowCircleRightRounded fontSize="large" sx={{ color: 'black' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Grid>
        </Paper>
    );
}

export default SocialContact;
