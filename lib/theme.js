import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Global } from '@emotion/react'
import '@fontsource/raleway/400.css'



const styles = {
  global: props => ({
    body: {
      bg: mode('#d5f0e2', '#1C2321')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#D5FFE4',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#22A699', '#AED8CC')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: `'Poppins', 'sans-serif'`,
  body: `'Poppins', 'sans-serif'`, 
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}


const theme = extendTheme({ 
  config, 
  styles, 
  components, 
  fonts, 
  colors })


export default theme