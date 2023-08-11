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
                    Pomodoro Timer<Badge>2023</Badge>
                </Title>
                <P>
                    A timer that uses the pomodoro principle for study, i also included a selection of lofi music and white noise such as rain, to help concentrate.
                    
                </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/kwame-Owusu/Pomodoro" target={"_blank"}>https://github.com/kwame-Owusu <ExternalLinkIcon mx="2px"  /> </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta> Python(Tkinter, Customtkinter, Auto-to-py.exe)
                </ListItem>
                </List>
                <WorkImage  src="/images/works/pomodoro_gif.gif" alt="AI-project" />
            </Container>
        </Layout>
    )
}


export default Work