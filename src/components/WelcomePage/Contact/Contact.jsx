import React from "react";
import { Header } from "../Header/Header";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "./contact.css"
import { Footer } from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <Header />
      <Grid mt={10} mb={6} display={"flex"} justifyContent={"space-around"}>
        <div className="contact_details">
          <Box>
            <Typography mb={0} fontSize={42}>Contact</Typography>
            <p>Looking forward to hearing from you</p>
          </Box>

          <Box>
            <Typography fontSize={18}>Phone</Typography>
            <p>1326547890</p>
          </Box>

          <Box>
            <Typography fontSize={18}>Email</Typography>
            <p>email@gmail.com</p>
          </Box>
        </div>
        <div style={{width:"40%", marginRight:"100px"}}>
          <form>
            <InputLabel>First Name</InputLabel>
            <TextField fullWidth margin="normal" name="firstName" />
            <InputLabel>Last Name</InputLabel>
            <TextField fullWidth margin="normal" name="lastName" />
            <InputLabel>Email</InputLabel>
            <TextField
              fullWidth
              margin="normal"
              type="email"
              name="email"
              required
            />
            <InputLabel>Subject</InputLabel>
            <TextField fullWidth margin="normal" name="subject" />
            <InputLabel>Message</InputLabel>
            <div style={{display:"flex" , gap:"10px"}}>
                <TextareaAutosize
                fullWidth
                margin="normal"
                name="message"
                multiline
                rows={8}
                style={{ width: "100%", minHeight: "200px", resize: 'none' }}
                />
                <Button
                sx={{
                    top: "80px",
                    background: "#d19e0f",
                    borderRadius: "92px",
                    height: "90px",
                    width: "100px",
                    color: "black",
                    border: "1px solid black",
                    fontSize: "15px",
                    fontWeight: "bolder",
                    ":hover": {
                    bgcolor: "white",
                    color: "black",
                    },
                }}
                type="submit"
                >
                Submit
                </Button>
            </div>
          </form>
        </div>
      </Grid>
      <hr />
      <Footer />
    </>
  );
};

export default Contact;
