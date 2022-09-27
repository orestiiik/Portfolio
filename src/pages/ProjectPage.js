import {useContext, useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {Box, Container, Typography} from "@mui/material";
import ThemeContext from "../context/ThemeContext";
import {IconArrowLeft} from "@tabler/icons";

const ProjectPage = () => {
    const theme = useContext(ThemeContext)

    const [post, setPost] = useState({});
    const params = useParams();
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `http://wp-api.orest.dk/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

    return (
        <>
            <Box bgcolor={theme.textColor} py={0.95}>
                <Container maxWidth={'xl'}>
                    <Box display={'flex'} alignItems={'center'}>
                        <NavLink to={'/projects'} style={{textDecoration: 'none', color: theme.elevationColor}}>
                            <Box display={'flex'} alignItems={'center'} mr={4}>
                                <IconArrowLeft/>
                                Back
                            </Box>
                        </NavLink>
                        <Typography color={theme.primaryColor} fontFamily={'Gilroy'} fontWeight={500} fontSize={25}>
                            {post?.title?.rendered}
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box bgcolor={'#f2f2f2'}>
                <Container maxWidth={'lg'}>
                    <Box py={3} maxWidth={'100%'}>
                        <article className="projpage-texts">
                            <div
                                style={{
                                    textAlign: 'justify',
                                    fontSize: 22
                                }}
                                dangerouslySetInnerHTML={{__html: post?.content?.rendered}}
                            />
                            <Box
                                py={4}
                                width={'100%'}>
                                {post['_embedded'] && ['wp:featuredmedia'] &&
                                    <img width={'100%'} height={'auto'} style={{objectFit: 'cover'}}
                                         src={post['_embedded']['wp:featuredmedia'][0]['source_url']}/>
                                }
                            </Box>
                        </article>
                    </Box>
                </Container>
            </Box>
        </>
    )
        ;
}

export default ProjectPage