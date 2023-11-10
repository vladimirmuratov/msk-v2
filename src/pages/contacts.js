import {Box, Heading, Text} from '@chakra-ui/react'
import Head from 'next/head'
import {phoneNumber} from '@/config/defaultOptions'

export default function Contacts() {
    return (
        <>
            <Head>
                <title>МСК | Контакты</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Box flexGrow="1" color="#0d47a1" p={4}>
                <Box mt={20} mb={10}>
                    <Heading size="lg">Контакты</Heading>
                </Box>
                <Box>
                    <Text><b>Адрес:</b> Москва, Мичуринский проспект, 6</Text>
                    <Text><b>Телефон:</b> {phoneNumber}</Text>
                    {/*<Text><b>Email:</b> xxx</Text>*/}
                </Box>
                <Box mt={10}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A604ee8345ca097d664aa1c7764529b62cb0469a88360ead0ce5d5df219788165&amp;source=constructor"
                        width="100%" height="513" frameBorder="0"></iframe>
                </Box>
            </Box>
        </>
    )
}
