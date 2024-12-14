import Head from 'next/head'
import {Box, Grid, GridItem, Heading, Image, Text} from '@chakra-ui/react'
import {HospitalsBlock} from '@/components/HospitalsBlock'
import {DirectionsHospitalization} from '@/components/DirectionsHospitalization'
import {directionsOfHospitalizationOptions} from '@/config/directionsOfHospitalizationOptions'
import {HospitalizationSteps} from '@/components/HospitalizationSteps'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'
import {BaseDivider} from '@/components/base/BaseDivider'

export default function Hospitals() {
    return (
        <>
            <Head>
                <title>МСК | Стационары</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Box flexGrow="1">
                <Box my="62px" pos="relative">
                    <Image
                        src="/images/hospitals-img.png"
                        alt="pic"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                    />
                    <Box pos="absolute" top={{base: '10%', sm: '30%'}} right={{base: 5}} w="50%">
                        <Text fontSize={{base: 24, sm: 36, lg: 48}} color="var(--main-color)" textShadow="5px 5px 5px lightgray" fontWeight="bold">Госпитализация в стационары</Text>
                    </Box>
                </Box>
                <BasePhoneBlock/>
                <Box>
                    <Box
                        fontSize={{base: '18px', xl: '22px'}}
                        bgColor="#0d47a1"
                        color="white"
                        mb="1"
                        borderRadius="sm"
                        data-aos="fade-up"
                    >
                        <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}}>
                            <GridItem>
                                <Image src="/images/doctor4.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box p="4">
                                    <Text>
                                         <span style={{fontWeight: 'bold'}}>
                                             Центр госпитализации и сопровождения пациентов МСК
                                         </span>
                                        является официальным и аккредитованным партнером федеральных медицинских
                                        учреждений Москвы,
                                        ведомственных
                                        организаций здравоохранения, лечебных учреждений Управления делами
                                        Президента
                                        РФ.
                                    </Text>
                                    <Text>
                                        Государственные и отраслевые конгломерации всегда имели и имеют собственные
                                        системы
                                        здравоохранения, закрытые для большинства обычных людей.
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box
                        fontSize={{base: '18px', xl: '22px'}}
                        bgColor="#0d47a1"
                        color="white"
                        mb="1"
                        borderRadius="sm"
                        data-aos="fade-up"
                    >
                        <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}}>
                            <GridItem>
                                <Box p="4">
                                    <Text>
                                        Медицинские учреждения
                                        ведомственной и кремлевской медицины создавались как некая показательная
                                        система
                                        здравоохранения с реализацией лучшего, что есть в мировой медицине –
                                        клинических
                                        практик,
                                        методов лечения, передового опыта.
                                    </Text>
                                    <Text>
                                        Эталоном ведомственной медицины издавна считалось Четвертое главное
                                        управление
                                        при Минздраве
                                        СССР - комплекс поликлиник, больниц, санаториев, домов отдыха, где
                                        традиционно
                                        получали
                                        медицинскую помощь государственные чиновники разных уровней, госслужащие,
                                        политические
                                        деятели, выдающиеся деятели науки искусства.
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Image src="/images/doctor5.png" h="full"/>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box
                        fontSize={{base: '18px', xl: '22px'}}
                        bgColor="#0d47a1"
                        color="white"
                        mb="1"
                        borderRadius="sm"
                        data-aos="fade-up"
                    >
                        <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}}>
                            <GridItem>
                                <Image src="/images/doctor6.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box p="4">
                                    <Text>
                                        Верность традициям российской клинической медицины и современные технологии,
                                        высочайший
                                        уровень медицинской помощи и трогательная забота о пациенте по праву
                                        определяют
                                        больницы, с
                                        которыми работает Центр госпитализации и сопровождения пациентов МСК как
                                        флагманов
                                        здравоохранения не только в России, но и за ее пределами.
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
                <BaseDivider/>
                <Box
                    fontSize={{base: '20px', xl: '22px'}}
                    bgColor="#D1EEFE"
                    px={4}
                    py={10}
                    color="#0D47A1"
                    borderRadius="sm"
                    data-aos="fade-up"
                >
                    <Text>
                        В периметр работы Центра госпитализации и сопровождения пациентов МСК сегодня входят более
                        30 многопрофильных учреждений полного цикла медицинской помощи с круглосуточным стационаром,
                        поликлиникой, диагностическими и реабилитационными подразделениями, которые являются
                        визитной карточкой российского здравоохранения.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box px={4} py={10} borderRadius="sm" data-aos="fade-up" bgColor="#D1EEFE" color="#0D47A1">
                    <Text fontWeight="regular" fontSize={{base: '20px', xl: '22px'}} letterSpacing="wide">
                        Уникальные компетенции врачебного корпуса, уровень медицинского обслуживания наравне с
                        европейским, самое передовое оборудование, замкнутый цикл медицинской помощи – возможности
                        для пациентов Центра госпитализации и сопровождения пациентов МСК в стационарах партнерских
                        больниц.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box color="#0d47a1" data-aos="fade-up" px={4}>
                    <Heading size="lg">
                        Сегодня для всех, кто ценит качество, комфорт, сервис Центр госпитализации и сопровождения
                        пациентов МСК организует госпитализацию в лучшие медицинские учреждения страны.
                    </Heading>
                </Box>
                <BaseDivider/>
                <Box textAlign={{base: 'start', lg: 'center'}} color="#0d47a1" data-aos="fade-up">
                    <Heading px={4}>Выберите направление госпитализации</Heading>
                    <DirectionsHospitalization options={directionsOfHospitalizationOptions}/>
                </Box>
                <BaseDivider/>
                <Box px={4} data-aos="fade-up" bgColor="#D1EEFE" py={100}>
                    <Heading mb={100} color="#0D47A1">
                        Порядок госпитализации в медицинские учреждения ведомственной и кремлевской медицины
                        через Центр госпитализации и сопровождения пациентов МСК
                    </Heading>
                    <HospitalizationSteps/>
                </Box>
                <BaseDivider/>
                <Box data-aos="fade-up">
                    <Heading color="#0D47A1" textAlign={{base: 'start', lg: 'center'}} px={4}>
                        Партнерская сеть
                        Центра госпитализации и сопровождения пациентов МСК
                    </Heading>
                    <HospitalsBlock isLocal={true}/>
                </Box>
                <BasePhoneBlock/>
            </Box>
        </>
    )
}
