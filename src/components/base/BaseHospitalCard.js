import {Box, Image, Text} from '@chakra-ui/react'
import Link from 'next/link'

export const BaseHospitalCard = ({url, path, img, label, isLocal = false}) => {
    return(
        <Link href={isLocal ? path : url} target={!isLocal ? "_blank" : ""}>
            <Box
                display="flex"
                flexDir={{base: "column", md: "row"}}
                alignItems="center"
                gap="5"
                border="1px solid #616161"
                borderRadius="5"
                p="5"
                cursor="pointer"
                _hover={{boxShadow: "xl", bgColor: "#83C4FF", color: "#FFFFFF"}}
                style={{transition: "0.3s"}}
                height="full"
            >
                <Image alt='logo' src={img} height="50px" width="50px"/>
                <Box>
                    <Text color='#0D47A1' fontWeight='medium'>{label}</Text>
                    <Text color='#009DFF'>Подробнее</Text>
                </Box>
            </Box>
        </Link>
    )
}
