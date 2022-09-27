import {useState, useEffect} from "react";
import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import Fade from 'react-reveal/Fade';

const ProjectsPage = () => {
    const [posts, setPosts] = useState();
    const theme = useContext(ThemeContext)

    useEffect(() => {
        async function getPosts() {
            const url = `http://wp-api.orest.dk/wp-json/wp/v2/posts?_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
        }

        getPosts();
    }, []);

    return (
        <Box bgcolor={theme.textColor} py={5}>
            <Container maxWidth={'xl'}>
                <Fade bottom>
                    <Grid container spacing={5}>
                        {posts?.map(post => (
                            <Grid item xs={12} md={6}>
                                <Box minHeight={'100%'} boxShadow={5} borderRadius={5}
                                     sx={{borderWidth: 5, borderStyle: 'solid', borderColor: theme.secondaryColor}}
                                     bgcolor={theme.secondaryColor}>
                                    <Box sx={{borderTopLeftRadius: 15, borderTopRightRadius: 15}} overflow={'hidden'}
                                         width={'100%'}>
                                        <img width={'100%'} height={'240px'} style={{objectFit: 'cover'}}
                                             src={post['_embedded']['wp:featuredmedia'][0]['source_url']}/>
                                    </Box>
                                    <Box px={3} py={1}>
                                        <Typography variant={'h5'} fontWeight={500} fontFamily={'Gilroy'}>
                                            {post.title.rendered}
                                        </Typography>
                                        <Divider/>
                                        <Box py={1}>
                                            <div
                                                dangerouslySetInnerHTML={{__html: post.content.rendered.slice(0, 180) + '...'}}
                                            />
                                        </Box>
                                        <NavLink to={`/${post.slug}`} style={{textDecoration: 'none',}}>
                                            <Box boxShadow={12} sx={{
                                                backgroundColor: theme.textColor,
                                                width: 'fit-content',
                                                borderWidth: 2,
                                                borderStyle: 'solid',
                                                borderColor: theme.primaryColor,
                                                px: 2.3,
                                                py: 1.2,
                                                color: theme.primaryColor,
                                                fontWeight: 500,
                                                transition: '0.8s',
                                                '&:hover': {
                                                    backgroundColor: theme.primaryColor,
                                                    borderColor: theme.textColor,
                                                    color: theme.textColor
                                                }
                                            }}>
                                                SEE MORE
                                            </Box>
                                        </NavLink>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Fade>
            </Container>
        </Box>
    );
}

export default ProjectsPage