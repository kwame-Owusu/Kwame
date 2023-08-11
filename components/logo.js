import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Poppins} from '@next/font/google'

const LogoBox = styled('span')`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
  
transform: rotate (20deg);
    

}

`
const Font = Poppins({
  subsets: ['latin'],
  weight: ["800"]
})


const Logo = () => {
  // adding "-dark" is not working and i am just leaving it blank for now.
    const footPrintImg = `/images/footprint${useColorModeValue("","")}.png`

  return (
    <main className={Font.className}>
    <Link href="/">
        
            <LogoBox>
              
                <Image src={footPrintImg} width={25} height={20} alt="logo"/>
                <Text
                color={useColorModeValue('gray.800', 'whiteAlpaha.900')}
                fontWeight="bold"
                ml={1}>
                    Kwame Owusu
                </Text>

            </LogoBox>
            
        
    </Link>
    </main>
  );
 
}
export default Logo


