import Head from 'next/head';
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import { HospitalsBlock } from '@/components/HospitalsBlock';
import { BaseDivider } from '@/components/base/BaseDivider';
import { BasePhoneBlock } from '@/components/base/BasePhoneBlock';

export default function Utility() {

    return (
        <>
            <Head>
                <title>МСК | Услуги</title>
                <meta charSet="utf-8" />
                <meta name="description" content="компания по оказанию экстренных медицинских услуг" />
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация" />
            </Head>
            <Box>
                <Box my="62px" pos="relative">
                    <Image
                        src="/images/utility-img.png"
                        alt="pic"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Box pos="absolute" top={{ base: '10%', sm: '30%' }} right={{ base: 0 }} w="50%">
                        <Text textAlign="center" fontSize={{ base: 24, sm: 36, lg: 48 }} color="var(--main-color)" textShadow="5px 5px 5px lightgray" fontWeight="bold">Услуги</Text>
                    </Box>
                </Box>
                <BasePhoneBlock />
                <Box
                    fontSize={{ base: '18px', lg: '16px', xl: '22px' }}
                    bgColor="#0d47a1"
                    color="white"
                    mb="12"
                    borderRadius="md"
                    data-aos="fade-up"
                >
                    <Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
                        <GridItem>
                            <Image src="/images/utility1.png" h="full" />
                        </GridItem>
                        <GridItem>
                            <Box p="4">
                                <Text>
                            <span
                                style={{ fontWeight: 'bold' }}>Центр госпитализации и сопровождения пациентов МСК</span>
                                    &nbsp;занимает уникальное положение – она аккредитована как
                                    официальный представитель ведущих медицинских объектов столицы: начиная с
                                    муниципальных клиник, включая ведомственные организации здравоохранения и заканчивая
                                    федеральными медучреждениями под эгидой Управления делами Президента РФ.
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
                <BaseDivider />
                <Box
                    p={4}
                    bgColor="#D1EEFE"
                    color="#0d47a1"
                    data-aos="fade-up"
                    borderRadius="sm"
                >
                    <Text fontSize="22px">
                        Контроль качества и стоимости медицинской помощи,
                        медицинская экспертиза,
                        сервис и забота о пациенте в периметре одной компании -
                        основные принципы нашей работы и гарантии эффективного лечения для пациента.
                    </Text>
                </Box>
                <BaseDivider />
                <Box
                    fontSize={{ base: '20px', xl: '22px' }}
                    bgColor="#D1EEFE"
                    my="10"
                    p="4"
                    color="#0D47A1"
                    borderRadius="md"
                    data-aos="fade-up"
                >
                    <Text fontSize="22px">
                        Ежегодно тысячи людей полагаются на помощь Центра госпитализации и сопровождения пациентов
                        МСК, доверяя нам свое здоровье.
                    </Text>
                </Box>
                <BaseDivider />
                <Box px={4} color="#0d47a1" data-aos="fade-up">
                    <Heading>
                        Время – самый ценный ресурс, который получают пациенты,
                    </Heading>
                    <Heading mb="0">
                        обратившись в Центр госпитализации и сопровождения пациентов МСК.
                    </Heading>
                </Box>
                <BaseDivider />
                <Box fontSize={{ base: '18px', lg: '16px', xl: '22px' }} bgColor="#0d47a1" color="white"
                     borderRadius="sm"
                     data-aos="fade-up">
                    <Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
                        <GridItem>
                            <Box p="4" height="full" display="flex" justifyContent="center" alignItems="center">
                                <Text fontSize={{ base: '20px', md: '24px', lg: '26px' }} lineHeight="10">
                                    Собственный автопарк скорой помощи и наличие партнерской сети стационаров
                                    позволяет нам четко следовать принципу «терапевтического окна» или «золотого
                                    часа»!
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Image src="/images/utility2.png" h="full" />
                        </GridItem>
                    </Grid>
                </Box>
                <BaseDivider />
                <Box
                    fontSize={{ base: '20px', xl: '22px' }}
                    bgColor="#D1EEFE"
                    p="4"
                    color="#0D47A1"
                    borderRadius="sm"
                    data-aos="fade-up"
                >
                    <Text>
                        Помните, что диагностика и лечение неотложных состояний, в частности, пациентов с инсультом,
                        зависит от сроков госпитализации пациента в стационар!
                    </Text>
                </Box>
                <BaseDivider />
                <Box
                    fontSize={{ base: '18px', xl: '22px' }}
                    bgColor="#0d47a1"
                    color="white"
                    borderRadius="sm"
                    data-aos="fade-up"
                >
                    <Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
                        <GridItem>
                            <Image src="/images/utility3.png" h="full" />
                        </GridItem>
                        <GridItem>
                            <Box p="4" height="full" display="flex" justifyContent="center" alignItems="center">
                                <Text fontSize={{ base: '20px', md: '22px', xl: '26px' }} lineHeight="10">
                                    Система преемственности и персонифицированный подход, реализованные в Центре
                                    госпитализации
                                    и сопровождения пациентов МСК, значительно повышает результативность оказания
                                    скорой
                                    медицинской помощи.
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
                <BaseDivider />
                <Box fontSize={{ base: '20px', xl: '22px' }}
                     bgColor="#D1EEFE"
                     p="4"
                     color="#0D47A1"
                     borderRadius="sm"
                     data-aos="fade-up">
                    <Text>
                        Мы имеем широкую провайдерскую сеть медицинских партнеров, в которую входят
                        системообразующие медицинские учреждения ведомственной и кремлевской медицины
                        Соответствующее всем мировым требования
                    </Text>
                    <Text>
                        Главным требованием Центра госпитализации и сопровождения пациентов МСК к медицинским
                        партнерам является их прозрачность и медицинская помощь высочайшего уровня.
                    </Text>
                </Box>
                <BaseDivider />
                <Box
                    px={4}
                    color="#0d47a1"
                    display="flex"
                    flexDir="column"
                    gap="4"
                    data-aos="fade-up"
                >
                    <Heading alignSelf={{ base: 'start', md: 'start' }}>
                        БЫСТРОЕ ОБСЛУЖИВАНИЕ
                    </Heading>
                    <Heading alignSelf={{ base: 'start', md: 'center' }}>
                        ВЫСОЧАЙШЕЕ КАЧЕСТВО
                    </Heading>
                    <Heading alignSelf={{ base: 'start', md: 'end' }} mb="0">
                        ПРОЗРАЧНАЯ СТОИМОСТЬ ЛЕЧЕНИЯ
                    </Heading>
                </Box>
                <BaseDivider />
                <Box
                    py={10}
                    px={4}
                    bgColor="#0d47a1"
                    color="white"
                    fontSize={{ base: '20px', xl: '22px' }}
                    fontWeight="bold"
                    borderRadius="sm"
                    data-aos="fade-up"
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderBottom="1px solid white"
                        mb={10}
                    >
                        <Heading size="lg">
                            Медицинское сопровождение по системе «Все включено»:
                        </Heading>
                    </Box>
                    <Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} mt={10}>
                        <GridItem>
                            <Text>Организация стационарного лечения</Text>
                            <Text>Организация ухода в стационаре</Text>
                            <Text>Закрепление персонального менеджера на период стационарного лечения</Text>
                            <Text>Составление плана и сметы стационарного лечения</Text>
                            <Text>Контроль лечебного процесса при стационарном лечении</Text>
                            <Text> Организация второго медицинского мнения</Text>
                            <Text>Организация VIP- сопровождения при госпитализации</Text>
                        </GridItem>
                        <GridItem>
                            <Text>Круглосуточная скорая помощь</Text>
                            <Text>Обеспечение медицинского наблюдения после выписки</Text>
                            <Text>Оперативная связь с лечащим врачом</Text>
                            <Text>Информирование пациента и родственников о тактике лечения</Text>
                            <Text>Транспортировка тяжелобольных и маломобильных пациентов</Text>
                            <Text>Сервисные, бытовые и иные виды услуг</Text>
                        </GridItem>
                    </Grid>
                </Box>
                <BaseDivider />
                <Box data-aos="fade-up">
                    <Box px={4}>
                        <Heading size="lg" color="#0D47A1">Партнерская сеть Центра госпитализации и сопровождения
                            пациентов
                            МСК
                        </Heading>
                    </Box>
                    <HospitalsBlock isLocal={true} />
                </Box>
                <BasePhoneBlock />
            </Box>
        </>
    );
}
