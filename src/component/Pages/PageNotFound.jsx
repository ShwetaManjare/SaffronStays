import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Image = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: 400,
  borderRadius: "8px",
});

const PageNotFound = () => {
  let navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundClip:
          "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
      }}
    >
      <Image
        src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
        alt="404 Not Found"
      />
      <Typography variant="h1" color="error" sx={{ mt: 2, fontWeight: "bold" }}>
        404
      </Typography>

      <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
        Lost in the Wilderness?
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, maxWidth: "600px" }}>
        It seems like you've wandered off the beaten path. Let's get you back on
        track to your next adventure!
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{
          mt: 3,
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default PageNotFound;
