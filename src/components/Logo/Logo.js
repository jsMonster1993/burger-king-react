import React from 'react';

import Classes from './logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props)=>(
    <div className={Classes.Logo}>
        <img src={burgerLogo} alt="My Burger" />
    </div>
);

export default logo;