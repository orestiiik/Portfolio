import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import {Box, Container, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {IconBrandLinkedin} from "@tabler/icons";

export default function Footer() {
    const theme = useContext(ThemeContext)

    return (
        <>
            <Box sx={{
                borderTop: 3,
                borderColor: theme.secondaryColor,
                backgroundColor: theme.backgroundColor
            }}>
                <Container maxWidth={'xl'}>
                    <Grid container px={3} pt={5} mx={0} textAlign={'left'}>
                        <Grid item xs={12} md={4} pb={3}>
                            <Box sx={{position: 'relative', width: '100%', height: '50px'}}>
                                <img
                                    style={{height: "100%", width: "auto", objectFit: "fill"}}
                                    src="/logo_dark.png"
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            mb={4}
                        >
                            <Typography pb={2} fontWeight={600} fontSize={24} color={theme.primaryColor}>
                                Links
                            </Typography>
                            <Box pb={2} width={'fit-content'}>
                                <NavLink to={'/projects'} style={{textDecoration: 'none'}}>
                                    <Typography
                                        fontSize={16}
                                        fontWeight={300}
                                        color={theme.elevationColor}
                                    >
                                        Projects
                                    </Typography>
                                </NavLink>
                            </Box>
                            <Box pb={2} width={'fit-content'}>
                                <NavLink to={'/aboutme'} style={{textDecoration: 'none'}}>
                                    <Typography
                                        fontSize={16}
                                        fontWeight={300}
                                        color={theme.elevationColor}
                                    >
                                        About me
                                    </Typography>
                                </NavLink>
                            </Box>
                            <Box pb={2} width={'fit-content'}>
                                <NavLink to={'/contact'} style={{textDecoration: 'none'}}>
                                    <Typography
                                        fontSize={16}
                                        fontWeight={300}
                                        color={theme.elevationColor}
                                    >
                                        Contact me!
                                    </Typography>
                                </NavLink>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} mb={4}>
                            <Typography pb={2} fontWeight={600} fontSize={24} color={theme.primaryColor}>
                                Social media
                            </Typography>
                            <a href={'https://www.linkedin.com/in/orest-gluch%C3%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-aa4279220/'}
                               target={'_blank'}>
                                <IconBrandLinkedin size={40} color={theme.elevationColor}/>
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box bgcolor={'#EEEEEE'} textAlign={'center'} py={2}>
                <Typography fontSize={'0.8rem'} variant={'body1'}>
                    ©2022 Copyright | Orest Gluchy
                </Typography>
            </Box>
        </>
    )
}