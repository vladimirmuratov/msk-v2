import {Box, Heading} from '@chakra-ui/react'
import {phoneNumber} from '@/config/defaultOptions'

export const BasePhoneBlock = () => (
    <Box>
        <Box borderBottom="1px solid #009DFF" mt={{base: '50px', md: '100px'}} mb={{base: '25px', md:'50px'}}/>
        <Heading color="#009DFF" textAlign="center">{phoneNumber}</Heading>
        <Box borderBottom="1px solid #009DFF" mb={{base: '50px', md: '100px'}} mt={{base: '25px', md:'50px'}}/>
    </Box>
)
