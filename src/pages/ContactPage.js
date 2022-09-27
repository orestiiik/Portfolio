import {Box, Container, Grid, TextField, Typography} from "@mui/material";
import ThemeContext from "../context/ThemeContext";
import React, {useState, useContext} from "react";
import Fade from 'react-reveal/Fade';

export default function ContactPage() {
    const theme = useContext(ThemeContext)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);

    async function handleSubmit(e) {
        setLoading((current) => !current);
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", document.querySelector('input[name="name"]').value);
        formData.append("email", document.querySelector('input[name="email"]').value);
        formData.append("message", document.querySelector('textarea[name="message"]').value);
        const res = await fetch("https://getform.io/f/b3c7a234-4ab5-424c-91bf-d881baefbb11", {
            method: "POST", body: formData,
        }).catch((error) => console.log(error));
        if (res.redirected === true) {
            setTimeout(() => {
                setLoading((current) => !current);
            }, 600);
            setDone((current) => !current);
            setTimeout(() => {
                setDone((current) => !current);
            }, 3000);
        }
        if (res.redirected === false) {
            setError((current) => !current);
        }
    }

    return (<section>
            <Container maxWidth={'xl'}>
                <Grid container spacing={2} pt={5} pb={3}>
                    <Grid item xs={12} md={6} pb={6}>
                        <Fade left>

                            <Typography fontWeight={600} variant={'h5'} color={theme.secondaryColor}>Orest
                                Gluchy</Typography>
                            <Typography pt={1} fontWeight={200} color={theme.textColor}><a href="tel:+421948777899"
                                                                                           style={{
                                                                                               color: 'inherit',
                                                                                               textDecoration: 'none'
                                                                                           }}>+421 948 777
                                899</a></Typography>
                            <Typography pb={1} fontWeight={200} color={theme.textColor}><a href="tel:+4550371388"
                                                                                           style={{
                                                                                               color: 'inherit',
                                                                                               textDecoration: 'none'
                                                                                           }}>+45 50 37 13
                                88</a></Typography>
                            <Typography pt={2} pb={7} fontWeight={200} color={theme.textColor}><a
                                href="mailto:gluchyorest@gmail.com"
                                style={{
                                    color: 'inherit', textDecoration: 'none'
                                }}>gluchyorest@gmail.com</a></Typography>
                            <iframe
                                src="https://maps.google.com/maps?q=Gr%C3%A6svangen%20Tilst&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                title="Company address"
                                height="250"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                            >
                            </iframe>
                        </Fade>

                    </Grid>
                    <Grid item xs={12} md={6} my={'auto'}>
                        <Fade right>

                            <Box px={4} mx={5} py={3} bgcolor={theme.textColor}>
                                <Typography fontWeight={600} variant={'h5'} color={theme.primaryColor}>
                                    Contact me 💻
                                </Typography>
                                <form onSubmit={handleSubmit} method="POST">
                                    <Box py={1}>
                                        <TextField id="name" name='name' label="Name" variant="filled" fullWidth/>
                                    </Box>
                                    <Box py={1}>
                                        <TextField id="email" name='email' label="Email" variant="filled" fullWidth/>
                                    </Box>
                                    <Box py={1}>
                                        <TextField rows={4} multiline id="message" name='message' label="Message"
                                                   variant="filled" fullWidth/>
                                    </Box>
                                    {error ? (<Box sx={{
                                            backgroundColor: 'red',
                                            width: 'fit-content',
                                            fontWeight: 500,
                                            borderWidth: 2,
                                            borderStyle: 'solid',
                                            borderColor: theme.primaryColor,
                                            px: 3,
                                            py: 1,
                                            color: theme.textColor,
                                            textTransform: 'uppercase'
                                        }}>
                                            Error
                                        </Box>) : loading ? (<Box sx={{
                                            backgroundColor: theme.secondaryColor,
                                            width: 'fit-content',
                                            fontWeight: 500,
                                            borderWidth: 2,
                                            borderStyle: 'solid',
                                            borderColor: theme.primaryColor,
                                            px: 3,
                                            py: 1,
                                            color: theme.primaryColor,
                                            textTransform: 'uppercase'
                                        }}>
                                            Sending...
                                        </Box>) : done ? (<Box sx={{
                                            backgroundColor: 'green',
                                            width: 'fit-content',
                                            fontWeight: 500,
                                            borderWidth: 2,
                                            borderStyle: 'solid',
                                            borderColor: theme.primaryColor,
                                            px: 3,
                                            py: 1,
                                            color: theme.textColor,
                                            textTransform: 'uppercase'
                                        }}>
                                            Sent
                                        </Box>) : (<button
                                            type="submit"
                                        >
                                            <Box sx={{
                                                backgroundColor: theme.secondaryColor,
                                                fontWeight: 500,
                                                borderWidth: 2,
                                                borderStyle: 'solid',
                                                borderColor: theme.primaryColor,
                                                px: 3,
                                                py: 1,
                                                color: theme.primaryColor,
                                                textTransform: 'uppercase'
                                            }}>
                                                Send
                                            </Box>
                                        </button>)}
                                </form>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </section>)
};