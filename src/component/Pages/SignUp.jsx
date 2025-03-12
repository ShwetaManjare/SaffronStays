import React, { useState, useReducer } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SIGIN from "../../assets/About/sigin.jpg";
import toast from "react-hot-toast";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Img from "../../assets/Hero/sigin.mp4";
const initialState = {
  username: "",
  email: "",
  contact: "",
  password: "",
  isChecked: false,
  error: "",
  success: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.value, success: "" };
    case "SET_SUCCESS":
      return { ...state, success: action.value, error: "" };
    case "TOGGLE_CHECKBOX":
      return { ...state, isChecked: !state.isChecked };
    default:
      return state;
  }
};

const SignUp = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(
    "Password must be at least 6 characters long."
  );
  const [showPasswordTip, setShowPasswordTip] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const handlePasswordChange = (value) => {
    handleChange("password", value);
    if (value.length < 6) {
      setPasswordMessage("Password must be at least 6 characters long.");
      setShowPasswordTip(true);
    } else {
      setPasswordMessage("✅ Password looks good!");
      setShowPasswordTip(true);
      setTimeout(() => setShowPasswordTip(false), 2000);
    }
  };

  const validateForm = () => {
    if (!state.username || !state.email || !state.password || !state.contact) {
      dispatch({ type: "SET_ERROR", value: "All fields are required" });
      return false;
    }
    if (state.username.length < 3) {
      dispatch({
        type: "SET_ERROR",
        value: "Username must be at least 3 characters long.",
      });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(state.email)) {
      dispatch({ type: "SET_ERROR", value: "Please enter a valid email." });
      return false;
    }
    if (state.password.length < 6) {
      dispatch({
        type: "SET_ERROR",
        value: "Password must be at least 6 characters long.",
      });
      return false;
    }
    if (!/^\d{10}$/.test(state.contact)) {
      dispatch({
        type: "SET_ERROR",
        value: "Contact number must be exactly 10 digits.",
      });
      return false;
    }
    if (!state.isChecked) {
      dispatch({
        type: "SET_ERROR",
        value: "You must agree to the Terms & Conditions.",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = {
      username: state.username,
      email: state.email,
      contact: state.contact,
      password: state.password,
    };

    try {
      const existingUser = await axios.get(
        `http://localhost:3000/users?email=${state.email}`
      );
      if (existingUser.data.length > 0) {
        dispatch({
          type: "SET_ERROR",
          value: "User with this email already exists!",
        });
        return;
      }

      await axios.post("http://localhost:3000/users", data, {
        headers: { "Content-Type": "application/json" },
      });
      dispatch({ type: "SET_SUCCESS", value: "Sign up successful!" });
      toast.success("Sign Up successful!", { duration: 2000 });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Signup error:", error);
      dispatch({
        type: "SET_ERROR",
        value: "Signup failed! Please try again.",
      });
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Side - Image Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${SIGIN})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          padding: "40px 20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Lucida Calligraphy', cursive",
            fontStyle: "italic",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          SaffronStay
        </Typography>
        <Typography variant="h6" sx={{ fontStyle: "italic" }}>
          Explore the world, one stay at a time.
        </Typography>
      </Grid>

      {/* Right Side - Form */}

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Important for absolute positioning inside
          p: 3,
          bgcolor: "white",
        }}
      >
        {/* Your other content here */}

        <video
          src={Img}
          autoPlay
          muted
          loop
          playsInline
          width="300"
          height="400"
          style={{
            position: "absolute",
            top: -40,
            right: 0,
            borderRadius: "80px",
            pointerEvents: "none", // Prevents interaction (no context menu)
            objectFit: "cover", // Ensures the video fills the area properly
          }}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            p: 3,
            boxShadow: 3,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 1,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              mt: "20px",
            }}
          >
            Welcome To SaffronStays
          </Typography>
          {state.error && (
            <Typography color="error" sx={{ textAlign: "center" }}>
              {state.error}
            </Typography>
          )}
          {state.success && (
            <Typography color="success.main" sx={{ textAlign: "center" }}>
              {state.success}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              onChange={(e) => handleChange("username", e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <TextField
              label="Contact"
              type="tel"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              onChange={(e) => handleChange("contact", e.target.value)}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              onChange={(e) => handlePasswordChange(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {showPasswordTip && (
              <Typography sx={{ fontSize: "12px", color: "gray" }}>
                {passwordMessage}
              </Typography>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.isChecked}
                  onChange={() => dispatch({ type: "TOGGLE_CHECKBOX" })}
                />
              }
              label="I agree to the Terms & Conditions"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#1976D2",
                color: "white",
                p: 1.5,
                "&:hover": { bgcolor: "#155A9A" },
              }}
            >
              Sign Up
            </Button>
            <Typography sx={{ textAlign: "center", mt: 2 }}>
              Already a member?{" "}
              <Link to="/login">
                <Typography component="span" sx={{ color: "#38BCF8" }}>
                  Sign In
                </Typography>
              </Link>
            </Typography>
            {/* Social Icons */}

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ p: 3, height: "50px" }} // Smaller height and reduced padding
            >
              {/* Facebook */}
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                color="primary"
                sx={{ p: 0, mx: 0.5 }}
              >
                <Facebook fontSize="small" /> {/* Small icon */}
              </IconButton>

              {/* Twitter */}
              <IconButton
                href="https://www.twitter.com"
                target="_blank"
                color="primary"
                sx={{ p: 0, mx: 0.5 }}
              >
                <Twitter fontSize="small" />
              </IconButton>

              {/* Instagram */}
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                sx={{ color: "#E1306C", p: 0, mx: 0.5 }}
              >
                <Instagram fontSize="small" />
              </IconButton>

              {/* LinkedIn */}
              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                color="primary"
                sx={{ p: 0, mx: 0.5 }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
