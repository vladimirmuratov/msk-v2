import {Box, Grid, GridItem, Heading, Image, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import Head from 'next/head'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'
import {BaseDivider} from '@/components/base/BaseDivider'

export default function Cardiology() {

    return (
        <>
            <Head>
                <title>МСК | Кардиология</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
                <Box flexGrow="1">
                    <Box my="62px" pos="relative">
                        <Image
                            src="/images/cardiology-img.png"
                            alt="pic"
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{width: '100%', height: 'auto'}}
                        />
                        <Box pos="absolute" top={{base: '10%', sm: '30%'}} left={{base: 3, md: 20}}>
                            <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">Кардиология</Text>
                        </Box>
                    </Box>
                    <BasePhoneBlock/>
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
                                    <Image src="/images/trauma1.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box p="4">
                                        <Text mb={4}>
                                            <span style={{fontWeight: "bold"}}>МСК</span> объединяет усилия различных
                                            специалистов с
                                            целью максимально точной и своевременной
                                            диагностики, выбора наиболее эффективной тактики лечения пациентов с
                                            сердечно - сосудистыми
                                            заболеваниями.
                                        </Text>
                                        <Text>
                                            Мы работаем в самом тесном взаимодействии с кардиохирургическими службами и
                                            отделениями
                                            сосудистой хирургии ведущих специализированных медицинских центров.
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
                                            Благодаря такому взаимодействию пациенты, которые к нам обращаются, проходят
                                            все этапы – от
                                            первичной диагностики и интенсивной терапии до высокотехнологической помощи
                                            и реабилитации в
                                            рамках одного учреждения под наблюдением специалистов.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Image src="/images/cardiology1.png" h="full"/>
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
                                    <Image src="/images/cardiology2.jpg" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box h="full" p="4" display="flex" alignItems="center" justifyContent="center">
                                        <Heading size="lg" lineHeight="50px">
                                            Кардиология – одно из ключевых направлений нашей деятельности в
                                            сопровождении пациентов.
                                        </Heading>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                    <BaseDivider/>
                    <Box
                        bgColor="#D1EEFE"
                        color='#0D47A1'
                        p="4"
                        borderRadius="sm"
                        fontSize="22px"
                        fontWeight="medium"
                        display="flex"
                        flexDirection="column"
                        gap="4"
                        data-aos="fade-up"
                    >
                        <Text>
                            Мы имеем огромный опыт по организации лечения заболеваний сердца и сосудов, ведения
                            пациентов до и после кардиохирургических вмешательств, контроля нескольких хронических
                            заболеваний, связанных между собой, кардиореабилитации.
                        </Text>
                        <Text>
                            Это позволяет нам быстро организовывать консультации у лучших специалистов разных профилей,
                            если у пациента в анамнезе несколько заболеваний, и подходить к организации лечения
                            комплексно.
                        </Text>
                    </Box>
                    <BaseDivider/>
                    <Box bgColor="#0d47a1" color="white" px={4} py={10} borderRadius="sm" data-aos="fade-up">
                        <Box mb={10} borderBottom="1px solid white">
                            <Heading size="lg">
                                Мы оказываем информационную поддержку и содействие в получении своевременной и
                                качественной
                                медицинской помощи пациентам с сердечно - сосудистыми заболеваниями:
                            </Heading>
                        </Box>
                        <UnorderedList spacing={{base: "2", md: "4"}} fontSize="20" fontWeight="bold">
                            <ListItem>Артериальная гипертония</ListItem>
                            <ListItem>Ишемическая болезнь сердца</ListItem>
                            <ListItem>Нарушения ритма сердца</ListItem>
                            <ListItem>Кардиомиопатии</ListItem>
                            <ListItem>Хроническая сердечная недостаточность</ListItem>
                            <ListItem>Нарушения мозгового кровообращения</ListItem>
                            <ListItem>Аневризмы</ListItem>
                            <ListItem>Патологии сосудов</ListItem>
                            <ListItem>Болезни сердца при других заболеваниях</ListItem>
                        </UnorderedList>
                    </Box>
                    <BasePhoneBlock/>
                </Box>
        </>
    )
}
