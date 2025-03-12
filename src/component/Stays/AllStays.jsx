import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Drawer, Button, Typography, TextField, InputAdornment } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import HeroImg from '../../assets/Hero/toursHero1.jpg';
import { staysContext } from '../AppContext/TentsContext';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AllHotels from './AllHotels';
import AllTents from './AllTents';
import AllHomestays from './AllHomestays';
import Search from './Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from "@mui/icons-material/Search";
import AllCamps from './AllCamps';
import AllVillas from './AllVillas';
import AllFarmHouses from './AllFarmHouses';
import AllTreeHouses from './AllTreeHouses';
import AllApartments from './AllApartments';
import AllCottages from './AllCottages';


const AllStays = () => {
    const { setSearch } = useContext(staysContext);
    const [value, setValue] = React.useState('1');
    const handleChanges = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            {/* Image as Background */}
            <Box component="div" className="w-full h-96 sm:h-screen rounded-sm relative mt-0">
                {/* Background Image */}
                <Box component="img" src={HeroImg} className="w-full h-96 sm:h-full object-cover rounded-md absolute top-0 left-0" />

                {/* Text Content */}
                <Box
                    // data-aos="fade-up"
                    // data-aos-duration="2000"
                    className="w-full h-full absolute flex flex-col items-center justify-center text-center px-4">
                    <Typography variant="h3" sx={{ fontSize: { xs: "20px", sm: "50px", md: "50px",fontFamily:"Times New Roman" } }} className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white"> Discover the Unknown </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: "20px", sm: "50px", md: "50px",fontFamily:"Times New Roman"  } }} className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white"> in every Adventure </Typography>
                </Box>

                {/* Search Box at Bottom */}


               

            </Box>


            <Box sx={{ mt: 3, }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value} >
                        <Box
                            // data-aos="zoom-up"
                            // data-aos-duration="2000"
                            sx={{ width: '100%', display: "flex", justifyContent: { xs: "none", sm: "space-between" }, flexWrap: "wrap", p: 1 }}>
                            <TabList onChange={handleChanges}
                                textColor="primary"
                                indicatorColor="parimary"
                                aria-label="secondary tabs example"
                                variant="scrollable"
                                scrollButtons="auto "
                                allowScrollButtonsMobile

                                sx={{
                                    width: '100%',
                                    display: "flex",
                                    flexWrap: { xs: "wrap", sm: "nowrap" }, overflowY: { xs: "auto", sm: "unset" }, maxHeight: { xs: "300px", sm: "none" },

                                }}
                            >
                                <Tab label="Tents" value="1" />
                                <Tab label="Homestays" value="2" />
                                <Tab label="Hotels" value="3" />
                                <Tab label="Cottages" value="4" />
                                <Tab label="Farmhouses" value="5" />
                                <Tab label="Treehouses" value="6" />
                                <Tab label="Villas" value="7" />
                                <Tab label="Camps" value="8" />
                                <Tab label="Apartments" value="9" />
                            </TabList>
                            <Box sx={{ display: { xs: "none", sm: "flex" }, marginRight: "5%", }}>
                                {/* <Box sx={{ color: "lightslategray", paddingLeft: "20px", paddingRight: "20px", display: "flex", alignItems: "center" }}> Sort By </Box> */}
                            </Box>
                        </Box>
                        {/* filters  */}
                        <Accordion
                            sx={{ marginTop: "5px" }} slotProps={{ heading: { component: 'h4' } }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Sort By
                            </AccordionSummary>
                            <AccordionDetails>
                                <Search />
                            </AccordionDetails>
                        </Accordion>
                        {/* main content */}
                        <TabPanel value="1">  <AllTents /> </TabPanel>
                        <TabPanel value="2">  <AllHomestays /> </TabPanel>
                        <TabPanel value="3"> <AllHotels /> </TabPanel>
                        <TabPanel value='4'> <AllCottages/> </TabPanel>
                        <TabPanel value='5'> <AllFarmHouses/> </TabPanel>
                        <TabPanel value='6'> <AllTreeHouses/> </TabPanel>
                        <TabPanel value='7'> <AllVillas/> </TabPanel>
                        <TabPanel value='8'> <AllCamps/>  </TabPanel>
                        <TabPanel value='9'> <AllApartments/> </TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </Box>
    );
};
export default AllStays;














