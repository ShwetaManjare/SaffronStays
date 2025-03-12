import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
  ArrowDownward,
} from "@mui/icons-material";

import "aos/dist/aos.css";
import toursImg from "../../assets/About/about3.jpg";
import Tent from "../../assets/About/tent.webp";
import Apartment from "../../assets/About/apartment.webp";
import hotels from "../../assets/About/hotels.webp";
import farmhouse from "../../assets/About/farmhouse.webp";
import treehouse from "../../assets/About/treehouse.webp";
import cottages from "../../assets/About/cottages.webp";
import camps from "../../assets/About/camp.webp";
import homestays from "../../assets/About/homestay.webp";
import villa from "../../assets/About/villa.webp";
import Hero from "../../assets/HomePage/houseImg.jpg";
import PersonIcon from "@mui/icons-material/Person"; // Import Person icon
import ReviewSlider from "./ReviewSlider";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setZoom((prevZoom) => (prevZoom === 1 ? 1.2 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const transformStyle = useMemo(
    () => ({
      transform: `scale(${zoom})`,
      transition: "transform 5s ease-in-out",
    }),
    [zoom]
  );

  const accommodationTypes = [
    {
      title: "Appartments",
      description:
        "Experience unparalleled comfort in our premium hotels with world-class amenities and personalized service.",
      image: Apartment,
    },
    {
      title: "Tents",
      description:
        "Connect with nature without compromising on luxury in our specially designed glamping experiences.",
      image: Tent,
    },
    {
      title: "Camps",
      description:
        "Feel at home with spacious, fully-furnished apartments perfect for extended stays and family vacations.",
      image: camps,
    },
    {
      title: "Treehouses",
      description:
        "Elevate your stay literally with our unique treehouse accommodations offering panoramic views.",
      image: treehouse,
    },
    {
      title: "Farmhouses",
      description:
        "Immerse yourself in rural charm with our farmhouse stays featuring organic gardens and local experiences.",
      image: farmhouse,
    },
    {
      title: "Hotels",
      description:
        "Immerse yourself in rural charm with our farmhouse stays featuring organic gardens and local experiences.",
      image: hotels,
    },
    {
      title: "Villas",
      description:
        "Immerse yourself in rural charm with our farmhouse stays featuring organic gardens and local experiences.",
      image: villa,
    },
    {
      title: "Cottages",
      description:
        "Immerse yourself in rural charm with our farmhouse stays featuring organic gardens and local experiences.",
      image: cottages,
    },
    {
      title: "HomeStays",
      description:
        "Immerse yourself in rural charm with our farmhouse stays featuring organic gardens and local experiences.",
      image: homestays,
    },
  ];

  const teamMembers = [
    {
      name: "Shweta Manjare",
      position: "Founder & CEO",
      bio: "With over 15 years in hospitality, Shweta founded Saffron Stays with a vision to redefine experiential stays in India.",
    },
    {
      name: "Rahul Gupta",
      position: "Chief Experience Officer",
      bio: "Rahul ensures every Saffron Stay delivers memorable experiences through innovative hospitality solutions.",
    },
    {
      name: "Ananya Singh",
      position: "Head of Design",
      bio: "Ananya brings spaces to life through thoughtful design that honors local culture while providing modern comfort.",
    },
    {
      name: "Vikram Bhosale",
      position: "Operations Director",
      bio: "Vikram oversees the seamless functioning of all Saffron properties, maintaining our high standards of service.",
    },
  ];

  const testimonials = [
    {
      text: "Our stay at the Saffron treehouse was magical! The attention to detail and the warm hospitality made our anniversary truly special.",
      author: "Meera & Arjun",
      location: "Delhi",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "The farmhouse retreat exceeded all expectations. From farm-to-table meals to guided nature walks, everything was perfect.",
      author: "The Kapoor Family",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      text: "As a solo traveler, I felt completely at home in the boutique apartment. The staff went above and beyond to make my stay comfortable.",
      author: "Sarah Williams",
      location: "London",
      image:
        "https://www.shutterstock.com/shutterstock/photos/1617540484/display_1500/stock-photo-closeup-photo-of-amazing-short-hairdo-lady-looking-up-empty-space-deep-thinking-creative-person-arm-1617540484.jpg",
    },
  ];

  return (
    <Box className="overflow-hidden ">
       {/* Hero Section */}
       <Box
        className="relative flex items-center justify-center bg-cover bg-center h-[100vh]"
        sx={{
          backgroundImage: ` url("https://img.freepik.com/free-photo/beautiful-viewpoint-koh-nangyuan-island-surat-thani-thailand_335224-1097.jpg?t=st=1741179254~exp=1741182854~hmac=28cd78b018a09af1eacc05be698cf476de803d93a102c3d45a92a8d9478feb27&w=1800")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <Container 
      maxWidth="lg" 
      className="relative flex flex-col items-center justify-center text-center h-screen pt-16"
    >
      <Typography
        variant="h3"
        className="text-white font-bold drop-shadow-lg"
        fontFamily="Times New Roman"
        sx={{ marginBottom: 2 }}
        data-aos="fade-down"
      >Saffron Stay: A Home Away from Home
      </Typography>

      <Typography
        variant="h6"
        className="text-white opacity-90 mt-2"
        fontFamily="Times New Roman"
        data-aos="fade-up"
      >
        "Where Families Bond, Celebrate, and Create Memories."
      </Typography>
    </Container>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundImage: `url("https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          padding: "4rem 0",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "800px", // Adjust size limit as needed
                  height: "80vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto", // Centers the image horizontally
                }}
              >
                <Box
                  component="img"
                  // src={toursImg}
                  src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Story"
                  sx={{
                    width: "100%",
                    height: "80vh",
                    maxHeight: "500px", // Adjust max height
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // Stronger shadow for better effect
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Typography
                sx={{
                  color: "orange",
                  letterSpacing: "2px",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
                fontFamily={"Times New Roman"}
                variant="overline"
                fontSize={40}
              >
                What is Saffron Stays
              </Typography>
              <Typography
                sx={{ textAlign: "left", mb: 2 }}
                variant="h3"
                component="h2"
                fontFamily={"Times New Roman"}
              >
                A Journey of Passion & Hospitality
              </Typography>
              <Typography sx={{ textAlign: "left", mb: 3 }} variant="body1">
                Founded in 2025, Saffron Stays began with a simple idea: to
                create spaces where travelers could experience the authentic
                essence of a destination while enjoying the comforts of a luxury
                stay.
              </Typography>
              <Typography sx={{ textAlign: "left", mb: 3 }} variant="body1">
                What started as a single farmhouse in Maharashtra has grown into
                a curated collection of over 100 unique properties across India
                - from beachfront villas to mountain retreats, heritage havelis
                to modern apartments.
              </Typography>
              <Typography sx={{ textAlign: "left", mb: 3 }} variant="body1">
                Our name "Saffron" represents our commitment to providing
                precious, authentic experiences that leave a lasting impression,
                just like the rare and valuable spice.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Accommodation Types */}
      <Container maxWidth="lg">
        <Box className="text-center mb-12" data-aos="fade-up">
          <Typography
            className="text-orange-500 tracking-widest"
            variant="overline"
            fontSize={40}
            fontFamily={"Times New Roman"}
          >
            OUR ACCOMMODATIONS
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {accommodationTypes.map((type, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="h-full rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <CardMedia
                  component="img"
                  height="200"
                  image={type.image}
                  alt={type.title}
                  className="h-48 object-cover"
                />
                <CardContent>
                  <Typography
                    className="font-semibold mb-1"
                    variant="h5"
                    component="h3"
                    fontFamily="Times New Roman"
                    fontWeight="bold"
                  >
                    {type.title}
                  </Typography>
                  <Typography className="text-gray-600" variant="body2">
                    {type.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Team Section */}
      <Box className="bg-blue-100 py-12 md:py-20">
        <Container maxWidth="lg">
          <Box className="text-center mb-12" data-aos="fade-up">
            <Typography
              className="text-orange-500 tracking-widest"
              variant="overline"
              fontSize={30}
              fontFamily="Times New Roman"
            >
              Saffron Stays Team
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="min-h-[250px] rounded-lg shadow-md overflow-hidden">
                  <CardContent>
                    
                    <Typography
                      className="font-semibold"
                      variant="h6"
                      component="h3"
                      fontWeight="bold"
                      fontFamily="Times New Roman"
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      className="text-amber-600 mb-1"
                      variant="subtitle2"
                    >
                      {member.position}
                    </Typography>
                    <Typography className="text-gray-600" variant="body2">
                      {member.bio}
                    </Typography>
                    <Box className="mt-3 flex gap-2">
                      <IconButton
                        size="small"
                        className="bg-gray-100 hover:bg-yellow-100"
                      >
                        <LinkedIn fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        className="bg-gray-100 hover:bg-yellow-100"
                      >
                        <Twitter fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        className="bg-gray-100 hover:bg-yellow-100"
                      >
                        <Email fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" className="py-8 md:py-10">
        <Box className="text-center mb-12" data-aos="fade-up">
          <Typography
            className="text-orange-500 tracking-widest"
            variant="overline"
            fontSize={40}
            fontFamily="Times New Roman"
          >
            TESTIMONIALS
          </Typography>
          <Typography
            className="font-bold mb-2"
            fontFamily="cursive"
            variant="h5"
            component="h2"
          >
            What Our Guests Say about Our Services
          </Typography>
        </Box>

        <ReviewSlider/>
      </Container>
     
    </Box>
  );
};

export default About;
