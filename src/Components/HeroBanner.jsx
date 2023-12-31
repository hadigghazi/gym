import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.jpg";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography ml={10} color="#00ffff" fontWeight="600" fontSize="26px">
        Body Building
      </Typography>
      <Typography
        ml={10}
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography ml={10} mb={4} fontSize="22px" lineHeight="35px">
        Check out the most effective exercises
      </Typography>
      <Button
        sx={{
          marginLeft: "90px !important",
          backgroundColor: "#00ffff",
          padding: "10px",
        }}
        variant="contained"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#00ffff"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize={"200px"}
      >
        Exercise
      </Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
