import { Container, Box, Heading, SimpleGrid, Divider, ChakraProvider, Link} from "@chakra-ui/react"
import Section from "../components/layouts/section"
import {  Poppins  } from '@next/font/google'
import  { WorkGridItem } from '../components/grid-item'
import Layout from "../components/layouts/article"

import pomodoro from "../public/images/works/pomodoro.png"
import PM_thumb from "../public/images/works/PM_thumb.png"

const Font = Poppins ({
  subsets: ['latin'],
  weight: ["400"]
})



const Works = () => {
  return (
    <Layout>
    <Container className={Font.className}>
      <Heading as={"h3"} fontSize={20} mb={4}  className={Font.className}>
        Works
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        
        <Section >
          <WorkGridItem 
          id="PM" 
          title="Password Manager" 
          thumbnail={PM_thumb}
          >
          </WorkGridItem>
          
        </Section>
        <Section delay={0.3}>
        
          
        <WorkGridItem 
        id="Pomodoro" 
        title="Pomodoro GUI" 
        thumbnail={pomodoro}
        >
            
        </WorkGridItem>
          
        </Section>

      
        
        
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works;