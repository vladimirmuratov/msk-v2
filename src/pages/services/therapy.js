import {Box, Grid, GridItem, Heading, Image, List, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import Head from 'next/head'
import {CheckIcon} from '@chakra-ui/icons'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'
import {BaseDivider} from '@/components/base/BaseDivider'

export default function Therapy() {

    return (
        <>
            <Head>
                <title>МСК | Терапия</title>
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
                    <Box pos="absolute" top={{base: '20%', sm: '30%'}} left={{base: 3, md: 40}}>
                        <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">Терапия</Text>
                    </Box>
                </Box>
                <BasePhoneBlock/>
                <Box data-aos="fade-up" color="#0d47a1" textAlign="center">
                    <Heading size={{base: 'lg', md: 'xl'}}>
                        Высококвалифицированные врачи общей практики
                    </Heading>
                </Box>
                <BaseDivider/>
                <Box px={4} py={10} borderRadius="sm" bgColor="#0d47a1" color="white" data-aos="fade-up">
                    <Box borderBottom="1px solid white" mb={10}>
                        <Heading fontSize={{base: '22px', md: '24px'}} letterSpacing="wide">
                            Мы оказываем содействие в организации медицинской помощи пациентам с внутренними
                            болезнями,
                            которые нуждаются в длительном лечении, уходе, проведении сложных диагностических
                            процедур
                            по основным направлениям:
                        </Heading>
                    </Box>
                    <UnorderedList spacing="2" fontSize={{base: '18px', md: '22px'}}>
                        <ListItem>
                            <Text>Организация диагностики и лечения терапевтической патологии</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Содействие в получении специализированной, в том числе высокотехнологичной
                                медицинской помощи</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Подбор терапии и сопровождение больных после оказания высокотехнологичной
                                медицинской помощи </Text>
                        </ListItem>
                        <ListItem>
                            <Text>Организация профилактики и лечения наследственных аллергических заболеваний, в том
                                числе жизнеугрожающих состояний</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Организация предоперационных клинико-лабораторных обследований перед планируемым
                                оперативным лечением в отделениях хирургического профиля</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Организация обследований и лечения в режиме «дневной стационар», в том числе и
                                обследование пациентов по программам Сheck Up</Text>
                        </ListItem>
                    </UnorderedList>
                </Box>
                <BaseDivider/>
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
                                <Image src="/images/therapy1.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box h="full" p="4" display="flex" justifyContent="center" alignItems="center">
                                    <Heading size="lg" lineHeight="10">
                                        Терапия – одно из ключевых направлений нашей деятельности в сопровождении
                                        пациентов
                                    </Heading>
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
                                    <Text>Мы имеем огромный опыт в организации лечения пациентов с различными
                                        нозологическими
                                        формами: сердечно-сосудистой, бронхолегочной, эндокринной, нервной,
                                        опорно-двигательной,
                                        мочевыделительной систем, желудочно- кишечного тракта, аллергическими
                                        заболеваниями.
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Image src="/images/therapy2.png" h="full"/>
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
                                <Image src="/images/cardiology1.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box p="4">
                                    <Text>В диагностике заболеваний используется широкий спектр лабораторных
                                        исследований, включая
                                        генетическое, а также диагностических возможностей стационара, включая
                                        рентгенологическую,
                                        мультиспиральную компьютерную, магнитно-резонансную томографию,
                                        эндоскопические методы
                                        исследования, весь спектр ультразвуковых и ангиографических технологий в
                                        круглосуточном
                                        режиме.
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
                <BaseDivider/>
                <Box px={4} py={10} bgColor="#D1EEFE" color="#0D47A1" data-aos="fade-up">
                    <List pl="0" spacing="2">
                        <ListItem>
                            <Box display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading fontSize={{base: '18px', md: '22px', lg: '24px', xl: '26px'}}>
                                    Высококвалифицированные
                                    врачи общей практики
                                </Heading>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading fontSize={{base: '18px', md: '22px', lg: '24px', xl: '26px'}}>
                                    Специализированная
                                    помощь пациентам терапевтического
                                    профиля
                                </Heading>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading fontSize={{base: '18px', md: '22px', lg: '24px', xl: '26px'}}>
                                    Госпитализация
                                    в терапевтические отделения
                                </Heading>
                            </Box>
                        </ListItem>
                    </List>
                </Box>
                <BaseDivider/>
                <Box px={4} py={10} borderRadius="sm" bgColor="#0d47a1" color="white" data-aos="fade-up">
                    <Box borderBottom="1px solid white" mb={10}>
                        <Heading mb="5" size="lg">Наша команда оказывает содействие в
                            госпитализации в
                            терапевтические
                            отделения пациентам со следующей патологией:
                        </Heading>
                    </Box>
                    <UnorderedList spacing="2" fontSize={{base: '18px', md: '22px'}}>
                        <ListItem>
                            <Text>Заболевания гастроэнтерологического профиля (язвенная болезнь
                                желудка и 12-перстной кишки, ГЭРБ, колит, цирроз печени, хронический гепатит
                                неинфекционной этиологии и др)
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>Анемии, заболевания опорно-двигательной системы (ревматоидный
                                полиартрит, подагра и др)
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>Бронхо-лёгочной системы (бронхиальная астма, хронический
                                обструктивный бронхит, бронхоэктатическая болезнь, пневмонии)
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>Сахарный диабет</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Заболевания сердечно-сосудистой системы (гипертоническая болезнь,
                                ИБС, хроническая сердечная недостаточность, стабильная стенокардия, постинфарктный
                                кардиосклероз)
                            </Text>
                        </ListItem>
                    </UnorderedList>
                </Box>
                <BasePhoneBlock/>
            </Box>
        </>
    )
}
