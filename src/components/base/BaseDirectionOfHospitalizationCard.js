import {Box, Icon, Text} from '@chakra-ui/react'
import {useRouter} from 'next/router'

export const BaseDirectionOfHospitalizationCard = ({label, icon, path}) => {
    const router = useRouter()

    return(
        <Box
            // onClick={() => router.push(path)}
            // cursor="pointer"
            display="flex"
            flexDir="column"
            justifyContent="space-around"
            alignItems="center"
            border="1px solid gray"
            borderRadius="3px"
            min-height="50px"
            // bgColor="#0d47a1"
            bgColor="#009DFF"
            color="white"
            p="5"
            // _hover={{boxShadow: "xl", transform: "translateY(-3px)"}}
            // transition="0.3s"
        >
            <Icon as={icon} boxSize="2em"/>
            <Text fontSize={{base: "20px", xl: "22px"}}>{label}</Text>
        </Box>
    )
}
