import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import {IconBrandFigma, IconBrandReactNative} from "@tabler/icons";
import Skill from "./skills/Skill";

const MySkills = () => {
    const theme = useContext(ThemeContext)

    return (
        <Box bgcolor={theme.elevationColor} pt={4} pb={8}>
            <Container maxWidth={'lg'}>
                <Typography fontWeight={600} fontSize={38} fontFamily={'Gilroy'} color={theme.textColor}>
                    My skills 💡
                </Typography>
                <Divider color={theme.textColor}/>
                <Typography fontSize={22} pt={3} pb={0.5} fontFamily={'Gilroy'} color={theme.textColor}>
                    Programming
                </Typography>
                <Grid container spacing={2} py={1}>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<IconBrandReactNative fontWeight={200}/>} title={'React'} amount={7}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<img width={24} height={24} src={'/nextjs.png'}/>} title={'NextJS'} amount={7}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<img width={24} height={24} src={'/gatsby.png'}/>} title={'GatsbyJS'} amount={5}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<img width={24} height={24} src={'/git.png'}/>} title={'Git'} amount={6}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<img width={24} height={24} src={'/sql.png'}/>} title={'SQL'} amount={4}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<img width={24} height={24} src={'/c.png'}/>} title={'C++'} amount={4}/>
                    </Grid>
                </Grid>
                <Typography fontSize={22} pt={3} pb={0.5} fontFamily={'Gilroy'} color={theme.textColor}>
                    Designing and photo/video editing
                </Typography>
                <Grid container spacing={2} py={1}>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<IconBrandFigma/>} title={'Figma'} amount={5}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<img width={24} height={24} src={'/experience.png'}/>} title={'XD'} amount={5}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<img width={24} height={24} src={'/photoshop.png'}/>} title={'Photoshop'} amount={3}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skill icon={<img width={24} height={24} src={'/premiere.png'}/>} title={'Premiere Pro'} amount={3}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default MySkills