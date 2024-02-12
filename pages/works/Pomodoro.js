import { Container, Badge, Link, LinkItem, List, ListItem} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title,Meta} from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Pomodoro">
            <Container>
                <Title>
                    Pomodoro Timer<Badge>2024</Badge>
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
                <video src="/images/pomodoro_demo.mp4" width="500" height="300" controls="controls" autoplay="true" id="pomodoro-gui"/>
            </Container>
        </Layout>
    )
}


export default Work