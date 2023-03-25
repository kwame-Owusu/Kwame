import Logo from './logo'
import NextLink from 'next/link'
import { forwardRef } from 'react'


import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    IcontButton,
    useColorModeValue,
    MenuButton,
    IconButton,
    MenuItemOption,
} from '@chakra-ui/react'
import { HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'


const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? '#9FE2BF' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
      
    )
  }
  


const Navbar = props => {
    const { path } = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(12px'}}
        zIndex={1}
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                 <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo />
                    </Heading>   
                </Flex> 
                <Stack
                direction={{ base: 'column', md: 'row'}}
                display={{ base: 'none', md:'flex'}}
                width={{ base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, nmd: 0}}
                > 
                {/* had to use the "Link" tag because LinkItem was giving a hydration error */}
                <LinkItem href="/works" path={path}>
                    Works
                </LinkItem>
                <LinkItem href="/uses" path={path}>
                    Tech
                </LinkItem>
                <LinkItem href="https://github.com/kwame-Owusu" path={path} target="_blank">
                    Source
                </LinkItem>
                
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none'}} >
                        
                        <Menu>
                            <MenuButton 
                            as={IconButton} 
                            icon={<HamburgerIcon/>} 
                            variant="outline" 
                            aria-label="Options" 
                            />
                        <MenuList> 
                                
                                {/* after removing the "NexLink" it works without hydration problems.*/}
                                {/* in case of error remove the menu link const and revert back to using Link */}
                <MenuItem as={Link} href={"/"}>About</MenuItem>
                <MenuItem as={Link}  href={"/works"}>Works</MenuItem>
                <MenuItem as={Link} href={Link}>Tech</MenuItem>
                <MenuItem  as={Link} href="https://github.com/kwame-Owusu">Source</MenuItem>
                
                </MenuList>
                        
                

                            
                        </Menu>

                    </Box>
                </Box>

                
            </Container>
        </Box>

    )
}


export default Navbar