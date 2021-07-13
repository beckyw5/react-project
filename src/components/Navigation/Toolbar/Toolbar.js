import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div className={classes.row}>
            <Logo />
            <div>Menu</div>
            <nav>
                ...
            </nav>
        </div>
    </header>
);

export default toolbar;