import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div className={classes.row}>
            <Logo />

            <nav className={classes.desktop}>
                <NavigationItems />
            </nav>
        </div>
    </header>
);

export default toolbar;