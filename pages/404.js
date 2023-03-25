import NextLink from 'next/link'
import { Box, Heading, Text,Container, Divider, Button} from "@chakra-ui/react"


const NotFound = () => {
    return (
        <Container>
            <Heading as="h">Not Found</Heading>
            <Text>Currently working on a static website to show the tech/hardware I use</Text>
            <Divider my={6} />
            
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound