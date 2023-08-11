import { Container, Badge, Link, LinkItem, List, ListItem} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta} from "../../components/work"
import Paragraph from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Snake Game with sound cues">
            <Container>
                <Title>
                    Snake Game <Badge>2023</Badge>
                </Title>
                <Paragraph>
                    one of the first projects I made myself, it is just challenging enough for a beginner like me yet teaches you
                    about important things like object-oriented programming and integration of sound cues, like i did in mine.
                </Paragraph>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/kwame-Owusu/snake_game">https://github.com/kwame-Owusu/snake_game <ExternalLinkIcon mx="2px"  /> </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta> Python(Turtle)
                </ListItem>
                 </List>
                 <WorkImage  src="/images/works/snake.gif" alt="AI-project" />
                
            </Container>
        </Layout>
    )
}


export default Work