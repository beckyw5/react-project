import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div className={classes.row}>
            <Logo />
            <NavigationItems />
            <nav>
                ...
            </nav>
        </div>
    </header>
);

export default toolbar;