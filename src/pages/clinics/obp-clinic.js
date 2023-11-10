import Head from 'next/head'
import {Box, Heading, Image, List, ListItem, Text} from '@chakra-ui/react'
import {DirectionsHospitalization} from '@/components/DirectionsHospitalization'
import {directionOfHospitalizationObpOptions} from '@/config/directionsOfHospitalizationOptions'
import {CheckCircleIcon} from '@chakra-ui/icons'
import {BaseDivider} from '@/components/base/BaseDivider'
import {BasePhotoGallery} from '@/components/base/BasePhotoGallery'
import {obpPhotoGalleryOptions} from '@/config/photoGalleries/obpPhotoGalleryOptions'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'

export default function ObpClinic() {
    return (
        <>
            <Head>
                <title>МСК | ОБП</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Box flexGrow="1" color="#0d47a1">
                <Box my="10" textAlign={{base: 'center', md: 'start'}}>
                    <Image
                        src="/images/obp-img.jpg"
                        alt="pic"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                    />
                    <BaseDivider/>
                    <Box px={4}>
                        <Heading size="lg">
                            Федеральное государственное бюджетное учреждение «Объединенная больница с поликлиникой»
                            Управления делами Президента Российской Федерации
                        </Heading>
                        <Text fontSize={{base: '20px', xl: '22px'}} fontWeight="bold">Мичуринский проспект, 6</Text>
                    </Box>
                </Box>
                <BaseDivider/>
                <Box p={{base: '3', md: '4'}} bgColor="#D1EEFE" borderRadius="sm" fontSize={{base: '20px', xl: '22px'}}
                     data-aos="fade-up">
                    <Heading size="lg" my={10}>Инфраструктура</Heading>
                    <Text>
                            <span
                                style={{fontWeight: 'bold'}}>Центр госпитализации и сопровождения пациентов МСК</span> является
                        официальным и аккредитованным
                        партнером Федерального государственного бюджетного учреждения «Объединенная больница с
                        поликлиникой» Управления делами Президента Российской Федерации» и занимается
                        госпитализацией пациентов в профильные отделения стационара больницы.
                    </Text>
                    <Text>
                        ФГБУ «Объединенная больница с поликлиникой» Управления делами Президента Российской
                        Федерации - многопрофильное учреждение полного цикла медицинской помощи с круглосуточным
                        стационаром, поликлиникой, диагностическими и реабилитационными подразделениями.
                    </Text>
                    <Text>
                        На протяжении полувека больница неизменно следует традициям и принципам кремлевской медицины
                        и является признанным лидером в сфере оказания высококвалифицированной медицинской помощи.
                    </Text>
                    <Text>
                        Сегодня ФГБУ ОБП готова оказывать медицинскую помощь на высоком уровне самым взыскательным
                        пациентам. Больница старается не просто держать планку своих возможностей высоко, но и
                        постоянно поднимать её, внедряя новые технологии лечения, обновляя парк диагностического и
                        хирургического оборудования, создавая комфортные условия пребывания пациентов в стационаре.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box p={{base: '3', md: '4'}} fontSize={{base: '20px', xl: '22px'}} data-aos="fade-up" bgColor="#D1EEFE"
                     borderRadius="sm">
                    <Heading size="lg" my={10}>Стационар</Heading>
                    <Text>
                        В ФГБУ ОБП можно пройти стационарное лечение платной основе.
                    </Text>
                    <Text>
                        В стационаре развернуты 11 отделений : терапии, неотложной кардиологи с блоком интенсивной
                        терапии, неврологии, урологии, гинекологии, ортопедии и травматологии, гастроэнтерологии,
                        хирургии, где ежегодно проходит лечение 6 тыс. больных и выполняется 3 тыс. хирургических
                        операций.
                    </Text>
                    <Text>
                        Операционный блок больницы с четырьмя операционными и отделение анестезиологии-реанимации
                        соответствуют лучшим мировым стандартам. Операционное оборудование, оборудование систем
                        жизнеобеспечения на всех этапах оказания медицинской помощи соответствуют заявленной степени
                        безопасности, надежности, стерильности.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box textAlign="center" data-aos="fade-up">
                    <DirectionsHospitalization
                        options={directionOfHospitalizationObpOptions}
                        label="Основные направления стационарного лечения"
                    />
                </Box>
                <BaseDivider/>
                <Box p={{base: '3', md: '4'}} fontSize={{base: '20px', xl: '22px'}} data-aos="fade-up" bgColor="#D1EEFE"
                     borderRadius="sm">
                    <Heading size="lg" my={10}>Контроль качества и безопасность пациентов</Heading>
                    <Text>
                        ФГБУ ОБП прошла сертификацию по менеджменту качества медицинских услуг и получила сертификат
                        соответствия требованиям ГОСТ Р ИСО 9001-2015 ( ISO 9001:2015) - национальному стандарту
                        Российской Федерации системы менеджмента качества.
                    </Text>
                    <Text>
                        С момента основания ФГБУ ОБП в ней осуществлялся строгий контроль приема на работу врачей,
                        среднего и младшего медперсонала. Здесь работают уникальные специалисты, преданные своему
                        делу и профессиональному долгу. Наряду с клинической работой, врачи больницы занимаются
                        научной деятельностью, участвуют в конференциях, научные статьи сотрудников регулярно
                        публикуются в ведущих отечественных и зарубежных журналах, а изобретения оформляются
                        патентами.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box data-aos="fade-up" bgColor="#e8f5e9" p="4" borderRadius="sm">
                    <List px={{base: '3', md: '0'}}>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="green.300" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', xl: '22px'}}>
                                90% операций - лапароскопические, без разрезов
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="green.300" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', xl: '22px'}}>
                                Методика «FAST-TRACK surgery» (FTS) – быстрое восстановление после операций
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="green.300" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', xl: '22px'}}>
                                Минимум операционного дискомфорта
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="green.300" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', xl: '22px'}}>
                                Успешный опыт операций повышенной сложности
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="green.300" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', xl: '22px'}}>
                                Уникальная компьютерная навигационная система
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="green.300" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', xl: '22px'}}>
                                Собственные авторские методики
                            </Text>
                        </ListItem>
                    </List>
                </Box>
                <BaseDivider/>
                <Box p={{base: '3', md: '4'}} fontSize={{base: '20px', xl: '22px'}} data-aos="fade-up" bgColor="#D1EEFE"
                     borderRadius="sm">
                    <Heading size="lg" my={10}>Комфорт и сервис</Heading>
                    <Text>
                        В ФБГУ ОБП созданы все условия для комфорта и скорейшего выздоровления пациентов -
                        размещение в палатах повышенной комфортности, круглосуточно охраняемый вход, специально
                        обученный медицинский персонал, заказное меню, библиотека художественной литературы, зимний
                        сад. Территория больницы граничит с одним из наиболее экологически чистых районов г. Москвы
                        - природным заказником «Воробьевы горы». Больница имеет 15 га собственного ухоженного
                        лесопарка, терренкур.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box data-aos="fade-up">
                    <Box px={{base: '3', md: '0'}} textAlign="center" mb="100px">
                        <Heading size="lg">
                            Пройти стационарное лечение в ФБГУ ОБП можно, обратившись в Центр госпитализации и
                            сопровождения пациентов МСК
                        </Heading>
                    </Box>
                    <Box>
                        <BasePhotoGallery data={obpPhotoGalleryOptions}/>
                    </Box>
                </Box>
                {/*<BaseDivider/>
                <Box data-aos="fade-up" bgColor="#D1EEFE" p="4" borderRadius="sm">
                    <Box px={{base: '3', md: '0'}} mb="10">
                        <Heading size="lg">
                            ФГБУ «Объединенная больница с поликлиникой» Управления делами Президента Российской
                            Федерации.
                        </Heading>
                        <Heading size="lg">
                            Москва, Мичуринский проспект, 6.
                        </Heading>
                    </Box>
                    <Box px={{base: '3', md: '0'}} fontSize={{base: '20px', xl: '22px'}}>
                        <Text mb="5" textDecoration="underline">Проезд на маршрутном транспорте:</Text>
                        <Text>
                            ст.м. «Киевская», авт. 119 (до остановки «Мичуринский проспект»), авт. 266 (до остановки
                            «Улица Косыгина»).
                        </Text>
                        <Text>
                            ст.м. «Университет», авт. 119 (до остановки «Мичуринский проспект») ст.м.«Ленинский
                            проспект», электробус Т7 (до остановки «Улица Косыгина»)
                        </Text>
                        <Text>
                            ст.м. «Ломоносовский проспект» (выход из метро в сторону Мичуринского проспекта, который
                            обозначен №5 и №6 с указателем МГУ и ул. Академика Хохлова), авт. 266, 58 (до остановки
                            «Улица Косыгина»).
                        </Text>
                    </Box>
                </Box>*/}
                <BasePhoneBlock/>
            </Box>
        </>
    )
}
