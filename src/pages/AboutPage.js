import {useContext} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import ThemeContext from "../context/ThemeContext";

export default function AboutPage() {
    const theme = useContext(ThemeContext)

    return (
        <section className="aboutpage">
            <Box bgcolor={theme.textColor} py={4}>
                <Container maxWidth={'lg'}>
                    <Typography pb={1} fontFamily={'Gilroy'} fontWeight={600} fontSize={38}>
                        You want to know more about me?
                    </Typography>
                    <Typography fontSize={18}>
                        As I already mentioned my name is Orest Gluchy. I am from Slovakia where I lived till my 19
                        years. I
                        studied electrotechnical engineering at the best-rated school in Slovakia. It was one of many
                        huge
                        challenges I took in my life. I haven't succeeded in all of them but everybody knows what
                        doesn't
                        kill you makes you stronger. After high school I wanted to go abroad, I didn't know where but as
                        you
                        probably already guessed I picked Denmark and I started to attend BAA.
                    </Typography>
                    <Grid container py={5}>
                        <Grid item xs={12} md={4} maxHeight={400}>
                            <img src={'/me/1.jpg'} width={'100%'} height={'100%'} style={{objectFit: 'cover'}}/>
                        </Grid>
                        <Grid item xs={12} md={4} maxHeight={400}>
                            <img src={'/me/2.jpg'} width={'100%'} height={'100%'} style={{objectFit: 'cover'}}/>
                        </Grid>
                        <Grid item xs={12} md={4} maxHeight={400}>
                            <img src={'/me/3.jpg'} width={'100%'} height={'100%'} style={{objectFit: 'cover'}}/>
                        </Grid>
                    </Grid>
                    <Typography pt={2} pb={1} fontFamily={'Gilroy'} fontWeight={600} fontSize={38}>
                        You may ask "Why IT sector?"
                    </Typography>
                    <Typography fontSize={18}>
                        Yeah, sometimes I give myself the same question 🤣. Since I was a kid I always spend time on the
                        computer
                        but it was not only because of games. I've always wanted to know how everything works. My
                        passion for learning and diving more deeply into technologies was probably when I discovered
                        Turtle (I guess it is called Imagine). The program is for kids to learn basic algorithms and
                        logic. After that I found some 2D game makers and I tried some of them too, then I found HTML
                        where I was extremely happy that I can do a website that had two headings no styling no nothing
                        but I was happy. And it is the same to this day, things like that make me happy (not headings,
                        more advanced stuff). Seeing stuff that you can make with literally 0 and 1 from scratch is
                        awesome. And that is why I love IT and I hope I will be able to catch up on all the years I was
                        not studying IT.
                    </Typography>
                </Container>
            </Box>
        </section>
    )
};