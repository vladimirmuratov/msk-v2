import Head from 'next/head'
import {Box, Heading, Icon, Text} from '@chakra-ui/react'
import {phoneNumber} from '@/config/defaultOptions'
import {House} from '@/components/icons/House'
import {Car} from '@/components/icons/Car'
import {Doctor} from '@/components/icons/Doctor'
import {directionsOfHospitalizationOptions} from '@/config/directionsOfHospitalizationOptions'
import {DirectionsHospitalization} from '@/components/DirectionsHospitalization'
import {HospitalsBlock} from '@/components/HospitalsBlock'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'

export default function Home() {
    return (
        <>
            <Head>
                <title>МСК | Главная</title>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Box
                as="main"
                display="flex"
                flexDir="column"
                flexGrow={1}
                mt="61px"
            >
                <Box
                    backgroundImage={`url(/images/doctor.png)`}
                    backgroundRepeat='no-repeat'
                    flexGrow={1}
                    display="flex"
                    height="120vh"
                    pos="relative"
                >
                    <Box display={{base: 'none', lg: 'block'}} pos="absolute" top="20%" left={{md: '50%'}}>
                        <Heading size={{lg: '2xl'}} color="#1F1F1F" mb={2}>МСК-госпитализация</Heading>
                        <Heading size={{lg: 'xl'}} color="#1F1F1F" fontWeight="medium" mb={2}>сервисная
                            компания</Heading>
                        <Box fontSize={{lg: '16px'}}>
                            <Text color="#727272">
                                Оказываем полный спектр услуг по госпитализации
                            </Text>
                            <Text color="#727272">
                                в крупнейшие медицинские центры,
                            </Text>
                            <Text color="#727272">
                                скорой медицинской помощи и сопровождению пациентов.
                            </Text>
                        </Box>
                        <Box display={{base: 'none', lg: 'block'}} mt={5}>
                            <Text color="#009DFF" fontSize="32px" fontWeight="medium">{phoneNumber}</Text>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" flexDir={{base: 'column', md: 'row'}}>
                    <Box w={{base: '100%', md: '33.33%'}} bgColor="#83C4FF" p={4} display="flex" flexDir="column"
                         justifyContent="flex-start" alignItems="center">
                        <House/>
                        <Box color='#FFFFFF' display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                            <Text fontSize={24} textAlign='center'>госпитализация</Text>
                            <Text textAlign='center'>в ведущие клиники Москвы</Text>
                        </Box>
                    </Box>
                    <Box w={{base: '100%', md: '33.33%'}} bgColor="#5DB2FF" p={4} display="flex" flexDir="column"
                         justifyContent="flex-start" alignItems="center">
                        <Car/>
                        <Box color='#FFFFFF' display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                            <Text fontSize={24} textAlign='center'>скорая помощь</Text>
                            <Text textAlign='center'>круглосуточная,</Text>
                            <Text textAlign='center'>
                                при угрожающих
                                жизни состояниях</Text>
                        </Box>
                    </Box>
                    <Box w={{base: '100%', md: '33.33%'}} bgColor="#83C4FF" p={4} display="flex" flexDir="column"
                         justifyContent="flex-start" alignItems="center">
                        <Doctor/>
                        <Box color='#FFFFFF' display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                            <Text fontSize={24} textAlign='center'>сервис</Text>
                            <Text textAlign='center'>индивидуальное</Text>
                            <Text textAlign='center'>сопровождение пациента</Text>
                        </Box>
                    </Box>
                </Box>
                <DirectionsHospitalization options={directionsOfHospitalizationOptions} label="Направления госпитализации"/>
                <Box px={{base: "0", sm: "1"}}>
                    <HospitalsBlock isLocal={true}/>
                </Box>
                <BasePhoneBlock/>
            </Box>
        </>
    )
}
