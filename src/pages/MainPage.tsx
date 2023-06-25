import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {buttonStyle, Email, inputStyle, QRCode} from "../services/Service";


function MainPage() {
    const [str, setText] = useState('');
    const [qrCodeImage, setQRCodeImage] = useState('');
    const [email, setEmail] = useState('');
    const showQRCode = (event: React.FormEvent) => {
        event.preventDefault();
        QRCode(str)
            .then((response) => response.arrayBuffer())
            .then((buffer) => {
                const base64Image = btoa(
                    new Uint8Array(buffer).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ""
                    )
                );
                setQRCodeImage(`data:image/png;base64,${base64Image}`);
            })
    };

    const sendEmail = () => {
        Email(email, qrCodeImage);
    }
    const isStrValid = () => str !== "";
    const isEmailValid = () => email !== "";

    return (
        <Box className="box">
            <h1>Here is a magic input, use it to see your destiny</h1>
            <Box>
                <form onSubmit={showQRCode}>
                    <TextField
                        name="str"
                        label="Tell me something"
                        error={!isStrValid()}
                        value={str}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setText(e.target.value)
                        }
                        variant="filled"
                        sx={inputStyle}
                    />
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained" sx={buttonStyle} disabled={!isStrValid()}>
                        Show me
                    </Button>
                    <br/>
                    <br/>
                </form>
            </Box>
            {qrCodeImage && (
                <Box>
                    <img src={qrCodeImage} alt="QR Code"/>
                    <br/>
                    <br/>
                    <form onSubmit={sendEmail}>
                        <TextField
                            name="str"
                            label="place for the email"
                            type="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                            variant="filled"
                            sx={inputStyle}
                        />
                        <br/>
                        <br/>
                        <Button type="submit" variant="contained" sx={buttonStyle} disabled={!isEmailValid()}>
                            send me a pigeon
                        </Button>
                    </form>
                    <a href={qrCodeImage} download={str}>
                        <Button type="submit" variant="contained" sx={buttonStyle}>
                            download
                        </Button>
                    </a>
                </Box>
            )}
        </Box>
    );
}


export default MainPage;