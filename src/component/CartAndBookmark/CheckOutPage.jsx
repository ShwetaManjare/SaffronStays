// import React, { useContext, useState } from "react";
// import { staysContext } from "../AppContext/TentsContext";
// import {
//     Box,
//     Typography,
//     TextField,
//     MenuItem,
//     Grid,
//     Card,
//     CardContent,
//     Divider,
//     Button,
//     FormControl,
//     InputLabel,
//     Select,
// } from "@mui/material";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//     const { addCart, setAddCart } = useContext(staysContext);
//     const navigate = useNavigate();
//     const [paymentMethod, setPaymentMethod] = useState("Credit Card");
//     const [userInfo, setUserInfo] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });


//     const handleChange = (e) => {
//         setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
//     };


//     const handleCheckout = async () => {
//         if (!userInfo.name || !userInfo.email || !userInfo.phone) {
//             alert("Please fill in all details before proceeding.");
//             return;
//         }

//         const bookingData = {
//             userId: Date.now().toString(36), // Unique ID for the user
//             userDetails: {
//                 name: userInfo.name,
//                 email: userInfo.email,
//                 phone: userInfo.phone,
//                 paymentMethod: paymentMethod,
//             },
//             bookings: addCart.map((stay) => ({
//                 campId: stay.id,
//                 campName: stay.campName,
//                 fromDate: "2025-03-02", // Example: Replace with selected dates
//                 toDate: "2025-03-04",
//                 adults: 2, // Example: Replace with user input
//                 children: 2,
//                 totalGuests: 4,
//                 pricePerNight: stay.prices.afterDiscount,
//                 totalPrice: stay.prices.afterDiscount * 2, // Assuming 2 nights
//             })),
//         };

//         try {
//             const response = await fetch("http://localhost:3000/bookingDetails", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(bookingData),
//             });

//             if (response.ok) {
//                 toast.success("Booking Successful! 🎉");
//                 await fetch("http://localhost:3000/cart", {
//                     method: "DELETE",
//                 });
//                 setAddCart([]);
//                 setTimeout(() => {
//                     navigate("/confirmpage");
//                 }, 500);
//             } else {
//                 alert("Failed to book. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error booking:", error);
//             alert("Error processing booking.");
//         }
//     };


//     return (
//         <Box sx={{ padding: { xs: "10px", sm: "20px" }, maxWidth: "900px", margin: "auto", textAlign: "center" }}>
//             <Typography variant="h5" fontWeight="bold" gutterBottom fontFamily="Times New Roman">
//                 Complete Your Booking
//             </Typography>

//             <Divider sx={{ marginY: "20px" }} />

//             <Grid container spacing={2}>
//                 {/* User Information */}
//                 <Grid item xs={12} sm={6}>
//                     <Card sx={{ padding: 2 }}>
//                         <CardContent>
//                             <Typography variant="h6" fontWeight="bold" gutterBottom>
//                                 Enter Your Details
//                             </Typography>
//                             <TextField fullWidth name="name" label="Full Name" value={userInfo.name} onChange={handleChange} margin="dense" />
//                             <TextField fullWidth name="email" label="Email" value={userInfo.email} onChange={handleChange} margin="dense" />
//                             <TextField fullWidth name="phone" label="Phone Number" value={userInfo.phone} onChange={handleChange} margin="dense" />
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Payment & Booking Summary */}
//                 <Grid item xs={12} sm={6}>
//                     <Card sx={{ padding: 2 }}>
//                         <CardContent>
//                             <Typography variant="h6" fontWeight="bold" gutterBottom>
//                                 Payment Method
//                             </Typography>
//                             <FormControl fullWidth margin="dense">
//                                 <InputLabel>Payment Method</InputLabel>
//                                 <Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//                                     <MenuItem value="Credit Card">Credit Card</MenuItem>
//                                     <MenuItem value="UPI">UPI</MenuItem>
//                                     <MenuItem value="Net Banking">Net Banking</MenuItem>
//                                     <MenuItem value="Cash on Arrival">Cash on Arrival</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>

//             <Divider sx={{ marginY: "20px" }} />

//             {/* Booking Summary */}
//             <Card sx={{ padding: 2, marginBottom: "20px" }}>
//                 <CardContent>
//                     <Typography variant="h6" fontWeight="bold" gutterBottom>
//                         Booking Summary
//                     </Typography>
//                     {addCart.map((stay) => (
//                         <Box key={stay.id} sx={{ marginBottom: "10px", textAlign: "left" }}>
//                             <Typography variant="body1">
//                                 🏕 {stay.campName} - ₹{stay.prices.afterDiscount} per day
//                             </Typography>
//                         </Box>
//                     ))}
//                     <Typography variant="h6" fontWeight="bold" sx={{ marginTop: "10px" }}>
//                         Total Price: ₹{addCart.reduce((sum, stay) => sum + stay.prices.afterDiscount, 0)}
//                     </Typography>
//                 </CardContent>
//             </Card>

//             {/* Checkout Button */}
//             <Link>
//             <Button variant="contained" color="primary" size="large" onClick={handleCheckout} sx={{ width: { xs: "100%", sm: "auto" } }}>
//                 Confirm & Pay
//             </Button>
//             </Link>
//         </Box>
//     );
// };

// export default CheckoutPage;



import React, { useContext, useState } from "react";
import { staysContext } from "../AppContext/TentsContext";
import { 
    Box, Typography, TextField, MenuItem, Grid, Card, CardContent, Divider, Button, 
    FormControl, InputLabel, Select, useMediaQuery
} from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const CheckoutPage = () => {
    const { addCart, setAddCart } = useContext(staysContext);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleCheckout = async () => {
        if (!userInfo.name || !userInfo.email || !userInfo.phone) {
            toast.error("Please fill in all details before proceeding.");
            return;
        }

        const bookingData = {
            userId: Date.now().toString(36),
            userDetails: { ...userInfo, paymentMethod },
            bookings: addCart.map((stay) => ({
                campId: stay.id,
                campName: stay.campName,
                fromDate: "2025-03-02",
                toDate: "2025-03-04",
                adults: 2,
                children: 2,
                totalGuests: 4,
                pricePerNight: stay.prices.afterDiscount,
                totalPrice: stay.prices.afterDiscount * 2,
            })),
        };

        try {
            const response = await fetch("http://localhost:3000/bookingDetails", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                toast.success("Booking Successful! 🎉");
                await fetch("http://localhost:3000/cart", { method: "DELETE" });
                setAddCart([]);
                setTimeout(() => navigate("/confirmpage"), 500);
            } else {
                toast.error("Failed to book. Please try again.");
            }
        } catch (error) {
            toast.error("Error processing booking.");
        }
    };

    return (
        <Box sx={{ 
            minHeight: "100vh", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            bgcolor: "#f5f5f5", 
            py: 5 
        }}>
            <Box sx={{ 
                width: isMobile ? "95%" : "80%", 
                maxWidth: 1950, 
                bgcolor: "white", 
                p: isMobile ? 2 : 4, 
                borderRadius: "12px", 
                boxShadow: 3 
            }}>
                <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" textAlign="center" gutterBottom>
                    🏕 Complete Your Booking
                </Typography>
                <Divider sx={{ my: 3, bgcolor: "grey.300" }} />

                {/* Form Section */}
                <Grid container spacing={isMobile ? 2 : 3}>
                    {/* User Information */}
                    <Grid item xs={12} sm={6}>
                        <Card elevation={4} sx={{ p: isMobile ? 2 : 3, borderRadius: "12px", bgcolor: "#fafafa" }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">Personal Information</Typography>
                                <TextField fullWidth name="name" label="Full Name" value={userInfo.name} onChange={handleChange} margin="dense" variant="outlined" />
                                <TextField fullWidth name="email" label="Email Address" value={userInfo.email} onChange={handleChange} margin="dense" variant="outlined" />
                                <TextField fullWidth name="phone" label="Phone Number" value={userInfo.phone} onChange={handleChange} margin="dense" variant="outlined" />
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Payment Method */}
                    <Grid item xs={12} sm={6}>
                        <Card elevation={4} sx={{ p: isMobile ? 2 : 3, borderRadius: "12px", bgcolor: "#fafafa" }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">Payment Method</Typography>
                                <FormControl fullWidth margin="dense" variant="outlined">
                                    <InputLabel>Payment Method</InputLabel>
                                    <Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} label="Payment Method">
                                        <MenuItem value="Credit Card">💳 Credit Card</MenuItem>
                                        <MenuItem value="UPI">📲 UPI</MenuItem>
                                        <MenuItem value="Net Banking">🏦 Net Banking</MenuItem>
                                        <MenuItem value="Cash on Arrival">💵 Cash on Arrival</MenuItem>
                                    </Select>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, bgcolor: "grey.300" }} />

                {/* Booking Summary */}
                <Card elevation={4} sx={{ p: 3, borderRadius: "12px", bgcolor: "#fafafa", mb: 3 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold">Booking Summary</Typography>
                        {addCart.length > 0 ? (
                            addCart.map((stay) => (
                                <Typography key={stay.id} variant="body1" sx={{ mt: 1 }}>
                                    🏕 {stay.campName} - ₹{stay.prices.afterDiscount} per day
                                </Typography>
                            ))
                        ) : (
                            <Typography color="text.secondary" sx={{ mt: 2 }}>No items in your cart.</Typography>
                        )}
                        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                            Total Price: ₹{addCart.reduce((sum, stay) => sum + stay.prices.afterDiscount * 2, 0)}
                        </Typography>
                    </CardContent>
                </Card>

                {/* Checkout Button */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        onClick={handleCheckout} 
                        sx={{ px: isMobile ? 3 : 5, py: 1.5, borderRadius: "10px", fontSize: "1rem", fontWeight: "bold" }}
                    >
                        Confirm & Pay
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CheckoutPage;
