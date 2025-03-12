import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";


const NewDestinations = () => {
  const destinations = [
    {
      img: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/78/0b/06/beach-street-resort-spa.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d3/37/c1/pool-side-view.jpg?w=1200&h=800&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/2b/1a/db/la-plage.jpg?w=900&h=-1&s=1"], // Array of images for carousel
      rating: 4.5,
      temp: "25°C",
      location: "Goa",
      type: "Whispering Woods Tents",
      price: 8932,
      discountPrice: 7838,
    },
    {
      img: ["https://5.imimg.com/data5/WL/YE/GLADMIN-47728331/lonavala-tour.png","https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/5b/6e/45.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/5b/6e/51.jpg"], // Single image for this entry
      rating: 4.3,
      temp: "22°C",
      location: "Lonavala",
      type: "Mountain View Camp",
      price: 7650,
      discountPrice: 6999,
    },
    {
      img: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/d9/ab/25/lrm-export-134359847325165.jpg?w=1000&h=700&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c1/f6/c6/il-palazzo-hotel.jpg?w=1200&h=800&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/8a/2a/37/grand-victoria-the-fern.jpg?w=1200&h=800&s=1"], // Single image for this entry
      rating: 4.7,
      temp: "28°C",
      location: "Panchgani",
      type: "Lakeview Cottages",
      price: 10500,
      discountPrice: 9500,
    },
    {
      img: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ed/80/c3/the-dubash-hall.jpg?w=1200&h=800&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/5b/04/a1/premises.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/93/34/80/shaggy-berde-blp-rbeg2ab.jpg?w=1100&h=800&s=1"], // Single image for this entry
      rating: 4.6,
      temp: "24°C",
      location: "Matheran",
      type: "Forest Glamping",
      price: 8200,
      discountPrice: 7500,
    },
    {
      img: ["https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/28/b69c158926eef847b3dbb08ae52240dc_1000x1000.jpg", "https://www.isprava.com/wp-content/uploads/2019/10/trawell.com_.jpg", "https://www.treksandtrails.org/system/images/000/663/424/efce080ea5ba8cecc96f9cd86dd82104/original/717f1dbb-9527-4366-a11d-4a9fe3231698.jpg?1706034793"], 
      rating: 4.5,
      temp: "25°C",
      location: "Alibaug",
      type: "Whispering Woods Tents",
      price: 8932,
      discountPrice: 7838,
    },
    {
      img: ["https://s7ap1.scene7.com/is/image/incredibleindia/pratapgarh-fort-mahabaleshwar-maharashtra-1-attr-nearby?qlt=82&ts=1726668880856", "https://www.revv.co.in/blogs/wp-content/uploads/2020/11/Mahabaleshwar.jpg", "https://www.marriottindiaweddings.com/resourcefiles/hotelprofile/courtyard-by-marriott-mahabaleshwar.jpg?version=1172025120817"], 
      rating: 4.3,
      temp: "22°C",
      location: "Mahabaleshwar",
      type: "Mountain View Camp",
      price: 7650,
      discountPrice: 6999,
    },
    {
      img: ["https://s7ap1.scene7.com/is/image/incredibleindia/1-trimbakeshwar-nashik--maharashtra_-city-hero?qlt=82&ts=1726675387974", "https://www.mistay.in/travel-blog/content/images/2022/12/sula6.jpg","https://5.imimg.com/data5/SELLER/Default/2021/1/TI/FK/ZA/78941050/grapes-1-500x500.png"], // Single image for this entry
      rating: 4.7,
      temp: "28°C",
      location: "Nashik",
      type: "Lakeview Cottages",
      price: 10500,
      discountPrice: 9500,
    },
    {
      img: ["https://pashankartours.com/wp-content/uploads/2019/06/beach_konkan.jpg", "https://images.moneycontrol.com/static-mcnews/2023/06/1593781920918222-0-663x435.png?impolicy=website&width=770&height=431", "https://www.ganpatipule.co.in/images/slider/7.jpg"], // Single image for this entry
      rating: 4.6,
      temp: "24°C",
      location: "Konkan",
      type: "Forest Glamping",
      price: 8200,
      discountPrice: 7500,
    },
  ];

  const priceFilter = [
    {
      name: "Price",
      price: [
        "1000 - 2000",
        "2000 - 3000",
        "3000 - 4000",
        "5000 - 6000",
        "6000 - 7000",
        "7000 - 8000",
        "8000 - 9000",
        "9000 - 10000",
      ],
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % destinations[0].img.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: "95%",marginLeft:"40px", marginTop: "40px" }}>
      <Typography
        variant="h5"
        className="text-center"
        sx={{
          mt: 10,
          mb: 4,
          marginBottom: "40px",
          fontFamily: '"Times New Roman", serif',
          fontWeight: "bold",
        }}
      >
        New Destinations
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 4,
        }}
      >
        {destinations.map((val, i) => (
          <Paper
            key={i}
            sx={{
              p: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "",
              textAlign: "",
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Box
              sx={{
                width: "100%",
                height: "300px",
                borderRadius: "20px",
                objectFit: "cover",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={val.img[currentImageIndex]} // Display current image based on the index
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "20px",
                  objectFit: "cover",
                  position: "absolute",
                }}
              />

<Typography
                variant="body2"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderRadius: "12px",
                  padding: "5px 10px",       
                  backdropFilter: "blur(5px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span style={{ color: "#FFD700" }}>★</span>
                {val.rating} |{val.temp}
              </Typography>

              {/* Render dots for the images */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Center the dots horizontally
                  gap: "5px",
                  position: "absolute",
                  bottom: "10px", // Position at the bottom of the image
                }}
              >
                {val.img.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      backgroundColor:
                        currentImageIndex === index ? "blue" : "gray",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => setCurrentImageIndex(index)} // Update image on dot click
                  />
                ))}
              </Box>
            </Box>

         

            <Typography
              variant="body1"
              sx={{
                mt: 1,
                paddingLeft: "10px",
                fontFamily: "Times New Roman, serif",
                whiteSpace: "nowrap",
                fontWeight: "bold",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {val.location}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  mt: 0,
                  paddingLeft: "10px",
                 
                  fontFamily: "Times New Roman, serif",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {val.type}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontWeight: "600", // Use "600" instead of "semibold" for Material-UI
                color: "black",
                mt: 1,
                paddingLeft: "10px",
                fontFamily: "Times New Roman, serif",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              ₹{val.discountPrice}{" "}
              <s style={{ color: "gray", marginLeft: "5px" }}>₹{val.price}</s>
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default NewDestinations;
