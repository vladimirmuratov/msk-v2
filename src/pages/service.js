import {Box, Grid, GridItem, Heading, Image, Text} from '@chakra-ui/react'
import Head from 'next/head'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'
import {BaseDivider} from '@/components/base/BaseDivider'

export default function Service() {

    return (
        <>
            <Head>
                <title>МСК | Сервис</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Box>
                <Box my="62px" pos="relative">
                    <Image
                        src="/images/service-img.png"
                        alt="pic"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                    />
                    <Box pos="absolute" top={{base: '10%', sm: '30%'}} left={{base: 5}} w="50%">
                        <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">Наша забота о Вашем здоровье</Text>
                    </Box>
                </Box>
                <BasePhoneBlock/>
                <Box
                    fontSize={{base: '18px', xl: '22px'}}
                    bgColor="#0d47a1"
                    color="white" mb="12"
                    borderRadius="sm"
                    data-aos="fade-up"
                >
                    <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}}>
                        <GridItem>
                            <Image src="/images/service.png" h="full"/>
                        </GridItem>
                        <GridItem>
                            <Box
                                p="4"
                                display="flex"
                                flexDir="column"
                                justifyContent="space-between"
                                gap="4"
                                h="full"
                            >
                                <Heading alignSelf={{base: 'start', md: 'start'}}>
                                    ОПЫТ
                                </Heading>
                                <Heading alignSelf={{base: 'start', md: 'center'}}>
                                    ЭКСПЕРТИЗА
                                </Heading>
                                <Heading alignSelf={{base: 'start', md: 'end'}} mb="0">
                                    РЕШЕНИЯ
                                </Heading>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
                <BaseDivider/>
                <Box fontSize={{base: '20px', xl: '22px'}}
                     bgColor="#D1EEFE"
                     p="4"
                     borderRadius="sm"
                     data-aos="fade-up"
                >
                    <Text fontSize="18px" fontWeight="medium" color='#0D47A1'>
                        Подбираем оптимальный план лечения по поставленному диагнозу, учитывая ваши требования и
                        возможности.
                        Мы напрямую работаем с ведущими медицинскими учреждениями России. Одно из преимуществ нашей
                        компании – индивидуальный подход к каждому пациенту. Вас будет сопровождать персональный
                        врач-куратор на всех этапах лечения: от подбора клиники и госпитализации до выписки.
                    </Text>
                </Box>
                <BasePhoneBlock/>
            </Box>
        </>
    )
}
