import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export const Footer = () => {
  return (
    <div>
      <Grid className="footer_content">
        <Box>
          <Typography>Phone</Typography>
          <Typography>1236547890</Typography>
        </Box>
        <Box>
          <Typography>Email</Typography>
          <Typography>email@gmail.com</Typography>
        </Box>
        <Box>
          <Typography>Follow Me</Typography>
          <div style={{display:"flex", gap:"5px"}}>
            <LinkedInIcon/>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
          </div>
        </Box>
      </Grid>
    </div>
  );
};
