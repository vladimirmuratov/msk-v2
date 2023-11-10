import {Box, Heading, Icon, Image, List, ListIcon, ListItem, Text} from '@chakra-ui/react'
import Head from 'next/head'
import {CheckCircleIcon, WarningIcon} from '@chakra-ui/icons'
import {BasePhoneBlock} from '@/components/base/BasePhoneBlock'
import {BaseDivider} from '@/components/base/BaseDivider'

export default function Ambulance() {

    return (
        <>
            <Head>
                <title>МСК | Скорая помощь</title>
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
                    <Box pos="absolute" top={{base: '10%', sm: '30%'}} left={{base: 5}} w="50%">
                        <Text fontSize={{base: 24, sm: 36, lg: 48}} fontWeight="bold">Когда важна каждая минута</Text>
                    </Box>
                </Box>
                <BaseDivider/>
                <Box
                    color="#0d47a1"
                    bgColor='#D1EEFE'
                    display="flex"
                    flexDir="column"
                    gap="4"
                    p={4}
                    data-aos="fade-up"
                >
                    <Heading size='lg' alignSelf={{base: 'start', md: 'start'}}>
                        ВЫЗОВ СКОРОЙ ПОМОЩИ
                    </Heading>
                    <Heading size='lg' alignSelf={{base: 'start', md: 'center'}}>
                        ЭКСТРЕННАЯ И НЕОТЛОЖНАЯ МЕДИЦИНСКАЯ ПОМОЩЬ
                    </Heading>
                    <Heading size='lg' alignSelf={{base: 'start', md: 'end'}} mb="0">
                        ГОСПИТАЛИЗАЦИЯ С ИНСУЛЬТОМ
                    </Heading>
                </Box>
                    <BasePhoneBlock/>
                <Box bgColor="#0d47a1" color="white" px={4} py={10} borderRadius={{md: 'sm'}} data-aos="fade-up">
                    <Box textAlign="center" borderBottom="1px solid white" mb={10}>
                        <Heading>Оказание скорой медицинской помощи</Heading>
                    </Box>
                    <Box fontSize={{base: '20px', xl: '22px'}} mt="10" display="flex" flexDirection="column"
                         gap="4">
                        <Text>
                            Компания МСК оказывает срочную помощь при инсульте или наличии подозрений на инсульт, а
                            также при других неотложных состояниях.
                        </Text>
                        <Text>
                            Наши врачи помогают вам и вашим близким 24 часа в сутки 7 дней в неделю, без праздников
                            и
                            выходных.
                        </Text>
                        <Text>
                            Мы располагаем собственным парком реанимобилей, оснащенных реанимационным оборудованием,
                            дефибрилляторами, электрокардиографами, аппаратом искусственной вентиляции легких.
                        </Text>
                        <Text>
                            Выездные бригады СМП оснащены радио- и мобильной связью.
                        </Text>
                    </Box>
                </Box>
                <BaseDivider/>
                <Box data-aos="fade-up" bgColor="#e8f5e9" color="#0d47a1" py="4" borderRadius="sm">
                    <List pl={{base: '4', md: '8'}} spacing="4" fontSize={{base: '18px', xl: '22px'}} fontWeight="medium">
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.300" fontSize="1.5rem"/>
                            Оказание медицинской помощи 24/7 без праздников и выходных.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.300" fontSize="1.5rem"/>
                            Оперативный приезд бригады скорой помощи.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.300" fontSize="1.5rem"/>
                            Высококвалифицированные специалисты имеют практический опыт оказания помощи в
                            самых сложных ситуациях.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.300" fontSize="1.5rem"/>
                            Помощь в условиях реанимобиля для поддержания жизнедеятельности пациента до
                            приезда в стационар.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.300" fontSize="1.5rem"/>
                            Современное оборудование и наличие всех необходимых лекарств.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.300" fontSize="1.5rem"/>
                            Комфортная транспортировка - гидравлические кушетки, мягкие ремни, сидения для
                            сопровождающих.
                        </ListItem>
                    </List>
                </Box>
                <BaseDivider/>
                <Box bgColor="#0d47a1" color="white" px={4} py={10} borderRadius={{md: 'sm'}} data-aos="fade-up">
                    <Box mb={10} borderBottom="1px solid white" textAlign="center">
                        <Heading mb="4">Стоимость</Heading>
                    </Box>
                    <List spacing="4" fontSize={{base: '20px', xl: '22px'}} pr="4">
                        <ListItem>
                            Стоимость выезда платной скорой помощи зависит от удаленности пункта назначения и
                            определена прейскурантом. Каждая услуга имеет отдельную стоимость, оплата вызова может
                            существенно отличаться в зависимости от набора выполненных манипуляций.
                        </ListItem>
                        <ListItem>
                            Обращаясь к нам, Вы получаете гарантию квалифицированной помощи и поддержки врачей,
                            которые смогут поставить точный диагноз и назначить все необходимые препараты и
                            процедуры, чтобы ускорить процесс восстановления.
                        </ListItem>
                    </List>
                </Box>
                <BaseDivider/>
                <Box bgColor="#cfd8dc" px={4} py={10} borderRadius={{md: 'sm'}} data-aos="fade-up">
                    <Box mb={10} borderBottom="1px solid gray" textAlign="center">
                        <Heading mb="5">Когда необходима экстренная госпитализация:</Heading>
                    </Box>
                    <List pl="0" spacing="4" fontSize={{base: '20px', xl: '22px'}}>
                        <ListItem display="flex" alignItems="center" gap="4">
                            <Icon as={WarningIcon} color="red"/>
                            <Text m="0">при инфаркте миокарда</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" gap="4">
                            <Icon as={WarningIcon} color="red"/>
                            <Text m="0">при инсульте</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" gap="4">
                            <Icon as={WarningIcon} color="red"/>
                            <Text m="0">при тяжелых травмах (в том числе, черепно-мозговых)</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" gap="4">
                            <Icon as={WarningIcon} color="red"/>
                            <Text m="0">при остром кровотечении, которое невозможно остановить в домашних
                                условиях</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" gap="4">
                            <Icon as={WarningIcon} color="red"/>
                            <Text m="0">при тяжелых обострениях хронических заболеваний</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" gap="4">
                            <Icon as={WarningIcon} color="red"/>
                            <Text m="0">при тяжелых и/или опасных инфекциях</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" gap="4">
                            <Icon as={WarningIcon} color="red"/>
                            <Text m="0">при заболеваниях, требующих хирургического лечения в экстренном порядке и
                                т.п.</Text>
                        </ListItem>
                    </List>
                </Box>
                <BaseDivider/>
                <Box
                    bgColor="#0d47a1"
                    color="white"
                    px={4}
                    py={10}
                    fontSize={{base: '20px', xl: '22px'}}
                    display="flex"
                    flexDirection="column"
                    gap="4"
                    borderRadius={{md: 'sm'}}
                    data-aos="fade-up"
                >
                    <Box mb={10} borderBottom="1px solid white" textAlign="center">
                        <Heading>Как проводится экстренная госпитализация</Heading>
                    </Box>
                    <Text>
                        Прибыв к пациенту, бригада скорой помощи МСК осматривает и опрашивает его, при необходимости
                        оказывает неотложную помощь и готовит к транспортировке.
                    </Text>
                    <Text>
                        Если человеку требуется операция, проводится госпитализация в стационар с отделением
                        хирургии. Мы сотрудничаем с ведущими государственными и коммерческими больницами.
                    </Text>
                    <Text>
                        Если состояние пациента является жизнеугрожающим, бригада скорой помощи МСК доставит его в
                        ближайший стационар, а после стабилизации может транспортировать в профильное учреждение,
                        располагающее отделениями кардиологии, неврологии или других специальных направлений для
                        оказания дальнейшей помощи и необходимого лечения.
                    </Text>
                    <Text>В случае возникновения экстренных ситуаций обращайтесь за помощью в компанию МСК.</Text>
                    <Text>
                        Бригады скорой помощи госпитализируют Вас или Вашего родственника в соответствии с
                        показаниями для получения специализированного лечения.
                    </Text>
                </Box>
                <BasePhoneBlock/>
            </Box>
        </>
    )
}
