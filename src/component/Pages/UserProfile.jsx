// import React, { useContext, useEffect, useState } from "react";
// import { Box, Typography, Avatar, Card, CardContent, LinearProgress } from "@mui/material";
// import { deepPurple } from "@mui/material/colors";
// import { staysContext } from "../AppContext/TentsContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UserProfile = () => {
//   const { userDetails, isLoggedIn, setIsLoggedIn } = useContext(staysContext);
//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate('/')
//     }
//   }, [isLoggedIn])

//   useEffect(() => {
//     axios.get("http://localhost:3000/users").then((resp) => {
//       const matchedUser = resp.data.find((user) => user.email === userDetails.email);
//       if (matchedUser) {
//         setUserData(matchedUser);
//       }
//     }).catch((error) => {
//       console.error("Error fetching user data:", error);
//     });
//   }, [userDetails.email]);

//   return (

//     isLoggedIn ? (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           p: 2,
//         }}
//       >
//         <Card
//           sx={{
//             maxWidth: 400,
//             width: "100%",
//             textAlign: "center",
//             p: 3,
//             boxShadow: 3,
//           }}
//         >
//           <Avatar
//             sx={{
//               bgcolor: deepPurple[500],
//               width: 80,
//               height: 80,
//               fontSize: 32,
//               margin: "auto",
//             }}
//           >
//             {userData ? userData.username.charAt(0).toUpperCase() : "?"}
//           </Avatar>

//           <CardContent>
//             {userData ? (
//               <>
//                 <Typography variant="h5" fontWeight="bold">
//                   {userData.username}
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   {userData.email}
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   {userData.contact}
//                 </Typography>
//               </>
//             ) : (
//               <Typography variant="h6" color="text.secondary">
//                 User not found
//               </Typography>
//             )}
//           </CardContent>
//         </Card>
//       </Box>
//     ) :(
//       <Box sx={{ width: '100%',height:"80vh" }}>
//       <LinearProgress />
//     </Box>
//     )

//   );
// };

// export default UserProfile;








import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = styled(Box)({
  width: 250,
  height: "100vh",
  background: "#FAFAFA",
  padding: "20px",
  borderRight: "1px solid #E0E0E0",
});

const MainContainer = styled(Box)({
  display: "flex",
  height: "100vh",
});

const Content = styled(Box)({
  flexGrow: 1,
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ProfileAvatar = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
});

const EditIconButton = styled(IconButton)({
  position: "absolute",
  bottom: 5,
  right: 5,
  background: "#FF5722",
  color: "white",
  width: "30px",
  height: "30px",
  "&:hover": {
    background: "#E64A19",
  },
});

const InputRow = styled(Box)({
  display: "flex",
  gap: "20px",
  width: "100%",
  maxWidth: "600px",
  marginBottom: "15px",
});

const SaveButton = styled(Button)({
  marginTop: "20px",
  background: "linear-gradient(to right, #ff5722, #ff9800)",
  color: "#fff",
  padding: "10px 40px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "8px",
  "&:hover": {
    background: "linear-gradient(to right, #e64a19, #ff5722)",
  },
});

const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    postalCode: "",
    profilePic: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch user data from API
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((resp) => {
        if (resp.data.length > 0) {
          const user = resp.data[0]; 
          setProfileData({
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            email: user.email || "",
            phone: user.phone || "",
            location: user.location || "",
            postalCode: user.postalCode || "",
            profilePic: user.profilePic || "https://via.placeholder.com/100",
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load user data");
        setLoading(false);
      });
  }, []);
  

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData({ ...profileData, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setProfileData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      postalCode: "",
      profilePic: "https://via.placeholder.com/100",
    });
    toast.success("Profile updated successfully!");
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <MainContainer>
      {/* Sidebar */}
      <Sidebar>
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: "20px" }}>
          User Profile
        </Typography>
        <List>
          <ListItem button selected>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User Info" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Watchlist" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
        </List>
        <Divider sx={{ margin: "20px 0" }} />
        <ListItem button sx={{ color: "red" }}>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "red" }} />
          </ListItemIcon>

          
          <ListItemText primary="Log out" />
        </ListItem>
      </Sidebar>

      {/* Profile Content */}
      <Content>
        {/* Profile Picture */}
        <ProfileAvatar>
          <Avatar
            src={profileData.profilePic}
            sx={{ width: 100, height: 100, border: "3px solid white" }}
          />
          <input
            accept="image/*"
            type="file"
            id="profile-pic-upload"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <label htmlFor="profile-pic-upload">
            <EditIconButton component="span">
              <PhotoCameraIcon fontSize="small" />
            </EditIconButton>
          </label>
        </ProfileAvatar>

        <Typography variant="h5" fontWeight="bold">
          {profileData.firstName} {profileData.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profileData.location}
        </Typography>

        {/* Input Fields */}
        <Box sx={{ width: "100%", maxWidth: "600px", marginTop: "20px" }}>
          <InputRow>
            <TextField fullWidth label="Name" name="firstName" value={profileData.firstName} onChange={handleInputChange} />
            <TextField fullWidth label="Full Name" name="lastName" value={profileData.lastName} onChange={handleInputChange} />
          </InputRow>

          <InputRow>
            <TextField fullWidth label="Email Address" name="email" value={profileData.email} onChange={handleInputChange} />
            <TextField fullWidth label="Phone Number" name="phone" value={profileData.phone} onChange={handleInputChange} />
          </InputRow>

          <InputRow>
            <TextField fullWidth label="Location" name="location" value={profileData.location} onChange={handleInputChange} />
            <TextField fullWidth label="Postal Code" name="postalCode" value={profileData.postalCode} onChange={handleInputChange} />
          </InputRow>
        </Box>

        {/* Save Button */}
        <SaveButton variant="contained" onClick={handleSaveChanges}>Save Changes</SaveButton>
        <ToastContainer />
      </Content>
    </MainContainer>
  );
};

export default UserProfile;


