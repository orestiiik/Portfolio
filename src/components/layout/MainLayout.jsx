import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import {Box} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({children}) => {
    const theme = useContext(ThemeContext)

    return (
        <>
            <Box sx={{borderBottom: 2.5, borderColor: theme.secondaryColor}} pb={2}>
                <Navbar
                    menu={["Projects", "About me"]}
                    burger={["Projects", "About me", "Contact"]}
                />
            </Box>
            {children}
            <Footer/>
        </>
    )
}
export default MainLayout