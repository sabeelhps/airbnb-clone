import React from 'react';
import { Card,CardBody, Image, Stack, Heading, Text   } from '@chakra-ui/react';

const PropertyCard = () => {
  return (
    <Card p="0" shadow="0" height='450px' m='0'>
        <CardBody height='inherit'>
            <Image
            src='https://a0.muscache.com/im/pictures/3f824dc4-efbf-4090-96f3-a19a0e397f92.jpg?im_w=720'
            alt='Green double couch with wooden legs'
            borderRadius='2xl'
            height='65%'      
            />
            <Stack mt='6' spacing='0'>
            <Heading size='md'>Siolim, India</Heading>
            <Text>
                Tiny home hosted by Pinyapat
            </Text>
            <Text>
                18-26 June
            </Text>
            <Text fontWeight='bold'>
                $ 11,236 night    
           </Text>
            </Stack>
        </CardBody>
    </Card>
  )
}

export default PropertyCard