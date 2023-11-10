import {Box} from '@chakra-ui/react'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'

export const Layout = ({children}) => (
    <Box
        height='100vh'
        display='flex'
        flexDir='column'
    >
        <Header/>
        {children}
        <Footer/>
    </Box>
)
