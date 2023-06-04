import React, { Fragment, useEffect } from 'react';
import { Heading, SimpleGrid, Box } from '@chakra-ui/react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import axios from 'axios';
import authHeader from '../../utils/authHeader';

const Home = () => {
  useEffect(() => {
    async function fetchPropeties() {
      // console.log(authHeader());
      try {
        await axios.get('http://localhost:8000/api/v1/auth/test', {
          headers: {
            token: authHeader()
          }
        })
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchPropeties();
  }, []);

  return (
    <Fragment>
      <Heading>I'm a Heading</Heading>
      <SimpleGrid columns={{sm: 2, md: 3, lg:4}} spacing='10px'>
        {/* <Box bg='tomato'></Box> */}
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        {/* <Box bg='tomato' height='340px'></Box>
        <Box bg='tomato' height='340px'></Box>
        <Box bg='tomato' height='340px'></Box>
        <Box bg='tomato' height='340px'></Box> */}
      </SimpleGrid>
    </Fragment>
  )
}

export default Home;