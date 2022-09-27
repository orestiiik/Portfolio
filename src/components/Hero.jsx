import {Box, Container, Grid, Typography} from "@mui/material";
import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import {NavLink} from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Hero = () => {
    const theme = useContext(ThemeContext)

    return (
        <Box bgcolor={theme.textColor}>
            <Container maxWidth={'lg'}>
                <Fade>
                    <Grid container pt={3} pb={6}>
                        <Grid item xs={12} md={6} my={'auto'}>
                            <Typography fontSize={{xs: 42, md: 58}} fontFamily={'Gilroy'} fontWeight={600}
                                        color={theme.secondaryColor}>
                                Hello! 👋
                            </Typography>
                            <Typography fontSize={{xs: 22, md: 30}} fontFamily={'Gilroy'} color={theme.primaryColor}>
                                My name is Orest and I am Multimedia student with focus on <u>Frontend development</u>.
                            </Typography>
                            <NavLink to={'/projects'} style={{textDecoration: 'none'}}>
                                <Box mt={3} boxShadow={12} sx={{
                                    backgroundColor: theme.secondaryColor,
                                    width: 'fit-content',
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: theme.primaryColor,
                                    px: 2.8,
                                    py: 1.4,
                                    color: theme.primaryColor,
                                    fontWeight: 500,
                                    transition: '0.8s',
                                    '&:hover': {
                                        backgroundColor: theme.primaryColor,
                                        borderColor: theme.secondaryColor,
                                        color: theme.secondaryColor
                                    }
                                }}>
                                    CHECK MY WORK
                                </Box>
                            </NavLink>
                        </Grid>
                        <Grid item xs={12} md={6} py={{xs: 2, md: 0}} display={'flex'} justifyContent={'center'}>
                            <img width={'70%'} height={'auto'} src={'/me.png'}/>
                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </Box>
    )
}

export default Hero