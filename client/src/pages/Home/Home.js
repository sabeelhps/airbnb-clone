import React, { Fragment } from 'react';
import styles from './Home.module.css';
import { Heading, SimpleGrid, Box } from '@chakra-ui/react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const Home = () => {
  return (
    <Fragment>
      <nav >
        <ul className={styles['navbar-home']}>
          <li>AirBnb</li>
          <li>Anywhere</li>
          <li>Any week</li>
          <li> Add Guest</li>
        </ul>
      </nav>
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