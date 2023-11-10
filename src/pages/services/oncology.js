import Head from 'next/head'
import {Box, Heading, Text} from '@chakra-ui/react'

export default function Oncology() {
    return (
        <>
            <Head>
                <title>МСК | Онкология</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
                <Box px="1rem" flexGrow="1" mt={10}>
                    <Heading my="10" size={{base: "lg"}}>Онкология</Heading>
                    <Text>Страница в разработке</Text>
                </Box>
        </>
    )
}
