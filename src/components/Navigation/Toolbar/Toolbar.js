import React from 'react';

import Logo from '../../Logo/Logo';
import Classes from './Toolbar.css';

const toolbar = (props)=>(
    <header className={Classes.Toolbar}>
        <div>Menu</div>
        <Logo/>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;