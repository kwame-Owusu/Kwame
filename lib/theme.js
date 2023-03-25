import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Global } from '@emotion/react'
const styles = {
  global: props => ({
    body: {
      bg: mode('#d5f0e2', '#222224')(props)
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
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#008080', '#99d199')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: `'Open Sans', 'sans-serif'`,
  body: `'Raleway', 'sans-serif'`, 
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