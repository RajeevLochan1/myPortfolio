import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProfilePicture from "../../../assests/images/spiderman.png";
import "./body.css";

export const Body = () => {
  return (
    <div>
      <Grid mt={10} className="profile_body">
        <Box
          sx={{
            display: "flex",
            gap: "80px",
            top: "25%",
            left: "25%",
          }}
        >
          <Grid>
            <img className="profilePicture" src={ProfilePicture} alt="" />
          </Grid>

          <Grid width={"50%"}>
            <Grid textAlign={"left"} width={"50%"}>
              <Typography style={{ fontSize: "100px", fontWeight: "bold" }}>
                Hello
              </Typography>
              <Typography style={{ fontSize: "22px", fontWeight: "bolder" }}>
                A bit about me
              </Typography>
              <Typography style={{ fontSize: "16px", lineHeight: "1.6rem" }}>
                I'm a paragraph. Click here to add your own text and edit me. I
                am a great place for you to tell a story and let your users know
                a little more about you.
              </Typography>
            </Grid>
            <Box display={"flex"} gap={"20px"} mt={6}>
              <Button
                component={Link}
                to="/resume"
                sx={{
                  background: "#d19e0f",
                  borderRadius: "92px",
                  height: "150px",
                  width: "150px",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "15px",
                  fontWeight: "bolder",
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                }}
              >
                Resume
              </Button>
              <Button
                component={Link}
                to="/project"
                sx={{
                  background: "#ff4c4ce0",
                  borderRadius: "92px",
                  height: "150px",
                  width: "150px",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "15px",
                  fontWeight: "bolder",
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                }}
              >
                Projects
              </Button>
              <Button
                component={Link}
                to="/contact"
                sx={{
                  background: "#44afaf",
                  borderRadius: "92px",
                  height: "150px",
                  width: "150px",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "15px",
                  fontWeight: "bolder",
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                }}
              >
                Contact
              </Button>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <hr />
    </div>
  );
};
