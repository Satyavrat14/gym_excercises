import React from "react";
import Logo from "../assets/images/Logo-1.png";
import { Box, Stack, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box mt="20px" bgcolor="#fec1c1" height="150px">
      <Stack
        gap="40px"
        alignItems="center"
        px="40px"
        pt="24px"
        width="100%"
        height="40px"
      >
        <img src={Logo} alt="Logo" />
        <Typography variant="h5" mt="2px" color="#fff">
          Made with love by Satyavrat Mishra
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
