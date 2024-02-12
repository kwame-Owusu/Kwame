import { Box } from '@chakra-ui/react';




const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" >
      &copy; {new Date().getFullYear()} Kwame Owusu. Theme by <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama.</a>
    </Box>
  )
}

export default Footer
