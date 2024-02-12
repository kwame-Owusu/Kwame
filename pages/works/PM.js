import { Container, Badge, Link, LinkItem, List, ListItem} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta} from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Password Manager">
            <Container>
                <Title>
                    Password Manager <Badge>2024</Badge>
                </Title>
                <P>
                    A Password Manager created in Customtkinter, it is a simple program that gets website information from user, like name of website or app with password and email.
                    then stores that information in a json format file, that is then encrypted by using python encryption library: Fernet.

                </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/kwame-Owusu/Password-Manager" target={"_blank"}>https://github.com/kwame-Owusu <ExternalLinkIcon mx="2px"  /> </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta> Python(Customtkinter,CtkMessagebox, Tkinter)
                </ListItem>
                </List>
                <WorkImage  src="/images/works/PM_thumb.png" alt="program screen shot" />
            </Container>
        </Layout>
    )
}


export default Work