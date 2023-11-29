import { Container, Box, Heading, SimpleGrid, Divider, ChakraProvider, Link} from "@chakra-ui/react"
import Section from "../components/layouts/section"
import {  Poppins  } from '@next/font/google'
import  { WorkGridItem } from '../components/grid-item'
import Layout from "../components/layouts/article"



import flappy1 from "../public/images/works/flappy1.jpg"
import snake_img4 from "../public/images/works/snake_img1.png"
import pomodoro from "../public/images/works/pomodoro.jpg"


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
          id="AI-project" 
          title="Flappy Bird AI Project" 
          thumbnail={flappy1}
          >
            python AI tutorial project.
          </WorkGridItem>
          
        </Section>
        <Section delay={0.3}>
          
        <WorkGridItem 
        id="Pomodoro" 
        title="Pomodoro GUI" 
        thumbnail={pomodoro}
        >
            Pomodoro Timer
            
          </WorkGridItem>
          
        </Section>

      
        
        
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works;