// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";
import { useState } from 'react';

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
    image: 'https://source.unsplash.com/random?wallpapers',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];

const posts = [];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    social: [
        { name: 'GitHub', icon: GitHubIcon },
    ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
    // 한 페이지에 보여줄 포스트의 수
    const postsPerPage = 5;
// 현재 페이지 상태
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);
// 전체 페이지 수 계산
    const pageCount = Math.ceil(featuredPosts.length / postsPerPage);

// 현재 페이지에 따라 보여줄 포스트들을 필터링
    const currentPosts = featuredPosts.slice(
        (page - 1) * postsPerPage,
        page * postsPerPage
    );

// 페이지 변경 핸들러
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="JYSBlog" sections={sections} />
                <main>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={5} sx={{mt: 3}}>
                            {/* Sidebar 컴포넌트를 Grid 아이템으로 배치합니다. 예를 들어, 전체 너비의 1/3을 차지하게 합니다. */}
                            <Grid item xs={12} md={9}>
                                <Sidebar
                                    title={sidebar.title}
                                    description={sidebar.description}
                                    social={sidebar.social}
                                />
                            </Grid>
                            {/* MainFeaturedPost 컴포넌트를 Grid 아이템으로 배치합니다. 예를 들어, 나머지 너비를 차지하게 합니다. */}
                            <Grid item xs={12} md={3}>
                                <MainFeaturedPost post={mainFeaturedPost}/>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container spacing={2}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post}/>
                        ))}
                    </Grid>
                    <br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Pagination count={pageCount} page={page} onChange={handleChange}/>
                    </div>
                </main>
            </Container>
            <Footer
                title=""
                description="Something here to give the footer a purpose!"
            />
        </ThemeProvider>
    );
}