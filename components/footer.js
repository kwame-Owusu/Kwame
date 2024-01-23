import { Box } from '@chakra-ui/react';
import NextLink from 'next/link'




const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Kwame Owusu. Theme by Takuya Matsuyama.
    </Box>
  )
}

export default Footer
