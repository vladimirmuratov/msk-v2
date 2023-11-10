import Head from 'next/head'
import {Box, Grid, GridItem, Heading, Icon, Image, List, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import {rehabilitationOptions} from '@/config/rehabilitationOptions'
import {WarningIcon} from '@chakra-ui/icons'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'
import {BaseDivider} from '@/components/base/BaseDivider'

export default function Rehabilitation() {

    return (
        <>
            <Head>
                <title>МСК | Реабилитация</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Box flexGrow="1">
                <Box my="62px" pos="relative">
                    <Image
                        src="/images/utility-img.png"
                        alt="pic"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                    />
                    <Box pos="absolute" top={{base: '20%', sm: '30%'}} right={{base: 3, md: 40}}>
                        <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">Реабилитация</Text>
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
                                <Image src="/images/rehabilitation1.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box p="4" h="full" display="flex" justifyContent="center" alignItems="center">
                                    <Heading size="lg" letterSpacing="wide">
                                        Содействие в получении специализированной помощи по реабилитации после
                                        инсульта в лучших
                                        сосудистых и реабилитационных центрах
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
                                <Box p="4" h="full" display="flex" justifyContent="center" alignItems="center">
                                    <Heading size="lg" letterSpacing="wide">
                                        Комплексное восстановительное лечение пациентов, перенесших инсульт
                                    </Heading>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Image src="/images/trauma1.png" h="full"/>
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
                <BaseDivider/>
                <Box py={10} px={4} borderRadius="sm" display="flex" flexDirection="column" bgColor="#0d47a1"
                     color="white" data-aos="fade-up">
                    <Box mb={10} borderBottom="1px solid white">
                        <Heading size="lg" letterSpacing="wide">
                            Индивидуальная программа реабилитации после инсульта
                        </Heading>
                    </Box>
                    <Text fontSize={{base: '18px', md: '20px', lg: '22px'}}>
                        Инсульт - острое нарушение мозгового кровообращения, в результате которого быстро
                        развиваются стойкие признаки нарушения функций головного мозга или наступает смерть
                        человека.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box textAlign="center" data-aos="fade-up">
                    <Heading mb="10" color="#0D47A1">Периоды инсульта</Heading>
                    <Box
                        display="flex"
                        flexDirection={{base: 'column', lg: 'row'}}
                        justifyContent="space-between"
                        gap={1}
                        px={1}
                    >
                        {rehabilitationOptions.length
                            ? rehabilitationOptions.map(({id, title, description}) => (
                                <Box
                                    key={id}
                                    bgColor="#3949ab"
                                    color="white"
                                    p="4"
                                    fontSize="18px"
                                    borderRadius="sm"
                                >
                                    <Text>{title}</Text>
                                    <Text>{description}</Text>
                                </Box>
                            ))
                            : ''
                        }
                    </Box>
                </Box>
                <BaseDivider/>
                <Box bgColor="#ffcdd2" color="#ef5350" px={4} py={10} borderRadius="sm" data-aos="fade-up">
                    <List pl="0" spacing="5" fontSize={{base: '20px', xl: '22px'}} fontWeight="medium">
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Летальность от инсульта достигает 40–50%</Text>
                        </ListItem>
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Инвалидность развивается у 70–75% пациентов, перенесших инсульт</Text>
                        </ListItem>
                    </List>
                </Box>
                <BaseDivider/>
                <Box color="#0D47A1" p="4" borderRadius="sm" data-aos="fade-up">
                    <Heading size={{base: 'lg', md: 'xl'}}>
                        Ранее начало восстановительного лечения позволяет вернуть больший объем утраченных функций
                        за более короткий срок!
                    </Heading>
                </Box>
                <BaseDivider/>
                <Box p={{base: '3', md: '10'}} borderRadius="sm" bgColor="#D1EEFE" color="#0D47A1" data-aos="fade-up">
                    <Text fontSize={{base: '18px', md: '20px', lg: '22px'}} fontWeight="medium">
                        Последствия инсульта зависят от того, какая область головного мозга и в каком объеме
                        пострадала при нарушении мозгового кровообращения. Последствия инсульта могут быть
                        незначительными и быстропроходящими или множественными и тяжелыми, затрудняющими возвращение
                        человека к нормальной жизни
                    </Text>
                </Box>
                <BaseDivider/>
                <Box textAlign="center" bgColor="#ffcdd2" color="red.500" py={10} px={4} borderRadius="sm"
                     data-aos="fade-up">
                    <Box mb="10" borderBottom='1px solid red'>
                        <Heading size="lg">Последствия инсульта</Heading>
                    </Box>
                    <List mt="4" pl="2" spacing="4" fontSize={{base: '20px', xl: '22px'}} fontWeight="medium">
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>
                                Двигательные нарушения – парез ( снижение мышечной силы), паралич ( полное
                                отсутствие движений)
                            </Text>
                        </ListItem>
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Нарушение речи</Text>
                        </ListItem>
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Нарушения глотания</Text>
                        </ListItem>
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Нарушения чувствительности</Text>
                        </ListItem>
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Постинсультная боль</Text>
                        </ListItem>
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Нарушения выделения мочи и стула</Text>
                        </ListItem>
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Венозная недостаточность</Text>
                        </ListItem>
                        <ListItem display="flex" gap="4" textAlign="start">
                            <Icon as={WarningIcon} color="red" mt="2"/>
                            <Text>Нарушение психических функций, утомляемость, депрессия</Text>
                        </ListItem>
                    </List>
                </Box>
                <BaseDivider/>
                <Box bgColor="#0d47a1" color="white" px={4} py={10} borderRadius="sm" data-aos="fade-up">
                    <Box mb={10} borderBottom='1px solid white'>
                        <Heading size="lg">Индивидуальная программа реабилитации после инсульта позволяет:</Heading>
                    </Box>
                    <UnorderedList spacing="2" fontSize={{base: '20px', lg: '22px'}} fontWeight="medium">
                        <ListItem>Активизировать двигательные функции, вернуть утраченные навыки ходьбы</ListItem>
                        <ListItem>Снизить повышенный мышечный тонус</ListItem>
                        <ListItem>Восстановить глотательную функцию</ListItem>
                        <ListItem>Восстановить навыки самообслуживания</ListItem>
                        <ListItem>Адаптировать пациента к привычной жизни</ListItem>
                    </UnorderedList>
                </Box>
                <BaseDivider/>
                <Box color="#0d47a1" px={{base: '4', md: '6'}} data-aos="fade-up">
                    <Heading size="lg">
                        Индивидуальная программа реабилитации учитывает все особенности текущего состояния пациента
                        и направлена на комплексное восстановление после инсульта.
                        Программа рассчитана на 21 день
                    </Heading>
                </Box>
                <BaseDivider/>
                <Box bgColor="#0d47a1" color="white" px={4} py={10} borderRadius="sm" data-aos="fade-up">
                    <Box mb={10} borderBottom="1px solid white">
                        <Heading size="lg">В программу входит:</Heading>
                    </Box>
                    <UnorderedList spacing="2" fontSize={{base: '20px', lg: '22px'}} fontWeight="medium">
                        <ListItem>Госпитализация пациентов, перенесших инсульт, в реабилитационные центры</ListItem>
                        <ListItem>Консультация и формирование плана лечения</ListItem>
                        <ListItem>
                            Наблюдение специалистами мультидисциплинарной бригады - неврологом, кардиологом,
                            реабилитологом, логопедом и др.
                        </ListItem>
                        <ListItem>Спектр лечебных мероприятий в зависимости от состояния пациента</ListItem>
                        <ListItem>Подбор лекарственной терапии, контроль и оценка ее эффективности</ListItem>
                        <ListItem>Дополнительные лечебные мероприятия по вторичной профилактики инсульта</ListItem>
                        <ListItem>
                            Применение самых эффективные методов восстановительного лечения, как
                            инновационных, так и проверенных десятилетиями
                        </ListItem>
                        <ListItem>Сопровождение пациента от момента госпитализации до выписки домой</ListItem>
                    </UnorderedList>
                </Box>
                <BaseDivider/>
                <Box p={{base: '3', md: '10'}} borderRadius="sm" bgColor="#D1EEFE" color="#0D47A1"
                     fontSize={{base: '20px', lg: '22px'}} fontWeight="medium" data-aos="fade-up">
                    <Text mb="3">
                        Программа позволяет предотвратить тяжелые последствия инсульта и адаптировать пациента к
                        привычной жизни.
                    </Text>
                    <Text>
                        Перенесенный ишемический инсульт и транзиторная ишемическая атака повышают риск развития
                        повторного инсульта почти в 10 раз. Не откладывайте реабилитацию!
                    </Text>
                </Box>
                <BasePhoneBlock/>
            </Box>
        </>
    )
}
