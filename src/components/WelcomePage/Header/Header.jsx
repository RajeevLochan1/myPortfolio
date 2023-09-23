import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Logo from "../../../assests/images/logo.jpg";
import { Link } from "react-router-dom";

import "./header.css";

export const Header = () => {
  return (
    <div>
      <div sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
              color: "black",
              alignItems: "center",
            }}
          >
              <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <div style={{ display: "flex", gap: "10px" }}>
              {/* Wrap the logo and name in a Link */}
                <img src={Logo} alt="logo" width="55" height="56" />
                <Typography marginTop={"12px"} style={{ fontSize: "20px" }}>
                  Rajeev Lochan Panda{" "}
                  <span style={{ fontSize: "15px" }}>
                    Software Developer Engineer
                  </span>
                </Typography>
            </div>
              </Link>
            <Box>
              <Button color="inherit">Resume</Button>
              <Button color="inherit">Project</Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};
