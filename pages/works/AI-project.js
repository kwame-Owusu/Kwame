import { Container, Badge, Link, LinkItem, List, ListItem} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta} from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="AI-project">
            <Container>
                <Title>
                    Flappy Bird AI <Badge>2023</Badge>
                </Title>
                <P>
                    A python project that I followed through a tutorial made by on youtube, which made you create a game of flappy bird
                    then train an AI model to play through the game, I understood and made the flappy game, then I learned a lot about NEAT, and the implementation of 
                    activation functions, population size, fitness functions and max generations, I might not go back to AI at the moment, "cuz it's hard", but I might dive into it more in the future.
                    
                </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com">https://github.com/kwame-Owusu <ExternalLinkIcon mx="2px"  /> </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta> Python(Pygame, NEAT)
                </ListItem>
                </List>
                <WorkImage  src="/images/works/flappy.gif" alt="AI-project" />
            </Container>
        </Layout>
    )
}


export default Work