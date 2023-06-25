import React from "react";
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {buttonStyle} from "../services/Service";
import Footer from "../services/Footer";

function HomePage() {
    const navigate = useNavigate();

    return (
        <Box>
            <Box className="box">
                <h1>Hello dear stranger, welcome to our site</h1>
                <h2>I am glad to help you with creating QR-Code</h2>
                <Button className="button" sx={buttonStyle} variant="contained" onClick={() => navigate("/MainPage")}>Begin
                    your Journey</Button>
            </Box>
            <Box className="footer">
                <Footer/>
            </Box>
        </Box>
    );
}

export default HomePage;