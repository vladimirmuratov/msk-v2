import {Box, Grid, GridItem, Heading, Image, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import Head from 'next/head'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'
import {BaseDivider} from '@/components/base/BaseDivider'

export default function Neurology() {

    return (
        <>
            <Head>
                <title>МСК | Неврология</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
                <Box flexGrow="1">
                    <Box my="62px" pos="relative">
                        <Image
                            src="/images/neurology-img.jpg"
                            alt="pic"
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{width: '100%', height: 'auto'}}
                        />
                        <Box pos="absolute" top={{base: '20%', sm: '30%'}} left={{base: 3, md: 20}}>
                            <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">Неврология</Text>
                        </Box>
                    </Box>
                    <BasePhoneBlock/>
                    <Box px={4} color="#0d47a1" data-aos="fade-up">
                        <Heading size="lg" mb={4}>
                            Организация лечения неврологических заболеваний.
                        </Heading>
                        <Heading size="lg">
                            Наши специалисты всегда помогут Вам найти врача и подобрать для вас оптимальне решение
                        </Heading>
                    </Box>
                    <BaseDivider/>
                    <Box>
                        <Box
                            fontSize={{base: "18px", xl: "22px"}}
                            bgColor="#0d47a1"
                            color="white"
                            mb="1"
                            borderRadius="sm"
                            data-aos="fade-up"
                        >
                            <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                                <GridItem>
                                    <Image src="/images/cardiology-img.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box p="4">
                                        <Text>
                                            Мы поддерживаем и сопровождаем пациентов с неврологическими заболеваниями.
                                        </Text>
                                        <Text>
                                            Мы работаем на принципах тесного <span style={{fontWeight: "bold"}}>сотрудничества неврологов, нейрохирургов, логопедов,
                                            сосудистых хирургов, отоневрологов, психиатров и психологов</span> из
                                            ведущих
                                            неврологических
                                            центров страны.
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box
                            fontSize={{base: "18px", xl: "22px"}}
                            bgColor="#0d47a1"
                            color="white"
                            mb="1"
                            borderRadius="sm"
                            data-aos="fade-up"
                        >
                            <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                                <GridItem>
                                    <Box p="4">
                                        <Text>
                                            Это определяет спектр и наши широчайшие возможности в организации <span
                                            style={{fontWeight: "bold"}}>проведения диагностики и
                                            лечения пациентов с различной неврологической патологией: сосудистыми заболеваниями
                                            головного и спинного мозга, поражениями периферической нервной системы, эпилепсией,
                                            паркинсонизмом, миастениями , вертеброгенными заболеваниями</span> и др.
                                        </Text>
                                        <Text>
                                            При общем высочайшем уровне компетенции специалистов ведущих клиник в
                                            области урологии
                                            обычно каждый из них специализируется на одной или нескольких проблемных
                                            областях и потому
                                            является в ней уникальным.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Image src="/images/hospitals-img.png" h="full"/>
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box
                            fontSize={{base: "18px", xl: "22px"}}
                            bgColor="#0d47a1"
                            color="white"
                            mb="1"
                            borderRadius="sm"
                            data-aos="fade-up"
                        >
                            <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                                <GridItem>
                                    <Image src="/images/doctor4.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box
                                        h="full"
                                        p="4"
                                        display="flex"
                                        flexDir="column"
                                        justifyContent="center"
                                        gap={4}
                                    >
                                        <Heading size="lg">Госпитализация в ведущие клиники неврологии</Heading>
                                        <Heading size="lg">Помощь в подборе врача-невролога</Heading>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                    <BaseDivider/>
                    <Box px={4} py={10} borderRadius="sm" bgColor="#0d47a1" color="white" data-aos="fade-up">
                        <Box borderBottom="1px solid white" mb={10}>
                            <Heading size="lg" mb="4">
                                Наша команда оказывает содействие в организации медицинской помощи пациентам с
                                заболеваниями:
                            </Heading>
                        </Box>
                        <UnorderedList spacing="2" fontSize="20px" fontWeight="medium">
                            <ListItem>Экстрапирамидной нервной системы</ListItem>
                            <ListItem>Периферической нервной системы</ListItem>
                            <ListItem>Обморочными состояниями</ListItem>
                            <ListItem>Головной болью</ListItem>
                            <ListItem>Вегетативной дистонией</ListItem>
                            <ListItem>Воспалительными и демиелинизирующими заболеваниями ЦНС</ListItem>
                            <ListItem>Вертебро-неврологическими заболеваниями</ListItem>
                            <ListItem>Сосудистыми заболеваниями головного мозга</ListItem>
                            <ListItem>Эпилепсией и пароксизмальными состояниями</ListItem>
                            <ListItem>Болевыми синдромами</ListItem>
                            <ListItem>Посттравматическими поражениями центральной и периферической нервной
                                системы</ListItem>
                        </UnorderedList>
                    </Box>
                    <BasePhoneBlock/>
                </Box>
        </>
    )
}
