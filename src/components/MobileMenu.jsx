import {
    Box, Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Text
} from '@chakra-ui/react'
import Link from 'next/link'
import {phoneNumber} from '@/config/defaultOptions'

export const MobileMenu = ({isOpen, onClose, links1, links2, currentPath}) => {

    return(
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Меню</DrawerHeader>
                <DrawerBody display='flex' flexDir='column' gap={3}>
                    {links1.map((link) => (
                        <Box
                            key={link.id}
                            as='span'
                            borderBottom={currentPath === link.path ? '1px solid #009DFF' : 'none'}
                            alignSelf='flex-start'
                        >
                            <Link href={link.path} onClick={onClose}>{link.label}</Link>
                        </Box>
                    ))}
                    {/*<Divider/>*/}
                    {/*{links2.map((link) => (
                        <Box
                            key={link.id}
                            as='span'
                            borderBottom={currentPath === link.path ? '1px solid #009DFF' : 'none'}
                            alignSelf='flex-start'
                        >
                            <Link href={link.path} onClick={onClose}>{link.label}</Link>
                        </Box>
                    ))}*/}
                </DrawerBody>
                <DrawerFooter display='flex' justifyContent='flex-start'>
                    <Text color='#009DFF'>{phoneNumber}</Text>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
