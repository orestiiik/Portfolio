import {Box} from "@mui/material";
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import Fade from 'react-reveal/Fade';

const Skill = ({icon, title, amount}) => {
    const theme = useContext(ThemeContext)

    return (
        <Fade left>
            <Box
                sx={{
                    borderRadius: 10,
                    backgroundColor: theme.secondaryColor,
                    py: 1.4,
                    px: 2.3,
                }}
                display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}>
                    {icon}
                    &nbsp;{title}
                </Box>
                <Box display={'flex'} ml={3}>
                    {[...Array(amount)].map(x => (
                        <Box
                            boxShadow={5}
                            mr={0.5}
                            sx={{
                                borderRadius: '100%',
                                width: 15,
                                height: 15,
                                backgroundColor: '#2eb82e',
                                borderWidth: 1,
                                borderColor: theme.textColor,
                                borderStyle: 'solid'
                            }}/>
                    ))}
                    {[...Array(8 - amount)].map(x => (
                        <Box
                            boxShadow={5}
                            mr={0.5}
                            sx={{
                                opacity: 0.5,
                                borderRadius: '100%',
                                width: 15,
                                height: 15,
                                backgroundColor: theme.backgroundColor,
                                borderWidth: 1,
                                borderColor: theme.textColor,
                                borderStyle: 'dashed'
                            }}/>
                    ))}
                </Box>
            </Box>
        </Fade>
    )
}

export default Skill