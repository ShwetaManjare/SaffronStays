
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, IconButton, Rating, Stack } from '@mui/material'; 
import React, { useContext, useEffect, useState } from 'react'; 
import { staysContext } from '../AppContext/TentsContext'; 
import axios from 'axios'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import { Link, useNavigate } from 'react-router-dom'; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; 
import toast from 'react-hot-toast'; 

const BookmarkPage = () => { 
    const { addBookmark, setAddBookmark, isLoggedIn } = useContext(staysContext);
    const navigate = useNavigate();
    const [stayType, setStayType] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/bookmark")
            .then((resp) => {
                setAddBookmark(resp.data);
                if (resp.data.length > 0) {
                    setStayType(resp.data[0].stayType || "");
                }
            })
            .catch((error) => console.log(error));
    }, []);

    const handleRemoveBookmark = (valId) => {
        axios.delete(`http://localhost:3000/bookmark/${valId}`)
            .then(() => {
                setAddBookmark(prev => prev.filter(val => val.id !== valId));
                toast.success("Removed from bookmarks!");
            })
            .catch(error => console.log(error));
    };

    const handleAddToCart = (val) => {
        axios.post("http://localhost:3000/cart", val)
            .then(() => toast.success(`${val.campName} added to cart!`))
            .catch(error => console.log(error));
    };

    return (
        <Box sx={{ padding: 4, minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
            {isLoggedIn ? (
                <>
                    <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center', fontWeight: 'bold', color: "#333" ,fontFamily:"Times New Roman"}}>
                        Your Bookmarked Camps
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {addBookmark.length > 0 ? (
                            addBookmark.map((val, i) => (
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                    <Card sx={{ boxShadow: 4, borderRadius: 3, overflow: "hidden", backgroundColor: "white" }}>
                                        <CardMedia
                                            component="img"
                                            onClick={() => navigate("/productDetails", { state: { val, stayType } })}
                                            src={val?.about?.images[0]}
                                            sx={{ width: "100%", height: 200, cursor: "pointer", objectFit: "cover" }}
                                            alt={val?.campName}
                                        />
                                        <CardContent sx={{ padding: 2 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "serif", color: "#333" }}>
                                                {val?.campName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ display: "flex", gap: 1, alignItems: "center", color: "#2368A2", mt: 1 }}>
                                                <LocationOnIcon sx={{ fontSize: "18px" }} /> {val?.address?.tal}, {val?.address?.dist}
                                            </Typography>
                                            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 1 }}>
                                                <Typography sx={{ fontWeight: "bold", color: "green", fontSize: "1.2rem" }}>
                                                    ₹{val?.prices?.afterDiscount}
                                                </Typography>
                                                <Typography sx={{ textDecoration: 'line-through', color: 'gray' }}>
                                                    ₹{val?.prices?.actual}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2 }}>
                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                    <Typography sx={{ fontSize: "15px" }}>Rating: {val?.ratings?.location}</Typography>
                                                    <Rating name="half-rating" defaultValue={val?.ratings?.location} precision={0.5} sx={{ fontSize: "1rem" }} />
                                                </Stack>
                                            </Box>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    startIcon={<ShoppingBagIcon />} 
                                                    onClick={() => handleAddToCart(val)}
                                                >
                                                    Add to Cart
                                                </Button>
                                                <Button 
                                                    variant="outlined" 
                                                    color="error" 
                                                    startIcon={<DeleteIcon />} 
                                                    onClick={() => handleRemoveBookmark(val.id)}
                                                >
                                                    Remove
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Typography variant="h6" sx={{ textAlign: 'center', width: '100%', mt: 5, color: "#666" }}>
                                No bookmarks yet. Start exploring and save your favorite camps!
                            </Typography>
                        )}
                    </Grid>
                </>
            ) : (
                <Box sx={{ width: "100%", height: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                    <Typography variant="h6" color="text.secondary">
                        Please log in to view your Bookmark details.
                    </Typography>
                    <Link to="/login">
                        <Button variant="contained">Login</Button>
                    </Link>
                </Box>
            )}
        </Box>
    );
};

export default BookmarkPage;
