import Head from 'next/head'
import Navbar from "../navbar"
import { Box, Container, Link } from '@chakra-ui/react'
import Footer from '../footer'



const Main = ({children, router}) => {
    return ( 
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Kwame Owusu</title>
                <meta name="description" content="Kwame Owusu's homepage" />
                <meta name="author" content="Kwame Owusu" />
                <meta name="author" content="kwame-Owusu" />
                <link rel="icon" href="/images/icons/coding.png" type="image/x-icon" sizes='32x32'/>
                <meta property="og:site_name" content="Kwame Owusu" />
                <meta name="og:title" content="Kwame Owusu" />
                <meta property="og:type" content="website" />
                <title>Kwame Owusu - Home</title>
            </Head>
            

            <Navbar path={router.asPath} />
            
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            <Footer />
        </Box>

    )
} 

export default Main