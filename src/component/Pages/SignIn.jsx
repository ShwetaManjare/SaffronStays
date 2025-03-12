import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import React, { useContext, useState, useReducer, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { staysContext } from "../AppContext/TentsContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import SIGIN from "../../assets/About/sigin.jpg";
import Img from "../../assets/Hero/sigin.mp4";

const initialState = {
  email: localStorage.getItem("rememberEmail") || "",
  password: localStorage.getItem("rememberPassword") || "",
  users: [],
  isLoggedIn: false,
  isAdmin: false,
  error: "",
  rememberMe: localStorage.getItem("rememberEmail") ? true : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_USERS":
      return { ...state, users: action.value };
    case "LOGIN_SUCCESS":
      return { ...state, isLoggedIn: true, error: "" };
    case "LOGIN_FAILURE":
      return { ...state, error: action.error };
    case "SET_ADMIN":
      return { ...state, isAdmin: action.value };
    case "SET_REMEMBER_ME":
      return { ...state, rememberMe: action.value };
    default:
      return state;
  }
};

const SignIn = () => {
  const { setUserDetails, admin, setIsLoggedIn, setIsAdminLoggedIn } =
    useContext(staysContext);
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        dispatch({ type: "SET_USERS", value: response.data });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, users, rememberMe } = state;

    if (!email || !password) {
      dispatch({ type: "LOGIN_FAILURE", error: "Please fill in all fields." });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      dispatch({
        type: "LOGIN_FAILURE",
        error: "Please enter a valid email address.",
      });
      return;
    }

    if (password.length < 6) {
      dispatch({
        type: "LOGIN_FAILURE",
        error: "Password must be at least 6 characters.",
      });
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    const adminUser = admin.find(
      (a) => a.email === email && a.password === password
    );

    if (user || adminUser) {
      dispatch({ type: "LOGIN_SUCCESS" });
      toast.success(`${adminUser ? "Admin" : "User"} login successful!`, {
        duration: 2000,
      });

      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
        localStorage.setItem("rememberPassword", password);
      } else {
        localStorage.removeItem("rememberEmail");
        localStorage.removeItem("rememberPassword");
      }

      if (adminUser) {
        dispatch({ type: "SET_ADMIN", value: true });
        setIsAdminLoggedIn(true);
        setUserDetails({ email, password, adminUser });
        navigate("/admin-dash");
      } else {
        setIsLoggedIn(true);
        setUserDetails({ email, password, user });
        navigate("/");
      }
    } else {
      dispatch({
        type: "LOGIN_FAILURE",
        error: "Invalid username or password.",
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

      {/* Right Side - Form Section */}
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
          width="400"
          height="400"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "80px",
            pointerEvents: "none", // Prevents interaction (no context menu)
            objectFit: "cover", // Ensures the video fills the area properly
          }}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            p: 4,
            bgcolor: "rgba(255, 255, 255, 0.85)",
            borderRadius: 4,
            boxShadow: 10,
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
              fontFamily: "Times New Roman",
            }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center", mb: 3 }}>
            Please enter your details
          </Typography>
          {state.error && (
            <Typography sx={{ color: "red", textAlign: "center", mb: 2 }}>
              {state.error}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              sx={{ mb: 2 }}
              onChange={handleChange}
              value={state.email}
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              sx={{ mb: 2 }}
              onChange={handleChange}
              value={state.password}
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
              Sign In
            </Button>
            <Typography sx={{ textAlign: "center", mt: 2 }}>
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "#1976D2" }}>
                Sign Up
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

export default SignIn;
