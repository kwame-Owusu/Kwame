import { Container, Box, Heading,Image, useColorModeValue, Button, Link, SimpleGrid, List, ListItem, Icon  } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/section'
import {  Poppins,  } from '@next/font/google'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection } from '../components/bio'
import Milestones from './timeline'
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoInstagram,
} from "react-icons/io5"


import '@fontsource/poppins/400.css'





const Font = Poppins ({
    subsets: ['latin'],
    weight: ["400"]
})




const Page = () => { 
    return (
    <Layout>
    <main className={Font.className}>

    <Container>
        
        
        <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
        <Heading as="h1"  variant="page-title">
            Kwame Owusu
        </Heading>
        <p>Digital Craftsman</p>
        </Box>
        <Box flexShrink={0} 
        mt={{base: 4, md: 0}} 
        ml={{md: 0}}
        align="center"
        >
            <Image
            borderStyle="solid" 
            maxWidth="150px" 
            display="inline-block" 
            borderRadius="full" 
            src="/images/contents/profile_2.jpg" 
            alt="profile Image"
            />
        </Box>
        </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title" >
                Work
            </Heading>
            <Paragraph> I am Kwame, a computer science student in the UK but originally from Ghana, I have a passion for building all sorts of digital things, 
                hence the name "Digital Craftsman", I like coding and creating fun things with code, sometimes even solving some mundane problems. 
                </Paragraph>
            <Box align="center" my={3}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" className={Font.className} >
                     Projects
                    </Button>
                </NextLink>
            </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as={"h3"} variant="section-title">
                Bio
            </Heading>
            <BioSection>
                
            </BioSection>
            <Milestones></Milestones>

        </Section>
        <Section delay={0.3}>
            <Heading as={"h3"} variant={"section-title"}>
                I 🤍
            </Heading>
            <Paragraph>
                Reading japanese Literature and Manga, favourite book is: { ' '} <Link href="https://www.goodreads.com/book/show/194746.No_Longer_Human" target={"_blank"}>
                    
                    No Longer Human</Link> by Osamu Dazai, whilst my favourite manga is: {' '} <Link href='https://myanimelist.net/manga/656/Vagabond' target={"_blank"}>Vagabond</Link> by Takehiko Inoue,
                    another thing i like is to play FPS games, I am pretty good at them.
            </Paragraph>
        </Section>

        <Section delay={0.3}>
            <Heading as={"h3"} variant="section-title">
                Socials on the Web
            </Heading>
            <List>
                <ListItem>
                    <Link href='https://github.com/kwame-Owusu' target="_blank">
                        <Button variant="ghost" color={useColorModeValue("#22A699", "#AED8CC")} leftIcon={<Icon as={IoLogoGithub} />} >
                            @Kwame-Owusu
                        </Button>
                    </Link>
                    
                </ListItem>
                <ListItem>
                    <Link href='https://www.instagram.com/kwm.ows/' target="_blank">
                        <Button variant="ghost" color={useColorModeValue("#22A699", "#AED8CC")} leftIcon={<Icon as={IoLogoInstagram} />} >
                            @Kwame-Owusu
                        </Button>
                    </Link>
                    
                </ListItem>
                <ListItem>
                    <Link href='https://www.linkedin.com/in/alfredow23/' target="_blank">
                        <Button variant="ghost" color={useColorModeValue("#22A699", "#AED8CC")} leftIcon={<Icon as={IoLogoLinkedin} />} >
                            @Kwame-Owusu
                        </Button>
                    </Link>
                    
                </ListItem>
                <ListItem>
                    <Link href='https://myanimelist.net/profile/Kwamee-owusu' target="_blank">
                        <Button variant="ghost" color={useColorModeValue("#22A699", "#AED8CC")} >
                            @MAL
                        </Button>
                    </Link>
                    
                </ListItem>
                
                
                
            </List>
        </Section>
    </Container>
    </main>
    </Layout>
    
    
    )
    
}



export default Page
