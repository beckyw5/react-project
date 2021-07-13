import React from 'react';

import classes from './SideDraw.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    return (
        <div className={classes.sideDraw}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
};

export default sideDrawer;