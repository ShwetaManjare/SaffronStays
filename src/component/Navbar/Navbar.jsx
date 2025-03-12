import { BookmarkBorderOutlined, Phone } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { FaUser } from "react-icons/fa";
import { MdPerson, MdLogout } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Logo from "../../assets/HomePage/logo.png";
import { useContext, useEffect, useState } from "react";
import { staysContext } from "../AppContext/TentsContext";
import axios from "axios";

const Navbar = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setUserDetails,
    addBookmark,
    setAddBookmark,
    addCart,
    setAddCart,
  } = useContext(staysContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    axios
      .get("http://localhost:3000/bookmark")
      .then((resp) => {
        setAddBookmark(resp.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((resp) => {
        setAddCart(resp.data);
      })
      .catch((error) => console.log(error));
  }, [addCart]);

  let bookmarkcount = addBookmark.length;
  let cartcount = addCart.length;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserDetails({ email: "", password: "" });
    navigate("/"); // Redirect to login page
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/aboutus" },
    { label: "Tours", to: "/stays" },
    { label: "Contact", to: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <Box
      className="flex items-center gap-2 sm:w-28"
      sx={{
        fontSize: { xs: "14px", sm: "16px" },
        // gap: { xs: "1rem", sm: "2rem" },
      }}
    >
      <Box
        component="img"
        className="hidden sm:block"
        src={Logo}
        alt="Logo"
        sx={{ width: "40px", height: "40px" }}
      />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Waltograph', sans-serif",
          fontSize: { xs: "16px", sm: "20px", lg: "20px" },
          fontWeight: 500,
          color: "black",
        }}
      >
        <Link to="/">SaffronStays</Link>
      </Typography>
    </Box>

      <List>
        {navLinks.map((link) => (
          <ListItem button key={link.to}>
            <Link to={link.to}>
              <ListItemText primary={link.label} />
            </Link>
          </ListItem>
        ))}
      </List>

      {/* Add Login and Contact Us buttons in the drawer */}
      <Box className="flex flex-col gap-2 px-4 py-2">
        {isLoggedIn ? (
          <Link to="">
            <Button
              variant="outlined"
              onClick={handleLogout}
              className="bg-gray-200 text-black border border-black rounded-xl w-full"
            >
              Logout
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button
              variant="outlined"
              className="bg-white text-black border   rounded-xl w-full h-full shadow-2xl"
            >
              Login
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white", color: "black", height: "60px" }}
    >
      <Toolbar
        sx={{}}
        class="flex justify-between items-center w-full  px-2 py-2"
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", sm: "none" }, mr: 2 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
       
<Box
      className="flex items-center gap-2 sm:w-28"
      sx={{
        fontSize: { xs: "14px", sm: "16px" },
        // gap: { xs: "1rem", sm: "2rem" },
      }}
    >
      <Box
        component="img"
        className="hidden sm:block"
        src={Logo}
        alt="Logo"
        sx={{ width: "40px", height: "40px" }}
      />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Waltograph', sans-serif",
          fontSize: { xs: "16px", sm: "20px", lg: "20px" },
          fontWeight: 500,
          color: "black",
        }}
      >
        <Link to="/">SaffronStays</Link>
      </Typography>
    </Box>

        {/* Desktop Navigation */}
        <Box
  sx={{ width: "45%" }}
  className="hidden md:flex gap-6 justify-center items-center text-blue-400 "
>
  {navLinks.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      className={({ isActive }) =>
        isActive
          ? "text-blue-800 underline font-semibold"
          : "text-black hover:text-blue-600"
      }
      style={{
        fontFamily: "Times New Roman, serif",
        fontSize: "18px",
        textAlign: "center",
      }}
    >
      {link.label}
    </NavLink>
  ))}
</Box>



        {/* Icons */}
        <Box class=" flex items-center justify-end   gap-0">
         
          {/* Cart */}
<Link to="/cart">
 {isLoggedIn?(
   <IconButton
   sx={{
     backgroundColor: "white", 
     boxShadow: 2, 
     borderRadius: "8px", 
     padding: "5px", 
     "&:hover": { boxShadow: 4 }, 
   }}
 >
   <Badge badgeContent={cartcount} color="primary">
     <ShoppingBagIcon sx={{ color: "black" }} />
   </Badge>
 </IconButton>
 ):( <IconButton
  sx={{
    backgroundColor: "white", 
    boxShadow: 2, 
    borderRadius: "8px", 
    padding: "5px", 
    "&:hover": { boxShadow: 4 }, 
  }}
>
  <Badge badgeContent={0} color="primary">
    <ShoppingBagIcon sx={{ color: "black" }} />
  </Badge>
</IconButton>)}
</Link>

{/* Bookmark */}
<Link to="/bookmark">
 {isLoggedIn?( <IconButton
    sx={{
      backgroundColor: "white",
      boxShadow: 2,
      borderRadius: "8px",
      padding: "5px",
      "&:hover": { boxShadow: 4 },
    }}
  >
    <Badge badgeContent={bookmarkcount} color="primary">
      <BookmarkBorderOutlined sx={{ color: "black" }} />
    </Badge>
  </IconButton>):( <IconButton
    sx={{
      backgroundColor: "white",
      boxShadow: 2,
      borderRadius: "8px",
      padding: "5px",
      "&:hover": { boxShadow: 4 },
    }}
  >
    <Badge badgeContent={0} color="primary">
      <BookmarkBorderOutlined sx={{ color: "black" }} />
    </Badge>
  </IconButton>)}
</Link>

          {isLoggedIn ? (
            <Box>
              {/* Button to open dropdown */}
              <Button
                onClick={handleClick}
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "none",
                  boxShadow:2,
                  px: 3,
                  py: 1,
                  gap:1,
                  fontSize: "18px",
                  borderRadius: "6px",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
              >
                <Typography sx={{ mr: 1, display: "flex", alignItems: "center" }}>
  <MdPerson size={22} /> 
</Typography>
<IoIosArrowDropdown  size={22} /> 

              </Button>

              {/* Dropdown Menu */}
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    boxShadow: 3,
                    borderRadius: "18px",
                    minWidth: "150px",
                  },
                }}
              >
                {/* My Profile */}
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/userData"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <MdPerson size={20} className="text-blue-600" />

                  <Link to="/userprofile">My Profile</Link>
                </MenuItem>

                {/* Booking Histroy */}
                 <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/userData"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <ShoppingBagIcon color="black" size={20} />

                  <Link to="/bookinghistroy">Booking Histroy</Link>
                </MenuItem> 

                {/* Logout */}
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleLogout();
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "red",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <MdLogout size={20} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link to="/login">
             <Button
                onClick={handleClick}
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "none",
                  boxShadow:2,
                  px: 2,
                  py: 1,
                  gap:1,
                  fontFamily:"Times New Roman",
                  fontSize: "15px",
                  borderRadius: "6px",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
              >
  <FaUser />
  Login
</Button>


            </Link>
          )}
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
