import {Box, Grid, GridItem, Heading, Image, List, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import Head from 'next/head'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'
import {BaseDivider} from '@/components/base/BaseDivider'

export default function Traumatology() {

    return (
        <>
            <Head>
                <title>МСК | Травмотология и ортопедия</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Box flexGrow="1">
                <Box my="62px" pos="relative">
                    <Image
                        src="/images/ambulance-img.jpg"
                        alt="pic"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                    />
                    <Box pos="absolute" top={{base: '10%', sm: '30%'}} left={{base: 3, md: 20}} display="flex"
                         flexDir="column" justifyContent="center" alignItems="center">
                        <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">Травматология</Text>
                        <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">и</Text>
                        <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">ортопедия</Text>
                    </Box>
                </Box>
                <BasePhoneBlock/>
                <Box px={4} display="flex" flexDirection="column" gap="4" color="#0d47a1"
                     data-aos="fade-up">
                    <Heading size="lg">
                        Организация диагностики и лечения в травматологии,ортопедии, при костной патологии и
                        реабилитации
                    </Heading>
                    <Heading size="lg">
                        Наши специалисты всегда помогут Вам найти врача и подобрать для вас оптимальне решение.
                    </Heading>
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
                                <Image src="/images/trauma1.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box p="4">
                                    <Text>Мы оказываем содействие в организации специализированной травматолого-
                                        ортопедической помощи.</Text>
                                    <Text>Наша миссия - обеспечить пациентам лучшую медицинскую помощь и доступ к
                                        новейшим мировым медицинским технологиям.</Text>
                                    <Text>Травматология и ортопедия – одно из ключевых направлений нашей
                                        деятельности в сопровождении пациентов</Text>
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
                                    <Text>Мы имеем огромный опыт в организации лечения пациентов с травмами и
                                        заболеваниями
                                        опорно-двигательного аппарата.
                                    </Text>
                                    <Text>А также организуем лечение и помогаем пациентам с весьма сложной
                                        патологией
                                        опорно-двигательной системы, делаем то, что раньше казалось невозможным. А в
                                        определенных
                                        случаях, с помощью средств современной ортопедической хирургии - практически
                                        полностью можно
                                        восстановить нарушенную функцию конечности.
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Image src="/images/doctor4.png" h="full"/>
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
                                <Image src="/images/doctor5.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box h="full" p="4">
                                    <Text>Анализируя опыт зарубежных и отечественных коллег, мы можем предложить
                                        пациентам
                                        эндопротезирование коленного и тазобедренного сустава, или других суставов,
                                        в
                                        том числе при
                                        весьма сложной и запущенной патологии.
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
                <BaseDivider/>
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="5"
                    fontSize="20px"
                    fontWeight="medium"
                    bgColor="#D1EEFE"
                    color="#0D47A1"
                    p="4"
                    borderRadius="sm"
                    data-aos="fade-up"
                >
                    <Text>Мы оказываем содействие в организации специализированной травматолого-
                        ортопедической помощи.</Text>
                    <Text>Наша миссия - обеспечить пациентам лучшую медицинскую помощь и доступ к
                        новейшим мировым медицинским технологиям.</Text>
                    <Text>Травматология и ортопедия – одно из ключевых направлений нашей
                        деятельности в сопровождении пациентов</Text>
                </Box>
                <BaseDivider/>
                <Box
                    fontSize="20px"
                    display="flex"
                    flexDirection="column"
                    gap="5"
                    bgColor="#0d47a1"
                    color="white"
                    borderRadius="sm"
                    p="4"
                    data-aos="fade-up"
                >
                    <Text>Мы имеем огромный опыт в организации лечения пациентов с травмами и заболеваниями
                        опорно-двигательного аппарата.
                    </Text>
                    <Text>А также организуем лечение и помогаем пациентам с весьма сложной патологией
                        опорно-двигательной системы, делаем то, что раньше казалось невозможным. А в определенных
                        случаях, с помощью средств современной ортопедической хирургии - практически полностью можно
                        восстановить нарушенную функцию конечности.
                    </Text>
                    <Text m="0">Анализируя опыт зарубежных и отечественных коллег, мы можем предложить пациентам
                        эндопротезирование коленного и тазобедренного сустава, или других суставов, в том числе при
                        весьма сложной и запущенной патологии.
                    </Text>
                </Box>
                <BaseDivider/>
                <List px={4} spacing="5" data-aos="fade-up" color="#0d47a1" fontSize={{base: '20px', md: '26px', lg: '30px'}}>
                    <ListItem>
                        <Heading>
                            Консультации и экспертное мнение
                            травматологов
                        </Heading>
                    </ListItem>
                    <ListItem>
                        <Heading>
                            Лучший выбор оперирующих
                            хирургов
                        </Heading>
                    </ListItem>
                    <ListItem>
                        <Heading>
                            Госпитализация в ведущие
                            специализированные медицинские центры
                        </Heading>
                    </ListItem>
                </List>
                <BaseDivider/>
                <Box bgColor="#0d47a1" color="white" px={4} py={10} borderRadius="sm" data-aos="fade-up">
                    <Box mb={10} borderBottom="1px solid white">
                        <Heading fontSize={{base: '20px', md: '24px', lg: '26px'}} letterSpacing="wide">Наша команда
                            оказывает
                            информационную
                            поддержку и содействие в получении плановой помощи в травматологии и ортопедии по
                            направлениям:
                        </Heading>
                    </Box>
                    <UnorderedList spacing="5" fontSize={{base: '18px', md: '22px', lg: '24px'}}>
                        <ListItem>Эндопротезирование суставов</ListItem>
                        <ListItem>Микрохирургия и травма кисти</ListItem>
                        <ListItem>Лечение травм и их последствий</ListItem>
                        <ListItem>Костная патология</ListItem>
                        <ListItem>Эндоскопическая хирургия суставов</ListItem>
                        <ListItem>Нейроортопедия и вертебрология</ListItem>
                        <ListItem>Онкологическая ортопедия</ListItem>
                        <ListItem>Инфекционные осложнения</ListItem>
                        <ListItem>Реабилитация</ListItem>
                        <ListItem>Функциональная диагностика опорно-двигательной системы</ListItem>
                    </UnorderedList>
                </Box>
                <BasePhoneBlock/>
            </Box>
        </>
    )
}
