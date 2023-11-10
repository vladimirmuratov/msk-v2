import {Box, Text} from '@chakra-ui/react'

export const Footer = () => (
    <Box bgColor='#333333'>
        <Text color='#919191' py={5} pl={5}>Copyright ©{new Date().getFullYear()} All rights reserved</Text>
    </Box>
)
