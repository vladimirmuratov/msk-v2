import Head from 'next/head'
import {Box, Heading, Image, List, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import {DirectionsHospitalization} from '@/components/DirectionsHospitalization'
import {directionsOfHospitalizationVolynkaOptions} from '@/config/directionsOfHospitalizationOptions'
import {CheckCircleIcon} from '@chakra-ui/icons'
import {BasePhotoGallery} from '@/components/base/BasePhotoGallery'
import {volynkaPhotoGalleryOptions} from '@/config/photoGalleries/volynkaPhotoGalleryOptions'
import {BaseDivider} from '@/components/base/BaseDivider'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'

export default function VolynkaClinic() {
    return (
        <>
            <Head>
                <title>МСК | Волынка</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Box flexGrow="1" color="#0d47a1">
                <Box my="10" textAlign={{base: 'center', md: 'start'}}>
                    <Image
                        src="/images/volynka-img.jpg"
                        alt="pic"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                    />
                    <BaseDivider/>
                    <Box p={4} textAlign='start'>
                        <Heading size="lg">
                            Федеральное государственное
                            бюджетное учреждение "Клиническая больница №1" Управления делами Президента РФ
                            (Волынская)
                        </Heading>
                        <Text fontSize={{base: '20px', xl: '22px'}} fontWeight="bold">ул. Староволынская, 10</Text>
                    </Box>
                </Box>
                <BaseDivider/>
                <Box px={4} py={10} bgColor="#D1EEFE" borderRadius="sm" fontSize={{base: '20px', lg: '22px'}}
                     data-aos="fade-up">
                    <Heading size="lg" mb={10}>Инфраструктура</Heading>
                    <Text>
                            <span
                                style={{fontWeight: 'bold'}}>Центр госпитализации и сопровождения пациентов МСК</span> является
                        официальным и аккредитованным партнером Федерального государственного бюджетного учреждения
                        "Клиническая больница №1" Управления делами Президента РФ (Волынская) и занимается
                        госпитализацией пациентов в профильные отделения стационара больницы.
                    </Text>
                    <Text>
                        ФГБУ "Клиническая больница №1" Управления делами Президента РФ (Волынская) – многопрофильный
                        медицинский центр с разветвленной инфраструктурой. В периметр медицинского учреждения входят
                        консультативно- поликлинический и лечебно-диагностический центры, стационарные подразделения
                        , скоропомощная служба, центр реабилитации и восстановительной медицины.
                    </Text>
                    <Text>
                        Клиническая больница №1 (Волынская) Управления делами Президента РФ является одним из
                        старейших учреждений кремлевской медицины и имеет более чем 400-летнюю историю.
                    </Text>
                    <Text>
                        Более полувека больница следует лучшим традициям кремлевской медицины, при этом сочетает их
                        с новейшими диагностическими, лечебными технологиями и внедряет в ежедневную клиническую
                        практику эффективные инновационные методики.
                    </Text>
                    <Text>
                        Являясь многопрофильным медицинским центром ФГБУ Клиническая больница №1 (Волынская)
                        оказывает стационарную помощь практически по всем медицинским направлениям. Это своеобразный
                        город здоровья, в котором практически есть все для современной диагностики, лечения, ранней
                        реабилитации.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box px={4} py={10} bgColor="#D1EEFE" borderRadius="sm" fontSize={{base: '20px', lg: '22px'}}
                     data-aos="fade-up">
                    <Heading size="lg" mb={10}>Стационар</Heading>
                    <Text>
                        В ФГБУ "Клиническая больница №1" Управления делами Президента РФ (Волынская) можно пройти
                        стационарное лечение платной основе.
                    </Text>
                    <Text>
                        Стационарные подразделения Волынской больницы представлены более чем двумя десятками
                        отделений хирургического и терапевтического профиля.
                    </Text>
                    <Text>
                        Терапевтический комплекс включает в себя терапевтическое, кардиологическое, неврологическое,
                        физиотерапевтическое отделения, отделение детоксикации, травматологии и ортопедии, отделение
                        реанимации и интенсивной терапии.
                    </Text>
                    <Text>
                        Хирургический комплекс – отделения онкологии, гинекологии, урологии, нейрохирургии,
                        травматологии и ортопедии, оториноларингологии и челюстно-лицевой хирургии, абдоминальной,
                        сосудистой и эндокринной хирургии.
                        Больница оказывает круглосуточную медицинскую помощь более чем 10 тысячам больных в год,
                        проводится более 6 тысяч хирургических операций.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box textAlign="center" data-aos="fade-up">
                    <DirectionsHospitalization
                        options={directionsOfHospitalizationVolynkaOptions}
                        label="Основные направления стационарного лечения"
                    />
                </Box>
                {/*<Box mt="10" px={{base: '3', md: '0'}}>
                    <Link
                        href="https://volynka.ru/About"
                        target="_blank"
                        style={{color: '#1976d2', textDecoration: 'underline'}}>Подробнее</Link>
                </Box>*/}
                <BaseDivider/>
                <Box px={4} py={10} bgColor="#D1EEFE" borderRadius="sm" fontSize={{base: '20px', lg: '22px'}}
                     data-aos="fade-up">
                    <Heading size="lg" mb={10}>Инновационная хирургия и уникальные методики</Heading>
                    <Text>
                        «Больница высоких технологий» - так называют Волынскую больницу в профессиональном
                        сообществе.
                    </Text>
                    <Text>
                        Хирургическая служба оказывает плановую и экстренную медицинскую помощь при различных
                        заболеваниях органов брюшной полости, магистральных сосудов, лор- органов,
                        опорно-двигательного аппарата, гинекологической и урологической патологии, гнойной инфекции.
                        Оснащение операционного отделения позволяет использовать в хирургии новейшие
                        лапароскопические, эндоспопические, микрохирургические, эндовазальные методы.
                    </Text>
                    <Text>
                        «Золотой фонд» Волынской больницы - это врачи. В клинике работают 1170 специалистов, многие
                        из которых хранят верность Волынской больнице в течение долгих лет. Из них - пять
                        заслуженных врачей РФ, один лауреат Государственной премии России, два профессора, четыре
                        доктора и 32 кандидата медицинских наук. Многие доктора имеют первую и высшую
                        квалификационные категории.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box bgColor="#D1EEFE" px={4} py={10} borderRadius="sm" data-aos="fade-up">
                    <List>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="blue.400" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', lg: '22px'}}>
                                Методика холодноплазменной хирургии
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="blue.400" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', lg: '22px'}}>
                                Тапедопластика — уникальные операции по восстановлению слуха
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="blue.400" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', lg: '22px'}}>
                                Малоинвазивные хирургические методики
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="blue.400" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', lg: '22px'}}>
                                Уникальные операции по ортопедической коррекции нижних конечностей
                            </Text>
                        </ListItem>
                        <ListItem display="flex" alignItems={{base: 'flex-start', md: 'center'}} gap="3" mb="3">
                            <CheckCircleIcon boxSize="1.5rem" color="blue.400" mt={{base: '2', md: '0'}}/>
                            <Text m="0" fontWeight="medium" fontSize={{base: '20px', lg: '22px'}}>
                                Методика ангиографии и стентирования коронарных сосудов в самые первые часы развития
                                инфаркта миокарда
                            </Text>
                        </ListItem>
                    </List>
                </Box>
                <BaseDivider/>
                <Box px={4} py={10} bgColor="#D1EEFE" borderRadius="md" fontSize={{base: '20px', xl: '22px'}}
                     data-aos="fade-up">
                    <Heading size="lg" mb={10}>Комфорт и сервис</Heading>
                    <Text>
                        Чистота в отделениях, уют, доброжелательная атмосфера, приветливость персонала завоёвывают
                        любовь и уважение пациентов Волынской больницы . Ламинарные потоки воздуха, исключающие
                        возможность занесения инфекции обеспечивают безопасность доя пациентов.
                    </Text>
                    <Text>
                        Способствует скорейшему выздоровлению и уникальный ландшафт - корпуса расположены под сенью
                        деревьев лесопарка, площадью более 17 гектаров.
                    </Text>
                </Box>
                <BaseDivider/>
                <Box data-aos="fade-up">
                    <Box px={{base: '3', md: '4'}} mb="10">
                        <Heading size="lg">
                            Пройти стационарное лечение в ФГБУ «Клиническая больница №1» (Волынская) Управления
                            делами
                            Президента РФ можно, обратившись в Центр госпитализации и сопровождения пациентов МСК
                        </Heading>
                    </Box>
                    <Box>
                        <BasePhotoGallery data={volynkaPhotoGalleryOptions}/>
                    </Box>
                </Box>
                {/*<BaseDivider/>
                <Box p={{base: '3', md: '4'}} borderRadius="sm" bgColor="#D1EEFE" data-aos="fade-up">
                    <Box px={{base: '3', md: '0'}} mb="10">
                        <Heading size="lg">
                            Федеральное государственное бюджетное учреждение "Клиническая больница №1" Управления
                            делами
                            Президента РФ (Волынская)
                        </Heading>
                        <Heading size="lg">
                            Москва, ул. Староволынская, 10
                        </Heading>
                    </Box>
                    <Box px={{base: '3', md: '0'}} fontSize={{base: '20px', xl: '22px'}}>
                        <Text mb="5" textDecoration="underline">Проезд на маршрутном транспорте:</Text>
                        <Text fontWeight="bold">Маршруты общественного транспорта до остановки «Больница №1»:</Text>
                        <UnorderedList ml={{base: '0', md: '5'}}>
                            <ListItem>м. Славянский бульвар — автобусы 325, 329, 341, 641</ListItem>
                            <ListItem>м. Минская — автобус П209</ListItem>
                            <ListItem>м. Филевский Парк — автобус 107 (примерно 10-15 минут)</ListItem>
                            <ListItem>м. Университет — автобусы или маршрутка 260 (примерно 25 минут)</ListItem>
                            <ListItem>м. Киевская — автобус 474</ListItem>
                            <ListItem>пл. Матвеевская Киевского направления РЖД — автобусы 107, 641</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>*/}
                <BasePhoneBlock/>
                {/*<Box mb="10" px={{base: "3", md: "0"}}>
                        <Link
                            href="https://volynka.ru/"
                            target="_blank"
                            style={{color: "#1976d2", textDecoration: "underline"}}>Перейти на сайт клиники</Link>
                    </Box>*/}
            </Box>
        </>
    )
}
