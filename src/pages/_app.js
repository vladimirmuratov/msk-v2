import {ChakraProvider} from '@chakra-ui/react'
import '@/styles/globals.css'
import {theme} from '@/theme'
import {Layout} from '@/components/Layout'
// import {useEffect} from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

export default function App({Component, pageProps}) {

    /*useEffect(() => {
        AOS.init({
            delay: 100,
            duration: 300,
            disable: 'mobile'
        })
        AOS.refresh()
        AOS.refreshHard()
    }, [])*/

    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}
