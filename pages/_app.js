import { ChakraProvider } from '@chakra-ui/react'
import {  Poppins,  } from '@next/font/google'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import '@fontsource/poppins/400.css'

const Font = Poppins ({
    subsets: ['latin'],
    weight: ["400"]
})

const Website = ({ Component, pageProps, router }) => {
    return (
        <main className={Font.className}>
        <ChakraProvider theme={theme}>
            
            
            <Layout router={router}>
            <AnimatePresence  exitBeforeEnter mode='wait' initial={true}>
            <Component {...pageProps} key={router.route} />
            </AnimatePresence>
           
            </Layout>
        </ChakraProvider>
        </main>
    )
}
export default Website



