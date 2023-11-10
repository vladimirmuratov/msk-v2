import {Box, Grid, Heading} from '@chakra-ui/react'
import {BaseDirectionOfHospitalizationCard} from '@/components/base/BaseDirectionOfHospitalizationCard'

export const DirectionsHospitalization = ({options, label = ''}) => {
    return(
        <Box textAlign="center" px={{base: "0", md: "1"}} bgColor='#F5FBFF'>
            <Heading my={{base: 50, sm: 100}} size={{base: 'md', sm: 'lg'}} color='#0D47A1'>{label}</Heading>
            <Grid
                gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)"}}
                gap="1"
            >
                {options.map((item) => (
                    <BaseDirectionOfHospitalizationCard key={item.id} {...item}/>
                ))}
            </Grid>
        </Box>
    )
}
