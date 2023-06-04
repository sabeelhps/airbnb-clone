import React, { Fragment } from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <Fragment>
        <nav>
          <ul className={styles['navbar-home']}>
           <li>AirBnb</li>
           <li>Anywhere</li>
           <li>Any week</li>
           <li> Add Guest</li>
        </ul>
     </nav>
    </Fragment>
  )
}

export default Navbar