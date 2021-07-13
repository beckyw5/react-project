import React from 'react';

import classes from './Toolbar.css';
import DrawToggle from '../SideDraw/DrawToggle/DrawToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div className={classes.row}>
            <Logo />
            <DrawToggle clicked={props.drawToggleClicked} />
            <nav className={classes.desktop}>
                <NavigationItems />
            </nav>
        </div>
    </header>
);

export default toolbar;