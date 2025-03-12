


import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/HomePage/img5.png'
import starImg from '../../assets/HomePage/starmedium 4.png'

const HomeSection3 = () => {
    return (
        <Container sx={{ width: '100%', mt: 5 }}>
           
             <Typography 
                   data-aos="zoom-up"
                  data-aos-duration="2000"
                  variant="h5" className="mb-10  text-center flex gap-1 items-center justify-center" sx={{mt: 10,
                    textAlign: "center",
                    fontFamily: '"Times New Roman", serif',
                    fontWeight: "bold",}}>
                   Nordic Sea - Best for June 2025
                  </Typography>
            {/* Main Box */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                width: '100%',
                height: 'auto',
                mt: 5,
                boxShadow: 5, // Increased shadow effect
                borderRadius: 2,
                p: 2,
                bgcolor: 'white' // Ensure background color for better shadow visibility
            }}>
                {/* Section1 */}
                <Box sx={{ width: { xs: '100%', sm: '60%' }, display: 'flex', flexDirection: 'row', gap: 2, paddingTop: "10px", paddingBottom: "10px" }} >
                    {/* Box-col-1 */}
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 2 }} data-aos="zoom-in-down">
                        <Box sx={{
                            width: '100%',
                            height: { xs: '150px', sm: '60%' },
                            bgcolor: '#272727',
                            borderRadius: 2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            pb: 2,
                            position: "relative",
                            boxShadow: 3 // Added shadow to inner boxes
                        }}>
                            <Box component="img" src={starImg} sx={{ width: "150px", height: "150px", position: "absolute", margin: 0, top: 0, right: 0 }} />
                            <Typography sx={{ color: 'white' }}>Explore Nordic Sea</Typography>
                            <Typography sx={{ color: '#9E9E9E' }}>Enjoy cold breeze of Nordic seas</Typography>
                        </Box>
                        <Box sx={{
                            height: { xs: '150px', sm: '40%' },
                            bgcolor: '#F8F8F8',
                            borderRadius: 2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            pb: 2,
                            boxShadow: 2
                        }}>
                            <Typography>Wilderness</Typography>
                            <Typography sx={{ color: '#9E9E9E' }}>Embrace the Wild Wilderness</Typography>
                        </Box>
                    </Box>
                    {/* Box-col-2 */}
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 1 }} data-aos="zoom-in-down">
                        <Box sx={{
                            width: '100%',
                            height: { xs: '150px', sm: '40%' },
                            bgcolor: '#F8F8F8',
                            borderRadius: 2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            pb: 2,
                            boxShadow: 2
                        }}>
                            <Typography>Wilderness</Typography>
                            <Typography sx={{ color: '#9E9E9E' }}>Embrace the Wild Wilderness</Typography>
                        </Box>
                        <Box sx={{
                            width: '100%',
                            height: { xs: '150px', sm: '60%' },
                            bgcolor: '#272727',
                            borderRadius: 2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            pb: 2,
                            position: "relative",
                            boxShadow: 3
                        }}>
                            <Box component="img" src={starImg} sx={{ width: "150px", height: "150px", position: "absolute", margin: 0, top: 0, right: 0 }} />
                            <Typography sx={{ color: 'white' }}>Explore Nordic Sea</Typography>
                            <Typography sx={{ color: '#9E9E9E' }}>Enjoy cold breeze of Nordic seas</Typography>
                        </Box>
                    </Box>
                </Box>
                {/* Section 2 */}
                <Box sx={{ width: { xs: '100%', sm: '40%' }, height: 'auto', paddingTop: "10px", paddingBottom: "10px", paddingRight: "10px", display: "flex", justifyContent: { xs: "center", sm: "end" } }}  >
                    <Box component='img' src={img} sx={{ width: '80%', height: '100%', objectFit: 'contain', boxShadow: 3, borderRadius: 2 }} data-aos="zoom-in-up" />
                </Box>
            </Box>
        </Container>
    )
}

export default HomeSection3
