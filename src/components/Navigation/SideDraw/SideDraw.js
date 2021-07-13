import React from 'react';

import classes from './SideDraw.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from "../../../hoc/Aux";

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classes.sideDraw}>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;