import React from "react";
import Burger from "./Burger";
import {Container, Box, Typography, Hidden} from "@mui/material";
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    const theme = useContext(ThemeContext)

    const menu = props.menu;
    const listMenu = menu.map((item) => {
        let lowerItem = ((item.toLowerCase()).normalize("NFD").replace(/[\u0300-\u036f]/g, "")).replace(/\s/g, '');
        return (
            <Box mr={4}>
                <NavLink key={item} style={{textDecoration: 'none'}} to={`/${lowerItem}`}>
                    <Typography color={theme.textColor} fontSize={20} fontFamily={'Gilroy'}>
                        {item}
                    </Typography>
                </NavLink>
            </Box>
        );
    });
    return (
        <nav>
            <Container maxWidth={'xl'}>
                <Box display={'flex'} justifyContent={'space-between'} pt={2}>
                    <NavLink to="/">
                        <img src={'/logo.png'} height="40" alt="logo"/>
                    </NavLink>
                    <Hidden mdUp>
                        <Burger menu={props.burger}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Box>
                            <Box display={'flex'} alignItems={'center'}>
                                {listMenu}
                                <NavLink to="/contact" style={{textDecoration: 'none'}}>
                                    <Typography color={theme.secondaryColor} fontSize={30} fontWeight={600}
                                                fontFamily={'Gilroy'}>CONTACT</Typography>
                                </NavLink>
                            </Box>
                        </Box>
                    </Hidden>
                </Box>
            </Container>
        </nav>
    );
}
export default Navbar