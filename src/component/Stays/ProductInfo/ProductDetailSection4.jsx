import { Box, Button, Card, CardContent, Container, Grid, Typography, LinearProgress, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import mainImg from '../../../assets/About/about3.jpg'

const ProductDetailSection4 = () => {
    const location = useLocation();
    const { val, stayType } = location.state || {};
    const [visibleReviews, setVisibleReviews] = useState(2);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        if (expanded) {
            setVisibleReviews(2);
        } else {
            setVisibleReviews(val.reviews.length);
        }
        setExpanded(!expanded);
    };

    const RatingBar = ({ label, value }) => (
        <Box sx={{ width: "100%", mb: 2, height: "", }}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>{label}</Typography>
                <Typography variant="body2">{value.toFixed(1)}/5</Typography>
            </Box>
            <LinearProgress
                variant="determinate"
                value={(value / 5) * 100}
                sx={{
                    height: 8,
                    borderRadius: 2,
                    "& .MuiLinearProgress-bar": { backgroundColor: "#FF6A63" }
                }}
            />

        </Box>
    );

    //ratings
  const progressData1 = [
    { label: 5, value: 80 },
    { label: 3, value: 50 },
    { label: 1, value: 30 },
  ];

  const progressData2 = [
    { label: 4, value: 75 },
    { label: 2, value: 40 },
  ];

  const [value, setValue] = React.useState("1");
  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <Container sx={{ mt: 3 }}>
            {/* <Typography variant="h5" sx={{ fontWeight: "700", mb: 2, borderBottom: "2px solid grey", width: "10%", borderImage: 'linear-gradient(to right, black, white) 5' }}>Reviews</Typography> */}

            {/* Ratings Display Section */}
            {/* <Box sx={{width:"100%",  gap:3} }>
                <Box sx={{ width:{xs:"100%" ,lg:"50%" ,display:"flex"},height:{xs:"50vh" ,lg:"60vh"}, p: 2, border: "1px solid #ddd", borderRadius: 2, boxShadow: 3, mb: 3, display:"flex",flexDirection:"column", gap:5 }}>
                    {Object.entries(val.ratings).map(([key, value]) => (
                        <RatingBar key={key} label={key.replace(/([A-Z])/g, ' $1')} value={value} />
                    ))}

                </Box>
                 <Paper sx={{ width: "50%", height: "60vh", display: { xs: "none", sm: "block" } }} >
                    <Box component="img" src={mainImg} sx={{width:"100%", height:"100%", borderRadius:"5px"}} />
                    
                </Paper> 
            </Box> */}

            <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            mb: 2,
            borderBottom: "2px solid grey",
            width: "10%",
            borderImage: "linear-gradient(to right, black, white) 5",
          }}
        >
          Reviews
        </Typography>

        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              width: "20%",
              height: "20vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              {val.ratings.location}
            </Typography>
            <Typography>out of 5</Typography>
          </Box>
          {/* First Box */}
          <Box
            sx={{
              width: "40%",

              padding: 2,
            }}
          >
            {progressData1.map((item) => (
              <Box
                key={item.label}
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <Typography>{item.label}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={item.value}
                  sx={{
                    width: "80%",
                    height: 8,
                    borderRadius: "5px", // Rounded corners for progress bars
                    backgroundColor: "#ddd",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "black",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Second Box */}
          <Box
            sx={{
              width: "40%",
              // border: "1px solid grey",
              // borderBottom: "0px",
              // borderRight: "0px",

              padding: 2,
            }}
          >
            {progressData2.map((item) => (
              <Box
                key={item.label}
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <Typography>{item.label}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={item.value}
                  sx={{
                    width: "80%",
                    height: 8,
                    borderRadius: "5px", // Rounded corners for progress bars
                    backgroundColor: "#ddd",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "black",
                      borderRadius: "5px",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

            {/* Reviews Section */}
            <Box sx={{ display: "flex", flexWrap: "wrap", }}>
                <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", p: 2, borderTop: "0.1px solid gray", borderBottom: "0.1px solid gray", }}>
                    <Grid container spacing={2}>
                        {val.reviews.slice(0, visibleReviews).map((review) => (
                            <Grid item xs={12} sm={6} key={review.id}>
                                <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
                                    <CardContent>
                                        <Typography variant="body1" sx={{ mt: 1 }}>{review.review}</Typography>
                                        <Typography variant="body1" sx={{ mt: 1 }}>⭐ {review.rating} {review.categoryUsed}</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>{review.custName}</Typography>
                                        <Typography variant="caption" color="textSecondary">{review.date}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ width: "100%", textAlign: "center", mt: 2 , mb:5 }}>
                    <Button variant="contained" sx={{ backgroundColor: "#464646" }} onClick={handleToggle}>
                        {expanded ? "Show Less" : "Load More"}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default ProductDetailSection4;
