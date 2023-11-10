import {Box, Icon, useDisclosure} from '@chakra-ui/react'
import {Logo} from '@/components/icons/Logo'
import {linksOptions} from '@/config/linksOptions'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MobileMenu} from '@/components/MobileMenu'
import {servicesOptions} from '@/config/servicesOptions'

export const Header = () => {
    const currentPath = usePathname()
    const router = useRouter()
    const {isOpen, onClose, onOpen} = useDisclosure()

    return (
        <Box
            as="header"
            pos="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1}
            bgColor="#FFFFFF"
            borderBottom="1px solid #009DFF"
            px={5}
            py={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box onClick={() => router.push('/')} cursor='pointer'>
                <Logo/>
            </Box>
            <Box
                mx="auto"
                display={{base: 'none', lg: 'flex'}}
                gap={5}
                color="#1E1E1E"
                fontSize={20}
            >
                {linksOptions.map((link) => (
                    <Box as="span" key={link.id}
                         borderBottom={currentPath === link.path ? '1px solid #009DFF' : 'none'}>
                        <Link href={link.path}>{link.label}</Link>
                    </Box>
                ))}
            </Box>
            <Box as="span" display={{base: 'block', lg: 'none'}} onClick={onOpen}>
                <Icon as={RxHamburgerMenu} color="#009DFF"/>
            </Box>
            <MobileMenu onClose={onClose} isOpen={isOpen} links1={linksOptions} links2={servicesOptions} currentPath={currentPath}/>
        </Box>
    )
}
